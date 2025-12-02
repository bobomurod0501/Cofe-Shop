import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';


// icons
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';


interface CofePropsType {
   id: number,
   name: string,
   price: number,
   image: string,
   description: string,
}
const CofeCardPage = ({ cofe }: { cofe: CofePropsType }) => {

   // const [selectedCofeArr, setSelectedCofeArr] = useState([])

   return (
      <Card sx={{ width: 300, maxHeight: 300 }}>
         <CardMedia
            component="img"
            image={cofe.image}
            alt="green iguana"
            sx={{ height: "50%" }}
         />
         <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "50%" }}>
            <Typography variant="h6" component="div">
               {cofe.name}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
               {cofe.description}
            </Typography>
            <Stack direction={"row"} justifyContent={"space-between"}>
               <Typography color='success'>{cofe.price} so'm</Typography>
               <Stack direction={"row"}>
                     <RemoveCircleOutlineIcon  color='error' className='cursor-pointer' />
                  <input type="text" className='w-[40px] outline-none text-center' defaultValue={0} />
                  <AddCircleOutlineIcon className='cursor-pointer' color='success' />
               </Stack>
            </Stack>
         </CardContent>
      </Card>
   )
}

export default CofeCardPage
