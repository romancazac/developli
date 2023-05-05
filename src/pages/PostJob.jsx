import React from 'react'
import { ContactsForm } from '../components/contactsForm/ContactsForm'
import { SectionContacts } from '../components/sectionContacts/SectionContacts'
import { PostForm } from '../components/postForm/PostForm'

export const PostJob = () => {
  return (
    <div className='mb-28'>

      <SectionContacts
        title='Get in Touch with us'
        descr='Built for every team across your company, Developli Enterprise boosts productivity with upgraded security and account support. Contact us today to unlock:'
      >

        <PostForm/>
      </SectionContacts>

    </div>
  )
}
