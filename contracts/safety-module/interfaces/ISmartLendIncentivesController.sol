// SPDX-License-Identifier: agpl-3.0
pragma solidity 0.7.5;
pragma experimental ABIEncoderV2;

interface ISmartLendIncentivesController {
    function handleAction(
        address asset,
        uint256 userBalance,
        uint256 totalSupply
    ) external;

    function getRewardsBalance(
        address[] calldata assets,
        address user
    ) external view returns (uint256);

    function claimRewards(
        address[] calldata assets,
        uint256 amount,
        address to,
        bool stake
    ) external returns (uint256);
}
