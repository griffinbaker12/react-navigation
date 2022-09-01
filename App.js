import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
        <Button title="Checkout Details" onPress={() => navigation.navigate("Details")}/>
        <StatusBar style="auto" />
      </View>
    )
}

const DetailsScreen = () => {
    return (
        <View style={styles.container}>
        <Text>This is the details screen!</Text>
        // push another details screen onto the stack
        <Button title="Checkout Details" onPress={() => navigation.push("Details")}/>
        <StatusBar style="auto" />
      </View>
    )
}

export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Home" component={HomeScreen} / >
              <Stack.Screen name="Details" component={DetailsScreen} / >
          </Stack.Navigator>
      </NavigationContainer>
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
