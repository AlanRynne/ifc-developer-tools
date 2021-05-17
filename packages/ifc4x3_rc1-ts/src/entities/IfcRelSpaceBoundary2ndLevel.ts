// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRelSpaceBoundary2ndLevel

import { IfcGloballyUniqueId, IfcLabel, IfcText, IfcSpaceBoundarySelect, IfcPhysicalOrVirtualEnum, IfcInternalOrExternalEnum } from '../types'
import { IfcOwnerHistory, IfcElement, IfcConnectionGeometry, IfcRelSpaceBoundary1stLevel } from './'

/** The 2nd level space boundary defines the physical or virtual delimiter of a space by the relationship IfcRelSpaceBoundary2ndLevel to the surrounding elements.
 *
 * 2nd level space boundaries are characterized by:2nd level space boundaries define the heat transfer surfaces on both sides of building elements that separate spaces.
 *
 * The generation of 2nd level space boundaries has to take building elements and spaces on the other side into account
 *
 * Relationship Use DefinitionsAs shown in Figure 178, the attribute ParentBoundary with inverse InnerBoundaries is provided to link the space boundaries of doors, windows, and openings to the parent boundary, such as of a wall or slab
 *
 * The attribute CorrespondingBoundary with inverse Corresponds is provided to link the pair of space boundaries on the opposite sides of the building element
 *
 * Geometry Use DefinitionsSee the definition at the supertype IfcRelSpaceBoundary for guidance on using the connection geometry for second level space boundaries.
 */
 class IfcRelSpaceBoundary2ndLevel extends IfcRelSpaceBoundary1stLevel {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, RelatingSpace:IfcSpaceBoundarySelect, RelatedBuildingElement:IfcElement, ConnectionGeometry:IfcConnectionGeometry, PhysicalOrVirtualBoundary:IfcPhysicalOrVirtualEnum, InternalOrExternalBoundary:IfcInternalOrExternalEnum, ParentBoundary:IfcRelSpaceBoundary1stLevel, CorrespondingBoundary:IfcRelSpaceBoundary2ndLevel) {
        super(GlobalId, OwnerHistory, Name, Description, RelatingSpace, RelatedBuildingElement, ConnectionGeometry, PhysicalOrVirtualBoundary, InternalOrExternalBoundary, ParentBoundary)
        this.CorrespondingBoundary = CorrespondingBoundary
    }
    /** Reference to the other space boundary of the pair of two space boundaries on either side of a space separating thermal boundary element.
    */
    CorrespondingBoundary?: IfcRelSpaceBoundary2ndLevel
}

export default IfcRelSpaceBoundary2ndLevel