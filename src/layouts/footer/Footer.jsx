import React from 'react'
import logo from '../../assets/img/logo.png'
import Language from '../../components/language/Language'
export const Footer = () => {
   return (
      <footer className='bg-[#EEE8DD] rounded-t-[30px] rounded-r-[30px]'>
         <div className="container">
            <div className="flex pt-[32px] pb-[150px] gap-[60px] flex-wrap sm:gap-3 md:pb-[10px]">
               <div className="flex-auto">
                  <div className='max-w-[280px]'>
                     <a href="#" className="block max-w-[142px] mb-[35px]"><img src={logo} alt="logo" /></a>
                     <span className='opacity-50'>
                        <p >Rouwais Dist, Jeddah Rouwais
                           Saudi Arabia</p>
                        <p>00966 2 6676760</p>
                     </span>

                  </div>

               </div>
               <div className="flex-1 text-textColor">
                  <h4 className=" font-bold mb-[32px] text-[20px]">Employers</h4>
                  <ul className='opacity-50'>
                     <li className='mb-[10px] hover:text-green'><a href="#">Start Hiring</a></li>
                     <li className='mb-[10px] hover:text-green'><a href="#">Volunteer</a></li>
                     <li className='mb-[10px] hover:text-green'><a href="#">Diversity and Inclusion</a></li>
                  </ul>
               </div>
               <div className="flex-1 text-textColor">
                  <h4 className=" font-bold mb-[32px] text-[20px]">Employers</h4>
                  <ul className='opacity-50'>
                     <li className='mb-[10px] hover:text-green'><a href="#">Start Hiring</a></li>
                     <li className='mb-[10px] hover:text-green'><a href="#">Volunteer</a></li>
                     <li className='mb-[10px] hover:text-green'><a href="#">Diversity and Inclusion</a></li>
                  </ul>
               </div>
               <div className="flex-1 text-textColor">
                  <h4 className=" font-bold mb-[32px] text-[20px]">Employers</h4>
                  <ul className='opacity-50'>
                     <li className='mb-[10px] hover:text-green'><a href="#">Start Hiring</a></li>
                     <li className='mb-[10px] hover:text-green'><a href="#">Volunteer</a></li>
                     <li className='mb-[10px] hover:text-green'><a href="#">Diversity and Inclusion</a></li>
                  </ul>
               </div>
            </div>
            <div className="flex items-center justify-between py-[30px] border-t md:flex-col sm">
               <span className='opacity-50'>Copyright © 2022</span>
               <Language />
               <div className="flex gap-[50px] flex-wrap md:gap-[20px]">
                  <ul className="flex gap-[40px] opacity-50 md:gap-[10px]">
                     <li><a href="#" className=' hover:text-green'>Terms of Service</a></li>
                     <li><a href="#" className=' hover:text-green'>Privacy policy</a></li>
                     <li><a href="#" className=' hover:text-green'>Offer terms</a></li>
                  </ul>
                  <ul className="flex gap-[15px] text-[20px] md:justify-center md:w-[100%]">
                     <li><a href="#" className='icon-insta hover:text-green'></a></li>
                     <li><a href="#" className='icon-twit hover:text-green'></a></li>
                     <li><a href="#" className='icon-fb hover:text-green'></a></li>
                  </ul>
               </div>


            </div>

         </div>
      </footer>
   )
}
