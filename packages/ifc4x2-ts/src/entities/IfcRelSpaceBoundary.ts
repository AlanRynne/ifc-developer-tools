// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRelSpaceBoundary

import { IfcSpaceBoundarySelect, IfcPhysicalOrVirtualEnum, IfcInternalOrExternalEnum, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcElement, IfcConnectionGeometry, IfcOwnerHistory, IfcRelConnects } from './'

/** The space boundary defines the physical or virtual delimiter of a space by the relationship IfcRelSpaceBoundary to the surrounding elements
 *
 * The IfcRelSpaceBoundary is defined as an objectified relationship that handles the element to space relationship by objectifying the relationship between an element and the space it bounds.
 *
 * It is given as a one-to-one relationship, but allows each element (including virutal elements and openings) to define many such relationship and each space to be defined by many such relationships
 *
 * Space boundaries are always defined as seen from the space.
 *
 * In general two basic types of space boundaries are distinguished:The differences between the 1st and 2nd level space boundaries is identified by:Differentiation between physical and virtual space boundary is illustrated in Figure 176 and Figure 42
 *
 * As shown in Figure 41, if the IfcRelSpaceBoundary is used to express a virtual boundary, the attribute PhysicalOrVirtualBoundary has to be set to VIRTUAL.
 *
 * The attribute RelatedBuildingElement shall point to an instance of IfcVirtualElement.
 *
 * If the correct location is of interest, the attribute ConnectionGeometry is required
 *
 * As shown in Figure 42, if the IfcRelSpaceBoundary is used to express a physical boundary between two spaces, the attribute PhysicalOrVirtualBoundary has to be set to PHYSICAL.
 *
 * The attribute RelatedBuildingElement has to be given and points to the element providing the space boundary.
 *
 * The attribute ConnectionGeometry may be inserted, in this case it describes the physical space boundary geometically, or it may be omited, in that case it describes a physical space boundary logically
 *
 * The IfcRelSpaceBoundary may have geometry attached.
 *
 * If geometry is not attached, the relationship between space and building element is handled only on a logical level.
 *
 * If geometry is attached, it is given within the local coordinate systems of the space
 *
 * The geometric representation (through the ConnectionGeometry attribute) is defined using either 2D curve geometry or 3D surface geometry for space boundaries.
 *
 * In most view definitions the 3D connection surface geometry is required
 *
 * Surface connection geometryThe following constraints apply to the surface connection geometry representation:Curve connection geometryThe following constraints apply to the 2D curve representation:
 */
 class IfcRelSpaceBoundary extends IfcRelConnects {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, RelatingSpace:IfcSpaceBoundarySelect, RelatedBuildingElement:IfcElement, ConnectionGeometry:IfcConnectionGeometry, PhysicalOrVirtualBoundary:IfcPhysicalOrVirtualEnum, InternalOrExternalBoundary:IfcInternalOrExternalEnum) {
        super(GlobalId, OwnerHistory, Name, Description)
        this.RelatingSpace = RelatingSpace
        this.RelatedBuildingElement = RelatedBuildingElement
        this.ConnectionGeometry = ConnectionGeometry
        this.PhysicalOrVirtualBoundary = PhysicalOrVirtualBoundary
        this.InternalOrExternalBoundary = InternalOrExternalBoundary
    }
    /** Reference to one spaces that is delimited by this boundary.
    */
    RelatingSpace: IfcSpaceBoundarySelect
    /** Reference to Building Element, that defines the Space Boundaries.
     * IFC2x CHANGE The data type has been changed from IfcBuildingElement to IfcElement with upward compatibility for file based exchange.
     * IFC4 CHANGE The attribute has been changed to be mandatory.
    */
    RelatedBuildingElement: IfcElement
    /** Physical representation of the space boundary.
     * Provided as a curve or surface given within the LCS of the space.
     * IFC2x CHANGE The data type has been changed from IfcConnectionSurfaceGeometry to IfcConnectionGeometry with upward compatibility for file based exchange.
    */
    ConnectionGeometry?: IfcConnectionGeometry
    /** Defines, whether the Space Boundary is physical (Physical) or virtual (Virtual).
    */
    PhysicalOrVirtualBoundary: IfcPhysicalOrVirtualEnum
    /** Defines, whether the Space Boundary is internal (Internal), or external, i.e. adjacent to open space (that can be an partially enclosed space, such as terrace (External).
    */
    InternalOrExternalBoundary: IfcInternalOrExternalEnum
}

export default IfcRelSpaceBoundary