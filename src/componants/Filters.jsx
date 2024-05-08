import * as React from 'react';
import {Autocomplete, Box,Grid,TextField, Typography} from '@mui/material';


export default function Filters({setRoleVal, setExpVal, setComapnyVal, setLocationVal, setMinPayVal}) {
    const Roles = ['frontend', "backend", "ios", "android", "tech lead"];
    const MinExp = [0,1,2,3,4,,5,6,7,8,9,10,11,12];
    const MinPay = [0,1,2,3,4,,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,95,95,96,97,98,99,100];
    const Location = ["remote", "delhi ncr", "mumbai", "chennai", "bangalore"]
    const Company = ["Dropbox", "LG", "Sony", "Adobe System", "HP", "eBay", "Tencent", "Apple", "Asus", "Intel Corporation", "Rakuten", "Samsung", "Dell Technologies","Cisco", "Oracle", "Google", "Huawei", "MasterCard", "Twitter", "Baidu", "Olymps", "Alibaba", "ZTE" ];
  
  return (
    <Grid alignItems={'center'} container gap={1} columns={{ xs: 4, sm: 8, md: 12 }} m={2} >
    <Box>
     <img width={'60px'} src='https://jobs.weekday.works/_next/static/media/logo-small.08826abd.png' />
      
    </Box>
    <Box>
    <Autocomplete
      
      onChange={(e,value)=>setRoleVal(value)}
      multiple
      limitTags={2}
      size='small'
      options={Roles}
      getOptionLabel={(option) => option}
      defaultValue={[]}
      renderInput={(params) => (
        <TextField  key={"roles"} {...params} label="Roles" placeholder="Roles" />
      )}
      sx={{ width: '150px' }}
    />
    </Box>    

    <Box key={2}>
    <Autocomplete
   
      onChange={(e,value)=>setExpVal(value)}
      multiple
      limitTags={2}
      size='small'
      options={MinExp}
      getOptionLabel={(option) => option}
      defaultValue={[]}
      renderInput={(params) => (
        <TextField  key={"Exp"} {...params} label="Experience" placeholder="Experience" />
      )}
      sx={{ width: '150px' }}
    />
    </Box>   

    <Box key={3}>
    <Autocomplete
    
      onChange={(e,value)=>setLocationVal(value)}
      multiple
      limitTags={2}
      size='small'
      options={Location}
      getOptionLabel={(option) => option}
      defaultValue={[]}
      renderInput={(params) => (
        <TextField key={"location"} {...params} label="Location" placeholder="Location" />
      )}
      sx={{ width: '150px' }}
    />
    </Box> 

    <Box key={4}>
    <Autocomplete
      
      onChange={(e,value)=>setComapnyVal(value)}
      multiple
      limitTags={2}
      size='small'
      options={Company}
      getOptionLabel={(option) => option}
      defaultValue={[]}
      renderInput={(params) => (
        <TextField key={"company"}  {...params} label="Company Name" placeholder="Company Name" />
      )}
      sx={{ width: '170px' }}
    />
    </Box> 


    <Box key={6}>
    <Autocomplete
      
      onChange={(e,value)=>setMinPayVal(value)}
      multiple
      limitTags={2}
      size='small'
      options={MinPay}
      getOptionLabel={(option) => option}
      defaultValue={[]}
      renderInput={(params) => (
        <TextField key={"minPay"}  {...params} label="Min Base Pay" placeholder="Min Base Pay" />
      )}
      sx={{ width: '170px' }}
    />
    </Box> 

    
     
    </Grid>
  );
}



