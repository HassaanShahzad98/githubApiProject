import React from 'react';
import {useState} from 'react';
import {Select, Option} from 'react-native-chooser';
import {Picker} from '@react-native-picker/picker';
import RNPickerSelect from 'react-native-picker-select';
import ModalSelector from 'react-native-modal-selector';
import {StyleSheet, Text, View, FlatList, TextInput} from 'react-native';
import ListItem from './components/ListItem/ListItem';
import ListComponent from './components/ListComponent/ListComponent';
import { store } from './components/redux/store';
import { Provider } from 'react-redux';
//import {uuid} from 'uuidv4';

const App = () => {

  return (
    <Provider store={store}>
    <View style={{
      flex:1,
      backgroundColor:'#fff',
    }}>
     <ListComponent/>
     
    </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, //unlike div where flex works in rowws here it works in columns
    // paddingTop: 60,
  },
});

export default App;
