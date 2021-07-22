import React, { useEffect, useState }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getStolenBikes, getStolenCount } from '../../../actions/bikes';
import { useForm } from '../../../hooks/useForm';
import BikeCard from '../../ui/BikeCard/BikeCard';
import Loader from '../../ui/Loader/Loader';
import Paginate from '../../ui/Paginate/Paginate';
import { CardsContainer, Filters, FiltersContainer, FormContainer, Error } from './HomeScreen.styles';

const HomeScreen = () => {
  const [allButton, setAllButton] = useState(false);

  const dispatch = useDispatch();
  const { bikes, quantity } = useSelector(state => state.bikes);
  const { page } = useSelector(state => state.page);
  const { loading } = useSelector(state => state.loader);
  const { error } = useSelector(state => state.error);
  const { countLoading } = useSelector(state => state.loader);
  
  const [ formValues, handleInputChange, reset ] = useForm({ keyword: '' })
  const { keyword } = formValues;

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getStolenCount(keyword));
    dispatch(getStolenBikes(page));
  }, [page, dispatch]);

  const handleSubmit = (e) => {
    if(keyword.length >= 2) {
      e.preventDefault();
      dispatch(getStolenCount(keyword));
      dispatch(getStolenBikes(1, keyword));
      reset()
      setAllButton(true)
    }
    e.preventDefault();
  }

  const getAllStolen = () => {
    dispatch(getStolenCount());
    dispatch(getStolenBikes(1));
    setAllButton(false);
  }

  return (
    <main>
      <FiltersContainer>
        <h2>SEARCH FOR STOLEN BIKES</h2>
        <Filters>
          <FormContainer onSubmit={handleSubmit}>
            <input 
              type="text"
              name="keyword"
              value={keyword}
              onChange={handleInputChange}
              placeholder="Search case descriptions"
              autoComplete="off"
            />
            <button type="submit">Search</button>
          </FormContainer>
          <FormContainer all>
            {countLoading
              ? <p>Loading...</p>
              : <p>Total: {quantity}</p>
            }
            {allButton && <button onClick={getAllStolen}>Se all</button>}
          </FormContainer>
        </Filters>
      </FiltersContainer>
      
      {loading
        ? <Loader />
        : <>
          {error
            ? <Error>Opps, something went wrong</Error>
            : <CardsContainer>
                {bikes?.length
                  ? bikes?.map(bike => 
                      <Link to={`/detail/${bike.id}`} key={bike.id} >
                        <BikeCard data={bike} />
                      </Link>
                    )
                  : <p>No results</p>
                }
              </CardsContainer>
          }
        </>
      }
      <Paginate />
    </main>
  )
}

export default HomeScreen
