// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcSpatialElement

import { IfcLabel, IfcGloballyUniqueId, IfcText } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcProduct } from './'

/** A spatial element is the generalization of all spatial elements that might be used to define a spatial structure or to define spatial zones.
 */
abstract class IfcSpatialElement extends IfcProduct {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, LongName:IfcLabel) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation)
        this.LongName = LongName
    }
    /** Long name for a spatial structure element, used for informal purposes.
     * It should be used, if available, in conjunction with the inherited Name attribute.
     * In many scenarios the Name attribute refers to the short name or number of a spacial element, and the LongName refers to the full descriptive name.
    */
    LongName?: IfcLabel
}

export default IfcSpatialElement