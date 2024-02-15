import React from 'react'
import MyImage from "../../public/lptp.jpeg"
import Image from 'next/image'

const LearnUseImage = () => {
  return (
    <>
        <Image src={MyImage} alt='image' width={200} height={300}/>
    </>
  )
}

export default LearnUseImage