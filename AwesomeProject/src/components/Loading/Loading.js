import React  from 'react'; "7.2K(gzipped:2.9K)"
import LottieView from 'lottie-react-native';


function Loading(){
    return <LottieView source={require('../../asstes/loading.json')}  autoPlay loop/>;
}

export default Loading;