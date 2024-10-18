import { createContext , useEffect, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({children})=>{

    const [data , setData] = useState([])
    const getData = async ()=>{
         try {
            const response = await fetch("https://dummyjson.com/products")
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const allData = await response.json();
            setData(allData)
         } catch (error) {
            console.log("Error" , error)
         }
    }

    useEffect(()=>{
        getData();
    },[])
    
return(
<DataContext.Provider value={{data , getData}}>
    {children}
</DataContext.Provider>
)
}