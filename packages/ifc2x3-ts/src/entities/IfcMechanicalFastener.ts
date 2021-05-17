// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcMechanicalFastener

import { IfcPositiveLengthMeasure, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcFastener } from './'

/** A mechanical fasteners connecting building elements or parts mechanically.
 *
 * A single instance of this class may represent one or many of actual mechanical fasteners, for example an array of bolts or a row of nails.
 */
 class IfcMechanicalFastener extends IfcFastener {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier, NominalDiameter:IfcPositiveLengthMeasure, NominalLength:IfcPositiveLengthMeasure) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag)
        this.NominalDiameter = NominalDiameter
        this.NominalLength = NominalLength
    }
    /** The nominal diameter describing the cross-section size of the fastener type.
     * IFC4 CHANGE Deprecated; the respective attribute of IfcMechanicalFastenerType should be used instead.
    */
    NominalDiameter?: IfcPositiveLengthMeasure
    /** The nominal length describing the longitudinal dimensions of the fastener type.
     * IFC4 CHANGE Deprecated; the respective attribute of IfcMechanicalFastenerType should be used instead.
    */
    NominalLength?: IfcPositiveLengthMeasure
}

export default IfcMechanicalFastener