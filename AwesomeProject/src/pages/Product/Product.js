import React from 'react'; `7.2K (gzipped : 2.9K)`
import {FlatList} from 'react-native';
import Config from 'react-native-config';
import ProductCard from '../../components/ProductCard/ProrductCard';
import useHooks from '../../Hooks/useHooks/useHooks';
import Error from '../../components/Error/Error';
import Loading from '../../components/Loading/Loading';

function Product({navigation}){
const {loading,data,error} = useHooks(Config.API_URL )

function SelectDetail (id){
    navigation.navigate("DetailPage",{id})
}

const cekveri=({item})=> <ProductCard  Product={item} onSelect={()=>SelectDetail(item.id)}/>

    if(loading){
        return  <Loading />  }

    if (error){
        return <Error />
    }    

 

    return <FlatList data={data} renderItem={cekveri}/>
};


export default Product;