interface searchInterface {
  searchParam: string,
  partyList: Array<object>
}

export const filterFromPartyList = ({searchParam, partyList}: searchInterface) => {
    return partyList.filter(ele => ele.name.search(searchParam) !== -1 || ele.aliasName.search(searchParam) !== -1);
}


interface balanceInterface {
  party: object,
  partyBalance: Array<object>
}
export const getBalance = ({party, partyBalance}: balanceInterface) => {
  let filteredArray = partyBalance.filter(ele => ele.id === party.id);
  if(filteredArray.length) {
    return {
      currentBalance: filteredArray[0].balance
    }
  } else {
    return {};
  }
}
