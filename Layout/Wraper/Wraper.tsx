"use client"
import React from 'react'
import dynamic from 'next/dynamic'

let Header = dynamic(()=>import("../Header/Header"))
let Footer = dynamic(()=>import("../Footer/Footer"))

const Wraper = ({children}:any) => {
  return (
    <div>
        <Header/>
            {children}
        <Footer/>
    </div>
  )
}

export default Wraper
