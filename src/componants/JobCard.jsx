import React, { useEffect } from 'react'
import {Box, Button, Link, Stack, Typography} from '@mui/material';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';



const JobCard = ({cardData}) => {
  console.log(cardData)

  return (
    <Box 
    
     width={'350px'}
    //  border={'1px solid gray'}
     borderRadius={'20px'}
     padding={2}
     boxShadow={4}
     sx={{
      ":hover": {padding: 2.2}
     }}
     
     >

     <Stack direction={'row'} alignItems={'center'} spacing={2}>
      <Box>
        <img width={'50px'} src={cardData.logoUrl} />
      </Box>
      <Stack >
        <Typography variant='caption' fontSize={'16px'} color={'gray'} fontWeight={'bold'}>{cardData.companyName}</Typography>
        <Typography variant='p' my={'8px'}  fontSize={'16px'} >{cardData.jobRole}</Typography>
        <Typography fontSize={'15px'} variant='p' fontWeight={'bold'} >{cardData.location}</Typography>
      </Stack>
      
     </Stack>

     <Box my={2}>
        <Typography variant='p'>Estimated Salary: ₹{cardData.minJdSalary ? cardData.minJdSalary : 1} - {cardData.maxJdSalary} LPA ✅</Typography>
      </Box>

      <Box>
        <Typography variant='h6'>About Company:</Typography>
        <Typography fontWeight={'bold'}>About us</Typography>
        <Typography >{cardData.jobDetailsFromCompany}</Typography>
        <Box textAlign={'center'}>
        <Link href="#" >View job</Link>
        </Box>
      </Box>

      <Box mt={5}>
        <Typography variant='caption' fontSize={'16px'} color={'gray'} fontWeight={'bold'}>Minimum Experience</Typography>
        <Typography>{cardData.minExp ? cardData.minExp + " years" : 0 + " years"}</Typography>
        <Button variant='contained' size='large'
         sx={{background:'#55efc4',color:'black', mt: 2,
         ":hover" : {background : '#55efc4'}
        }} fullWidth
        startIcon=<BoltOutlinedIcon sx={{ color: 'yellow',fontSize: 'large' }}  />> Apply</Button>
      </Box>

    </Box>
  )
}

export default JobCard
