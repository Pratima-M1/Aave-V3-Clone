import { ePolygonNetwork, IAaveConfiguration } from "../../helpers/types";
import { AaveMarket } from "../aave/index";
import {
  strategyDAI,
  strategyUSDT,
  strategyWETH,
} from "../aave/reservesConfigs";
import { ZERO_ADDRESS } from "../../helpers/constants";
import {
  strategyAGEUR,
  strategyBAL,
  strategyCRV,
  strategyDPI,
  strategyEURS,
  strategyGHST,
  strategyJEUR,
  strategyLINK,
  strategySUSHI,
  strategyWMATIC,
  strategyUSDC,
  strategyAAVE,
  strategyWBTC,
} from "./reservesConfigs";
// ----------------
// POOL--SPECIFIC PARAMS
// ----------------

export const PolygonMarket: IAaveConfiguration = {
  ...AaveMarket,
  ProviderId: 34,
  WrappedNativeTokenSymbol: "WMATIC",
  MarketId: "Polygon Aave Market",
  ATokenNamePrefix: "Polygon",
  StableDebtTokenNamePrefix: "Polygon",
  VariableDebtTokenNamePrefix: "Polygon",
  SymbolPrefix: "Pol",
  ReservesConfig: {
    DAI: strategyDAI,
    LINK: strategyLINK,
    USDC: strategyUSDC,
    WBTC: strategyWBTC,
    WETH: strategyWETH,
    USDT: strategyUSDT,
    AAVE: strategyAAVE,
    WMATIC: strategyWMATIC,
    CRV: strategyCRV,
    SUSHI: strategySUSHI,
    GHST: strategyGHST,
    BAL: strategyBAL,
    DPI: strategyDPI,
    EURS: strategyEURS,
    JEUR: strategyJEUR,
    AGEUR: strategyAGEUR,
  },
  ReserveAssets: {
    [ePolygonNetwork.polygon]: {
      AAVE: "0xD6DF932A45C0f255f85145f286eA0b292B21C90B",
      DAI: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
      LINK: "0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39",
      USDC: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
      WBTC: "0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6",
      WETH: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
      USDT: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
      WMATIC: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
      GHST: "0x385Eeac5cB85A38A9a07A70c73e0a3271CfB54A7",
      BAL: "0x9a71012B13CA4d3D0Cdc72A177DF3ef03b0E76A3",
      CRV: "0x172370d5Cd63279eFa6d502DAB29171933a610AF",
      DPI: "0x85955046DF4668e1DD369D2DE9f3AEB98DD2A369",
      SUSHI: "0x0b3F868E0BE5597D5DB7fEB59E1CADBb0fdDa50a",
      EURS: "0xE111178A87A3BFf0c8d18DECBa5798827539Ae99",
      JEUR: "0x4e3Decbb3645551B8A19f0eA1678079FCB33fB4c",
      AGEUR: "0xE0B52e49357Fd4DAf2c15e02058DCE6BC0057db4",
    },
    [ePolygonNetwork.mumbai]: {
      AAVE: ZERO_ADDRESS,
      DAI: ZERO_ADDRESS,
      LINK: ZERO_ADDRESS,
      USDC: ZERO_ADDRESS,
      WBTC: ZERO_ADDRESS,
      WETH: ZERO_ADDRESS,
      USDT: ZERO_ADDRESS,
      WMATIC: ZERO_ADDRESS,
      GHST: ZERO_ADDRESS,
      BAL: ZERO_ADDRESS,
      CRV: ZERO_ADDRESS,
      DPI: ZERO_ADDRESS,
      SUSHI: ZERO_ADDRESS,
      EURS: ZERO_ADDRESS,
      JEUR: ZERO_ADDRESS,
      AGEUR: ZERO_ADDRESS,
    },
  },
  EModes: {
    StableEMode: {
      id: "1",
      ltv: "9700",
      liquidationThreshold: "9750",
      liquidationBonus: "10100",
      label: "Stablecoins",
      assets: ["USDC", "USDT", "DAI", "EURS", "JEUR", "AGEUR"],
    },
  },
  ChainlinkAggregator: {
    [ePolygonNetwork.polygon]: {
      AAVE: "0x72484B12719E23115761D5DA1646945632979bB6",
      DAI: "0x4746DeC9e833A82EC7C2C1356372CcF2cfcD2F3D",
      LINK: "0xd9FFdb71EbE7496cC440152d43986Aae0AB76665",
      USDC: "0xfE4A8cc5b5B2366C1B58Bea3858e81843581b2F7",
      WBTC: "0xc907E116054Ad103354f2D350FD2514433D57F6f",
      WETH: "0xF9680D99D6C9589e2a93a78A04A279e509205945",
      USDT: "0x0A6513e40db6EB1b165753AD52E80663aeA50545",
      WMATIC: "0xAB594600376Ec9fD91F8e885dADF0CE036862dE0",
      GHST: "0xDD229Ce42f11D8Ee7fFf29bDB71C7b81352e11be",
      BAL: "0xD106B538F2A868c28Ca1Ec7E298C3325E0251d66",
      CRV: "0x336584C8E6Dc19637A5b36206B1c79923111b405",
      DPI: "0x2e48b7924FBe04d575BA229A59b64547d9da16e9",
      SUSHI: "0x49B0c695039243BBfEb8EcD054EB70061fd54aa0",
      // Using EUR / USD price feeds, not dedicated per EUR pegged tokens
      EURS: "0x73366Fe0AA0Ded304479862808e02506FE556a98",
      JEUR: "0x73366Fe0AA0Ded304479862808e02506FE556a98",
      AGEUR: "0x73366Fe0AA0Ded304479862808e02506FE556a98",
    },
  },
};

export default PolygonMarket;
