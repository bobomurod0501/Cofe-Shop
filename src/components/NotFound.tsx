import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const NotFound = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "80vh",
      }}
    >
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography variant="h1">404</Typography>
        <Typography>Product not found</Typography>
      </Box>
    </Box>
  );
};

export default NotFound;
