import React from 'react'

async function getData(){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    return res.json()
}

const LearnDataFetching = async() => {
    const data = await getData()

    console.log("Data:",data)
  return (
    <>
        {data.map((post,i)=>(<div key={i}>

<h1>{post.title}</h1>
<h1>{post.body}</h1>
<hr/>
        </div>))}
    </>
  )
}

export default LearnDataFetching