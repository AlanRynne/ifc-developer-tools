// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcFlowInstrumentType

import { IfcFlowInstrumentTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcDistributionControlElementType } from './'

/** The distribution control element type IfcFlowInstrumentType defines commonly shared information for occurrences of flow instruments.
 *
 * The set of shared information may include: It is used to define a flow instrument type specification indicating the specific product information that is common to all occurrences of that product type.
 *
 * The IfcFlowInstrumentType may be declared within IfcProject or IfcProjectLibrary using IfcRelDeclares and may be exchanged with or without occurrences of the type.
 *
 * Occurrences of IfcFlowInstrumentType are represented by instances of IfcFlowInstrument.
 *
 * Refer to the documentation at IfcFlowInstrument for supported property sets, materials, composition, and ports.
 */
 class IfcFlowInstrumentType extends IfcDistributionControlElementType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcLabel, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcFlowInstrumentTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** Identifies the predefined types of flow instrument from which the type required may be set.
    */
    PredefinedType: IfcFlowInstrumentTypeEnum
}

export default IfcFlowInstrumentType