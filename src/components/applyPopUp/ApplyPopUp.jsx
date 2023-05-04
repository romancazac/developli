import React, { useEffect } from "react";
import {
   Dialog,
   DialogBody,
   DialogFooter,

} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { setOpenPop } from "../../redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { ApplyForm } from "../applyForm/ApplyForm";

export default function ApplyPopUp({ handleOpen, open,title,id}) {
   const dispatch = useDispatch();
   const { user } = useSelector(state => state.auth)
   
   
   const handleLogIn = () => {
      dispatch(setOpenPop(true))
      handleOpen()
   }

   return (
      <React.Fragment>

         <Dialog size="lg" open={open} handler={handleOpen} className="max-w-[715px!important] min-w-[auto] xl:min-w-[90%] p-5">
            <div className="flex justify-between items-center mb-6">
               <p className="text-3xl text-blackColor font-semibold">Apply to {title }</p>
               <div className="flex items-center gap-4 ">
                  <button onClick={handleOpen} className='w-[42px] h-[42px] flex justify-center items-center border border-[#F3F3F3] rounded-full text-2xl '>
                     <XMarkIcon strokeWidth={2} className="h-5 w-5 text-[#252A3F]" />
                  </button>
               </div>
            </div>
            <DialogBody className="overflow-y-auto p-0 md:h-96">

               {
                  user ?
                     <ApplyForm applyId={id} title={title} />
                     :
                     <div className="mb-6">
                        <p className="">Login to the dashboard first before applying for a job. If you don't have an account you can create one here.
                           <Link className="text-[#1F8FFF]"
                           >Create Account</Link></p>
                     </div>
               }


            </DialogBody>
            <DialogFooter className="justify-end gap-2 ">
               {
                  !user &&
                  <div className="flex gap-4">
                  <button onClick={handleOpen} className='bg-[#F3F3F3] text-gray px-6 py-3 font-semibold rounded-2xl hover:scale-105 ease-in-out duration-75 '>Cancel</button>
                  <button onClick={handleLogIn} className='bg-green text-white px-6 py-3 font-semibold flex items-center gap-2 rounded-2xl hover:scale-105 ease-in-out duration-75 text-base'>Login</button>
               </div>
               }
              
            </DialogFooter>
         </Dialog>
      </React.Fragment>
   );
}