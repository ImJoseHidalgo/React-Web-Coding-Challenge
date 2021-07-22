import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import ReactMapGL from 'react-map-gl';

import { getStolenBikeById } from '../../../actions/bikes';
import useDate from '../../../hooks/useDate';
import Loader from '../../ui/Loader/Loader';
import { Date, DetailsContainer, FeaturesContainer, ImageContainer, IncidentContainer } from './DetailScreen.styles';

const DetailScreen = () => {
  const API_KEY = 'pk.eyJ1IjoiaW1qb3NlaGlkYWxnbyIsImEiOiJja290MG43MXUwMGJlMndubnU1Zzl3Ym9rIn0.-dtkqxqBOu_WoWzExl5PCA';
  const { id } = useParams();
  const dispatch = useDispatch();
  const { detail } = useSelector(state => state.bikes);
  const { loading } = useSelector(state => state.loader);

  const { dateStolen, dateStolenReport } = useDate(
    detail.stolen_record?.date_stolen,
    detail.stolen_record?.created_at
  );

  const query = window.matchMedia('(max-width: 768px)');

  const locationData = query.matches
    ? {
        width: window.innerWidth * 0.9,
        height: 400,
        latitude: detail.stolen_record?.latitude,
        longitude: detail.stolen_record?.longitude,
        zoom: 15
      }
    : {
        width: 477,
        height: 450,
        latitude: detail.stolen_record?.latitude,
        longitude: detail.stolen_record?.longitude,
        zoom: 15
      };
  
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getStolenBikeById(id));
  }, [id, dispatch]);

  return (
    <main>
      {loading
        ? <Loader />
        : <DetailsContainer>
            <h2>{detail.title}</h2>
            <Date>Stolen {dateStolen}</Date>
            <ImageContainer>
              <img src={detail.public_images && (detail.public_images[0].medium || 'https://ctkbiotech.com/wp/wp-content/uploads/2018/03/not-available.jpg')} alt={detail.frame_model} />
              <FeaturesContainer>
                <strong>Model: <span>{detail.frame_model}</span></strong>
                <strong>Location: <span>{detail.stolen_location}</span></strong>
                <strong>Serial: <span>{detail.serial}</span></strong>
                <strong>Year: <span>{detail.year}</span></strong>
                <strong>Type: <span>{detail.type_of_cycle}</span></strong>
                <strong>Colors: {detail.frame_colors && detail.frame_colors.map(color => 
                  <span key={color}>{color}, </span>)}
                </strong>
              </FeaturesContainer>
            </ImageContainer>
            <IncidentContainer>
              <h2>Description of incident</h2>
              <Date>Reported {dateStolenReport}</Date>
              <ImageContainer map>
                <p>{detail.stolen_record?.theft_description || 'Description not available'}</p>
                <ReactMapGL
                  mapboxApiAccessToken={API_KEY}
                  {...locationData}
                />
              </ImageContainer>
            </IncidentContainer>
          </DetailsContainer>
      }
    </main>
  )
}

export default DetailScreen
