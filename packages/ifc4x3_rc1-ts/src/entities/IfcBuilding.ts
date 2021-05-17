// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcBuilding

import { IfcLengthMeasure, IfcGloballyUniqueId, IfcLabel, IfcText, IfcElementCompositionEnum } from '../types'
import { IfcPostalAddress, IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcFacility } from './'

/** A building represents a structure that provides shelter for its occupants or contents and stands in one place.
 *
 * The building is also used to provide a basic element within the spatial structure hierarchy for the components of a building project (together with site, storey, and space)
 *
 * A building is (if specified) associated to a site.
 *
 * A building may span over several connected or disconnected buildings.
 *
 * Therefore building complex provides for a collection of buildings included in a site.
 *
 * A building can also be decomposed in (vertical) parts, where each part defines a building section.
 *
 * This is defined by the composition type attribute of the supertype IfcSpatialStructureElements which is interpreted as follow:The IfcBuilding is used to build the spatial structure of a building (that serves as the primary project breakdown and is required to be hierarchical).
 *
 * The spatial structure elements are linked together by using the objectified relationship IfcRelAggregates.
 *
 * Figure 150 shows the IfcBuilding as part of the spatial structure.
 *
 * It also serves as the spatial container for building and other elements.
 *
 * Systems, such as building service or electrical distribution systems, zonal systems, or structural analysis systems, relate to IfcBuilding by using the objectified relationship IfcRelServicesBuildings.
 *
 * Figure 151 describes the heights and elevations of the IfcBuilding.
 *
 * It is used to provide the height above sea level of the project height datum for this building, that is, the internal height 0.00.
 *
 * The height 0.00 is often used as a building internal reference height and equal to the floor finish level of the ground floor.
 */
 class IfcBuilding extends IfcFacility {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, LongName:IfcLabel, CompositionType:IfcElementCompositionEnum, ElevationOfRefHeight:IfcLengthMeasure, ElevationOfTerrain:IfcLengthMeasure, BuildingAddress:IfcPostalAddress) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, LongName, CompositionType)
        this.ElevationOfRefHeight = ElevationOfRefHeight
        this.ElevationOfTerrain = ElevationOfTerrain
        this.BuildingAddress = BuildingAddress
    }
    /** Elevation above sea level of the reference height used for all storey elevation measures, equals to height 0.0.
     * It is usually the ground floor level.
    */
    ElevationOfRefHeight?: IfcLengthMeasure
    /** Elevation above the minimal terrain level around the foot print of the building, given in elevation above sea level.
    */
    ElevationOfTerrain?: IfcLengthMeasure
    /** Address given to the building for postal purposes.
    */
    BuildingAddress?: IfcPostalAddress
}

export default IfcBuilding