import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigator/native-stack";

import Login from "./screens/login/login";

const stack = createNativeStackNavigator();
//import { StatusBar } from 'expo-status-bar';
//import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    // <NavigationContainer>

    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
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
