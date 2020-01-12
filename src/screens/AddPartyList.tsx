import React, { Component, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import { connect } from 'react-redux';
import { ROUTES_KEYS } from '../constants/RoutesKeys';
import { fetchPartyBalance } from '../actions/PartyActions';

function RenderAddedParty (props: {
  item: {
    name: string,
    address: string,
    currentBalance: number | string
  }
}) {
  return (
    <TouchableOpacity onPress={() => {}}>
      <View />
      <View>
      <Text>{props.item.name}</Text>
      <Text>{props.item.address}</Text>
      </View>
      <View />
      {
        !!props.item.currentBalance &&
        <View>
          <Text>Current Balance: </Text>
          <Text>{`Rs. ${props.item.currentBalance} Dr`}</Text>
        </View>
      }
    </TouchableOpacity>
  );
}
interface Props {
  navigation: any,
  AddedParty: object,
  fetchPartyBalance: Function
}
const AddPartyList: React.FC<Props> = props => {
  useEffect(() => {
    props.fetchPartyBalance();
  }, []);

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

      <FlatList
          data={props.AddedParty}
          renderItem={({ item }) => <RenderAddedParty item={item} />}
          keyExtractor={item => item.id}
        />
    </View>
  );
}

const mapStateToProps = (reduxState: any) => {
  const {
    partyListReducer: {
      AddedParty
    }
  } = reduxState;

  return {
    AddedParty
  }
}

export default connect(mapStateToProps, {fetchPartyBalance})(AddPartyList);