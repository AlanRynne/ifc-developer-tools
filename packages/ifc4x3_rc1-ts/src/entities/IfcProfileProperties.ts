// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcProfileProperties

import { IfcProfileDef, IfcProperty, IfcExtendedProperties } from './'
import { IfcIdentifier, IfcText } from '../types'

/** This is a collection of properties applicable to section profile definitions.
 */
 class IfcProfileProperties extends IfcExtendedProperties {
    constructor(Name:IfcIdentifier, Description:IfcText, Properties:Array<IfcProperty>, ProfileDefinition:IfcProfileDef) {
        super(Name, Description, Properties)
        this.ProfileDefinition = ProfileDefinition
    }
    /** Profile definition which is qualified by these properties.
    */
    ProfileDefinition: IfcProfileDef
}

export default IfcProfileProperties