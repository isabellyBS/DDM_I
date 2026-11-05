// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screens/login/Login';
import Home from './screens/home/Home';

const Stack = createNativeStackNavigator();

// export default function StackNavigator() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>

//         <Stack.Screen
//           name="Login"
//           component={Login}
//         />

//         <Stack.Screen
//           name="Home"
//           component={Home}
//         />

//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
        />
        
        { <Stack.Screen
          name="Home"
          component={Home}
        /> }

      </Stack.Navigator>
    </NavigationContainer>
  );
}