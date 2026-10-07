import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <ScrollView>
        <Text>Open up App.js to start working on your app!</Text>
        <TextInput placeholder='teste'></TextInput>
        <Button onPress='' title='botão'>oiii</Button>
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  // ScrollView: {
  //   flex:1,
  // }
  

  container: {
    flex: 1,
    backgroundColor: '#f1c5ec',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
