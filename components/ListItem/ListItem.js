import React, {useContext, useEffect, useState, Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Linking,
} from 'react-native';
import CustomModal from '../Modal/CustomModal';

function ListItem({userObj}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View
    //key={index}
      style={{
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 10,
        flexDirection: 'row',
        margin: 1,
        marginHorizontal: 4,
        borderRadius: 10,
      }}>
      <ImageBackground
        style={{width: 80, height: 80}}
        imageStyle={{borderRadius: 100}}
        source={{uri: userObj.avatar_url}}
      />
      <View
        style={{
          marginLeft: 20,
          alignSelf: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(true);
          }}>
          <Text>{userObj.login}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL(userObj.html_url)}>
          <Text>{userObj.html_url}</Text>
        </TouchableOpacity>
      </View>
      <CustomModal
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      userObj={userObj}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  ListItem: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  ListItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ListItemText: {
    fontSize: 18,
  },
});

export default ListItem;
