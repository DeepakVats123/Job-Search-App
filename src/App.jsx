import { useEffect, useState } from 'react';
import { addDataToCartAction } from './Redux/Actions/addDataAction';
import { useDispatch } from 'react-redux';
import JobCard from  './componants/JobCard';
import { useSelector } from 'react-redux';
import JobSkeletonCard from './componants/JobSkeletonCard';
import {Autocomplete, Box,Grid,TextField} from '@mui/material';
import Filters from './componants/Filters';
import Loading from './componants/Loading';



function App() {
  const [filteredData, setFilteredData] = useState([])
  const Roles = ['frontend', "backend", "ios", "android", "tech lead"];
  const MinExp = [0,1,2,3,4,,5,6,7,8,9,10,11,12];
  const MinPay = [0,1,2,3,4,,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,95,95,96,97,98,99,100];
  const Location = ["remote", "delhi ncr", "mumbai", "chennai", "bangalore"]
  const Company = ["Dropbox", "LG", "Sony", "Adobe System", "HP", "eBay", "Tencent", "Apple", "Asus", "Intel Corporation", "Rakuten", "Samsung", "Dell Technologies","Cisco", "Oracle", "Google", "Huawei", "MasterCard", "Twitter", "Baidu", "Olymps", "Alibaba", "ZTE" ];

  const [roleVal, setRoleVal] = useState([]);
  const [expVal, setExpVal] = useState([]);
  const [locationVal, setLocationVal] = useState([]);
  const [companyVal, setComapnyVal] = useState([]);
  const [minPayVal, setMinPayVal] = useState([]);

  const [offset, setOffSet] = useState(0)
  const [loading, setloading] = useState(false)
  const dispatch = useDispatch()

  const joblist = useSelector(storeData => storeData.jobList)

  // Api Call----------
  
  function getDataFromApi(){
    
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

  // "Infinite scroll functions" //------

  const handleInfiniteScroll = async()=>{
    // console.log(window.innerHeight)
    // console.log(document.documentElement.scrollHeight)
    // console.log(document.documentElement.scrollTop)
    try {
      if(window.innerHeight + document.documentElement.scrollTop + 1 > document.documentElement.scrollHeight){
        setOffSet((prev)=> prev + 9)
        // console.log("infinite scrll called")
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

  // Filters---------

  const applyFilters = ()=>{
    var filterdList = joblist
    
    // filter for Roll 
    if(roleVal.length){
      console.log(roleVal)
      filterdList = filterdList.filter((el)=>{
        return roleVal.includes(el.jobRole)
      }) 
    }

    // fitter for Location---------
    if(locationVal.length){
      filterdList = filterdList.filter((el)=>{
        return locationVal.includes(el.location)
      }) 
    }

    // fitter for CompanyName---------
    if(companyVal.length){
      filterdList = filterdList.filter((el)=>{
        return companyVal.includes(el.companyName)
      }) 
    }

    // fitter for Experience---------
    if(expVal.length){
      filterdList = filterdList.filter((el)=>{
        return expVal.includes(el.minExp)
      }) 
    }

    // fitter for MinPay---------
    if(minPayVal.length){
      filterdList = filterdList.filter((el)=>{
        return minPayVal.includes(el.minJdSalary)
      }) 
    }


    setFilteredData(filterdList)
  }

  useEffect(()=>{
    applyFilters()
  },[roleVal,joblist,locationVal,companyVal,expVal,minPayVal])

  return (
    <>
    <Filters setRoleVal={setRoleVal} setExpVal={setExpVal} setComapnyVal={setComapnyVal} setLocationVal={setLocationVal} setMinPayVal={setMinPayVal} />

    <Grid container justifyContent={'center'} gap={4}  columns={{ xs: 4, sm: 8, md: 12 }}>
      {!filteredData.length ? <Loading /> :
        filteredData.map((el)=>{
       return <JobCard key={el.jdUid} cardData={el}/>
      })}
      
    </Grid>
    {loading && <Loading />}
   </>
  )
}

export default App
