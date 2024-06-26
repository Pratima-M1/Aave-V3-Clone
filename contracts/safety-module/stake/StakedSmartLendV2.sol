// SPDX-License-Identifier: agpl-3.0
pragma solidity 0.7.5;
pragma experimental ABIEncoderV2;

import {IERC20} from "../interfaces/IERC20.sol";
import {StakedTokenV2} from "./StakedTokenV2.sol";

/**
 * @title StakedSmartLendV2
 * @notice StakedTokenV2 with SmartLend token as staked token
 * @author SmartLend
 **/
contract StakedSmartLendV2 is StakedTokenV2 {
    string internal constant NAME = "Staked SmartLend";
    string internal constant SYMBOL = "stkSmartLend";
    uint8 internal constant DECIMALS = 18;

    constructor(
        IERC20 stakedToken,
        IERC20 rewardToken,
        uint256 cooldownSeconds,
        uint256 unstakeWindow,
        address rewardsVault,
        address emissionManager,
        uint128 distributionDuration,
        address governance
    )
        public
        StakedTokenV2(
            stakedToken,
            rewardToken,
            cooldownSeconds,
            unstakeWindow,
            rewardsVault,
            emissionManager,
            distributionDuration,
            NAME,
            SYMBOL,
            DECIMALS,
            governance
        )
    {}
}
