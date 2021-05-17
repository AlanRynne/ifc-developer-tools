// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcDiscreteAccessoryType

import { IfcDiscreteAccessoryTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcElementComponentType } from './'

/** The element component type IfcDiscreteAccessoryType defines commonly shared information for occurrences of discrete accessorys.
 *
 * The set of shared information may include: It is used to define a discrete accessory type specification indicating the specific product information that is common to all occurrences of that product type.
 *
 * The IfcDiscreteAccessoryType may be declared within IfcProject or IfcProjectLibrary using IfcRelDeclares and may be exchanged with or without occurrences of the type.
 *
 * Occurrences of IfcDiscreteAccessoryType are represented by instances of IfcDiscreteAccessory
 *
 * Type Use Definition The exact type information of the IfcDiscreteAccessoryType is given in the PredefinedType attribute, possibly in combination with the ElementType attribute inherited from IfcElementType.
 *
 * Standard ElementType designations are provided for guideline below.
 *
 * The list is not exhaustive and the list of definitions may be extended based on local agreements.
 *
 * Corbels as separate components: Connecting accessories, for example for sandwich wall panels: Electrical accessories for precast concrete elements: Fixing parts: Joint accessories: Lifting accessories: Accessories mainly used in the building services domain:
 */
 class IfcDiscreteAccessoryType extends IfcElementComponentType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcDiscreteAccessoryTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** Subtype of discrete accessory
    */
    PredefinedType: IfcDiscreteAccessoryTypeEnum
}

export default IfcDiscreteAccessoryType