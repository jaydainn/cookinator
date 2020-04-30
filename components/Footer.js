import React from "react"
import {View, StyleSheet, Text} from "react-native"

const styles = StyleSheet.create({
    footercontainer: {
        width: 418,
        height: 260,
        borderTopWidth: 1,
        borderColor: "#EAF1D3",
        
        
        backgroundColor: "#ECBAB9"
    }
    ,
    footertext: {
        textAlign:"center",
        paddingTop: 30,
        fontSize: 20,
        color: "#ffffff"
    }

});

class Footer extends React.Component {
    render(){
    return (
        <View style={styles.footercontainer}>
            <Text style={styles.footertext}> Made with ❤ by YRLJ
            </Text>
            <Text style={styles.footertext}>©YRLJ</Text>

        </View>
    )
    }
}







export default Footer