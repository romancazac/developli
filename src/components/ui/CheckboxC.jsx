
import { Checkbox,Typography } from "@material-tailwind/react";




export const CheckboxC = ({name}) => {
   return (
      
      <Checkbox
         id={name}
         className='hover:before:hidden checked:bg-green checked:border-0 border-grey'
         label={
            (
               <Typography
                  variant="small"
                  color="gray"
                  className=" font-normal"
               >
                  {name}
                 
               </Typography>
            )
         
         }
         containerProps={{ className: "-ml-2.5 " }}
        
      />
   )
}
