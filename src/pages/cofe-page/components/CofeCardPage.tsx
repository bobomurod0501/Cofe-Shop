import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

// icons
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { useProductContext } from "../../../context/productContext";
import IconButton from "@mui/material/IconButton";

interface CofePropsType {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  count?: number;
}
const CofeCardPage = ({ cofe }: { cofe: CofePropsType }) => {
  const { selectedProductArr, setSelectedProductArr } = useProductContext();

  const handleAddProduct = (product: CofePropsType) => {
    const prev = selectedProductArr ?? [];

    const exist = prev.find((item) => item.id === product.id);

    if (exist) {
      setSelectedProductArr(
        prev.map((item) =>
          item.id === product.id
            ? { ...item, count: (item.count ?? 0) + 1 }
            : item
        )
      );
      return;
    }

    setSelectedProductArr([...prev, { ...product, count: 1 }]);
  };
  const handleRemoveProduct = (product: CofePropsType) => {
    const prev = selectedProductArr ?? [];
    const exist = prev.find((item) => item.id === product.id);

    if (!exist) return prev;

    if (exist.count === 1) {
      setSelectedProductArr(prev.filter((item) => item.id !== product.id));
    }

    return setSelectedProductArr(
      prev.map((item) =>
        item.id === product.id
          ? { ...item, count: (item.count ?? 0) - 1 }
          : item
      )
    );
  };

  const cartItem = selectedProductArr.find((item) => item.id === cofe.id);

  return (
    <Card sx={{ width: 300, maxHeight: 300 }}>
      <CardMedia
        component="img"
        image={cofe.image}
        alt="green iguana"
        sx={{
          height: "50%",
          transition: "0.3s ease",
          "&:hover": {
            transform: "scale(1.03)",
            boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
          },
        }}
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "50%",
        }}
      >
        <Typography variant="h6" component="div">
          {cofe.name}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {cofe.description}
        </Typography>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography color="success">{cofe.price} so'm</Typography>
          <Stack direction={"row"}>
            <IconButton
              disabled={(cartItem?.count ?? 0) < 1}
              className="cursor-pointer"
            >
              <RemoveCircleOutlineIcon
                onClick={() => handleRemoveProduct(cofe)}
                color="error"
              />
            </IconButton>
            <input
              type="text"
              className="w-5 outline-none text-center"
              value={cartItem?.count || 0}
              readOnly
            />
            <IconButton className="cursor-pointer">
              <AddCircleOutlineIcon
                onClick={() => handleAddProduct(cofe)}
                color="success"
              />
            </IconButton>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CofeCardPage;
