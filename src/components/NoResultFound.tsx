import React from 'react';
import { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
 
  noSearchFound: {
    color: '#878787',
    fontSize: 14
  },
  createParty: {
    backgroundColor: '#268367',
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#268367',
    borderRadius: 50,
    marginTop: 20
  },
  createPartyText: {
    color: '#fff',
    textAlign: 'center'
  }
});

interface Props {
  searchBoxValue: string
}

const NoResultFound: React.FC<Props> = (props) => {
  return (
    <View style={{alignSelf: 'center'}}>
      <Text style={{marginVertical: 30, alignSelf: 'center'}}>Search Icon</Text>
      <Text style={styles.noSearchFound}>{`No Search Found for '${props.searchBoxValue}'`}</Text>
      <TouchableOpacity style={styles.createParty}>
        <Text style={styles.createPartyText}>+ Create Party</Text>
      </TouchableOpacity>
    </View>
  )
} 

export default NoResultFound;