import React, { useState, useEffect, useCallback } from 'react';
import { Alert, Image } from 'react-native';
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
  const [cards, setCards] = useState<number[]>([]);

  const updateInfos = useCallback(() => {
    let values: number[] = [];

    for (let i = 0; i < 20; i++) {
      const value = Math.floor(Math.random() * 10) + 1;

      values.push(value);
    }

    setPoints(values[0]);
    setCards(values);
  }, []);

  useEffect(updateInfos, [updateInfos]);

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

                <CardIconCenter>♣ ♥</CardIconCenter>
                <CardIconCenter>♦ ♠</CardIconCenter>

                <CardIconBottom>{card}</CardIconBottom>
              </Card>
            );
          }}
          onSwipedTop={(cardIndex) => {
            const myPoints = points + cards[cardIndex + 1];

            if (myPoints > 21) {
              Alert.alert('Perdeu', `Você fez ${myPoints} e passou de 21!`);
              updateInfos();

              return;
            }

            setPoints(myPoints);
          }}
          onSwipedRight={(cardIndex) => {
            const myPoints = points + cards[cardIndex + 1];

            if (myPoints > 21) {
              Alert.alert('Perdeu', `Você fez ${myPoints} e passou de 21!`);
              updateInfos();

              return;
            }

            setPoints(myPoints);
          }}
          onSwipedBottom={() => {
            Alert.alert('Acabou', `Você ficou com ${points} de 21!`);
            updateInfos();
          }}
          onSwipedLeft={() => {
            Alert.alert('Acabou', `Você ficou com ${points} de 21!`);
            updateInfos();
          }}
          cardIndex={0}
          backgroundColor="transparent"
          cardVerticalMargin={0}
          cardHorizontalMargin={0}
          containerStyle={containerStyle}
        >
          <Card background="gray">
            <Image
              width={0}
              height={0}
              source={require('../../assets/images/stripes.png')}
            />
          </Card>
        </Swiper>
      </SwiperContainer>
    </Body>
  );
};
