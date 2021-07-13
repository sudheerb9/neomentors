import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {Avatar, Title, Drawer} from 'react-native-paper';

const CustomDrawer = props => (
    <View style={{flex:1}}>
        <DrawerContentScrollView {...props}>
            <View style={styles.drawerContent}>
                <View style={styles.userInfoSection}>
                    <View style={{flexDirection:'row',marginTop: 15}}>
                        <Avatar.Image 
                            source={{
                                uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                            }}
                            size={50}
                        />
                        <View style={{marginLeft:15}}>
                            <Title style={styles.title}>John Doe</Title>
                        </View>
                    </View>
                </View>

                <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem 
                        icon={({color, size}) => (
                            <MaterialCommunityIcons 
                            name="home-outline" 
                            color={color}
                            size={size}
                            />
                        )}
                        label="Home"
                        onPress={() => {props.navigation.navigate('Home')}}
                    />
                    <DrawerItem 
                        icon={({color, size}) => (
                            <MaterialCommunityIcons 
                            name="book-outline" 
                            color={color}
                            size={size}
                            />
                        )}
                        label="Courses"
                        onPress={() => {props.navigation.navigate('Courses')}}
                    />
                    <DrawerItem 
                        icon={({color, size}) => (
                            <MaterialCommunityIcons 
                            name="television" 
                            color={color}
                            size={size}
                            />
                        )}
                        label="Live Classes"
                        onPress={() => {props.navigation.navigate('Live Classes')}}
                    />
                    
                    <DrawerItem 
                        icon={({color, size}) => (
                            <MaterialCommunityIcons 
                            name="account-check-outline" 
                            color={color}
                            size={size}
                            />
                        )}
                        label="Mentorship"
                        onPress={() => {props.navigation.navigate('Mentorship')}}
                    />

                    <DrawerItem 
                        icon={({color, size}) => (
                            <MaterialCommunityIcons 
                            name="pen" 
                            color={color}
                            size={size}
                            />
                        )}
                        label="Test Series"
                        onPress={() => {props.navigation.navigate('Test Series')}}
                    />
                </Drawer.Section>
            </View>
        </DrawerContentScrollView>
        <Drawer.Section style={styles.bottomDrawerSection}>
            <DrawerItem 
                icon={({color, size}) => (
                    <MaterialCommunityIcons 
                    name="exit-to-app" 
                    color={color}
                    size={size}
                    />
                )}
                label="Sign Out"
                onPress={() => {signOut()}}
            />
        </Drawer.Section>
    </View>
);

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 11,
      fontWeight: 'bold',
      alignContent: 'center'
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 25,
      marginLeft: 10,
    },
    bottomDrawerSection: {
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
});

export default CustomDrawer;