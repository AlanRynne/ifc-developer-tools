// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcMaterialProperties

import { IfcMaterialDefinition, IfcProperty, IfcExtendedProperties } from './'
import { IfcIdentifier, IfcText } from '../types'

/** The IfcMaterialProperties assigns a set of material properties to associated material definitions.
 *
 * The set may be identified by a Name and a Description.
 *
 * The IfcProperty (instantiable subtypes) is used to express the individual material properties by name, description, value and unit.
 */
 class IfcMaterialProperties extends IfcExtendedProperties {
    constructor(Name:IfcIdentifier, Description:IfcText, Properties:Array<IfcProperty>, Material:IfcMaterialDefinition) {
        super(Name, Description, Properties)
        this.Material = Material
    }
    /** Reference to the material definition to which the set of properties is assigned.
     * IFC4 CHANGE The datatype has been changed to supertype IfcMaterialDefinition.
    */
    Material: IfcMaterialDefinition
}

export default IfcMaterialProperties