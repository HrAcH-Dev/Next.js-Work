import React from 'react'

export default function ContactInfo({ contact }) {
  const { name, email, address } = contact || {} 
  const { street, suite, city, zipcode } = contact.address

  if (!contact) {
    return <h1>Empty Contact</h1>
  }

  return (
    <div>
      <h1>Name: {name}</h1>
      <h1>Street: {street}</h1>
    </div>
  )
}
