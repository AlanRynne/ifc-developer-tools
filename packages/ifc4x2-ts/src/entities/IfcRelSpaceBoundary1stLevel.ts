// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRelSpaceBoundary1stLevel

import { IfcGloballyUniqueId, IfcLabel, IfcText, IfcSpaceBoundarySelect, IfcPhysicalOrVirtualEnum, IfcInternalOrExternalEnum } from '../types'
import { IfcOwnerHistory, IfcElement, IfcConnectionGeometry, IfcRelSpaceBoundary } from './'

/** The 1st level space boundary defines the physical or virtual delimiter of a space by the relationship IfcRelSpaceBoundary1stLevel to the surrounding elements.
 *
 * 1st level space boundaries are characterizeda by:1st level space boundaries define a space by its boundary surfaces without taking anything on the other side of the bounding elements into account
 *
 * Relationship Use DefinitionsAs shown in Figure 177, the attribute ParentBoundary with inverse InnerBoundaries is provided to link the space boundaries of doors, windows, and openings to the parent boundary, such as of a wall or slab
 *
 * Geometry Use DefinitionsSee the definition at the supertype IfcRelSpaceBoundary for guidance on using the connection geometry for first level space boundaries.
 */
 class IfcRelSpaceBoundary1stLevel extends IfcRelSpaceBoundary {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, RelatingSpace:IfcSpaceBoundarySelect, RelatedBuildingElement:IfcElement, ConnectionGeometry:IfcConnectionGeometry, PhysicalOrVirtualBoundary:IfcPhysicalOrVirtualEnum, InternalOrExternalBoundary:IfcInternalOrExternalEnum, ParentBoundary:IfcRelSpaceBoundary1stLevel) {
        super(GlobalId, OwnerHistory, Name, Description, RelatingSpace, RelatedBuildingElement, ConnectionGeometry, PhysicalOrVirtualBoundary, InternalOrExternalBoundary)
        this.ParentBoundary = ParentBoundary
    }
    /** Reference to the host, or parent, space boundary within which this inner boundary is defined.
    */
    ParentBoundary?: IfcRelSpaceBoundary1stLevel
}

export default IfcRelSpaceBoundary1stLevel