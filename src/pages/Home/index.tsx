import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import Swiper from 'react-native-deck-swiper';

import {
  Body,
  Card,
  CardIconBottom,
  CardIconCenter,
  CardIconTop,
  PointsText,
  SwiperContainer,
} from './styles';

const containerStyle = {
  width: 160,
  height: 250,
  alignItems: 'center',
  left: 'auto',
  right: 'auto',
};

export const Home: React.FC = () => {
  const [points, setPoints] = useState(0);
  const [index, setIndex] = useState(0);
  const [cards, setCards] = useState<number[]>([]);

  useEffect(() => {
    if (points > 21) {
      Alert.alert('Perdeu', 'Você perdeu, seus pontos passaram de 21!');
      setPoints(0);
      setIndex(0);
    }
  }, [points]);

  useEffect(() => {
    if (index === 0) {
      let values = [];

      for (let i = 0; i < 20; i++) {
        values.push(Math.floor(Math.random() * 10) + 1);
      }

      setCards(values);
    }
  }, [index]);

  return (
    <Body>
      <PointsText>PONTOS: {points}/21</PointsText>

      <SwiperContainer>
        <Swiper
          cards={cards}
          showSecondCard={false}
          renderCard={(card) => {
            return (
              <Card>
                <CardIconTop>{card}</CardIconTop>

                <CardIconCenter>♣ ♥ ♠ ♦</CardIconCenter>

                <CardIconBottom>{card}</CardIconBottom>
              </Card>
            );
          }}
          onSwipedTop={(cardIndex) => {
            setPoints((point) => point + cards[cardIndex]);
          }}
          onSwipedRight={(cardIndex) => {
            setPoints((point) => point + cards[cardIndex]);
          }}
          onSwipedBottom={() => {
            Alert.alert('Acabou', `Você ficou com ${points} de 21!`);
            setIndex(0);
            setPoints(0);
          }}
          onSwipedLeft={() => {
            Alert.alert('Acabou', `Você ficou com ${points} de 21!`);
            setIndex(0);
            setPoints(0);
          }}
          cardIndex={0}
          backgroundColor="transparent"
          cardVerticalMargin={0}
          cardHorizontalMargin={0}
          containerStyle={containerStyle}
        >
          <PointsText>PONTOS: {points}/21</PointsText>
        </Swiper>
      </SwiperContainer>
    </Body>
  );
};
