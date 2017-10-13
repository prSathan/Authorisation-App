import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBSrXO9qOYKfAxIg6bmwVcN4EbERGTnI6g',
      authDomain: 'authentication-faee5.firebaseapp.com',
      databaseURL: 'https://authentication-faee5.firebaseio.com',
      projectId: 'authentication-faee5',
      storageBucket: 'authentication-faee5.appspot.com',
      messagingSenderId: '305180486979'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>An App!</Text>
      </View>
    );
  }
}

export default App;
