import React, { Component, useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import Carditem from './Carditem'

function Searchfilter(){

    const[data,setData]=useState([])

    const[filterValue,setfilterValue]=useState(' ')

    const[searchApidata,setsearchApidata]=useState([])

    const Api='https://jsonplaceholder.typicode.com/posts'

      const fetchApi= async (Api)=>{
          
        const response= await fetch(Api)

        const userdata=await response.json()

         
        setData(userdata)
        setsearchApidata(userdata)

      }
  




    useEffect(()=>{
        fetchApi(Api)
    },[])

   const handleSearch=(e)=>{

       if(e.target.value==='')
       {
        setData(searchApidata)
       }
       else{
        const filterResult=searchApidata.filter((item=>item.id==e.target.value))
        setData(filterResult)
       }
       setfilterValue(e.target.value)

   }


    return(
        <div>
        <div className='container  d-flex d-inline-flex justify-content-center'>
           <input type='text'  placeholder='search. . .' onChange={(e)=>handleSearch(e)} value={filterValue} />
        </div>

        <div className='row d-flex d-inline-flex gap-5 justify-content-center '>
            <Carditem data={data}/>



        </div>


        </div>
    )
}
export default Searchfilter