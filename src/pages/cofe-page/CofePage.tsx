import { useQuery } from "@tanstack/react-query";
import { getAllCofeProductQuery } from "../../queries";
import Box from "@mui/material/Box";
import CofeCardPage from "./components/CofeCardPage";
import Loader from "../../components/Loader";
import { useStateValuesContext } from "../../context/stateValuesContext";
import NotFound from "../../components/NotFound";

interface CofePropsType {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

const CofePage = () => {
  const { searchVal } = useStateValuesContext();

  const { data, isLoading } = useQuery({ ...getAllCofeProductQuery });

  if (isLoading) return <Loader />;

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        gap: 4,
        overflowY: "scroll",
        scrollbarWidth: "20px",
        mb:"150px"
      }}
    >
      {data?.data?.filter((item: CofePropsType) =>
        item.name.toLowerCase().includes(searchVal.toLowerCase())
      ).length ? (
        data?.data
          ?.filter((item: CofePropsType) =>
            item.name.toLowerCase().includes(searchVal.toLowerCase())
          )
          .map((cofe: CofePropsType) => {
            return <CofeCardPage cofe={cofe} />;
          })
      ) : (
        <NotFound />
      )}
    </Box>
  );
};

export default CofePage;
