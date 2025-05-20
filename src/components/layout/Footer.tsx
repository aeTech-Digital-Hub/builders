import assets from '../../assets/assests'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <section className='px-12 text-white  py-12 bg-dark_blue'>
        <div className='flex  flex-col'>
            <div className='mb-3'>
                <img src={assets.home.logo}/>
            </div>

            <div className='flex justify-between items-center mb-3'>
            <div className='flex-col '>
               <p className='text-white'><span className='font-bold'>Address:</span> 5601 Democracy Hall, Ste. 300 | Piano, TX 75024</p> 
               <p className='text-white'> <span  className='font-bold'>Email:</span> honestbuilders@gmail.com</p>
               <p className='text-white'> <span  className='font-bold'>Tel:</span>   (235)816-325-6716</p>
            </div>

         
            <ul className='space-y-3 text-right'>
  <li><Link to="#">PRIVACY</Link></li>
  <li><Link to="#">CAREERS</Link></li>
  <li><Link to="#">LEGAL</Link></li>
  <li><Link to="#">REALTORS</Link></li>
  <li><Link to="#">CONTACT US</Link></li>
  <li><Link to="#">SITE MAP</Link></li>
</ul>        
            </div>
  
            
  <div className='flex items-center mt-3 justify-between'>
  <p>Copyright 2025 Honest Builders, LLC. All rights reserved.</p>
  <div className='flex items-center gap-6'>
    <a href='#'><img src={assets.home.instagram}  className='w-8 h-8'/></a>
    <a href='#'><img src={assets.home.linkedIn} className='w-10 h-10'/></a>
    <a href='#'><img src={assets.home.facebook}  className='w-8 h-8'/></a>
    <a href='#'><img src={assets.home.youtube}  className='w-10 h-10'/></a>



  </div>
  </div>
        </div>

    </section>
  )
}

export default  Footer ; 