// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcPropertyTemplateDefinition

import { IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcPropertyDefinition } from './'

/** IfcPropertyTemplateDefinition is a generalization of all property and property set templates.
 *
 * Templates define the collection, types, names, applicable measure types and units of individual properties used in a project.
 *
 * The property template definition can be either:The subtypes of IfcPropertyTemplateDefinition are declared within a project context.
 *
 * The uppermost template definition (e.g. the IfcPropertySetTemplate including several IfcPropertyTemplate's) should be related to the context, either IfcProject, or IfcProjectLibrary, using the inherited HasContext inverse attribute.
 */
abstract class IfcPropertyTemplateDefinition extends IfcPropertyDefinition {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText) {
        super(GlobalId, OwnerHistory, Name, Description)

    }

}

export default IfcPropertyTemplateDefinition