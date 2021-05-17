// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcElementAssemblyType

import { IfcElementAssemblyTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcElementType } from './'

/** The IfcElementAssemblyType defines a list of commonly shared property set definitions of an element and an optional set of product representations.
 *
 * It is used to define an element specification (i.e. the specific product information, that is common to all occurrences of that product type)
 *
 * An element assembly type is used to define the common properties of a certain type of an element assembly that may be applied to many instances of that type to assign a specific style.
 *
 * An element assembly types (or the instantiable subtypes) may be exchanged without being already assigned to occurrences
 *
 * The occurrences of the IfcElementAssemblyType are represented by instances of IfcElementAssembly.
 */
 class IfcElementAssemblyType extends IfcElementType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcElementAssemblyTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** Predefined types to define the particular type of the transport element.
     * There may be property set definitions available for each predefined type.
    */
    PredefinedType: IfcElementAssemblyTypeEnum
}

export default IfcElementAssemblyType