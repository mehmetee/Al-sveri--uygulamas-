import {useState,useEffect} from 'react';`2.9K (gzipped : 1.3K)`
import axios from "axios";


function useHooks(url){
    const [error,setError]=useState(null);
    const [loading,setLoading] = useState(true);
    const [data,setData]=useState([]);
   

    async function fechdata(){
    try  {
    const {data:responseData} =await axios.get(url);
    setData(responseData);
    setLoading(false);}

    catch (err){
        setError(err.message);
        setLoading(false);
    }
   
    } ;
    useEffect(()=>{ fechdata(); },[]);   
     return {error,loading,data};
     
};


export default useHooks;