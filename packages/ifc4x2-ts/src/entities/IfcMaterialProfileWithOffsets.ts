// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcMaterialProfileWithOffsets

import { IfcLengthMeasure, IfcLabel, IfcText, IfcInteger } from '../types'
import { IfcMaterial, IfcProfileDef, IfcMaterialProfile } from './'

/** IfcMaterialProfileWithOffsets is a specialization of IfcMaterialProfile with additional longitudinal offsets 
 *
 * Relative positions of IfcMaterialProfileWithOffsets in the longitudinal direction of an element can be defined giving offsets at the start at the end, or at start and end.
 *
 * This shall not be used for relative positions of individual profiles in the plane of profile definition, which is given in composite profile definition itself.
 *
 * Also, care should be taken especially when used with IfcMaterialProfileSetUsageTapering for correct start and end offset assignment.
 */
 class IfcMaterialProfileWithOffsets extends IfcMaterialProfile {
    constructor(Name:IfcLabel, Description:IfcText, Material:IfcMaterial, Profile:IfcProfileDef, Priority:IfcInteger, Category:IfcLabel, OffsetValues:Array<IfcLengthMeasure>) {
        super(Name, Description, Material, Profile, Priority, Category)
        this.OffsetValues = OffsetValues
    }
    /** The numerical value of profile offset, in the direction of the axis direction - always AXIS1 that is, the axis along the extrusion path.
     * The OffsetValues[1] identifies the offset from the lower position along the axis direction (normally the start of the standard extrusion), the OffsetValues[2] identifies the offset from the upper position along the axis direction (normally the end of the standard extrusion).
    */
    OffsetValues: Array<IfcLengthMeasure>
}

export default IfcMaterialProfileWithOffsets