import logo from './logo.svg';
import './App.css';
import users from './data.json'
import React, { useState } from 'react'
import Searchfilter from './components/Searchfilter';
function App() {
  const[data,setData]=useState(users)


  let duplicates=data.filter((item,index)=>index===data.findIndex(ele=>ele.name===item.name))



  return (
    <div className=''>
    <div className='container'>{
      
      duplicates.map((item)=>
       <div className='card'>
        {item.name}
        {item.id}
        </div>
      )}

    </div>
<Searchfilter/>
</div>
  );
}

export default App;
