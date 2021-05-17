// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcMechanicalFastenerType

import { IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcFastenerType } from './'

/** The element component type IfcMechanicalFastenerType defines commonly shared information for occurrences of mechanical fasteners.
 *
 * The set of shared information may include: It is used to define a mechanical fastener type specification indicating the specific product information that is common to all occurrences of that product type.
 *
 * The IfcMechanicalFastenerType may be declared within IfcProject or IfcProjectLibrary using IfcRelDeclares and may be exchanged with or without occurrences of the type.
 *
 * Occurrences of IfcMechanicalFastenerType are represented by instances of IfcMechanicalFastener
 *
 * Classification Use DefinitionMechanical fasteners, especially bolts, are often standardized.
 *
 * To refer to a formal fastener designation according to a standard (a product norm), IfcRelAssociatesClassification together with IfcClassificationReference should be used
 *
 * Furthermore, IfcRelAssociatesLibrary together with IfcLibraryReference may be used to refer to a library which contains fastener definitions.
 */
 class IfcMechanicalFastenerType extends IfcFastenerType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcLabel, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)

    }

}

export default IfcMechanicalFastenerType