// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcBuildingStorey

import { IfcLengthMeasure, IfcGloballyUniqueId, IfcLabel, IfcText, IfcElementCompositionEnum } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcFacilityPart } from './'

/** The building storey has an elevation and typically represents a (nearly) horizontal aggregation of spaces that are vertically bound
 *
 * A storey is (if specified) associated to a building.
 *
 * A storey may span over several connected storeys.
 *
 * Therefore storey complex provides for a collection of storeys included in a building.
 *
 * A storey can also be decomposed in (horizontical) parts, where each part defines a partial storey.
 *
 * This is defined by the composition type attribute of the supertype IfcSpatialStructureElements which is interpreted as follow:The IfcBuildingStorey is used to build the spatial structure of a building (that serves as the primary project breakdown and is required to be hierarchical).
 *
 * The spatial structure elements are linked together by using the objectified relationship IfcRelAggregates
 *
 * Figure 152 shows the IfcBuildingStorey as part of the s patial structure.
 *
 * It also serves as the spatial container for building and other elements
 *
 * Figure 153 describes the heights and elevations of the IfcBuildingStorey.
 */
 class IfcBuildingStorey extends IfcFacilityPart {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, LongName:IfcLabel, CompositionType:IfcElementCompositionEnum, Elevation:IfcLengthMeasure) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, LongName, CompositionType)
        this.Elevation = Elevation
    }
    /** Elevation of the base of this storey, relative to the 0,00 internal reference height of the building.
     * The 0.00 level is given by the absolute above sea level height by the ElevationOfRefHeight attribute given at IfcBuilding.
     * If the geometric data is provided (ObjectPlacement is specified), the Elevation value shall either not be included, or be equal to the local placement Z value.
    */
    Elevation?: IfcLengthMeasure
}

export default IfcBuildingStorey