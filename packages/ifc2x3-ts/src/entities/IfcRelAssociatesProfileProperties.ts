// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRelAssociatesProfileProperties

import { IfcProfileProperties, IfcShapeAspect, IfcOwnerHistory, IfcRoot, IfcRelAssociates } from './'
import { IfcOrientationSelect, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'

/**  */
 class IfcRelAssociatesProfileProperties extends IfcRelAssociates {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, RelatedObjects:Array<IfcRoot>, RelatingProfileProperties:IfcProfileProperties, ProfileSectionLocation:IfcShapeAspect, ProfileOrientation:IfcOrientationSelect) {
        super(GlobalId, OwnerHistory, Name, Description, RelatedObjects)
        this.RelatingProfileProperties = RelatingProfileProperties
        this.ProfileSectionLocation = ProfileSectionLocation
        this.ProfileOrientation = ProfileOrientation
    }

    RelatingProfileProperties: IfcProfileProperties

    ProfileSectionLocation?: IfcShapeAspect

    ProfileOrientation?: IfcOrientationSelect
}

export default IfcRelAssociatesProfileProperties