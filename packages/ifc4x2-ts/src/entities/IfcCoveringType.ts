// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcCoveringType

import { IfcCoveringTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcBuildingElementType } from './'

/** The element type IfcCoveringType defines commonly shared information for occurrences of coverings.
 *
 * The set of shared information may include:It is used to define an covering specification or covering style (i.e. the specific product information, that is common to all occurrences of that product type).
 *
 * Covering types may be exchanged without being already assigned to occurrences
 *
 * The occurrences of the IfcCoveringType are represented by instances of IfcCoveringInformal Propositions:
 */
 class IfcCoveringType extends IfcBuildingElementType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcCoveringTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** Predefined types to define the particular type of the covering.
     * There may be property set definitions available for each predefined type.
    */
    PredefinedType: IfcCoveringTypeEnum
}

export default IfcCoveringType