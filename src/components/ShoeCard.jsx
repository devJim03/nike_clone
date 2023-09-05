import React from 'react'

const ShoeCard = ({imgURL, changeBigShoeImage, bigShoeImg}) => {

    const handleClick = () => {
        if(bigShoeImg !== imgURL.bigShoe){ 
            //if currently selected shoe is not the one being shown call the function that changes the image
            //recall functions can be passed as props too in this case changeBigShoeImage is a functions, its all kinda like state
            changeBigShoeImage(imgURL.bigShoe)
        }
    }

  return (
    <div className={`border-2 rounded-xl ${bigShoeImg === imgURL.bigShoe?'border-coral-red':'border-transparent'} cursor-pointer max-sm:flex-1`} onClick={handleClick}> {/*remember if you want to have logic in the classnames use `` so you can do ${code} for example checking which shoe is selected*/}
        <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
            <img src={imgURL.thumbnail} alt='shoe collection' width={127} height={123} className='object-contain'/>
        </div>
    </div>
  )
}

export default ShoeCard