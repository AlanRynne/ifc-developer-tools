// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcGroup

import { IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcObject } from './'

/** IfcGroup is an generalization of any arbitrary group.
 *
 * A group is a logical collection of objects.
 *
 * It does not have its own position, nor can it hold its own shape representation.
 *
 * Therefore a group is an aggregation under some non-geometrical / topological grouping aspects
 *
 * A group can hold any collection of objects, the relationship IfcRelAssignsToGroup is used to establish the group collection.
 *
 * Objects within a group are products, processes, controls, resources, actors or other groups, thus groups can be nested.
 *
 * An object can be part of zero, one, or many groups.
 *
 * Grouping relationships are not required to be hierarchical nor do they imply a dependency
 *
 * Groups are assigned to other objects (such as a process or a resource) by the relationship object that refers to the corresponding object:A group can be exchanged without having already objects within the group collection
 *
 * IfcGroup does not define an own object coordinate system, nor does it have an independent shape representation.
 */
 class IfcGroup extends IfcObject {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType)

    }

}

export default IfcGroup