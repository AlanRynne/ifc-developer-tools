// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcPropertySetDefinition

import { IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcPropertyDefinition } from './'

/** IfcPropertySetDefinition is a generalization of all individual property sets that can be assigned to an object or type object.
 *
 * The property set definition can be either:Property set definitions define information that is shared among multiple instances of objects, either object occurrences or object types.
 *
 * IfcPropertySetDefinition's (by their instantiable subtypes) can participate within the following relationships:
 */
abstract class IfcPropertySetDefinition extends IfcPropertyDefinition {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText) {
        super(GlobalId, OwnerHistory, Name, Description)

    }

}

export default IfcPropertySetDefinition