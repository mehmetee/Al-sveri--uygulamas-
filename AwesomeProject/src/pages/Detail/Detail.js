import React from 'react'; `7.2K (gzipped : 2.9K)`
import {View,Text,Image,ScrollView} from 'react-native';
import Styles from './Detail.Stayle';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import useHooks from '../../Hooks/useHooks/useHooks';
import Config from 'react-native-config';

function Detail({route}){
    const {id} = route.params;
    const {loading,error,data} =useHooks(`${Config.API_URL}/${id}`);

 if(loading){
    return  <Loading />  }

if (error){
    return <Error />
}   

    return (
        <ScrollView>
        <View style={Styles.container}>
            
            <Image style={Styles.image} source={{uri:data.image}} />
        
            <View style={Styles.body_container}>
                <Text style={Styles.title}>{data.title}</Text>
                <Text style={Styles.desc}> {data.description}</Text>
                <Text style={Styles.price}>Ürün Fiyatı : {data.price} TL</Text>
           </View>
        </View>
        </ScrollView>
    )
};


export default Detail;