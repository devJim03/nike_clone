import React from 'react'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { statistics,shoes } from '../constants'
import { bigShoe1 } from '../assets/images'
import ShoeCard from '../components/ShoeCard'

import { useState } from 'react'

const Hero = () => {
  //state keeps track of which shoe is selected
  const [bigShoeImg,setbigShoeImg] = useState(bigShoe1)

  return (
    <section id='home' className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'> {/*w-full means width-full aka take the entire width of the screen aka no cheeky edge borders*/}
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>{/*on xl devices width is 2/5th of the section*/}
        <p className='text-xl font-montserrat text-coral-red'>Our Summer Collection</p>
        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'><span className='text-coral-red'>NEW</span> Arrivals</span> {/*z index 10 makes it on the top, we set background to white bc on desktop we want the effect of the text cutting into the image*/}
          <br/>
          <span className='text-slate-gray inline-block mt-3'>Nike</span> {/*this is in its own span bc we want to color it differently*/}
          Shoes
          </h1>
          <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
          <Button label='Shop Now' iconURL={arrowRight}/>
          <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'> {/*container for stats, display flex makes it a row jsutify content start makes it on the left, align items start makes it on the top of the container*/}
            {statistics.map((stat,index)=>( 
              <div key={index}> {/*for each stat in statistics render a div with 2 p elements corresponding to the value and the label*/}
                <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
                <p className='leading-7 font-montserrat text-slate-gray'>{stat.label}</p>
              </div>
            ))}
          </div>
      </div>
      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img src={bigShoeImg} alt='shoe collection' width={610} height={500} className='object-contain relative z-10'/>
        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {shoes.map((shoe)=>(
            <div key={shoe}>
              <ShoeCard imgURL={shoe} changeBigShoeImage={(shoe)=>setbigShoeImg(shoe)} bigShoeImg={bigShoeImg}/>{/*passing state and the setState function as props*/}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero