import React, { useEffect } from 'react';
import { Component } from 'react';
import { View, TextInput } from 'react-native';
import { debounce } from '../utils/library';

function SearchBox (props: {
  callActionToSearch: Function,
  getSearchBoxValue: Function,
  placeholder: string
}) {
  let debouncedSearch = debounce(props.callActionToSearch,1500,false);

  const [value, onChangeText] = React.useState('');
  const onChangeOfVal = (text) => {
    onChangeText(text)
    
    if(typeof props.getSearchBoxValue === 'function') {
      props.getSearchBoxValue(text);
    }

    if(typeof props.callActionToSearch === 'function') {
      debouncedSearch(text);
    }
  }

  return (
    <View>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => onChangeOfVal(text)}
        value={value}
        placeholder={props.placeholder || 'Search'}
      />
    </View>
  )
}

export default SearchBox;