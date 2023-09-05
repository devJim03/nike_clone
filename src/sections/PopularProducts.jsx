import React from 'react'
import { products } from '../constants' //array of 4 different products with images, names, and prices
import PopularProductCard from '../components/PopularProductCard'
const PopularProducts = () => {
  return (
    <section id='products' className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-palanquin font-bold'><span className='text-coral-red'>Best</span> Sellers</h2>
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>Experience top notch quality and style with our sought-after selections. Discover a world of comfort, design, and value.</p>
      </div>
      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'>
      {products.map((product,index)=>(
        <PopularProductCard k={product.name} {...product}/> // basically with the {..product} its a short form that says pass every other property as a prop, it saves you some time from having to write them all out
      ))}
      </div>
    </section>
  )
}

export default PopularProducts