import { FETCH_PARTY_LIST, SEARCH_REQUEST, ADD_PARTY, RESET_SEARCH_RESULT, FETCH_PARTY_BALANCE } from '../constants/ActionTypes';
import PARTY_LIST from '../constants/PartyData/PartyList';
import { filterFromPartyList } from '../utils/filterList';
import PARTY_BALANCE from '../constants/PartyData/PartyBalance';

export const fetchPartyList = () => (dispatch: Function) => {
  dispatch({
    type: FETCH_PARTY_LIST,
    partyList: PARTY_LIST
  })
}

export const fetchPartyBalance = () => (dispatch: Function) => {
  dispatch({
    type: FETCH_PARTY_BALANCE,
    partyBalance: PARTY_BALANCE
  })
}

/**
 * searchFromList starts here
 */
interface searchInterface {
  searchParam: string
}

export const searchFromList = ({searchParam }: searchInterface) => (dispatch: Function) => {
  dispatch({
    type: SEARCH_REQUEST,
    searchParam: searchParam
  })
}
/** searchFromList ends here  */

export const addParty = ({party} : Array<object>) => (dispatch: Function) => {
  dispatch({
    type: ADD_PARTY,
    party
  })
}

export const resetSearchList = () => (dispatch: Function) => {
  dispatch({
    type: RESET_SEARCH_RESULT
  })
}