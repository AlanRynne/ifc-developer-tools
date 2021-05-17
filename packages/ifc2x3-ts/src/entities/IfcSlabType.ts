// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcSlabType

import { IfcSlabTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcBuildingElementType } from './'

/** The element type IfcSlabType defines commonly shared information for occurrences of slabs.
 *
 * The set of shared information may include:It is used to define a slab specification (i.e. the specific product information, that is common to all occurrences of that product type).
 *
 * Slab types may be exchanged without being already assigned to occurrences
 *
 * The occurrences of the IfcSlabType within building models are represented by instances of IfcSlabStandardCase if the IfcSlabType has a single associated IfcMaterialLayerSet; otherwise they are represented by instances of IfcSlab, or IfcSlabElementedCase
 *
 * Informal Propositions:
 */
 class IfcSlabType extends IfcBuildingElementType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcLabel, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcSlabTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** Identifies the predefined types of a slab element from which the type required may be set.
    */
    PredefinedType: IfcSlabTypeEnum
}

export default IfcSlabType