import { Box, Container } from "@mui/material";

interface IDisplayCard {
  children: React.ReactNode;
  backgroundColor?: string | null;
  backgroundImg?: any,
  position?: "absolute" | "relative" | "static";
  border?: string;
  padding?: string;
  paddingTop?: string;
  paddingLeft?: string;
  paddingBottom?: string;
  marginBottom?: string;
}
export const DisplayCard = ({
  children,
  backgroundColor,
  backgroundImg,
  position,
  border,
  padding,
  paddingTop,
  paddingLeft,
  paddingBottom,
  marginBottom
}: IDisplayCard) => {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: backgroundColor,
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        position: position,
        border: border,
        p: padding,
        pt: paddingTop,
        pl: paddingLeft,
        pb: paddingBottom,
        mb: marginBottom,
        overflowX: 'hidden',
      }}
    >
      <Container maxWidth="xl">{children}</Container>
    </Box>
  );
};
