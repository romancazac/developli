import React from 'react'
import { useSelector } from 'react-redux'
import { CareerTips } from '../components/careerTips/careerTips'

export const Search = () => {

   const { articleSearch } = useSelector(state => state.articles)
   return (
    
         <div className='mt-5'>
            <CareerTips data={articleSearch} search={true} title='Search articles' text={`Fount: ${articleSearch.length} articles `}/>
         </div>

      
   )
}
