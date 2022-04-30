import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
import {isExpired}from 'react-jwt'

export default function Protected(props) {
    const Cmp = props.cmp;
    const token = localStorage.getItem('userTokenTime')
    // const decode = decodeToken(token)
    // console.log(decode.role)
    const Navigate = useNavigate();
    useEffect(()=>{
        if(!token) Navigate("/signin")
        if(isExpired(token)) {
          localStorage.clear();
          Navigate("/signin")
        }
        // if(decode.role !== "admin") Navigate("/")
    })
  return (
    <div>
        <Cmp></Cmp>
    </div>
  )
}
