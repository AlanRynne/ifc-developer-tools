// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRelDefines

import { IfcObject, IfcOwnerHistory, IfcRelationship } from './'
import { IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'

/** A generic and abstract relationship which subtypes are used to:
 */
abstract class IfcRelDefines extends IfcRelationship {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, RelatedObjects:Array<IfcObject>) {
        super(GlobalId, OwnerHistory, Name, Description)
        this.RelatedObjects = RelatedObjects
    }
    /** undefined
    */
    RelatedObjects: Array<IfcObject>
}

export default IfcRelDefines