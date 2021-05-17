// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcGeographicElementType

import { IfcGeographicElementTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcRepresentationMap, IfcElementType } from './'

/** An IfcGeographicElementType is used to define an element specification of a geographic element (i.e. the specific product information, that is common to all occurrences of that product type).
 *
 * Geographic element types include for different types of element that may be used to represent information within a geographical landscape external to a building.
 *
 * Within the world of geographic information they are referred to generally as 'features'.
 *
 * IfcGeographicElementType's include: The specification of the specific types are given by the inherited attribute IfcElementType
 *
 * ElementType given as an IfcLabel.
 *
 * Geographic element types are frequently identified in feature catalogs that are produced for particular purposes.
 *
 * The IfcGeographicElementType entity enables the continued use of existing feature catalogs through capture of their identity and attributes.
 *
 * Information from feature catalogs might be captured in various ways:
 */
 class IfcGeographicElementType extends IfcElementType {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, RepresentationMaps:Array<IfcRepresentationMap>, Tag:IfcLabel, ElementType:IfcLabel, PredefinedType:IfcGeographicElementTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets, RepresentationMaps, Tag, ElementType)
        this.PredefinedType = PredefinedType
    }
    /** Predefined types to define the particular type of the geographic element.
     * There may be property set definitions available for each predefined type.
    */
    PredefinedType: IfcGeographicElementTypeEnum
}

export default IfcGeographicElementType