// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcPerson

import { IfcIdentifier, IfcLabel } from '../types'
import { IfcActorRole, IfcAddress } from './'

/** This entity represents an individual human being.
 */
 class IfcPerson  {
    constructor(Identification:IfcIdentifier, FamilyName:IfcLabel, GivenName:IfcLabel, MiddleNames:Array<IfcLabel>, PrefixTitles:Array<IfcLabel>, SuffixTitles:Array<IfcLabel>, Roles:Array<IfcActorRole>, Addresses:Array<IfcAddress>) {

        this.Identification = Identification
        this.FamilyName = FamilyName
        this.GivenName = GivenName
        this.MiddleNames = MiddleNames
        this.PrefixTitles = PrefixTitles
        this.SuffixTitles = SuffixTitles
        this.Roles = Roles
        this.Addresses = Addresses
    }
    /** Identification of the person.
    */
    Identification?: IfcIdentifier
    /** The name by which the family identity of the person may be recognized.
     * Depending on geographical location and culture, family name may appear either as the first or last component of a name.
    */
    FamilyName?: IfcLabel
    /** The name by which a person is known within a family and by which he or she may be familiarly recognized.
     * Depending on geographical location and culture, given name may appear either as the first or last component of a name.
    */
    GivenName?: IfcLabel
    /** Additional names given to a person that enable their identification apart from others who may have the same or similar family and given names.
     * Middle names are not normally used in familiar communication but may be asserted to provide additional identification of a particular person if necessary.
     * They may be particularly useful in situations where the person concerned has a family name that occurs commonly in the geographical region.
    */
    MiddleNames?: Array<IfcLabel>
    /** The word, or group of words, which specify the person's social and/or professional standing and appear before his/her names.
    */
    PrefixTitles?: Array<IfcLabel>
    /** The word, or group of words, which specify the person's social and/or professional standing and appear after his/her names.
    */
    SuffixTitles?: Array<IfcLabel>
    /** Roles played by the person.
    */
    Roles?: Array<IfcActorRole>
    /** Postal and telecommunication addresses of a person.
     * A person may have several addresses.
    */
    Addresses?: Array<IfcAddress>
}

export default IfcPerson