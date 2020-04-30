import React from "react"
import {View,Image,Text, StyleSheet} from "react-native"

const styles = StyleSheet.create({
    cookingimg: {
        width: 317,
        height: 200,
        borderRadius: 16
    },
    containercooking: {
        paddingLeft:50,
        paddingRight:47,
       
    }
    ,
    containercard: {
        backgroundColor: "#ECBAB9",
        marginBottom: 18,
        paddingBottom: 30,
        marginTop:2,
        borderRadius: 16,
    },
    cookingtitle: {
        color: "#ffffff",
        paddingBottom:16,
        paddingTop: 16,
        textAlign: "center"
    }
    ,
    ingredient: {
        color: "#ffffff",
        textAlign:"center"
    }

})

function CookingCard(props){

    let display = <Text></Text>;
    if(props.data.usedIngredients.length > 2 ){
        display = props.data.usedIngredients.map((ingredient) => {
            return <Text style={styles.ingredient} key={ingredient.id}> ● {ingredient.name}</Text>
        })
    }

    return (
        <View style={styles.containercooking}>
            <View style={styles.containercard}>
            <Image source={{
                uri: props.data.image,
                
            }} style={styles.cookingimg} />
            <Text style = {styles.cookingtitle}>{props.data.title}</Text>
            {display}
            </View>
        </View>
    )

}




export default CookingCard