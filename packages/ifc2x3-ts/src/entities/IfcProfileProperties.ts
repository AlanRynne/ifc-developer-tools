// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcProfileProperties

import { IfcLabel } from '../types'
import { IfcProfileDef } from './'

/** This is a collection of properties applicable to section profile definitions.
 */
abstract class IfcProfileProperties  {
    constructor(ProfileName:IfcLabel, ProfileDefinition:IfcProfileDef) {

        this.ProfileName = ProfileName
        this.ProfileDefinition = ProfileDefinition
    }
    /** undefined
    */
    ProfileName?: IfcLabel
    /** Profile definition which is qualified by these properties.
    */
    ProfileDefinition?: IfcProfileDef
}

export default IfcProfileProperties