// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcCivilElementType

import { IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcElementType } from './'

/** An IfcCivilElementType is used to define an element specification of an element used within civil engineering works.
 *
 * Civil element types include for different types of element that may be used to represent information for construction works external to a building.
 *
 * IfcCivilElementType's may include: The specification of the specific types is provided by the inherited attribute IfcElementType
 *
 * ElementType given as an IfcLabel.
 */
 class IfcCivilElementType extends IfcElementType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)

    }

}

export default IfcCivilElementType