import React, { useState, useEffect } from 'react';
import { API_URL } from 'utils/constants';
import styled, { keyframes } from 'styled-components';
import LoadingTopFoods from './Loading/LoadingTopFoods';

const ScrollAnimation = keyframes`
  from { top: 0; transform: translateZ(0) rotateX(20deg)}
  to {top: -2500px; transform: translateZ(-2500px) rotateX(21deg)}
`;

export const TopFoodsContainer = styled.div`
  align-items: center;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20%;
  width: 80%;
  overflow: hidden;
  @media (min-width: 768px) {
    margin-top: 10%;
  }
`;

export const TitleContainer = styled.div`
  background: #1b1035;
  padding: 2%;
  z-index: 2;
`;

export const ScrollContainer = styled.div`
  position: relative;
  animation: ${ScrollAnimation} 100s linear infinite;
  z-index: -2;
`;

export const TopFood = styled.h4`
  color: #1ba2f6;
  text-align: center;
`;

export const TopIron = styled.p`
  margin-left: 3%;
  text-align: center;
  color: #ffc107;
`;

export const TopFoods = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(API_URL('foods?iron=60'))
      .then((res) => res.json())
      .then((data) => setFoods(data.response))
      .finally(() => setLoading(false));
  }, []);

  return (
    <TopFoodsContainer>
      {loading && <LoadingTopFoods />}
      <TitleContainer>
        <h1>IRON-RICH FOODS</h1>
        <h2>HALL OF FAME</h2>
        <h3>(mg per 100g serving)</h3>
      </TitleContainer>
      <ScrollContainer>
        {foods.map((food) => (
          <div key={food._id}>
            <TopFood>{food.food}</TopFood>
            <TopIron>{food.iron}</TopIron>
          </div>
        ))}
      </ScrollContainer>
    </TopFoodsContainer>
  );
};
