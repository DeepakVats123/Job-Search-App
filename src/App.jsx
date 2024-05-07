import { useEffect, useState } from 'react';
import { addDataToCartAction } from './Redux/Actions/addDataAction';
import { useDispatch } from 'react-redux';
import JobCard from  './componants/JobCard';
import { useSelector } from 'react-redux';
import {Grid, Typography} from '@mui/material'
import JobSkeletonCard from './componants/JobSkeletonCard';
import Filters from './componants/Filters';



function App() {
  const [offset, setOffSet] = useState(0)
  const [loading, setloading] = useState(false)
  const dispatch = useDispatch()
  const joblist = useSelector(storeData => storeData.jobList)
  console.log(joblist)
  function getDataFromApi(){
console.log(offset)
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    const body = JSON.stringify({
     "limit": 9,
     "offset": offset
    });

    const requestOptions = {
     method: "POST",
     headers: myHeaders,
     body
    };

    fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
     .then((response) => response.json())
     .then((result) => {
      setloading(false)
      console.log("api-",result.jdList)
      addDataToCartAction(result.jdList, dispatch)
     })
     .catch((error) => console.error(error));
  }

  useEffect(()=>{
    getDataFromApi()
  },[offset])

  // "scroll functions" //

  const handleInfiniteScroll = async()=>{
    // console.log(window.innerHeight)
    // console.log(document.documentElement.scrollHeight)
    // console.log(document.documentElement.scrollTop)
    try {
      if(window.innerHeight + document.documentElement.scrollTop + 1 > document.documentElement.scrollHeight){
        setOffSet((prev)=> prev + 9)
        console.log("infinite scrll called")
        setloading(true)
        
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    window.addEventListener("scroll", handleInfiniteScroll)
    return ()=>{
      window.removeEventListener("scroll", handleInfiniteScroll)
    }
  },[])

  return (
    <>
   <Filters />
   <Grid container justifyContent={'center'} gap={4}  columns={{ xs: 4, sm: 8, md: 12 }}>
      {joblist.map((el)=>{
       return <JobCard key={el.jdUid} cardData={el}/>
      })}
      {loading && <JobSkeletonCard />}
   </Grid>
   
   </>
  )
}

export default App
