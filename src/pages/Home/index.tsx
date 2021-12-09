import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import Swiper from 'react-native-deck-swiper';

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
    <View style={styles.container}>
      <Swiper
        cards={cards}
        showSecondCard={false}
        renderCard={(card) => {
          return (
            <View style={styles.card}>
              <Text style={styles.text}>{card}</Text>
            </View>
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
        backgroundColor={'#216d0a'}
        stackSize={3}
      >
        <Text style={{ color: '#fff', fontSize: 24, textAlign: 'center' }}>
          PONTOS: {points}/21
        </Text>
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent',
  },
});
