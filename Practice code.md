import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView, Pressable, Modal } from 'react-native';

const logImg = require("./assets/StatusNeo-Logo.png");
const logImg2 = require("./assets/snack-icon.png");

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View style={[styles.container]}>
      <Pressable onPress={() => alert("Welcome to SN")}>
        <Image source={logImg} style={[styles.image1]} />
      </Pressable>
      <ScrollView style={[styles.container2]}>
        <Button title='press' onPress={() => setIsModalVisible(true)} color='red' />
        <Text style={[styles.text1]}>
          A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs.
        </Text>
      </ScrollView>

      <Modal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        animationType="slide"
        presentationStyle="pageSheet">

        <View style={{color:'black', flex:1, padding:60}}>
          <Text style={{color:'black'}}>Welcome to Sarthak's app</Text>
          <Button title="Close" onPress={() => setIsModalVisible(false)} />
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },

  container2: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  text1: {
    color: 'white',
    marginTop: 10,
    fontSize: 20
  },

  image1: {
    height: 50,
    width: 300
  },

  button: {
    borderCurve: 10
  }
});

export default App;









////// shadow--


import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView, Pressable, StatusBar, Alert } from 'react-native';

const logImg = require("./assets/StatusNeo-Logo.png");

const App = () => {
  return (
    <View style={styles.container}>
    <View style={[styles.textContainer,styles.shadowO]}>
    <Text style={styles.startT}>Welcome</Text>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

    padding:10,
    justifyContent:'center',
    alignItems:'center',
    flex:1,
    backgroundColor:'white'

    
    
  },

  textContainer:{

    height:100,
    width:250,
    backgroundColor:'blue', 
    justifyContent:'center',
    alignItems:'center',
    borderRadius:15
    

  },

  startT:{
    fontSize:50,
    color:'white'
  
  },

  shadowO:{
    shadowColor: "#333333",
    shadowOffset:{
      height:20,
      width:10
    },
    shadowOpacity:1.5,
    shadowRadius:4


  }

  
});

export default App;

