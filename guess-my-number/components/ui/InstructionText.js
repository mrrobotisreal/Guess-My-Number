import { Text } from 'react-native';

function InstructionText({children}) {
  return (
    <Text style={styles.instructionText}>{content}</Text>
  );
}

export default InstructionText;