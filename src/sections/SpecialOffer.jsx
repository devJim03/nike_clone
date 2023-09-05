import React from 'react'
import { offer } from '../assets/images'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
const SpecialOffer = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'> {/*flex-col-reverse on small devices means the text section which is to the right of the image aka after it is now above the image aka before it when its in a col form hence col-reverse but only for small devices*/}
      <div className='flex-1'>
        <img src={offer} width={773} height={687} className='object-contain w-full'/>
      </div>

      <div className='flex flex-1 flex-col'>
        <h2 className='mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
          Special <span className='text-coral-red inline-block mt-3'> Offer</span>
          </h2>
          <p className='mt-4 lg:max-w-lg info-text'>Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value for your dollar.</p>
          <p className='mt-6 lg:max-w-lg info-text'>Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest of expectations. Your journey with us is nothing short of exceptional.</p>
          <div className='mt-11 flex flex-wrap gap-4'>
          <Button label='Shop Now' iconURL={arrowRight} />
          <Button label='Learn More' backgroundColor ='bg-white' borderColor='border-slate-gray' textColor='text-slate-gray'/>
          </div>
      </div>
    </section>
  )
}

export default SpecialOffer