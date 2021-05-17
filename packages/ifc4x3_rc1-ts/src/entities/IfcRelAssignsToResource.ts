// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRelAssignsToResource

import { IfcResourceSelect, IfcGloballyUniqueId, IfcLabel, IfcText, IfcObjectTypeEnum } from '../types'
import { IfcOwnerHistory, IfcObjectDefinition, IfcRelAssigns } from './'

/** The objectified relationship IfcRelAssignsToResource handles the assignment of objects (as subtypes of IfcObject), acting as a resource usage or consumption, to a resource (as subtypes of IfcResource).
 */
 class IfcRelAssignsToResource extends IfcRelAssigns {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, RelatedObjects:Array<IfcObjectDefinition>, RelatedObjectsType:IfcObjectTypeEnum, RelatingResource:IfcResourceSelect) {
        super(GlobalId, OwnerHistory, Name, Description, RelatedObjects, RelatedObjectsType)
        this.RelatingResource = RelatingResource
    }
    /** Reference to the resource to which the objects are assigned to.
     * IFC4 CHANGE Datatype expanded to include IfcResource and IfcTypeResource.
    */
    RelatingResource: IfcResourceSelect
}

export default IfcRelAssignsToResource