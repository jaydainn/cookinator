import React from "react"
import { View, StyleSheet , Image  } from "react-native";


const styles = StyleSheet.create({
    headercontainer: {
        height: 130,
        width: "100%",
        position: "relative",
        top: 0,
        backgroundColor: "#ECBAB9",
        borderBottomWidth:1,
        borderStyle: "solid",
        borderColor: "#EAF1D3"
    },

    image: {
        
        position: "relative",
        top: 60,
        left:170,
        
        width: 80,
        height: 60
    }



});


class Header extends React.Component {

    constructor(){
        super();

    }

    render(){
        return (
            <View style={styles.headercontainer}>
                <Image style={styles.image} source={require ("./cookinator.png")
                } />

            </View>
        )
    }




}







export default Header