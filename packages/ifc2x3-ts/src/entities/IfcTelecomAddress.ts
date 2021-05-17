// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcTelecomAddress

import { IfcLabel, IfcAddressTypeEnum, IfcText } from '../types'
import { IfcAddress } from './'

/** This entity represents an address to which telephone, electronic mail and other forms of telecommunications should be addressed.
 */
 class IfcTelecomAddress extends IfcAddress {
    constructor(Purpose:IfcAddressTypeEnum, Description:IfcText, UserDefinedPurpose:IfcLabel, TelephoneNumbers:Array<IfcLabel>, FacsimileNumbers:Array<IfcLabel>, PagerNumber:IfcLabel, ElectronicMailAddresses:Array<IfcLabel>, WWWHomePageURL:IfcLabel) {
        super(Purpose, Description, UserDefinedPurpose)
        this.TelephoneNumbers = TelephoneNumbers
        this.FacsimileNumbers = FacsimileNumbers
        this.PagerNumber = PagerNumber
        this.ElectronicMailAddresses = ElectronicMailAddresses
        this.WWWHomePageURL = WWWHomePageURL
    }
    /** The list of telephone numbers at which telephone messages may be received.
    */
    TelephoneNumbers?: Array<IfcLabel>
    /** The list of fax numbers at which fax messages may be received.
    */
    FacsimileNumbers?: Array<IfcLabel>
    /** The pager number at which paging messages may be received.
    */
    PagerNumber?: IfcLabel
    /** The list of Email addresses at which Email messages may be received.
    */
    ElectronicMailAddresses?: Array<IfcLabel>
    /** The world wide web address at which the preliminary page of information for the person or organization can be located.
     * Information on the world wide web for a person or organization may be separated into a number of pages and across a number of host sites, all of which may be linked together.
     * It is assumed that all such information may be referenced from a single page that is termed the home page for that person or organization.
    */
    WWWHomePageURL?: IfcLabel
}

export default IfcTelecomAddress