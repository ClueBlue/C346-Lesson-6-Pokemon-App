import React from 'react';
import { NavigationContainer} from '@react-navigation/native'; // Week 6 - Exercise 1A (Create Navigation)
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from "./Home.js"
import Add from "./Add.js" // Week 6 - Exercise 1C (Add Screen to Navigation)
import Edit from "./Edit.js"

// Week 6 - Exercise 1C (Add Screen to Navigation)
const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Add' component={Add} />
                <Stack.Screen name='Edit' component={Edit} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;

