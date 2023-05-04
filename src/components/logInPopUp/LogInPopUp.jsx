import React from "react";
import {
   Dialog,
   DialogBody,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setOpenPop, setRegistration } from "../../redux/slices/authSlice";
import { LogInForm } from "../logInForm/LogInForm";
import { RegistrationForm } from "../registrationForm/RegistrationForm";

export default function LoginPopUp() {
   const { popUp, registrationForm } = useSelector(state => state.auth)
   const dispatch = useDispatch()
   return (
      <React.Fragment>

         <Dialog size="sm" open={popUp} handler={() => dispatch(setOpenPop(false))} className="max-w-[715px!important] min-w-[auto] md:min-w-[90%] p-5">
            <div className="flex justify-between items-center mb-6">
               <p className="text-3xl text-blackColor font-semibold">Hi There, Welcome!</p>
               <div className="flex items-center gap-4 ">
                  <button onClick={() => dispatch(setOpenPop(false))} className='w-[42px] h-[42px] flex justify-center items-center border border-[#F3F3F3] rounded-full text-2xl '>
                     <XMarkIcon strokeWidth={2} className="h-5 w-5 text-[#252A3F]" />
                  </button>
               </div>
            </div>
            <DialogBody className="overflow-y-auto p-0 md:h-96">
               <div className="mb-6">
                  {
                     registrationForm ? 
                        <RegistrationForm />
                        :
                        <>
                           <LogInForm />
                          
                        </>

                  }

               </div>
            </DialogBody>

         </Dialog>
      </React.Fragment>
   );
}