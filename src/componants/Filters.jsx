import * as React from 'react';
import {Autocomplete, Box,Grid,TextField} from '@mui/material';


export default function Filters() {
    const [inpVal, setInpVal] = React.useState("")
    const Roles = ['frontend', "backend", "ios", "android", "tech lead"];
    const MinExp = [0,1,2,3,4,,5,6,7,8,9,10,11,12];
    const Location = ["delhi ncr", "mumbai", "remote", "chennai", "bangalore"]
    const Company = ["Dropbox", "LG", "Sony", "Adobe System", "HP", "eBay", "Tencent", "Apple", "Asus", "Intel Corporation", "Rakuten", "Samsung", "Dell Technologies", ]

  return (
    <Grid container gap={1} columns={{ xs: 4, sm: 8, md: 12 }} mb={2} >
    <Box key={1}>
    <Autocomplete
      onChange={(e,value)=>console.log(value)}
      multiple
      limitTags={2}
      size='small'
      options={Roles}
      getOptionLabel={(option) => option}
      defaultValue={[]}
      renderInput={(params) => (
        <TextField  {...params} label="Roles" placeholder="Roles" />
      )}
      sx={{ width: '150px' }}
    />
    </Box>    

    <Box key={2}>
    <Autocomplete
      onChange={(e,value)=>console.log(value)}
      multiple
      limitTags={2}
      size='small'
      options={MinExp}
      getOptionLabel={(option) => option}
      defaultValue={[]}
      renderInput={(params) => (
        <TextField  {...params} label="Experience" placeholder="Experience" />
      )}
      sx={{ width: '150px' }}
    />
    </Box>   

    <Box key={3}>
    <Autocomplete
      onChange={(e,value)=>console.log(value)}
      multiple
      limitTags={2}
      size='small'
      options={Location}
      getOptionLabel={(option) => option}
      defaultValue={[]}
      renderInput={(params) => (
        <TextField  {...params} label="Location" placeholder="Location" />
      )}
      sx={{ width: '150px' }}
    />
    </Box> 

    <Box key={4}>
    <Autocomplete
      onChange={(e,value)=>console.log(value)}
      multiple
      limitTags={2}
      size='small'
      options={Roles}
      getOptionLabel={(option) => option}
      defaultValue={[]}
      renderInput={(params) => (
        <TextField  {...params} label="Company Name" placeholder="Company Name" />
      )}
      sx={{ width: '170px' }}
    />
    </Box> 

    <Box key={5}>
    <Autocomplete
      onChange={(e,value)=>console.log(value)}
      multiple
      limitTags={2}
      size='small'
      options={Roles}
      getOptionLabel={(option) => option}
      defaultValue={[]}
      renderInput={(params) => (
        <TextField  {...params} label="Tech Stack" placeholder="Tech Stack" />
      )}
      sx={{ width: '170px' }}
    />
    </Box> 

    <Box key={6}>
    <Autocomplete
      onChange={(e,value)=>console.log(value)}
      multiple
      limitTags={2}
      size='small'
      options={Roles}
      getOptionLabel={(option) => option}
      defaultValue={[]}
      renderInput={(params) => (
        <TextField  {...params} label="Min Base Pay" placeholder="Min Base Pay" />
      )}
      sx={{ width: '170px' }}
    />
    </Box> 

    <Box key={7}>
    <Autocomplete
      onChange={(e,value)=>console.log(value)}
      multiple
      limitTags={2}
      size='small'
      options={Roles}
      getOptionLabel={(option) => option}
      defaultValue={[]}
      renderInput={(params) => (
        <TextField  {...params} label="Remote/ On-site" placeholder="Remote/ On-site" />
      )}
      sx={{ width: '170px' }}
    />
    </Box>

    </Grid>
  );
}



