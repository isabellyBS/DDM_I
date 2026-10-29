import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <ScrollView>
        <Text>Lady Camembert quer viver em seus próprios termos, sem se casar. Ou melhor, sem ter que se casar com um homem. Mas a lei de seu reino diz que a fortuna da família não pode ser herdada por mulheres solteiras. Então, quando o pai dela morre, ela adota a única alternativa que lhe resta: se disfarça de homem e muda para a capital do Reino de Fromage. Ela, então, inicia uma nova vida como Conde Camembert. Entretanto, é difícil manter a discrição quando a bela Princesa Brie, com seu ativismo incansável e grande senso de moda, chama a atenção de Cam. Lady Camembert, apresentando-se na figura de Conde Camembert, não resiste em conhecer melhor a princesa. Conforme se aproximam, porém, aumenta a dificuldade em manter o segredo de Cam </Text>
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