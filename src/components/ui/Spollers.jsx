import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,

} from "@material-tailwind/react";
import { CheckboxC } from "./CheckboxC";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${id === open ? "rotate-180" : ""
        } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function Spollers({ item }) {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {

    setOpen(open === value ? 0 : value);
  };

  return (
    <Fragment>

      <Accordion open={open === item.id} 
      icon={ <span  className={`${item.id === open ? "rotate-180" : ""
      } text-[6px] text-gray-400 icon-arr-filter block mt-[8px]`} />}>
        <AccordionHeader onClick={() => handleOpen(item.id)} className='border-0 text-[16px] py-[10px]'>
          {item.title}
        </AccordionHeader>
        <AccordionBody>
          {
            item?.items?.map((name) =>
              <div className="flex items-center">
                <div className="flex-auto">
                  <CheckboxC name={name.title} />
                </div>
                <span className="flex items-center  bg-[rgba(56,96,226,0.05)] px-[10px] py-[5px] h-[24px] rounded-[10px]">{name.count}</span>
              </div>

            )
          }
        </AccordionBody>

      </Accordion>


    </Fragment>
  );
}