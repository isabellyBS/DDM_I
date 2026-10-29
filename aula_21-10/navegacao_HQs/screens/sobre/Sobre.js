import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <ScrollView>
        <Text>A história em quadrinhos (HQ) é um gênero textual e uma forma de arte que narra histórias por meio da sequência de imagens e textos, geralmente organizados em quadros na horizontal.</Text>
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