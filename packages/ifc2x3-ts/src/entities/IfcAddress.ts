// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcAddress

import { IfcAddressTypeEnum, IfcText, IfcLabel } from '../types'

/** This abstract entity represents various kinds of postal and telecom addresses.
 */
abstract class IfcAddress  {
    constructor(Purpose:IfcAddressTypeEnum, Description:IfcText, UserDefinedPurpose:IfcLabel) {

        this.Purpose = Purpose
        this.Description = Description
        this.UserDefinedPurpose = UserDefinedPurpose
    }
    /** Identifies the logical location of the address.
    */
    Purpose?: IfcAddressTypeEnum
    /** Text that relates the nature of the address.
    */
    Description?: IfcText
    /** Allows for specification of user specific purpose of the address beyond the enumeration values provided by Purpose attribute of type IfcAddressTypeEnum.
     * When a value is provided for attribute UserDefinedPurpose, in parallel the attribute Purpose shall have enumeration value USERDEFINED.
    */
    UserDefinedPurpose?: IfcLabel
}

export default IfcAddress