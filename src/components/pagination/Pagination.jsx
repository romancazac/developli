

import { memo } from 'react';
import ReactPaginate from 'react-paginate';


const Pagination = memo(({ onPaginationPage, totalCount, limitPage, }) => {

   const pageNumbers = Math.ceil(totalCount / Number(limitPage))




   return (
      
            <div className="pagination">

               <ReactPaginate
                  breakLabel="..."
                  nextLabel=">"
                  onPageChange={(e) => onPaginationPage(e.selected + 1)}
                  pageRangeDisplayed={5}
                  pageCount={pageNumbers}
                  previousLabel="<"
                  renderOnZeroPageCount={null}
                  className={'flex justify-center gap-3 pagination__list mb-12'}
               />
            </div>
      


   )
});

export default Pagination