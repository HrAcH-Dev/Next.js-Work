import React from 'react'
import ContactInfo from '../../components/ContactInfo'

export default function Contact({ data }) {
  return (
    <div>
      <ContactInfo contact={data} />
    </div>
  )
}


export const getServerSideProps = async (context) => {
    const { id } = context.params

    const a = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
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