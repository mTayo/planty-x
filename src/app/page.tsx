/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import { Carousel } from './components/Carousel'
import { bestSellerData } from './data'
import { Testimonials } from './components/Testimonials'

export default function Home() {
  return (
    <div className="max-w-[1440px] mx-auto w-full">

        <nav className=' w-full px-3 md:px-[30px] lg:px-[50px] py-3 md:py-6 flex justify-between items-center'>
          <div className='logo-area'>
            <img src="/assets/images/Logo.svg"  alt="Planty'x" />
          </div>
          <ul className="nav-menu hidden md:flex gap-x-6">
            <li>Plants</li>
            <li>For offices</li>
            <li>Plant care</li>
            <li>About</li>
          </ul>
          <div className='cta-area flex items-center gap-x-5'>
            <div> <img src="/assets/images/search.svg"  alt="Planty'x" /></div>
            <div> <img src="/assets/images/account.svg"  alt="Planty'x" /></div>
            <div> <img src="/assets/images/cart.svg"  alt="Planty'x" /></div>
          </div>
        </nav>
    <div className="hero-section">
      
      <div className='hero pl-2 md:px-0 md:pl-[30px] lg:pl-[50px] w-full mx-auto flex justify-between '>
        <div className='left w-1/2 md:w-auto relative'>
          <h1 className="mt-10 md:mt-[82px] text-3xl md:text-8xl font-normal hero-text">
            <span className="block">Best house </span> plants varieties. 
          </h1>
          
          <button className="hidden md:block btn-dark rounded-3xl px-8 py-[14px] text-[16.62px] font-normal mt-10">Shop now</button>
          <div className='mt-7 md:mt-20'>
            <p>
            <span className="md:block">Beautiful living greenery for</span>
            homes and offices
            </p>
            <p className='mt-4 md:mt-10 font-extralight text-sm'>
              We've been mentioned in the press
            </p>
            <button className="block md:hidden btn-dark rounded-3xl px-8 py-[10px] text-[11.62px] font-normal mt-5">Shop now</button>
            <div className="flex items-center mt-8 md:mt-14 gap-x-2 md:gap-x-[90px]">
              <img src="/assets/images/Bloomberg.svg" className="w-1/2" alt="" />
              <img src="/assets/images/Forbes.svg" className="w-1/4" alt="" />
              
            </div>
          </div>
        </div>
        <div className='right w-1/2 md:h-[720px]'>
          <div className="h-full w-full">
               <img src="/assets/images/linh-le-Ebwp2-6BG8E-unsplash.jpg " className="flip-180 object-cover h-full w-full" alt="" />
          </div>
        </div>
      </div>
      </div>
      <div className="mt-20 px-3 md:px-[50px]">
        <div className='flex md:text-left text-center flex-wrap gap-x-[70px]'>
            <div className='lg:w-[450px] mx-auto text-base md:text-xl font-extralight'>
            Each houseplant set is handled quickly and safely
            before being sent to your destination in specially
            designed insulated packaging.
            </div>
            <div className='lg:w-[600px] mx-auto  mt-5 md:mt-0 text-lg md:text-3xl font-normal lora'>
            Learn how ve take care of your plant
            at every stage of its journey from our
            greenhouse to your home.
            <div className='mt-7 md:mt-14'>
              <div className="text-base md:text-lg flex items-center justify-center font-light gap-x-3 md:gap-x-6 lora">LEARN MORE <img src="/assets/images/Iconsdark-circle-arrow.svg" alt="" /></div>
            </div>
            </div>
        </div>
      </div>

      <div className='mt-4 md:mt-20 section-slider px-3 md:px-[50px] '>
        <Carousel />
      </div>

      <div className='mt-12 md:mt-20 px-2 md:px-[50px] '>
          <h4>OUR SHOP</h4>
          <div className='flex justify-between items-center md:block'>
            <p className="lora text-lg md:text-3xl font-medium mt-3 md:mt-8"><span className="block">Here are the best seller</span>
              from our varieties
            </p>
            <button className="btn-dark rounded-3xl px-6 py-[12px] text-[12.62px] font-normal mt-0 md:mt-10 aeonik">See all</button>
          </div>
          <div className="flex flex-col mt-7 md:mt-[52px]">
                <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
                  <div className="flex flex-nowrap gap-x-4 md:gap-x-10" >
                    {bestSellerData.map((datum: any, _i: number) => (
                        <div className="inline-block " key={_i}>
                          <div
                            
                            className="w-[368px] h-[510px] max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                          >
                            <img src={`/assets/images/plants/${datum?.image}`} className='h-full w-full' alt={datum?.name} />
                          </div>
                          <div className='mt-4 flex justify-between font-light'>
                            <div>{datum?.name}</div>
                            <div>{datum?.price}</div>
                          </div>
                        </div>
                    ))}
                  </div>
                </div>
          </div>
      </div>

      <div className='mt-8  md:mt-20 px-2 md:px-[50px] '>
        <div className='block md:flex  md:gap-x-[143px]'>
            <div className='review md:max-w-[302px] w-full'>
                <h5 className='font-medium'>REVIEWS</h5>
                <p className='font-light mt-6'>
                    Shop with confidance by reading customer
                    reviews given by individuals who have used
                    Bioomey. Excelient quality and streamlined
                    service are both offered here.
                </p>
                <div className='flex gap-x-4 items-center mt-3'>
                  <img src="/assets/images/stars.svg" alt="Ratings" />
                  <p>5/5</p>
                </div>
                <div className='text-[13px] font-normal mt-2'>
                  2.479 reviews
                </div>
            </div>
            <div><Testimonials /></div>
        </div>
      </div>
      <div className='px-3  md:px-[50px] '>
          <div className="max-h-[774px]  h-full flex gap-x-4 md:gap-x-14">
              <div className=' '><img src="/assets/images/unsplash_dDVU6D_6T80.png" className="object-contain md:h-full w-full" alt="" /></div>
              <div><img src="/assets/images/unsplash_UHj-S65GVtA.png" className='object-contain  md:h-full w-full' alt="" /></div>
          </div>
      </div>
      <div className='mt-20 px-2 md:px-[50px] '>
          <div className="max-h-[574px] flex w-full  h-full">
              <div className='relative'>
                <img src="/assets/images/brina-blum-RNBxppNpAPc-unsplash.jpg" className='object-cover h-full w-full ' alt="" />
                <div className='absolute top-0 w-full md:w-auto'>
                  <div className='ml-2 mr-2 md:mr-0 md:ml-14 mt-4 md:mt-16 md:p-[43.8px] py-6 md:py-9 blur-div'>
                    <h3 className='text-xl md:text-4xl lora font-medium px-3 md:px-0'><span className='md:block'>Get inspired from</span>
                        our Instagram
                    </h3>
                    <div className='font-light mt-2.5 px-3 md:px-0'>
                      <span className='md:block'>If you use the hashtag #bioomey on Instagram, </span>
                      well spotlight you.
                    </div>
                    <div className='mt-3 px-3 md:px-0'>
                      <div className="text-base flex items-center font-medium gap-x-4">Check it out <img src="/assets/images/Iconsdark-circle-arrow.svg"  className="w-6" alt="" /></div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
      </div>
      <div className='mt-10 md:mt-20 px-3 md:px-[50px] '>
        <div className='flex flex-wrap justify-between items-center'>
          <div className='lora text-xl md:text-4xl'>
          <span className='md:block'>Stay update with special offers, </span>
          plant-parenting tips, and more.
          </div>
          <div className='flex mt-10 md:mt-0 w-full md:w-auto justify-between items-center border-b-2 border-[#000000] pb-1.5'>
            <div><input placeholder='Your email' className='text-[14px] w-full  md:w-[250px] focus:border-0 focus:outline-0' /></div>
            <div><button className="btn-dark rounded-3xl px-6 py-[12px] text-[12.62px] font-normal  aeonik">Subscribe</button></div>
          </div>
        </div>
      </div>
      <footer className='mt-20 bg-[#F3F3F3] block md:flex justify-between aitems-center px-[50px] py-[60px]'>
          <div className='logo-area flex justify-center md:block'>
            <img src="/assets/images/Logo.svg"  alt="Planty'x" />
          </div>
          <ul className="nav-menu font-light block flex mt-10 md:mt-0 justify-around md:gap-x-6">
              <li>Help</li>
              <li>Contact</li>
              <li>Privacy & Terms</li>
          </ul>
          <div className='cta-area flex items-center  mt-10 md:mt-0 justify-around md:gap-x-8'>
            <div> <img src="/assets/images/icon-facebook.svg"  alt="Planty'x" /></div>
            <div> <img src="/assets/images/icon-twitter.svg"  alt="Planty'x" /></div>
            <div> <img src="/assets/images/icon-instagram.svg"  alt="Planty'x" /></div>
          </div>
      </footer>
    </div>
  )
}
