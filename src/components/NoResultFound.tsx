import React from 'react';
import { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface Props {
  searchBoxValue: string
}

const NoResultFound: React.FC<Props> = (props) => {
  return (
    <View>
      <Text>{`No Search Found for '${props.searchBoxValue}'`}</Text>
      <TouchableOpacity>
      <Text>+ Create Party</Text>
      </TouchableOpacity>
    </View>
  )
} 

export default NoResultFound;