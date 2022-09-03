import * as React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { getFocusedRouteNameFromRoute, NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function HomeScreen() {
  return (
      
        <Tab.Navigator>
            <Tab.Screen name="Test1" component={Test1Screen} />
            <Tab.Screen name="Test2" component={Test2Screen}/>
        </Tab.Navigator>
    
  );
}

const Test1Screen = ({navigation}) => {
    const handlePress = () => navigation.push("Settings")

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Test 1</Text>
        <Button title='Go to Community Page' onPress={handlePress}/>
    </View>
        )
}

function Random1() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Random 1</Text>
    </View>
        )
}

function Random2() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Random 1</Text>
    </View>
        )
}

function SettingsBottomTab({route}) {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Random1" component={Random1}/>
            <Tab.Screen name="Random2" component={Random2}/>
        </Tab.Navigator>
        )
}

function Test2Screen({navigation}) {
    return (

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title='Go to Community Page' onPress={() => navigation.navigate("Settings")}/>
        <Text>Test 2</Text>
    </View>
        )
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Settings" component={SettingsBottomTab}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
