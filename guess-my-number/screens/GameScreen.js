import { useState } from 'react';
import { Text, StyleSheet, View, Alert } from 'react-native';

import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({userNumber}) {
  const initialGuess = generateRandomBetween(minBoundary, maxBoundary, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  function nextGuessHandler(direction) {
    if ((direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)) {
      Alert.alert("Don't lie! You know this is wrong...", [{
        text: 'Sorry!', style: 'cancel',
      }]);
      return;
    }
    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    console.log('min -> ', minBoundary);
    console.log('max -> ', maxBoundary);
    const newRndnumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newRndnumber);
  }

  return (
    <View style={styles.screen}>
        <Title>Opponent's Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
        <View>
          <Text style={styles.text}>Higher or Lower?</Text>
          <View>
            <PrimaryButton onPress={() => nextGuessHandler('greater')}>+</PrimaryButton>
            <PrimaryButton onPress={() => nextGuessHandler('lower')}>-</PrimaryButton>
          </View>
        </View>
        <View>
          {/* LOG ROUNDS */}
        </View>
    </View>
  )
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  text: {
    color: 'white',
  },
});