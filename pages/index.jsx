import React from 'react'


export default function Home() {
  return (
      <div>
        <h1>Home Page</h1>
      </div>
  )
}


export const getStaticProps = async () => {
  const a = await fetch('https://jsonplaceholder.typicode.com/users')
  const b = await a.json()

  if(!b) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data: b }
  }
}