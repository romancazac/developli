import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
export const Slider = ({ data, prevRef, nextRef }) => {

   return (
      <Swiper
         modules={[Navigation]}
         spaceBetween={20}
         

         onSlideChange={() => console.log('slide change')}
         onSwiper={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();

         }}
         breakpoints={{
            320:{
               slidesPerView:1.5
            },
            576: {
              // width: 576,
              slidesPerView: 2,
            },
            768: {
              // width: 768,
              slidesPerView: 3.5,
            },
          }}
         className={'section-main'}
      >
         {data.map((item,i) =>
            <SwiperSlide key={i} className='flex flex-col h-[auto] p-[25px] rounded-3xl border  parteners'>

               <span className={`block mb-[50px] text-[30px] ${item.logo}`}>
                  
               </span>
               <p className=' opacity-80'>{item.text}</p>


            </SwiperSlide>
         )
         }

      </Swiper>
   )
}
