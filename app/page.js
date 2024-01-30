"use client"
import Image from 'next/image'
import { Editor } from '@tinymce/tinymce-react';
import { useRef, useState } from 'react';
import {useEffect} from 'react'


export default function Home() {
  const [data, setData] = useState([])

  useEffect(()=>{
   
    var myHeaders = new Headers();
myHeaders.append("x-hasura-admin-secret", "Jdb1LINocMbGj4uN3G3o1ipIJlPICESepwQJXGF4m4puBOoHYT48zlZd7PrF0S2U");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://accurate-titmouse-63.hasura.app/api/rest/userAPI", requestOptions)
  .then(response => response.text())
  .then(result => setData(result))
  .catch(error => console.log('error', error));



    
  },[])




  return (

    <p>{data}</p>

  )
}
