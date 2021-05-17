// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcSpaceProgram

import { IfcIdentifier, IfcAreaMeasure, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcSpatialStructureElement, IfcOwnerHistory, IfcControl } from './'

/**  */
 class IfcSpaceProgram extends IfcControl {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, SpaceProgramIdentifier:IfcIdentifier, MaxRequiredArea:IfcAreaMeasure, MinRequiredArea:IfcAreaMeasure, RequestedLocation:IfcSpatialStructureElement, StandardRequiredArea:IfcAreaMeasure) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType)
        this.SpaceProgramIdentifier = SpaceProgramIdentifier
        this.MaxRequiredArea = MaxRequiredArea
        this.MinRequiredArea = MinRequiredArea
        this.RequestedLocation = RequestedLocation
        this.StandardRequiredArea = StandardRequiredArea
    }

    SpaceProgramIdentifier: IfcIdentifier

    MaxRequiredArea?: IfcAreaMeasure

    MinRequiredArea?: IfcAreaMeasure

    RequestedLocation?: IfcSpatialStructureElement

    StandardRequiredArea: IfcAreaMeasure
}

export default IfcSpaceProgram