// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcBuildingElementProxyType

import { IfcBuildingElementProxyTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcBuildingElementType } from './'

/** IfcBuildingElementProxyType defines a list of commonly shared property set definitions of a building element proxy and an optional set of product representations.
 *
 * It is used to define an element specification (i.e. the specific product information, that is common to all occurrences of that product type).
 *
 * A building element proxy type is used to define the common properties of a certain type of a building element proxy that may be applied to many instances of that type to assign a specific style.
 *
 * Building element proxy types may be exchanged without being already assigned to occurrences.
 *
 * The occurrences of the IfcBuildingElementProxyType are represented by instances of IfcBuildingElementProxy.
 */
 class IfcBuildingElementProxyType extends IfcBuildingElementType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcBuildingElementProxyTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** Predefined types to define the particular type of an building element proxy.
     * There may be property set definitions available for each predefined or user defined type.
    */
    PredefinedType: IfcBuildingElementProxyTypeEnum
}

export default IfcBuildingElementProxyType