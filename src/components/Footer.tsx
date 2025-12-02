import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
// Icons

import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';



export const Footer = () => {
   return (
      <Box sx={{ width: "100%", height: "100px", background: "#E0E0E0", p:"0 30px" }}>
         <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} height={"100%"}>
            <Box>
               <Stack direction={"row"}>
                  <ShoppingCartCheckoutIcon color='success'  />
                  <Typography ml={1}>Savat</Typography>
               </Stack>
               <Typography color='#564e58' mt={1}>Savat bo'sh</Typography>
            </Box>
            <Box>
               <Stack direction={"row"} mb={1} alignItems={"center"}>
                  <Typography>Jami:</Typography>
                  <Typography ml={1} variant='h5' color='green'> 0 so'm</Typography>
               </Stack>
               <Button size='small' variant="contained" color="success">
                  Buyurtma berish
               </Button>
            </Box>
         </Stack>
      </Box>
   )
}
