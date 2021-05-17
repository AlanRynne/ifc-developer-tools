// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcSpace

import { IfcInternalOrExternalEnum, IfcLengthMeasure, IfcGloballyUniqueId, IfcLabel, IfcText, IfcElementCompositionEnum } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcSpatialStructureElement } from './'

/** A space represents an area or volume bounded actually or theoretically.
 *
 * Spaces are areas or volumes that provide for certain functions within a building
 *
 * A space is associated to a building storey (or in case of exterior spaces to a site).
 *
 * A space may span over several connected spaces.
 *
 * Therefore a space group provides for a collection of spaces included in a storey.
 *
 * A space can also be decomposed in parts, where each part defines a partial space.
 *
 * This is defined by the CompositionType attribute of the supertype IfcSpatialStructureElement which is interpreted as follow:The IfcSpace is used to build the spatial structure of a building (that serves as the primary project breakdown and is required to be hierarchical).
 *
 * The spatial structure elements are linked together by using the objectified relationship IfcRelAggregates
 *
 * Figure 187 shows the IfcSpace as part of the spatial structure.
 *
 * It also serves as the spatial container for space related elements
 *
 * The following guidelines should apply for using the Name, Description, LongName and ObjectType attributes
 *
 * Figure 188 describes the heights and elevations of the IfcSpace.
 */
 class IfcSpace extends IfcSpatialStructureElement {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, LongName:IfcLabel, CompositionType:IfcElementCompositionEnum, InteriorOrExteriorSpace:IfcInternalOrExternalEnum, ElevationWithFlooring:IfcLengthMeasure) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, LongName, CompositionType)
        this.InteriorOrExteriorSpace = InteriorOrExteriorSpace
        this.ElevationWithFlooring = ElevationWithFlooring
    }
    /** undefined
    */
    InteriorOrExteriorSpace: IfcInternalOrExternalEnum
    /** Level of flooring of this space; the average shall be taken, if the space ground surface is sloping or if there are level differences within this space.
    */
    ElevationWithFlooring?: IfcLengthMeasure
}

export default IfcSpace