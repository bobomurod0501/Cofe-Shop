import { useQuery } from "@tanstack/react-query";
import { getAllcookieProductQuery } from "../../queries";
import Box from "@mui/material/Box";
import CookieCardPage from "./components/CookieCard";
import Loader from "../../components/Loader";
import { useStateValuesContext } from "../../context/stateValuesContext";
import NotFound from "../../components/NotFound";

interface CookiePropsType {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}
const CookiePage = () => {
  const { searchVal } = useStateValuesContext();
  const { data, isLoading } = useQuery({ ...getAllcookieProductQuery });
  if (isLoading) return <Loader />;
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        gap: 4,
      }}
    >
      {data?.data?.filter((item: CookiePropsType) =>
        item.name.toLowerCase().includes(searchVal.toLowerCase())
      ).length ? (
        data?.data
          ?.filter((item: CookiePropsType) =>
            item.name.toLowerCase().includes(searchVal.toLowerCase())
          )
          .map((cookie: CookiePropsType) => {
            return <CookieCardPage cookie={cookie} />;
          })
      ) : (
        <NotFound />
      )}
    </Box>
  );
};

export default CookiePage;
