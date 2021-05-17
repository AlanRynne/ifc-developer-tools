// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcReinforcingElementType

import { IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcElementComponentType } from './'

/** The element component type IfcReinforcingElementType defines commonly shared information for occurrences of reinforcing elements.
 *
 * The set of shared information may include: It is used to define a reinforcing element type specification indicating the specific product information that is common to all occurrences of that product type.
 *
 * The IfcReinforcingElementType may be declared within IfcProject or IfcProjectLibrary using IfcRelDeclares and may be exchanged with or without occurrences of the type.
 *
 * Occurrences of IfcReinforcingElementType are represented by instances of IfcReinforcingElement
 *
 * Material Use DefinitionAn associated material denotes the steel grade, preferrably using material classification.
 */
abstract class IfcReinforcingElementType extends IfcElementComponentType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)

    }

}

export default IfcReinforcingElementType