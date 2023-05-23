import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import Home from './src/screens/Home.screen';
import Reels from './src/screens/Reels.screen';
import Search from './src/screens/Search.screen';

function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>
        Hello Instagram! Am Comming.....!-----
      </Text>
      <Icon name="bell" type="entypo" color="white" />
      <Home />
      <Search />
      <Reels />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'salmon',
    flex: 1,
  },
  textStyle: {
    color: 'white',
    fontFamily: 'Lobster-Regular',
  },
});

export default App;
