import { Text, StyleSheet } from 'react-native';

function GameScreen() {
  return (
    <Text style={styles.woohoo}>Woohoo! We did it!</Text>
  )
};

export default GameScreen;

const styles = StyleSheet.create({
  woohoo: {
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  }
});