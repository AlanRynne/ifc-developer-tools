// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRelDefinesByProperties

import { IfcPropertySetDefinition, IfcOwnerHistory, IfcObject, IfcRelDefines } from './'
import { IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'

/** The objectified relationship IfcRelDefinesByProperties defines the relationships between property set definitions and objects.
 *
 * Properties are aggregated in property sets.
 *
 * Property sets can be either directly assigned to occurrence objects using this relationship, or assigned to an object type and assigned via that type to occurrence objects.
 *
 * The assignment of an IfcPropertySet to an IfcTypeObject is not handled via this objectified relationship, but through the direct relationship HasPropertySets at IfcTypeObject
 *
 * The IfcRelDefinesByProperties is an N-to-N relationship, as it allows for the assignment of one or more property sets to one or more objects.
 *
 * Those objects then share the same property definition.
 */
 class IfcRelDefinesByProperties extends IfcRelDefines {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, RelatedObjects:Array<IfcObject>, RelatingPropertyDefinition:IfcPropertySetDefinition) {
        super(GlobalId, OwnerHistory, Name, Description, RelatedObjects)
        this.RelatingPropertyDefinition = RelatingPropertyDefinition
    }
    /** Reference to the property set definition for that object or set of objects.
    */
    RelatingPropertyDefinition: IfcPropertySetDefinition
}

export default IfcRelDefinesByProperties