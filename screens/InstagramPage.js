import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class InstagramPage extends React.Component{
  render(){
    return(
      <View style = {styles.container}>
      <Text style = {styles.text}>Instagram</Text>
      <Image source={require('../Images/Instagram.png')} style={styles.imageIcon}/>
      </View>
    )
  }
}
const styles = StyleSheet.create({
 container:{
   flex:1,
   textAlign:'center',
   backgroundColor:'#e95950'  
 },
 text:{
   fontSize:45,
   fontWeight:'bolder',
   color:'#ffffff',
   marginTop:14

 },
 imageIcon:{
   width:200,
   height:200,
   marginLeft:70
 }
});