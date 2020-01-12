import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { ROUTES_KEYS } from '../constants/RoutesKeys';

interface Props {
  navigation: any
}

const AddPartyList: React.FC<Props> = props => {
  const {navigate} = props.navigation;
  return (
    <View>
      <View>
        <Text>Party Details</Text>
      </View>

      <TouchableOpacity onPress={() => navigate(ROUTES_KEYS.SeachPartyList)}>
        <View>
          <Text>icon</Text>
          <Text>+ add party</Text>
        </View>
        <Text>right icon</Text>
      </TouchableOpacity>
    </View>
  );
}

export default AddPartyList;