import { useQuery } from '@tanstack/react-query'
import { getAllCofeProductQuery } from '../../queries'
import Box from '@mui/material/Box'
import CofeCardPage from './components/CofeCardPage'

interface CofePropsType {
  id: number,
  name: string,
  price: number,
  image: string,
  description: string,
}

const CofePage = () => {

  const {data} = useQuery({...getAllCofeProductQuery})

  return (
    <Box sx={{display:"flex", flexWrap:"wrap", justifyContent:"space-evenly", gap:4}}>
      {
        data?.data?.map((cofe: CofePropsType) => {
          return (
            <CofeCardPage cofe={cofe}/>
          )
        } )
      }
    </Box>
  )
}

export default CofePage
