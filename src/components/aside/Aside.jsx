import React from 'react'
import Spollers from '../ui/Spollers'
import Accordion from '../ui/Spollers'

export const Aside = () => {
   const asideData = [
      {
         id: 1,
         title: 'Experience Level',
         label:'experience',
         items: [
            {
               title: '0-2 years',
               id: 1,
               count: 28
            },
            {
               title: '3-5 years',
               id: 2,
               count: 713
            },
            {
               title: '6-9 years',
               id: 3,
               count: 188
            },
            {
               title: '10+ years',
               id: 4,
               count: 188
            },
         ]


      },
      {
         id: 2,
         title: 'Category',
         label:'category',
         items: [
            {
               title: 'Develope',
               id: 1,
               count: 28
            },
            {
               title: 'Design',
               id: 2,
               count: 713
            },
            {
               title: 'SMM Content',
               id: 3,
               count: 188
            },
            {
               title: 'Marketing',
               id: 4,
               count: 188
            },
         ]


      },
      {
         id: 3,
         title: 'Type of employment',
         label:'employment',
         items: [
            {
               title: 'Fulltime',
               id: 1,
               count: 28
            },
            {
               title: 'Part-Time',
               id: 2,
               count: 713
            },
            {
               title: 'Remote',
               id: 3,
               count: 188
            },
            {
               title: 'Internship/Trainee',
               id: 4,
               count: 188
            },
            {
               title: 'Hourly',
               id: 5,
               count: 188
            },
         ]


      },
      {
         id: 4,
         title: 'Salary Range',
         label:'salary',
         items: [
            {
               title: '2000',
               id: 1,
               count: 28
            },
            {
               title: '3000',
               id: 2,
               count: 713
            },
            {
               title: '4000',
               id: 3,
               count: 188
            },
            {
               title: '6000',
               id: 4,
               count: 188
            },
            {
               title: '8000',
               id: 5,
               count: 188
            }
         ]


      },
      {
         id: 5,
         title: 'Location',
         label:'location',
         items: [
            {
               title: 'Saudi Arabia',
               id: 1,
               count: 28
            },
            {
               title: 'United States',
               id: 2,
               count: 713
            },
            {
               title: 'Germany',
               id: 3,
               count: 188
            },
            {
               title: 'Australia',
               id: 4,
               count: 188
            }
         ]


      }


   ]


   return (
      <aside className="flex-shrink-0 w-[315px]">
         <div className="bg-white rounded-[12px] px-[20px] py-[25px]">
            {
               asideData.map((item) =>
                  <Spollers key={item.id} item={item}/>
               )
            }

         </div>
      </aside>
   )
}
