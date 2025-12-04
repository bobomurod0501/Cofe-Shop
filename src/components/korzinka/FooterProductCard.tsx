import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ClearIcon from "@mui/icons-material/Clear";
import { useProductContext } from "../../context/productContext";

interface CofePropsType {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  count?: number;
}

const FooterProductCard = ({ product }: { product: CofePropsType }) => {
   const {selectedProductArr, setSelectedProductArr} = useProductContext()
   const deleteProduct = (id:number) => {
      const filteredArr = selectedProductArr.filter((item) => item.id != id)
      setSelectedProductArr(filteredArr)
   }

  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "60px",
        width: "200px",
        gap: 1,
        p: 1,
        flexShrink:0
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: "40%", height: "100%", borderRadius: "5px" }}
        image={product.image}
        alt="Live from space album cover"
      />
      <Box sx={{maxWidth:"38%"}}>
        <Typography
          sx={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "block",
          }}
          variant="subtitle2"
        >
          {product.name}
        </Typography>
        <Typography sx={{ color: "#8d8f86" }} variant="subtitle2">
          {product.count} x {product.price}
        </Typography>
      </Box>
      <IconButton onClick={() => deleteProduct(product.id)} sx={{maxWidth:"18%"}}>
        <ClearIcon />
      </IconButton>
    </Card>
  );
};

export default FooterProductCard;
