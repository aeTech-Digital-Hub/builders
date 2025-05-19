import React from 'react'
import HeroLayout from '../section/hero-layout'
import assets from '../../assets/assests'

const Trust = () => {
  return (
    <div >
        <HeroLayout backgroundImage={assets.trust.bg6}>
      <div className="text-white text-center">
        <h1 className="text-5xl font-bold ">How Trust <br/>Is
         <span className="text-brown">Built</span> </h1>
      </div>
    </HeroLayout>
<div className='w-1/3 mx-auto py-20'>
<p className=' text-center text-xl'>At Honest Builders, we know your home is the most 
    significant investment you'll ever make. Whether this is your 
    first time or your fifth, you're the reason we've built our business
     on the foundation of honesty and transparency.</p>
</div>

<div className='px-12 flex bg-blue '>

    <div className='w-1/3'>
        

    </div>

</div>

    

    </div>
  )
}

export default Trust