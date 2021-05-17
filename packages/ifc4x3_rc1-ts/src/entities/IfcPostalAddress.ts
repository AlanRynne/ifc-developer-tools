// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcPostalAddress

import { IfcLabel, IfcAddressTypeEnum, IfcText } from '../types'
import { IfcAddress } from './'

/** This entity represents an address for delivery of paper based mail and other postal deliveries.
 */
 class IfcPostalAddress extends IfcAddress {
    constructor(Purpose:IfcAddressTypeEnum, Description:IfcText, UserDefinedPurpose:IfcLabel, InternalLocation:IfcLabel, AddressLines:Array<IfcLabel>, PostalBox:IfcLabel, Town:IfcLabel, Region:IfcLabel, PostalCode:IfcLabel, Country:IfcLabel) {
        super(Purpose, Description, UserDefinedPurpose)
        this.InternalLocation = InternalLocation
        this.AddressLines = AddressLines
        this.PostalBox = PostalBox
        this.Town = Town
        this.Region = Region
        this.PostalCode = PostalCode
        this.Country = Country
    }
    /** An organization defined address for internal mail delivery.
    */
    InternalLocation?: IfcLabel
    /** The postal address.
     * A postal address may occupy several lines (or elements) when recorded.
     * It is expected that normal usage will incorporate relevant elements of the following address concepts: A location within a building (e.g. 3rd Floor) Building name (e.g. Interoperability House) Street number (e.g. 6400) Street name (e.g. Alliance Boulevard).
     * Typical content of address lines may vary in different countries.
    */
    AddressLines?: Array<IfcLabel>
    /** An address that is implied by an identifiable mail drop.
    */
    PostalBox?: IfcLabel
    /** The name of a town.
    */
    Town?: IfcLabel
    /** The name of a region.
     * The counties of the United Kingdom and the states of North America are examples of regions.
    */
    Region?: IfcLabel
    /** The code that is used by the country's postal service.
    */
    PostalCode?: IfcLabel
    /** The name of a country.
    */
    Country?: IfcLabel
}

export default IfcPostalAddress