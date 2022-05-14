import React from "react"; `7.2K (gzipped : 2.9K)`
import { View,Text,Image,TouchableWithoutFeedback} from 'react-native';
import Styles from './ProrductCard.Styles';


function ProductCard ({Product,onSelect}){
    return(
        <TouchableWithoutFeedback onPress={onSelect}>
        <View style={Styles.container}>
           
            <Image style={Styles.image} source={{uri:Product.image}}/>

           <View style={Styles.body_container}>
                <Text style={Styles.title}>{Product.title}</Text>
                <Text style={Styles.price}>Ürünün Fiyatı : {Product.price}  TL</Text>
            </View>

        </View>
        </TouchableWithoutFeedback>
    )
}

export default ProductCard;