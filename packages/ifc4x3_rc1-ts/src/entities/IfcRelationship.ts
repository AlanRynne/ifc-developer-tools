// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRelationship

import { IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcRoot } from './'

/** IfcRelationship is the abstract generalization of all objectified relationships in IFC.
 *
 * Objectified relationships are the preferred way to handle relationships among objects.
 *
 * This allows to keep relationship specific properties directly at the relationship and opens the possibility to later handle relationship specific behavior.
 *
 * There are two different types of relationships, 1-to-1 relationships and 1-to-many relationship.
 *
 * used within the subtypes of IfcRelationship.
 *
 * The following convention applies to all subtypes:
 */
abstract class IfcRelationship extends IfcRoot {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText) {
        super(GlobalId, OwnerHistory, Name, Description)

    }

}

export default IfcRelationship