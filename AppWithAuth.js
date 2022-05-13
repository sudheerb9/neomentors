import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen';
import GeneralScreen from './screens/GeneralScreen';
import CellScreen from './screens/CellScreen';
import SOCScreen from './screens/SOCScreen';
import CANBUSScreen from './screens/CANBUSScreen';
import AddonScreen from './screens/AddonScreen';
import ChargeLimitsScreen from './screens/ChargeLimitsScreen';
import DischargeLimitsScreen from './screens/DischargeLimitsScreen';
import ThermalScreen  from './screens/ThermalScreen';
import FaultScreen from './screens/FaultScreen';
import ProfileScreen from './screens/ProfileScreen';
import MyCoursesScreen from './screens/MyCoursesScreen'
import Header from './components/HeaderComponent';
import CustomDrawer from './components/CustomDrawer';
import 'react-native-gesture-handler';

const Tab = createMaterialBottomTabNavigator();

function HomeStack({navigation}) {
  return (
    <Header component={HomeScreen} title = {'Home'} icon = {'menu'} navOpen={()=>{navigation.dispatch(DrawerActions.openDrawer());}}/>
  );
}

function GeneralStack({navigation}) {
  return (
    <Header component={GeneralScreen} title = {'General Settings'} icon = {'menu'} navOpen={()=>{navigation.dispatch(DrawerActions.openDrawer());}}/>
  );
}

function CellStack({navigation}) {
  return (
    <Header component={CellScreen} title = {'Cell Settings'} icon = {'menu'} navOpen={()=>{navigation.dispatch(DrawerActions.openDrawer());}}/>
  );
}

function SOCStack({navigation}) {
  return (
    <Header component={SOCScreen} title = {'SOC Settings'} icon = {'menu'} navOpen={()=>{navigation.dispatch(DrawerActions.openDrawer());}}/>
  );
}

// function CANBUSStack({navigation}) {
//   return (
//     <Header component={CANBUSScreen} title = {'CANBUS Settings'} icon = {'menu'} navOpen={()=>{navigation.dispatch(DrawerActions.openDrawer());}}/>
//   );
// }

function AddonStack({navigation}) {
  return (
    <Header component={AddonScreen} title = {'Addon Settings'} icon = {'menu'} navOpen={()=>{navigation.dispatch(DrawerActions.openDrawer());}}/>
  );
}

function ChargeLimitsStack({navigation}) {
  return (
    <Header component={ChargeLimitsScreen} title = {'Charge Limits'} icon = {'menu'} navOpen={()=>{navigation.dispatch(DrawerActions.openDrawer());}}/>
  );
}

function DischargeLimitsStack({navigation}) {
  return (
    <Header component={DischargeLimitsScreen} title = {'Discharge Limits'} icon = {'menu'} navOpen={()=>{navigation.dispatch(DrawerActions.openDrawer());}}/>
  );
}

function ThermalStack({navigation}) {
  return (
    <Header component={ThermalScreen} title = {'Thermal Settings'} icon = {'menu'} navOpen={()=>{navigation.dispatch(DrawerActions.openDrawer());}}/>
  );
}

function FaultStack({navigation}) {
  return (
    <Header component={FaultScreen} title = {'Fault Settings'} icon = {'menu'} navOpen={()=>{navigation.dispatch(DrawerActions.openDrawer());}}/>
  );
}

function MyCoursesStack({navigation}) {
  return (
    <Header component={MyCoursesScreen} title = {'Enrolled Courses'} icon = {'arrow-left'} navOpen={()=>{navigation.navigate('Home')}}/>
  );
}

function ProfileStack({navigation}) {
  return (
    <Header component={ProfileScreen} title = {'My Profile'} icon = {'arrow-left'} navOpen={()=>{navigation.navigate('Home')}}/>
  );
}

const Drawer = createDrawerNavigator();



function Home() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Battery Profile Home" component={HomeStack} />
      <Drawer.Screen name="General Settings" component={GeneralStack} />
      <Drawer.Screen name="Cell Settings" component={CellStack} />
      <Drawer.Screen name="SOC Settings" component={SOCStack} />
      {/* <Drawer.Screen name="CANBUS Settings" component={CANBUSStack} /> */}
      <Drawer.Screen name="Addon Settings" component={AddonStack} />
      <Drawer.Screen name="Charge Limits" component={ChargeLimitsStack} />
      <Drawer.Screen name="Discharge Limits" component={DischargeLimitsStack} />
      <Drawer.Screen name="Thermal Settings" component={ThermalStack} />
    </Drawer.Navigator>
  );
}

export default function AppWithAuth() {
  return (
      <NavigationContainer>
        <Tab.Navigator shifting={true} sceneAnimationEnabled={false} barStyle={{ backgroundColor: '#3e46b3' }}>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
          />
          {/* <Tab.Screen
            name="My Courses"
            component={MyCoursesStack}
            options={{
              tabBarLabel: 'My Courses',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="book" color={color} size={26} />
              ),
            }}
          /> */}
          <Tab.Screen
            name="Account"
            component={ProfileStack}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="account" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
  );
}