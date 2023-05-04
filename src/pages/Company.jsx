import React from 'react'
import { ContactsForm } from '../components/contactsForm/ContactsForm'
import { SectionContacts } from '../components/sectionContacts/SectionContacts'

export const Company = () => {
  return (
    <div className='mb-28'>
      <SectionContacts
        title='Contact us'
        descr='If you have any questions you can report them below with the following information, so that it is easy for us to reply to your message.'
      >

        <div className=" rounded-2xl overflow-hidden mb-14">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d87073.65641912872!2d28.775776735795073!3d46.99995657260369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97c3628b769a1%3A0x37d1d6305749dd3c!2zQ2hpyJlpbsSDdSwgTW9sZG92YQ!5e0!3m2!1sro!2s!4v1683128654963!5m2!1sro!2s" width={'100%'} height={'450px'} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="flex gap-5 md:flex-col">
          <a href='tel:060060606' className="flex-1 flex flex-col items-center text-center hover:bg-[#EEE8DD] ease-linear duration-100 rounded-[15px] py-3">
            <span className='bg-[#FEE5A4] w-[60px] h-[60px] flex items-center justify-center text-2xl text-[#DD9F00] rounded-[15px] mb-9'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
              </svg>

            </span>
            <p className='text-blackColor text-2xl font-bold mb-[15px]'>060060606</p>
            <p className='text-gray text-lg'>Our 24/7 Customer Services</p>
          </a>
          <a href='mailto:support@developli.com' className="flex-1 flex flex-col items-center text-center hover:bg-[#EEE8DD] ease-linear duration-100 rounded-[15px] py-3">
            <span className='bg-[#CEE3F9] w-[60px] h-[60px] flex items-center justify-center text-2xl text-[#1F8FFF] rounded-[15px] mb-9'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" />
              </svg>


            </span>
            <p className='text-blackColor text-2xl font-bold mb-[15px]'>support@developli.com</p>
            <p className='text-gray text-lg'>Alternative way to get anwser faster.</p>
          </a>
          <div className="flex-1 flex flex-col items-center text-center hover:bg-[#EEE8DD] ease-linear duration-100 rounded-[15px] py-3">
            <span className='bg-[#DFF7EB] w-[60px] h-[60px] flex items-center justify-center text-2xl text-[#47D18C] rounded-[15px] mb-9'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
              </svg>



            </span>
            <p className='text-blackColor text-2xl font-bold mb-[15px]'>Address</p>
            <p className='text-gray text-lg'>Rouwais Dist, Jeddah Rouwais <br />
              Saudi Arabia</p>
          </div>
        </div>
      </SectionContacts>
      <SectionContacts
        title='Get in Touch with us'
        descr='Built for every team across your company, Developli Enterprise boosts productivity with upgraded security and account support. Contact us today to unlock:'
      >

        <ContactsForm />
      </SectionContacts>

    </div>
  )
}
