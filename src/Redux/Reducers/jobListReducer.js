const initialData = {
    jobList : []
}
export const jobListreducer = (storeData = initialData, action)=>{
    switch(action.type){
        case "ADD DATA TO STORE" : {
            return {
                ...storeData,
                jobList : [...storeData.jobList, ...action.payload]
            }
        }
        default : {
            return storeData
        }
    }
} 

