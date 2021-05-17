// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcWallType

import { IfcWallTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcBuiltElementType } from './'

/** The element type IfcWallType defines commonly shared information for occurrences of walls.
 *
 * The set of shared information may include:It is used to define a wall specification (i.e. the specific product information, that is common to all occurrences of that product type).
 *
 * Wall types may be exchanged without being already assigned to occurrences
 *
 * Occurrences of the IfcWallType within building models are represented by instances of IfcWallStandardCase if the IfcWallType has a single associated IfcMaterialLayerSet; otherwise they are represented by instances of IfcWall, or IfcWallElementedCase.
 *
 * Occurrences of the IfcWallType within structural analysis models are represented by instances of IfcStructuralSurfaceMember, or its applicable subtypes
 *
 * Informal Propositions:
 */
 class IfcWallType extends IfcBuiltElementType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcWallTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** Identifies the predefined types of a wall element from which the type required may be set.
    */
    PredefinedType: IfcWallTypeEnum
}

export default IfcWallType