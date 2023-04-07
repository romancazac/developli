import { Fragment, useEffect, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,

} from "@material-tailwind/react";
import { CheckboxC } from "./CheckboxC";


export default function Spollers({ item }) {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {

    setOpen(open === value ? 0 : value);
  };



  return (
    <Fragment>

      <Accordion open={open === item.id}
        icon={<span className={`${item.id === open ? "rotate-180" : ""
          } text-[6px] text-gray-400 icon-arr-filter block mt-[8px]`} />}>
        <AccordionHeader onClick={() => handleOpen(item.id)} className='border-0 text-[16px] py-[10px]'>
          {item.title}
        </AccordionHeader>
        <AccordionBody>
          {
            item?.items?.map((data,i) =>
            
              <div className="flex items-center">
                <div className="flex-auto">
                  <CheckboxC {...data} label={item.label}/>
                </div>
                <span className="flex items-center  bg-[rgba(56,96,226,0.05)] px-[10px] py-[5px] h-[24px] rounded-[10px]">{data.count}</span>
              </div>

            )
          }
        </AccordionBody>

      </Accordion>


    </Fragment>
  );
}