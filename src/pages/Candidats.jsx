import React from 'react'
import { Aside } from '../components/aside/Aside'
import { CartCandidat } from '../components/cartCanditat/CartCandidat'
import { SearchBar } from '../components/searchBar/SearchBar'
import { TopCandidats } from '../components/topCandidats/TopCandidats'

import a1 from '../assets/img/cadidats/01.png';
import a2 from '../assets/img/cadidats/02.png';
import a3 from '../assets/img/cadidats/03.png';
import a4 from '../assets/img/cadidats/04.png';
import a5 from '../assets/img/cadidats/05.png';

export const Candidats = () => {
  const dataJobs = [
    {
      id: 1,
      avatar: a1,
      name: "Product Designer - Racuten Analytics",
      author: "Racuten",
      country: "Afghanistan",
      salary: 8000,
      text: 'Full stack developer TextMagic is an international SaaS technology company. Our flagship product is an SMS messaging platform used worldwide (including the USA, UK, Canada, and Australia)...',
      category: 'Develope',
      types: ["Fulltime", "No experience", "Internship/Trainee", "Remote"]
    },
    {
      id: 2,
      avatar: a2,
      name: "Narrative designer",
      author: "Invision",
      country: "Moldova",
      salary: 8000,
      text: 'Frogwares is currently looking for a Narrative Designer to join the dynamic team of game designers for its upcoming titles. Our expert team creates games which are highly praised by millions of players, as well as industry experts all over the world.',
      category: 'Design',
      types: ["Fulltime", "Internship/Trainee", "Remote"]
    },
    {
      id: 3,
      avatar: a3,
      name: "UX UI Designer - Intermediate Position",
      author: "Spotify",
      country: "Moldova",
      salary: 7000,
      text: 'At Remitbee, we value innovation and diversity to help our team, and the world thrive. In a culture that promotes ethical values, mentorship, flexibility, and inclusion',
      category: 'Design',
      types: ["Fulltime", "Internship/Trainee", "Remote"]
    },
    {
      id: 4,
      avatar: a4,
      name: "Quest designer",
      author: "Airbnb",
      country: "Moldova",
      salary: 7000,
      text: 'Frogwares is currently looking for a Quest Designer to join the dynamic team of game designers for its upcoming titles. Our expert team creates games that are highly praised by millions of players, as well as industry experts all over the world.',
      types: ["Fulltime", "Internship/Trainee", "Remote"]
    },
    {
      id: 5,
      avatar: a5,
      name: "Middle Product UX Designer",
      author: "Google",
      country: "Moldova",
      salary: 7000,
      text: 'You will be part of the core team that has full control over the ‘what’ and ‘how’ of the digital product, and report directly to the Covantis design lead. You will help decide what the product looks like and how it behaves, working alongside designers, researchers, developers, product managers, and salespeople.',
      types: ["Fulltime", "Internship/Trainee", "Remote"]
    },
  ]
  return (
    <>
      <SearchBar />
      <div className="container">
        <div className="flex gap-[20px]">
          <Aside />
          <div className="flex-auto">
            <TopCandidats />
            <div>
              {
                dataJobs.map((item) =>
                  <CartCandidat {...item} key={item.id} />
                )
              }

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
