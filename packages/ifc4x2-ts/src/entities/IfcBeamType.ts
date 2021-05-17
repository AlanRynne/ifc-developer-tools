// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcBeamType

import { IfcBeamTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcBuildingElementType } from './'

/** The element type IfcBeamType defines commonly shared information for occurrences of beams.
 *
 * The set of shared information may include:It is used to define a beam specification, or beam style (the specific product information that is common to all occurrences of that beam type).
 *
 * Beam types may be exchanged without being already assigned to occurrences
 *
 * Occurrences of the IfcBeamType within building models are represented by instances of IfcBeamStandardCase if the IfcBeamType has a single associated IfcMaterialProfileSet; otherwise they are represented by instances of IfcBeam.
 *
 * Occurrences of the IfcBeamType within structural analysis models are represented by instances of IfcStructuralCurveMember, or its applicable subtypes.
 */
 class IfcBeamType extends IfcBuildingElementType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcBeamTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** Identifies the predefined types of a beam element from which the type required may be set.
    */
    PredefinedType: IfcBeamTypeEnum
}

export default IfcBeamType