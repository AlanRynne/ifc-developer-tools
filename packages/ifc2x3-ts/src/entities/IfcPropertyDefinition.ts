// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcPropertyDefinition

import { IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcRoot } from './'

/** IfcPropertyDefinition defines the generalization of all characteristics (i.e. a grouping of individual properties), that may be assigned to objects.
 *
 * Currently, subtypes of IfcPropertyDefinition include property set occurrences, property set templates, and property templates
 *
 * Property definitions define information that is shared among multiple instances of objects, either object occurrences or object types.
 *
 * IfcPropertyDefinition's (by their instantiable subtypes) can participate within the following relationships:Subtypes are included in more specific relationships, see IfcPropertySetDefinition and IfcPropertyTemplateDefinition for details.
 */
abstract class IfcPropertyDefinition extends IfcRoot {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText) {
        super(GlobalId, OwnerHistory, Name, Description)

    }

}

export default IfcPropertyDefinition