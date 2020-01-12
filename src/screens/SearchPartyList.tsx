import React, { useEffect } from 'react';
import { Component, useState } from 'react';
import { connect } from 'react-redux';
import { FlatList, View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { fetchPartyList, searchFromList, addParty, resetSearchList } from '../actions/PartyActions';
import SearchBox from '../components/SearchBox';
import NoResultFound from '../components/NoResultFound';
import { commonStyle } from '../assets/common-style';

const styles = StyleSheet.create({
 
});

function RenderPartyList (props: {
  item: {
    name: string,
    address: string,
  },
  addParty: Function,
  resetSearchList: Function,
  navigation: any
}) {
  const onSuccessOfAddingParty = () => {
    props.navigation.goBack();
    props.resetSearchList();
  }
  return (
    <TouchableOpacity
      style={commonStyle.listContainer}
      onPress={() => props.addParty({party: props.item, onSuccessCallBack: onSuccessOfAddingParty()})}>
      <Text style={commonStyle.partyName}>{props.item.name}</Text>
      <Text style={commonStyle.partyAddress}>{props.item.address}</Text>
    </TouchableOpacity>
  );
}

interface Props {
  navigation: any,
  fetchPartyList: Function,
  partyList: Array<object>,
  searchResult: Array<object>,
  addParty: Function,
  resetSearchList: Function,
  searchFromList: Function
}

const SearchPartyList: React.FC<Props> = props => {
  const [searchBoxValue, setSearchBoxValue] = useState('');

  useEffect(() => {
    props.fetchPartyList();
  }, []);

  const {navigate} = props.navigation;
    return (
      <SafeAreaView>
        <SearchBox 
          callActionToSearch={(data) => props.searchFromList({searchParam:data }) }
          getSearchBoxValue={(text) => setSearchBoxValue(text)}
          placeholder="Enter Party Name..."
        />
        {
          searchBoxValue && !props.searchResult.length ?
          <NoResultFound searchBoxValue={searchBoxValue} />
          :
          <FlatList
            data={props.searchResult.length ? props.searchResult : props.partyList}
            renderItem={({ item }) => <RenderPartyList item={item} addParty={props.addParty} resetSearchList={props.resetSearchList} navigation={props.navigation} />}
            keyExtractor={item => item.id}
          />
        }
      </SafeAreaView>
    );
}


const mapStateToProps = (reduxState: any) => {
  const {
    partyListReducer: {
      partyList,
      searchResult
    }
  } = reduxState;

  return {
    partyList,
    searchResult
  }
}

export default connect(mapStateToProps, { fetchPartyList, searchFromList, addParty, resetSearchList })(SearchPartyList);
