
import { Checkbox, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setFilters } from "../../redux/slices/filterSlice";




export const CheckboxC = ({ title, id,label}) => {
   
   const dispatch = useDispatch();


   const handleCheckboxChange = (e,title) => {
      const value = e.target.title
 
     dispatch(setFilters({ title, value }));
      
    };
    


   return (

      <Checkbox
         id={title}
       
         className='hover:before:hidden checked:bg-green checked:border-0 border-grey'
         title={label}
         name={title}
         onChange={e =>  handleCheckboxChange(e,title)}
         label={
            (
               <Typography
                  variant="small"
                  color="gray"
                  className=" font-normal"
               >
                  {title}

               </Typography>
            )

         }

         containerProps={{ className: "-ml-2.5 " }}

      />
   )
}
