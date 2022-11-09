import React, { Component, useEffect, useState } from 'react'
import users from './users.json'
function JsonData(){
  
 const[data,setData]=useState(users)


 const obj=JSON.parse('data')

   let dupicatename = data.filter( (ele, ind) => ind === data.findIndex( elem => elem.name === ele.name ))




     return(
      <>
      {
        dupicatename&& dupicatename.map((item)=>
        <div>{item.name}</div>
        )
      }
      </>
     )
     

         
}

export default JsonData