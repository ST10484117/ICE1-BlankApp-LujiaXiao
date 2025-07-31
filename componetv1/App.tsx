import{useState} from 'react';
import { Button,StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const[userInput, setUserInput] = useState('');   // These vairable works in pairs
  const handlePress = () => {
    console.log('User Input:', userInput);
  };
  
  return (
    <View style={styles.container}>
      <Text>Hello Lujia Xiao !!</Text>
      <TextInput
      placeholder="Enter something" //
      value={userInput}            //
      onChangeText={setUserInput} // active everytime when the text changes
      />
      <Button 
      title="CLICK HERE" 
      onPress={handlePress} //arrow funtion a function without a name
       />
      <Text>{userInput}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
