import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen';
import CoursesScreen from './screens/CoursesScreen';
import LiveclassScreen from './screens/LiveclassScreen';
import MentorshipScreen from './screens/MentorshipScreen';
import TestseriesScreen from './screens/TestseriesScreen';
import ProfileScreen from './screens/ProfileScreen';
import MyCoursesScreen from './screens/MyCoursesScreen'
import Header from './components/HeaderComponent';
import CustomDrawer from './components/CustomDrawer';

const Tab = createMaterialBottomTabNavigator();

function HomeStack({navigation}) {
  return (
    <Header component={HomeScreen} title = {'Home'} icon = {'menu'} navOpen={()=>{navigation.dispatch(DrawerActions.openDrawer());}}/>
  );
}

function CourseStack({navigation}) {
  return (
    <Header component={CoursesScreen} title = {'Courses'} icon = {'menu'} navOpen={()=>{navigation.dispatch(DrawerActions.openDrawer());}}/>
  );
}

function LiveclassStack({navigation}) {
  return (
    <Header component={LiveclassScreen} title = {'Live class'} icon = {'menu'} navOpen={()=>{navigation.dispatch(DrawerActions.openDrawer());}}/>
  );
}

function MentorshipStack({navigation}) {
  return (
    <Header component={MentorshipScreen} title = {'Mentorship'} icon = {'menu'} navOpen={()=>{navigation.dispatch(DrawerActions.openDrawer());}}/>
  );
}

function TestseriesStack({navigation}) {
  return (
    <Header component={TestseriesScreen} title = {'Test Series'} icon = {'menu'} navOpen={()=>{navigation.dispatch(DrawerActions.openDrawer());}}/>
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
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Courses" component={CourseStack} />
      <Drawer.Screen name="Live Classes" component={LiveclassStack} />
      <Drawer.Screen name="Mentorship" component={MentorshipStack} />
      <Drawer.Screen name="Test Series" component={TestseriesStack} />
    </Drawer.Navigator>
  );
}

export default function App() {
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
          <Tab.Screen
            name="My Courses"
            component={MyCoursesStack}
            options={{
              tabBarLabel: 'My Courses',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="book" color={color} size={26} />
              ),
            }}
          />
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