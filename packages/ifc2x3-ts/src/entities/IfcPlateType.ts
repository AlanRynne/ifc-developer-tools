// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcPlateType

import { IfcPlateTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcBuildingElementType } from './'

/** The element type IfcPlateType defines commonly shared information for occurrences of plates.
 *
 * The set of shared information may include:It is used to define a plate specification (i.e. the specific product information, that is common to all occurrences of that product type).
 *
 * Plate types may be exchanged without being already assigned to occurrences
 *
 * The occurrences of the IfcPlateType within building models are represented by instances of IfcPlateStandardCase if the IfcPlateType has a single associated IfcMaterialLayerSet; otherwise they are represented by instances of IfcPlate
 *
 * Informal Propositions:
 */
 class IfcPlateType extends IfcBuildingElementType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcLabel, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcPlateTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** Identifies the predefined types of a planar member element from which the type required may be set.
    */
    PredefinedType: IfcPlateTypeEnum
}

export default IfcPlateType