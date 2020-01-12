import { FETCH_PARTY_LIST, SEARCH_REQUEST, ADD_PARTY, RESET_SEARCH_RESULT, FETCH_PARTY_BALANCE } from '../constants/ActionTypes';
import { filterFromPartyList, getBalance } from '../utils/filterList';

const INITIAL_STATE = {
  partyList: [],
  searchResult: [],
  AddedParty: [],
  partyBalance: []
}

export default function partyListReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_PARTY_LIST :
      return {
        ...state,
        partyList: action.partyList
      }
      
    case SEARCH_REQUEST:
      return {
        ...state,
        searchResult: filterFromPartyList({ searchParam: action.searchParam,  partyList: state.partyList})
      }

    case ADD_PARTY:
      let balance = getBalance({party: action.party, partyBalance: state.partyBalance });
      return {
        ...state,
        AddedParty: [{...action.party, ...balance}]
      }

    case RESET_SEARCH_RESULT:
        return {
          ...state,
          searchResult: []
        }

    case FETCH_PARTY_BALANCE:
      return {
        ...state,
        partyBalance: action.partyBalance
      }
  
    default:
      return state
  }
}
