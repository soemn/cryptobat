export const ETH_OMG = "navBar/ETH_OMG"
export const BTC_ETH = "navBar/BTC_ETH"
export const BTC_OMG = "navBar/BTC_OMG"

const initialState = {
  currency1: "ETH",
  currency2: "OMG"
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ETH_OMG:
      return {
        ...state,
        currency1: "ETH",
        currency2: "OMG"
      }
    case BTC_ETH:
      return {
        ...state,
        currency1: "BTC",
        currency2: "ETH"
      }
    case BTC_OMG:
      return {
        ...state,
        currency1: "BTC",
        currency2: "OMG"
      }
    default:
      return state
  }
}

export function chooseCurrPair() {
  var selectedPairIndex = document.getElementById("selectBox").selectedIndex
  switch (selectedPairIndex) {
    case 0:
      console.log("0")
      return {
        type: ETH_OMG
      }
    case 1:
      console.log("1")
      return {
        type: BTC_ETH
      }
    case 2:
      console.log("2")
      return {
        type: BTC_OMG
      }
    default:
      console.log("default")
  }
}
