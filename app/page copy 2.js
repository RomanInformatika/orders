"use client"
import Image from 'next/image'
import { Editor } from '@tinymce/tinymce-react';
import { useRef, useState } from 'react';
import {useEffect} from 'react'


export default function Home() {
  const [data, setData] = useState([])

  useEffect(()=>{
    fetch("https://api.restful-api.dev/objects")
    .then(res => res.json())
    .then(
      (result) => {
           console.log(result)
           setData(result)
      }) 
  },[])

  const f = ()=>{
    console.log(data)
    if (data.length!=0) 
    {
       return data[0].name
    } 
    return "loading"
  }



  return (
    <div>

      {data.map(item=>(<p>{item.name}</p>))}
      </div>
  )
}
