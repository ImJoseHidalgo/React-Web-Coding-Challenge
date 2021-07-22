import React from 'react'
import useDate from '../../../hooks/useDate';
import { Card, DetailsContainer, TextContainer } from './BikeCard.styles';

const BikeCard = ({data}) => {

  const { dateStolen } = useDate(
    data?.date_stolen
  );

  return (
    <Card>
      <img src={data.thumb || 'https://ctkbiotech.com/wp/wp-content/uploads/2018/03/not-available.jpg'} alt={data.title} />
      <TextContainer>
        <h3>{data.title}</h3>
        <DetailsContainer>
          <strong>Stolen: <span>{dateStolen}</span></strong>
          <strong>Location: <span>{data.stolen_location}</span></strong>
          <strong>Serial: <span>{data.serial}</span></strong>
          <strong>Colors: {data.frame_colors.map(color => 
            <span key={color}>{color}, </span>)}
          </strong>
        </DetailsContainer>
      </TextContainer>
    </Card>
  )
}

export default BikeCard
