import React, { Component } from 'react';
import { Button } from 'react-native';
import { ROUTES_KEYS } from '../constants/RoutesKeys';

interface Props {
  navigation: any
}

const AddPartyList: React.FC<Props> = props => {
  const {navigate} = props.navigation;
  return (
    <Button
      title="Go Search"
      onPress={() => navigate(ROUTES_KEYS.SeachPartyList, {name: 'Jane'})}
    />
  );
}

export default AddPartyList;