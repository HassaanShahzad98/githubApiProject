import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React, {useContext, useEffect, useState, Component} from 'react';
import axios from 'axios';

const CustomModal = ({modalVisible, setModalVisible, userObj}) => {
  const [user, setuser] = useState([]);
  useEffect(() => {
    modalVisible &&
      axios
        .get(`https://api.github.com/users/${userObj.login}`)
        .then(function (response) {
          // handle success
          console.log('modalresponse', response.data);
          setuser(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });

    return () => {};
  }, [modalVisible]);

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View
        style={{
          flex: 1,
          //backgroundColor: 'rgba(150,150,150,0.5)',
          alignItems: 'center',
          alignContent: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            backgroundColor: '#fff',
            width: '85%',
            paddingTop: 20,
            paddingBottom: 20,
            paddingHorizontal: 30,
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <ImageBackground
              style={{width: 80, height: 80, marginBottom: 20}}
              imageStyle={{borderRadius: 100}}
              source={{uri: user.avatar_url}}
            />
            <Text style={{
              fontWeight:'bold'
            }}>{user.name}</Text>
            <View
              style={{
                flexDirection: 'row',
                marginTop:10,
              }}>
              <View>
                <Text>followers </Text>
                <Text style={{alignSelf:"center"}}>{user.followers}</Text>
              </View>
              <View style={{padding:10}}>

              </View>
              <View>
                <Text>following </Text>
                <Text style={{alignSelf:"center"}}>{user.following}</Text>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              //backgroundColor:'pink',
              justifyContent: 'flex-end',
              marginRight: 20,
              marginTop: 20,
            }}>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text
                style={{
                  fontWeight: 'bold',
                }}>
                Close
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
