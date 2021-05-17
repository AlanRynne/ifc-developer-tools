// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcGridPlacement

import { IfcVirtualGridIntersection, IfcObjectPlacement } from './'
import { IfcGridPlacementDirectionSelect } from '../types'

/** IfcGridPlacement provides a specialization of IfcObjectPlacement in which the placement and axis direction of the object coordinate system is defined by a reference to the design grid as defined in IfcGrid
 *
 * The location of the object coordinate system is given by the attribute PlacementLocation.
 *
 * It is defined as an IfcVirtualGridIntersection, that is, an intersection between two grid axes with optional offsets
 *
 * The axis direction of the x-axis of the object coordinate system is given either:The direction of the y-axis of the IfcGridPlacement is the orthogonal complement to the x-axis.
 *
 * The plane defined by the x and y axis shall be co-planar to the xy plane of the local placement of the IfcGrid.
 *
 * The direction of the z-axis is the orientation of the cross product of the x-axis and the y-axis, i.e. the z-axis of the IfcGridPlacement shall be co-linear to the z-axis of the local placement of the IfcGrid
 *
 * The following figures show the usage of placement location and direction for an IfcGridPlacement.
 */
 class IfcGridPlacement extends IfcObjectPlacement {
    constructor(PlacementRelTo:IfcObjectPlacement, PlacementLocation:IfcVirtualGridIntersection, PlacementRefDirection:IfcGridPlacementDirectionSelect) {
        super(PlacementRelTo)
        this.PlacementLocation = PlacementLocation
        this.PlacementRefDirection = PlacementRefDirection
    }
    /** Placement of the object coordinate system defined by the intersection of two grid axes.
    */
    PlacementLocation: IfcVirtualGridIntersection
    /** Reference to either an explicit direction, or a second grid axis intersection, which defines the orientation of the grid placement.
     * IFC4 CHANGE The select of an explict direction has been added.
    */
    PlacementRefDirection?: IfcGridPlacementDirectionSelect
}

export default IfcGridPlacement