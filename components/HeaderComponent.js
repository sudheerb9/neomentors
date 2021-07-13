import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';

const Stack = createStackNavigator();

const Header = props => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={props.component}
                options={{
                    headerStyle: {
                        backgroundColor: '#3e46b3',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    title: props.title,
                    headerLeft: () => (
                    <MaterialCommunityIcons name={props.icon} color={'white'} style = {styles.button} onPress={() => props.navOpen() } size={30}/>              
                    ),
                }}
            />
        
      </Stack.Navigator>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 10,
    }
});

export default Header; 