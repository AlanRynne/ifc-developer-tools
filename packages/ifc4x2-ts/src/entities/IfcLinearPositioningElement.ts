// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcLinearPositioningElement

import { IfcCurve, IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcPositioningElement } from './'
import { IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'

/** An IfcLinearPositioningElement is an abstract entity describing positioning according to a curve.
 */
 class IfcLinearPositioningElement extends IfcPositioningElement {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Axis:IfcCurve) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation)
        this.Axis = Axis
    }
    /** The curve to be used for positioning.
    */
    Axis: IfcCurve
}

export default IfcLinearPositioningElement