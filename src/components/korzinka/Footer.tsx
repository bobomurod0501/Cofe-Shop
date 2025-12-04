import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";


// Icons

import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { useProductContext } from "../../context/productContext";
import FooterProductCard from "./FooterProductCard";

// toast
import { toast } from "react-toastify";



export const Footer = () => {
  const { selectedProductArr, setSelectedProductArr } = useProductContext();
  const products = selectedProductArr.length
    ? selectedProductArr.filter((item) => (item.count ?? 0) > 0)
    : [];

  const totalSum = selectedProductArr.reduce((acc, item) => {
    return (acc += Number(item.price) * (item.count ?? 0));
  }, 0);

  const handleOrderFunc = () => {
    setSelectedProductArr([]);
    toast.success("Mahsulot rasmiylashtirildi");
  };
  return (
    <Box
      sx={{
        width: "100%",
        height: "150px",
        background: "#E0E0E0",
        p: "0 30px",
      }}
    >
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        height={"100%"}
      >
        <Box sx={{ maxWidth: "89%" }}>
          <Stack direction={"row"}>
            <ShoppingCartCheckoutIcon color="success" />
            <Typography ml={1}>
              Savat{" "}
              <span className="px-2 py-0.5 font-bold rounded-[20%] bg-[green] text-white">
                {products.length && products.length}
              </span>{" "}
              ta
            </Typography>
          </Stack>
          {products.length ? (
            <Stack
              mt={1}
              direction={"row"}
              gap={2}
              width={"100%"}
              sx={{ overflowX: "auto", scrollbarWidth: "none" }}
            >
              {products.map((item) => (
                <FooterProductCard product={item} />
              ))}
            </Stack>
          ) : (
            <Typography color="#564e58" mt={1}>
              Savat bo'sh
            </Typography>
          )}
        </Box>
        <Box sx={{ maxWidth: "15%" }}>
          <Stack direction={"row"} mb={1} alignItems={"center"}>
            <Typography>Jami:</Typography>
            <Typography ml={1} variant="h5" color="green">
              {" "}
              {totalSum} so'm
            </Typography>
          </Stack>
          <Button
            onClick={handleOrderFunc}
            disabled={Boolean(!totalSum)}
            size="small"
            variant="contained"
            color="success"
          >
            Buyurtma
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};
