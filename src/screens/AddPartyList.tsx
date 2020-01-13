import React, { Component, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, SafeAreaView } from 'react-native'
import { connect } from 'react-redux';
import { ROUTES_KEYS } from '../constants/RoutesKeys';
import { fetchPartyBalance } from '../actions/PartyActions';
import { COLORS } from '../constants/Colors';
import { commonStyle } from '../assets/common-style';
import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
  partyDetailsContainer: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: COLORS.gray
  },
  partyDetailsText: {
    color: COLORS.grayText
  },
  addedPartyContainer: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: '#F8F8F8',
    borderBottomColor: '#cfcfcf'
  },
  currentBalanceText: {
    color: '#878787',
    fontStyle: 'italic'
  }
});

function RenderAddedParty (props: {
  item: {
    name: string,
    address: string,
    currentBalance: number | string
  }
}) {
  return (
    <TouchableOpacity style={[
      commonStyle.listContainer,
      commonStyle.flexDirection,
      commonStyle.spaceBetween,
      {alignItems: 'center'}]} onPress={() => {}}>
      <View style={[commonStyle.flexDirection, {alignItems: 'center', width: '80%'}]}>
        <Icon name={'ios-contact'} size={30} color={'#878787'}/>
        <View style={{marginLeft: 10}}>
          <Text style={commonStyle.partyName} >{props.item.name}</Text>
          <Text style={[commonStyle.partyAddress, {color: '#878787'}]}>{props.item.address}</Text>

          {
            !!props.item.currentBalance &&
            <View style={[commonStyle.flexDirection, { marginTop: 5 }]}>
              <Text style={styles.currentBalanceText}>Current Balance: </Text>
              <Text style={styles.currentBalanceText}>{`Rs. ${props.item.currentBalance} Dr`}</Text>
            </View>
          }
        </View>
      </View>
      <Icon name={'ios-arrow-forward'} size={30} color={'#878787'} />
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
    <SafeAreaView>
      <View style={styles.partyDetailsContainer}>
        <Text style={styles.partyDetailsText}>Party Details</Text>
      </View>

      <TouchableOpacity style={[styles.addedPartyContainer, commonStyle.flexDirection, commonStyle.spaceBetween, { marginBottom: 10 }]} onPress={() => navigate(ROUTES_KEYS.SeachPartyList)}>
        <View style={commonStyle.flexDirection}>
          <Icon name={'ios-contact'} size={30} color={'#95A4E9'}/>
          <Text style={{marginLeft: 10, color: '#5A72DD', alignSelf: 'center'}}>+ add party</Text>
        </View>
        <Icon name={'ios-arrow-forward'} size={30} color={'#C6C6C6'}/>
      </TouchableOpacity>

      <FlatList
          data={props.AddedParty}
          renderItem={({ item }) => <RenderAddedParty item={item} />}
          keyExtractor={item => item.id}
        />
    </SafeAreaView>
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