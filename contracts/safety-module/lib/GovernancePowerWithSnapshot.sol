// SPDX-License-Identifier: agpl-3.0
pragma solidity 0.7.5;

import {ERC20} from "../lib/ERC20.sol";
import {ITransferHook} from "../interfaces/ITransferHook.sol";
import {SafeMath} from "../lib/SafeMath.sol";
import {GovernancePowerDelegationERC20} from "../../smartlend-token/token/base/GovernancePowerDelegationERC20.sol";

/**
 * @title ERC20WithSnapshot
 * @notice ERC20 including snapshots of balances on transfer-related actions
 * @author SmartLend
 **/
abstract contract GovernancePowerWithSnapshot is
    GovernancePowerDelegationERC20
{
    using SafeMath for uint256;

    /**
     * @dev The following storage layout points to the prior StakedToken.sol implementation:
     * _snapshots => _votingSnapshots
     * _snapshotsCounts =>  _votingSnapshotsCounts
     * _smartlendGovernance => _smartlendGovernance
     */
    mapping(address => mapping(uint256 => Snapshot)) public _votingSnapshots;
    mapping(address => uint256) public _votingSnapshotsCounts;

    /// @dev reference to the SmartLend governance contract to call (if initialized) on _beforeTokenTransfer
    /// !!! IMPORTANT The SmartLend governance is considered a trustable contract, being its responsibility
    /// to control all potential reentrancies by calling back the this contract
    ITransferHook public _smartlendGovernance;

    function _setSmartLendGovernance(
        ITransferHook smartlendGovernance
    ) internal virtual {
        _smartlendGovernance = smartlendGovernance;
    }
}
