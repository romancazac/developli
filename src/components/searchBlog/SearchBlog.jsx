import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import { setaArticlesSearch } from '../../redux/slices/articlesSlice';
import { useNavigate } from 'react-router-dom';
import { useAppServices } from '../../services/articleServices';
export const SearchBlog = () => {
   const { getArticleSearch } = useAppServices();
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const [search, setSearch] = useState('');
   const [validation, setValidation] = useState('');

   const onSearchBlog = async () => {
     
      const data = await getArticleSearch(search);
      dispatch(setaArticlesSearch(data));
      if(search.length > 0  ){
         navigate('/search');
      } else {
         setValidation('border border-green')
      }
      
   }

   return (

      <div  className={`flex items-center max-w-[820px] w-full  bg-white rounded-[16px] shadow-bar text-gray py-[6px] pr-[6px] mb-5 ${!search.length > 0  ? validation : ''}`}>
         <div className="flex flex-auto items-center pl-[25px] gap-[12px] ">
            <label htmlFor='search' className='icon-search text-[24px] text-green ' />
            <input onChange={(e) => setSearch(e.target.value)} value={search} className='w-[100%] h-[36px] outline-none' type="text" id='search' placeholder='Product Designer' />
         </div>

         <button onClick={onSearchBlog} className='bg-green h-[56px] rounded-[12px] text-white px-[55px] ml-[40px]'>Search</button>


      </div>

   )
}
