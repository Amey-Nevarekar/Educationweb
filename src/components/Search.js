import React from 'react'
import './Seach.css'
import { useState } from 'react'


function Search() {

  const[searchbyuser,setsearchbyuser]=useState('')

  async function Eventhandle(){
    try {
      const response = await fetch('http://localhost:4000/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({searchbyuser}),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }


  return (
    <div className='serch-main'>
      <input  className='serch-input' type='text' placeholder='Search here ' value={searchbyuser} onChange={(e)=>setsearchbyuser(e.target.value)} ></input>
      <button className='serch-btn' onClick={Eventhandle}>Search</button>
    </div>
  )
}

export default Search
