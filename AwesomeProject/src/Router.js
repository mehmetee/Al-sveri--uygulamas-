import React from 'react';`7.2K(gzipped : 2.9K)`
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Product from './pages/Product/Product';
import Detail from './pages/Detail/Detail';


const Stack=createNativeStackNavigator();

function Router(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='ProductPage' component={Product} 
                    options={{title:'Home',headerTitleAlign:'center',
                      headerTitleStyle:{color:'white' ,fontSize:30,fontWeight:'bold'}, 
                      headerStyle:{backgroundColor:'blue'}}}
                />
                <Stack.Screen name='DetailPage'  component={Detail} 
                    options={{title:'Ürün Detayı',headerTitleAlign:'center',
                    headerTitleStyle:{color:'white',fontSize:30,fontWeight:'bold'},
                    headerStyle:{backgroundColor:'blue'}
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
};
export default Router;