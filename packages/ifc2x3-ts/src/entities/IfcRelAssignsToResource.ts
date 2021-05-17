// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRelAssignsToResource

import { IfcResource, IfcOwnerHistory, IfcObjectDefinition, IfcRelAssigns } from './'
import { IfcGloballyUniqueId, IfcLabel, IfcText, IfcObjectTypeEnum } from '../types'

/** The objectified relationship IfcRelAssignsToResource handles the assignment of objects (as subtypes of IfcObject), acting as a resource usage or consumption, to a resource (as subtypes of IfcResource).
 */
 class IfcRelAssignsToResource extends IfcRelAssigns {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, RelatedObjects:Array<IfcObjectDefinition>, RelatedObjectsType:IfcObjectTypeEnum, RelatingResource:IfcResource) {
        super(GlobalId, OwnerHistory, Name, Description, RelatedObjects, RelatedObjectsType)
        this.RelatingResource = RelatingResource
    }
    /** Reference to the resource to which the objects are assigned to.
     * IFC4 CHANGE Datatype expanded to include IfcResource and IfcTypeResource.
    */
    RelatingResource: IfcResource
}

export default IfcRelAssignsToResource