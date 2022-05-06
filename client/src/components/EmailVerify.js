import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {useParams} from 'react-router'

function EmailVerify() {
    const [validUrl, setValidUrl] = useState(false)
    const param = useParams(); 
    useEffect(()=>{
        const verifyEmailUrl = async()=>{
            try{
                const url = `/api/signup/${param.id}/verify/${param.token}`
                const {data} = await axios.get(url);
                console.log(data)
                setValidUrl(true)
            }
            catch(error){
                console.log(error)
                setValidUrl(false)
            }
        }
        verifyEmailUrl();
    },[param])
  return (
    <div>
        <React.Fragment>
            {validUrl ? (
                <div className='container'>
                    <h1>Email Verified Successfully</h1>
                    <Link to='/signin'>
                        <button className='btn btn-success'>Login</button>
                    </Link>
                </div>
            ): 
            ( <h1>404 Page Not Found</h1>)
            }
        </React.Fragment>
    </div>
  )
}

export default EmailVerify