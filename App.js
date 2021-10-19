import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {Header} from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import FacebookPage from './screens/FacebookPage'
import InstagramPage from './screens/InstagramPage'
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'

export default function App() {
  return (
    <SafeAreaProvider style = {styles.container}>
      <Header
      backgroundColor ={'#322e2f'}
      centerComponent={{text:'Buzz App',style:{color:'#ffffff', fontSize:20,fontWeight:'bolder'}}}
      />
      <AppContainer/>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
 container:{
   flex:1,
   textAlign:'center'  
 }
});

const TabNavigator = createBottomTabNavigator({
  Facebook:{screen:FacebookPage},
  Instagram:{screen:InstagramPage}
})

const AppContainer = createAppContainer(TabNavigator);


