import { Fragment, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'






export default function SelectContacts({name,setFieldValue, data, className=null}) {

   const [selected, setSelected] = useState(data[0])
   function classNames(...classes) {
      return classes.filter(Boolean).join(' ')
   }
   
    
   useEffect(() => {
      setFieldValue(name,selected.name)
   },[selected])
 
  
   return (
      <Listbox value={selected} onChange={setSelected}>
         {({ open }) => (
            <>
               <div className="relative w-[100%]">
                  
                  <Listbox.Button className={`relative w-[100%] cursor-pointer rounded-md  p-3 bg-[#F6F8F9] rounded-xl  pr-10 text-left text-gray-900   focus:outline-none  sm:text-sm sm:leading-6 ${className}`}>
                     <span className="flex items-center">
                        <span className=" block truncate">{selected?.name}</span>
                     </span>
                     <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                        <span  className="text-[6px] text-gray-400 icon-arr-filter" aria-hidden="true" />
                     </span>
                  </Listbox.Button>

                  <Transition
                     show={open}
                     as={Fragment}
                     leave="transition ease-in duration-100"
                     leaveFrom="opacity-100"
                     leaveTo="opacity-0"
                  >
                     
                     <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-[100%] overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {data.map((item) => (
                           <Listbox.Option
                              key={item.id}
                              className={({ active }) =>
                                 classNames(
                                    active ? 'bg-green text-white' : 'text-gray-900',
                                    'relative cursor-default select-none py-2 pl-3 pr-9'
                                 )
                              }
                              value={item}
                           >
                              {({ selected, active }) => (
                                 <>
                                    <div className="flex items-center">
                                       <span
                                          className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                       >
                                          {item?.name}
                                       </span>
                                    </div>

                                    {selected ? (
                                       <span
                                          className={classNames(
                                             active ? 'text-white' : 'text-indigo-600',
                                             'absolute inset-y-0 right-0 flex items-center pr-4'
                                          )}
                                       >
                                          <CheckIcon className="h-5 w-5 text-green" aria-hidden="true" />
                                       </span>
                                    ) : null}
                                 </>
                              )}
                           </Listbox.Option>
                        ))}
                     </Listbox.Options>
                  </Transition>
               </div>
            </>
         )}
      </Listbox>
   )
}
