import React from 'react'
import { services } from '../constants' //an array of 3 objects with an image, label and some text
import ServiceCard from '../components/ServiceCard'
const Services = () => {
  return (
    <section className='max-container flex justify-center flex-wrap gap-9'>
      {services.map((service)=>(
        <ServiceCard key={service.label} {...service}/> //using the spread operator here basically says for each property in service pass it as a prop of the same name to this card
      ))}
    </section>
  )
}

export default Services