import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import {Avatar, Title, Drawer} from 'react-native-paper';

const CustomDrawer = props => (
    <View style={{flex:1}}>
        <DrawerContentScrollView {...props}>
            <View style={styles.drawerContent}>
                <View style={styles.userInfoSection}>
                    <View style={{flexDirection:'row',marginTop: 15}}>
                        <Avatar.Image 
                            source={{
                                uri: 'https://lh3.googleusercontent.com/fife/AAWUweUb7hp80lXu40AvGS8fTX2hHIr5e9O-WyfV29sCfwpJDR-TfxsfFaSgEjUZWbe5QpH1jppHK7nUXQkqtI9HtluXIoVweZKNVfMLgUD0N_E5Ja--2Kn5WzwStwfAmpLECNZobRyR3JrEax_iGNaZoxvbBUTqeyjAzASdzBumjfeRpZ5wG70Z6fBtrtlo2xZiolXQMKvZKn0fTUFyMBrYzFJ94wsyu8tCy9y5jF-8ONZeTQPq6S01QrPZxSjouMr8VSvwtTlWIgxGMuWf8VjDHhghjAF7oWuk63UY8yD4cWxscV_jqoXgx0X9GmK84Lw-ZwcB_FjG-yg4Tk7feDMoxY-iL_WQ-5R8JiKY2g2kRYWOtYckGe_k2FNDDUFUJjwRpqqMPYipdQQWbTX6WIpqeQq7Frhsdo-1Asyc37DUPydwg8FPaonYIC1b1G1ViWRldM44Lvtrv9oMMeRVYUynMxsrXwO-kiP2BsUbzdhW9U-3odLUToRhBllaBNbmbp95Df1bn14JZjnEF9nvkREoRKhpeXzY7-E3t55zPq2zvkqJVIHJW0P50UWfO7opOQJrcR9F_VipDeCoq67sHpz0Bax1vioupxqGeruBt6xL3k-Ts8Vxuz4dyK69jH6j0zRq3lT1-q5MVr7RaS61zj3z_gBug51xjEUA8N9FmYHPdFLxjeNwaB4PKW-Q92SfT0WhKjnV96lDiiLfpmr1wVuv6jI6TU0WL5VfYrlihVjg5d3OGG0=s83-c'
                            }}
                            size={50}
                        />
                        <View style={{marginLeft:15}}>
                            <Title style={styles.title}>Chaitra Vardhan</Title>
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
                        label="Battery Profile Home"
                        onPress={() => {props.navigation.navigate('Battery Profile Home')}}
                    />
                    <DrawerItem 
                        icon={({color, size}) => (
                            <Ionicons 
                            name="ios-settings-outline" 
                            color={color}
                            size={size}
                            />
                        )}
                        label="General Settings"
                        onPress={() => {props.navigation.navigate('General Settings')}}
                    />
                    <DrawerItem 
                        icon={({color, size}) => (
                            <MaterialCommunityIcons 
                            name="battery-90" 
                            color={color}
                            size={size}
                            />
                        )}
                        label="Cell Settings"
                        onPress={() => {props.navigation.navigate('Cell Settings')}}
                    />
                    
                    <DrawerItem 
                        icon={({color, size}) => (
                            <MaterialCommunityIcons 
                            name="car-turbocharger" 
                            color={color}
                            size={size}
                            />
                        )}
                        label="SOC Settings"
                        onPress={() => {props.navigation.navigate('SOC Settings')}}
                    />

                    {/* <DrawerItem 
                        icon={({color, size}) => (
                            <MaterialCommunityIcons 
                            name="frequently-asked-questions" 
                            color={color}
                            size={size}
                            />
                        )}
                        label="CANBUS Settings"
                        onPress={() => {props.navigation.navigate('CANBUS Settings')}}
                    /> */}

                     <DrawerItem 
                        icon={({color, size}) => (
                            <Ionicons 
                            name="add-circle-outline" 
                            color={color}
                            size={size}
                            />
                        )}
                        label="Addon Settings"
                        onPress={() => {props.navigation.navigate('Addon Settings')}}
                    />

                    <DrawerItem 
                       icon={({color, size}) => (
                           <Ionicons 
                           name="battery-charging-outline" 
                           color={color}
                           size={size}
                           />
                       )}
                       label="Charge Limits"
                       onPress={() => {props.navigation.navigate('Charge Limits')}}
                   />
                   
                   <DrawerItem 
                        icon={({color, size}) => (
                            <Ionicons 
                            name="battery-half-outline" 
                            color={color}
                            size={size}
                            />
                        )}
                        label="Discharge Limits"
                        onPress={() => {props.navigation.navigate('Discharge Limits')}}
                    />
                
                    <DrawerItem 
                        icon={({color, size}) => (
                            <MaterialCommunityIcons 
                            name="thermometer-lines" 
                            color={color}
                            size={size}
                            />
                        )}
                        label="Thermal Settings"
                        onPress={() => {props.navigation.navigate('Thermal Settings')}}
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