// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRelAssignsToGroup

import { IfcGroup, IfcOwnerHistory, IfcObjectDefinition, IfcRelAssigns } from './'
import { IfcGloballyUniqueId, IfcLabel, IfcText, IfcObjectTypeEnum } from '../types'

/** The objectified relationship IfcRelAssignsToGroup handles the assignment of object definitions (individual object occurrences as subtypes of IfcObject, and object types as subtypes of IfcTypeObject) to a group (subtypes of IfcGroup)
 *
 * The relationship handles the assignment of group members to the group object.
 *
 * It allows for grouping arbitrary objects within a group, including other groups.
 *
 * The grouping relationship can be applied in a recursive manner.
 *
 * The resulting group is of type IfcGroup
 *
 * The inherited attribute RelatedObjects gives the references to the objects, which are the elements within the group.
 *
 * The RelatingGroup is the group that comprises all elements.
 *
 * The same object or object type can be included in zero, one or many groups.
 *
 * Grouping relationships are not hierarchical
 *
 * Informal Propositions:
 */
 class IfcRelAssignsToGroup extends IfcRelAssigns {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, RelatedObjects:Array<IfcObjectDefinition>, RelatedObjectsType:IfcObjectTypeEnum, RelatingGroup:IfcGroup) {
        super(GlobalId, OwnerHistory, Name, Description, RelatedObjects, RelatedObjectsType)
        this.RelatingGroup = RelatingGroup
    }
    /** Reference to group that contains all assigned group members.
    */
    RelatingGroup: IfcGroup
}

export default IfcRelAssignsToGroup