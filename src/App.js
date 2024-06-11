import React from "react";
import { View } from "react-native";

import Parte,{Parte1,Parte2} from './components/Primeiro'

export default () => {
    return(
        <View>
            <Parte/>
            <Parte1/>
            <Parte2/>
        </View> 
    )
}

