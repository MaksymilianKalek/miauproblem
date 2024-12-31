import { Box, Stack, Typography } from "@mui/material";
import { Barlow } from "next/font/google";
import { ReactNode } from "react";
import { colors } from "./consts";

const barlow = Barlow({
  display: "swap",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

import { SxProps } from "@mui/system";

const Text = ({
  children,
  sx,
  ...props
}: {
  children: ReactNode;
  sx?: SxProps;
}) => (
  <Typography
    sx={{
      fontFamily: barlow.style.fontFamily,
      letterSpacing: "0.1rem",
      color: colors["black"],
      ...sx,
    }}
    {...props}
  >
    {children}
  </Typography>
);

const Btn = ({
  children,
  sx,
  color = colors["yellow"],
  ...props
}: {
  children: ReactNode;
  color?: string;
  sx?: SxProps;
}) => (
  <Box
    sx={{
      border: `3px solid ${color}`,
      borderRadius: "5rem",
      padding: "1rem 4rem",
      width: "fit-content",
    }}
  >
    <Text
      sx={{
        color: color,
        fontWeight: "bold",
        fontSize: "18px",
      }}
    >
      {children}
    </Text>
  </Box>
);

export default function Home() {
  return (
    <Stack>
      <Stack
        sx={{
          height: "100vh",
          width: "100%",
          flexDirection: "row",
        }}
      >
        <Stack
          sx={{
            backgroundColor: colors["purple"],
            width: "50%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "3rem",
          }}
        >
          <Box
            sx={{
              width: "20rem",
            }}
            component="img"
            src={"logo.svg"}
            alt="Logo"
          />
          <Text
            sx={{
              fontSize: "1rem",
              fontWeight: "bold",
            }}
          >
            Dla kotów zrobimy wszystko. Serio.
          </Text>
          <Btn>Usługi</Btn>
        </Stack>
        <Stack
          sx={{
            backgroundColor: colors["lightBeige"],
            width: "50%",
            height: "100%",
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "90%",
            }}
            component="img"
            src="landingScotty.png"
          />
        </Stack>
      </Stack>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          minHeight: "100vh",
          backgroundImage: "url('scottyParallax.jpg')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <Stack
        sx={{
          height: "100vh",
          width: "100%",
          backgroundColor: colors["lightBeige"],
          flexDirection: "row",
        }}
      >
        <Stack
          sx={{
            width: "50%",
            height: "100%",
            justifyContent: "end",
            alignItems: "end",
          }}
        >
          <Box
            sx={{
              width: "85%",
            }}
            component={"img"}
            src={"scottyLicking.png"}
          />
        </Stack>
        <Stack
          sx={{
            width: "50%",
            height: "100%",
            padding: "3rem 12rem 3rem 8rem",
            justifyContent: "center",
            gap: "3rem",
          }}
        >
          <Text
            sx={{
              fontSize: "58px",
            }}
          >
            About Me
          </Text>
          <Text>
            Hi there! I'm Jasmine Pedraza, a social media strategist and
            manager. I have more than 15 years of experience in marketing across
            different social media platforms. I help businesses build brand
            awareness, loyalty, and advocacy by engaging influencers and
            communities.
          </Text>
          <Btn color={colors["orange"]}>Work with Me</Btn>
        </Stack>
      </Stack>
      <Stack
        sx={{
          height: "100vh",
          width: "100%",
          backgroundColor: colors["yellow"],
          padding: "3rem",
        }}
      >
        <Text
          sx={{
            fontSize: "58px",
            fontWeight: "bold",
          }}
        >
          Klienci
        </Text>
      </Stack>
    </Stack>
  );
}
