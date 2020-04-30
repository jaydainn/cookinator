import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, Alert, ActivityIndicator } from 'react-native';
import Header from "./components/Header"
import CookingCard from "./components/CookingCard"
import Footer from "./components/Footer"
const API_KEY = "b58748d710e345ceafbc039fa739c251";
const query_base = "https://api.spoonacular.com/recipes/findByIngredients?ingredients=ING&apiKey=APIKEY";
const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "#EAF1D3",
    borderWidth: .4,
    marginTop: 8,
    borderRadius: 8,
    backgroundColor: "#EAF1D3",
    paddingLeft: 16,
    marginLeft:18,
    marginRight: 18,
    display: "flex"
  },
  search:{
    fontSize: 30,
    paddingTop: 20,
    paddingLeft: 6,
    textAlign: "center",
    color: "#ECBAB9"
  }
  ,
  main:{
   
  }
  ,
  button: {
    display: "flex",
    backgroundColor: "#ECBAB9",
    color: "#EAF1D3"
  }
  ,
  welcome: {
    fontSize: 68,
    color: "#EAF1D3",
    paddingLeft:18,
  },
  intro: {
    fontSize: 21,
    color: "#ECBAB9",
    padding:18

  },
  introcontainer: {
    paddingTop: 80,
    paddingBottom:250
  }


})
class App extends React.Component {

  constructor() {
    super();
    this.state = {
      textinput: ""

    }

    this.handleChange = this.handleChange.bind(this);
    this.handlePress = this.handlePress.bind(this);
  }


  handlePress(){
    let url = query_base.replace("ING",this.state.textinput);
    url = url.replace("APIKEY", API_KEY);
    fetch(url)
    .then((response) => {
      return response.json();
    })
    .then ((data) => {
      this.setState({
        data: data
      })
    })

  }

  handleChange(text) {
    this.setState({
      textinput: text
    })
  }



  render() {
    let display = "";
    if(this.state.data != null){
      
      console.log(this.state.data)
      display = this.state.data.map((recipe) => {
        return <CookingCard data={recipe} key={recipe.title} />

      })
    }
    else {
      display = <View style={styles.introcontainer}>
          <Text style={styles.welcome}>Welcome </Text>
          <Text style= {styles.intro}>to our amazing app. Search for ingredients to find your next recipe.</Text>
      </View>

    }
    return (
      <View style={styles.main}>
        <Header />
        <ScrollView >
        <Text style={styles.search}>Search for an ingredient</Text>
        <TextInput
          onChangeText={(text) => this.handleChange(text)}
          style={styles.input}

        />
        <Button onPress={() => this.handlePress()} title="Search"
        color="#ECBAB9" />
        {display}
        <Footer />
        </ScrollView>
      </View>




    );
  }
}

export default App



