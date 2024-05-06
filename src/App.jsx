import { useEffect } from 'react';
import { addDataToCartAction } from './Redux/Actions/addDataAction';
import { useDispatch } from 'react-redux';
import JobCard from  './componants/JobCard';
import { useSelector } from 'react-redux';
import {Grid} from '@mui/material'


function App() {

  const dispatch = useDispatch()
  function getDataFromApi(){

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    const body = JSON.stringify({
     "limit": 9,
     "offset": 0
    });

    const requestOptions = {
     method: "POST",
     headers: myHeaders,
     body
    };

    fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
     .then((response) => response.json())
     .then((result) => {
      console.log("api-",result)
      addDataToCartAction(result.jdList, dispatch)
     })
     .catch((error) => console.error(error));
  }

  useEffect(()=>{
    getDataFromApi()
  },[])

const joblist = useSelector(storeData => storeData.jobList)
  console.log(joblist)

  return (
   <Grid container justifyContent={'center'} gap={4}  columns={{ xs: 4, sm: 8, md: 12 }}>
      {joblist.map((el)=>{
       return <JobCard key={el.jdUid} cardData={el}/>
      })}
   </Grid>
  )
}

export default App
