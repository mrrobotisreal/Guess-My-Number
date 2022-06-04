import { Text, StyleSheet, View } from 'react-native';
import Title from '../components/Title';

function GameScreen() {
  return (
    <View style={styles.screen}>
        <Title>Opponent's Guess</Title>
        {/* GUESS */}
        <View>
          <Text style={styles.text}>Higher or Lower?</Text>
          {/* + - */}
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ddb52f',
    textAlign: 'center',
    borderColor: '#ddb52f',
    borderWidth: 2,
    borderRadius: 6,
    padding: 12,
  },
});