import React from 'react';
import { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
 
  noSearchFound: {
    color: '#878787',
    fontSize: 14
  },
  createParty: {
    width: '100%',
    backgroundColor: '#26D367',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderWidth: 1,
    borderColor: '#26D367',
    borderRadius: 50,
    marginTop: 20,
    alignSelf: 'center'
  },
  createPartyText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '500'
  }
});

interface Props {
  searchBoxValue: string
}

const NoResultFound: React.FC<Props> = (props) => {
  return (
    <View style={{alignSelf: 'center'}}>
      <Icon name={'ios-search'} size={40} color={'#878787'} style={{marginVertical: 30, alignSelf: 'center'}}/>
      <Text style={styles.noSearchFound}>{`No Search Found for '${props.searchBoxValue}'`}</Text>
      <TouchableOpacity style={styles.createParty}>
        <Text style={styles.createPartyText}>+ Create Party</Text>
      </TouchableOpacity>
    </View>
  )
} 

export default NoResultFound;