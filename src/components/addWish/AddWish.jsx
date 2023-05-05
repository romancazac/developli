import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addInWish } from '../../redux/slices/wishSlice';
import { setOpenPop } from '../../redux/slices/authSlice';
import Alerts from '../ui/Alerts';
export const AddWish = ({ id, name }) => {

   const dispatch = useDispatch()
   const { items } = useSelector(state => state.wish)
   const { user } = useSelector(state => state.auth)

   const onAddWish = () => {
      dispatch(addInWish({ id, name }))
   }
   useEffect(() => {
      localStorage.setItem('wish', JSON.stringify(items))
   }, [items])

   return (
      <>
         <button onClick={user ? onAddWish : () => dispatch(setOpenPop(true))}
            className={`w-[42px] h-[42px] flex justify-center items-center border border-[#F3F3F3] rounded-full text-2xl icon-heart ${items.map(i => i.id === id ? 'text-green' : '').join('')}`}>
         </button>
       

      </>

   )
}
