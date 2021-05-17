// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcTransportElementType

import { IfcTransportElementTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcElementType } from './'

/** The element type IfcTransportElementType defines commonly shared information for occurrences of transport elements.
 *
 * The set of shared information may include:It is used to define a transport element specification (i.e. the specific product information that is common to all occurrences of that beam type).
 *
 * Transport element types (or the instantiable subtypes) may be exchanged without being already assigned to occurrences
 *
 * The occurrences of the IfcTransportElementType are represented by instances of IfcTransportElement (or its subtypes).
 */
 class IfcTransportElementType extends IfcElementType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcLabel, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcTransportElementTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** Predefined types to define the particular type of the transport element.
     * There may be property set definitions available for each predefined type.
    */
    PredefinedType: IfcTransportElementTypeEnum
}

export default IfcTransportElementType