import React from 'react'
import {Skeleton,Stack,Box} from '@mui/material';


const JobSkeletonCard = () => {
  return (
    <>
    <Box 
    
    width={'350px'}
   //  border={'1px solid gray'}
    borderRadius={'20px'}
    padding={2}
    boxShadow={4}
    sx={{
     ":hover": {padding: 2.2}
    }}
    alignContent={'center'}
    
    >
   <Stack spacing={1}>
     
     <Skeleton variant="circular" width={60}  height={60} />
     <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
     <Skeleton variant="rectangular"  height={60} />
     <Skeleton variant="rectangular"  height={60} />
     <Skeleton variant="rounded"  height={60} />
     <Skeleton variant="rounded"  height={60} />
   </Stack>
   </Box>

   <Box 
    
     width={'350px'}
    //  border={'1px solid gray'}
     borderRadius={'20px'}
     padding={2}
     boxShadow={4}
     sx={{
      ":hover": {padding: 2.2}
     }}
     alignContent={'center'}
     
     >
    <Stack spacing={1}>
      
      <Skeleton variant="circular" width={60}  height={60} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton variant="rectangular"  height={60} />
      <Skeleton variant="rectangular"  height={60} />
      <Skeleton variant="rounded"  height={60} />
      <Skeleton variant="rounded"  height={60} />
    </Stack>
    </Box>

    <Box 
    
     width={'350px'}
    //  border={'1px solid gray'}
     borderRadius={'20px'}
     padding={2}
     boxShadow={4}
     sx={{
      ":hover": {padding: 2.2}
     }}
     alignContent={'center'}
     
     >
    <Stack spacing={1}>
      
      <Skeleton variant="circular" width={60}  height={60} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton variant="rectangular"  height={60} />
      <Skeleton variant="rectangular"  height={60} />
      <Skeleton variant="rounded"  height={60} />
      <Skeleton variant="rounded"  height={60} />
    </Stack>
    </Box>
    </>
  )
}

export default JobSkeletonCard
