import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <ScrollView>
        <Text>A Turma da Mônica é a mais famosa franquia de histórias em quadrinhos do Brasil, criada por Mauricio de Sousa em 1959, a partir de tirinhas de jornal com os personagens Bidu e Franjinha.</Text>
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