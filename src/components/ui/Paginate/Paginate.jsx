import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { setActualPage } from '../../../actions/pagiante';
import { Button, PaginateContainer } from './Paginate.styles'

const Paginate = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const { quantity } = useSelector(state => state.bikes);

  useEffect(() => {
    dispatch(setActualPage(page));
  }, [page, dispatch])

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  const handleFirstPage = () => {
    setPage(1);
  };

  const handleLastPage = () => {
    setPage(Math.ceil(quantity/10));
  };

  const handleNextCustomPage = (custom) => {
    setPage(page + custom);
  }

  return (
    <PaginateContainer>
      <Button
        onClick={handleFirstPage}
        disabled={page === 1 ? true : false}
      >First</Button>
      <Button 
        onClick={handlePrevPage}
        disabled={page === 1 ? true : false}
      >Prev</Button>

      <Button active>{page}</Button>
      {page + 1 <= Math.ceil(quantity/10) && <Button onClick={() => handleNextCustomPage(1)}>{page + 1}</Button>}
      {page + 2 < Math.ceil(quantity/10) + 1 && <Button onClick={() => handleNextCustomPage(2)}>{page + 2}</Button>}

      <Button 
        onClick={handleNextPage}
        disabled={page >= Math.ceil(quantity/10) ? true : false}
      >Next</Button>
      <Button
        onClick={handleLastPage}
        disabled={page >= Math.ceil(quantity/10) ? true : false}
      >Last</Button>
    </PaginateContainer>
  )
}

export default Paginate
