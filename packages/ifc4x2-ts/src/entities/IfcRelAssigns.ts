// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRelAssigns

import { IfcObjectDefinition, IfcOwnerHistory, IfcRelationship } from './'
import { IfcObjectTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'

/** The assignment relationship, IfcRelAssigns, is a generalization of "link" relationships among instances of IfcObject and its various 1st level subtypes.
 *
 * A link denotes the specific association through which one object (the client) applies the services of other objects (the suppliers), or through which one object may navigate to other objects
 *
 * The client is denoted as the relating object and is established at the level of the specific, instantiable subtypes of IfcRelAssigns.
 *
 * The suppliers are denoted as the related objects and they are established by the RelatedObjects attribute
 *
 * The assignment relationship establishs a bi-directional relationship among the participating objects and does not imply any dependency.
 *
 * The subtypes of IfcRelAssigns establishes the particular semantic meaning of the assignment relationship.
 */
abstract class IfcRelAssigns extends IfcRelationship {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, RelatedObjects:Array<IfcObjectDefinition>, RelatedObjectsType:IfcObjectTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description)
        this.RelatedObjects = RelatedObjects
        this.RelatedObjectsType = RelatedObjectsType
    }
    /** Related objects, which are assigned to a single object.
     * The type of the single (or relating) object is defined in the subtypes of IfcRelAssigns.
    */
    RelatedObjects: Array<IfcObjectDefinition>
    /** Particular type of the assignment relationship.
     * It can constrain the applicable object types, used within the role of RelatedObjects.
     * IFC4 CHANGE The attribute is deprecated and shall no longer be used.
     * A NIL value should always be assigned.
    */
    RelatedObjectsType?: IfcObjectTypeEnum
}

export default IfcRelAssigns