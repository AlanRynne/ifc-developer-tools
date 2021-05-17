// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRelAssignsToControl

import { IfcControl, IfcOwnerHistory, IfcObjectDefinition, IfcRelAssigns } from './'
import { IfcGloballyUniqueId, IfcLabel, IfcText, IfcObjectTypeEnum } from '../types'

/** The objectified relationship IfcRelAssignsToControl handles the assignment of a control (represented by subtypes of IfcControl) to other objects (represented by subtypes of IfcObject, with the exception of controls).
 */
 class IfcRelAssignsToControl extends IfcRelAssigns {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, RelatedObjects:Array<IfcObjectDefinition>, RelatedObjectsType:IfcObjectTypeEnum, RelatingControl:IfcControl) {
        super(GlobalId, OwnerHistory, Name, Description, RelatedObjects, RelatedObjectsType)
        this.RelatingControl = RelatingControl
    }
    /** Reference to the IfcControl that applies a control upon objects.
    */
    RelatingControl: IfcControl
}

export default IfcRelAssignsToControl