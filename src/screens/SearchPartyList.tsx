import React from 'react';
import { Component } from 'react';
import { Button } from 'react-native';

interface Props {
  navigation: any
}

const SearchPartyList: React.FC<Props> = props => {
  const {navigate} = props.navigation;
    return (
      <Button
        title="Search Here"
        onPress={() => navigate('Profile', {name: 'Jane'})}
      />
    );
}

export default SearchPartyList;