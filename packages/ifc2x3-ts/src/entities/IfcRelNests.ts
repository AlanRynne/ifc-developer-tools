// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRelNests

import { IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcObjectDefinition, IfcRelDecomposes } from './'

/** The nesting relationship IfcRelNests is a special type of the general composition/decomposition (or whole/part) relationship IfcRelDecomposes.
 *
 * The nesting relationship can be applied to all non physical subtypes of object and object types, namely processes, controls (like cost items), and resources.
 *
 * It can also be applied to physical subtypes of object and object types, namely elements having ports.
 *
 * The nesting implies an order among the nested parts.
 *
 * Decompositions imply a dependency, i.e. the definition of the whole depends on the definition of the parts and the parts depend on the existence of the whole.
 *
 * The behaviour that is implied from the dependency has to be established inside the applications.
 */
 class IfcRelNests extends IfcRelDecomposes {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, RelatingObject:IfcObjectDefinition, RelatedObjects:Array<IfcObjectDefinition>) {
        super(GlobalId, OwnerHistory, Name, Description, RelatingObject, RelatedObjects)

    }

}

export default IfcRelNests