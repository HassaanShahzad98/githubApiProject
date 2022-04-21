import {View, Text, TextInput} from 'react-native';
import React from 'react';

const SeacrhBar = ({setSearchItem , SearchItem}) => {
  return (
    <View>
      <TextInput
        style={{
          height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,
          backgroundColor:'rgba(0,0,0,0.8)'
        }}
        onChangeText={(text)=>setSearchItem(text)}
        value={SearchItem}
        placeholder="Search user..."
      />
    </View>
  );
};

export default SeacrhBar;
