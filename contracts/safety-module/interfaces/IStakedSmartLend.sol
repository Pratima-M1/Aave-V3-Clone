// SPDX-License-Identifier: agpl-3.0
pragma solidity 0.7.5;

interface IStakedSmartLend {
    function stake(address to, uint256 amount) external;

    function redeem(address to, uint256 amount) external;

    function cooldown() external;

    function claimRewards(address to, uint256 amount) external;
}
