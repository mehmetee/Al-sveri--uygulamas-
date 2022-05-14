import {StyleSheet,Dimensions} from 'react-native';

const  Window=Dimensions.get('window');

export default StyleSheet.create({
container:{
    flex:1,
},

image:{
    width:Window.width,
    height:Window.height /3,
    resizeMode:'contain',
    backgroundColor:'white'
},
body_container:{
    margin:10,

},
title:{
    fontSize:22,
    color:'black',
    fontWeight:'900',

},
desc:{
    fontSize:18,
    color:'#424242',
    fontStyle:'italic',
    fontWeight:'bold'
},
price:{
    fontWeight:'bold', 
    fontSize:23,
    textAlign:'right',
    color:'blue'
},
    
})