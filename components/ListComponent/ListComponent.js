import {View, Text, ScrollView} from 'react-native';
import React, {useContext, useEffect, useState, Component} from 'react';
import ListItem from '../ListItem/ListItem';
import axios from 'axios';
import SeacrhBar from '../SearchBar/SeacrhBar';
import {useSelector,useDispatch} from 'react-redux'
import {setUsers} from '../redux/action'
const ListComponent = () => {
  const {users} = useSelector(state => state.userReducer)
  const dispatch = useDispatch()
  //const [users, setUsers] = useState([]);
  const [SearchItem, setSearchItem] = useState('');
  const [searchedUser, setsearchedUser] = useState();
  useEffect(() => {
    axios
      .get('https://api.github.com/users')
      .then(function (response) {
        // handle success
        console.log(response.data);
        //setUsers(response.data);
        dispatch(setUsers(response.data))
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });

    return () => {
      //remove listners here
    };
  }, []);

  useEffect(() => {
    console.log(SearchItem.length);
    if (SearchItem) {
      const delayedSeearch = setTimeout(() => {
        console.log('SearchItem', SearchItem);
        axios
          .get(`https://api.github.com/users/${SearchItem}`)
          .then(function (response) {
            // handle success
            console.log(response.data);
            setsearchedUser(response.data);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
            setsearchedUser(undefined);
          })
          .then(function () {
            // always executed
          });
      }, 1000);

      return () => {
        clearTimeout(delayedSeearch);
      };
    }
  }, [SearchItem]);

  return (
    <View
      style={{
        flex: 1,
      }}>
      <SeacrhBar SearchItem={SearchItem} setSearchItem={setSearchItem} />
      <ScrollView>
        {SearchItem.length === 0 ? (
          users.map((userObj, index) => {
            return <ListItem key={index} userObj={userObj} />;
          })
        ) : searchedUser ? (
          <ListItem userObj={searchedUser} />
        ) : (
          <View
            style={{
              backgroundColor: 'rgba(0,0,0,0.5)',
              padding: 10,
              flexDirection: 'row',
              margin: 1,
              marginHorizontal: 4,
              borderRadius: 10,
            }}>
            <Text>No such users exists</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default ListComponent;
