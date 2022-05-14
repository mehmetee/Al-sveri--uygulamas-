import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        flexDirection:'row',
        margin:10,
        backgroundColor:'#eeeeee',
        borderWidth:1,
        borderColor:'#bdbdbd'
        
    },
    image:{
        width:100,
        minHeight:100,
        resizeMode:'contain',
        backgroundColor:'white'
    },
    body_container:{
        flex:1,
        padding:5
    },
    title:{ 
        color:'black',
        fontSize:20,
        fontWeight:'bold',
    },
    price:{
        textAlign:'right',
        marginRight:5,
        marginTop:10,
        paddingBottom:10,
        color:'blue',
        fontSize:18,
        fontWeight:'bold'
    },
})