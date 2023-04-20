import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export const Breadcrumbs = ({name}) => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((path) => path !== '');

  return (
    <nav className="flex justify-center gap-5 text-blackColor mt-8 mb-16">
      {pathnames.map((path, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;

        return isLast ? (
          <span className='first-letter:uppercase' key={routeTo}>{name? name : path}</span>
        ) : (
          <Link key={routeTo} to={routeTo} className="relative block  modal__after after:top-[50%] first-letter:uppercase">
            {path}
          </Link>
        );
      })}
    </nav>
  );
}
