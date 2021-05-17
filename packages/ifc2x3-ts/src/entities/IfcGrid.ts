// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcGrid

import { IfcGridAxis, IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcProduct } from './'
import { IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'

/** IfcGrid ia a planar design grid defined in 3D space used as an aid in locating structural and design elements.
 *
 * The position of the grid (ObjectPlacement) is defined by a 3D coordinate system (and thereby the design grid can be used in plan, section or in any position relative to the world coordinate system).
 *
 * The position can be relative to the object placement of other products or grids.
 *
 * The XY plane of the 3D coordinate system is used to place the grid axes, which are 2D curves (for example, line, circle, arc, polyline).
 *
 * The inherited attributes Name and Description can be used to define a descriptive name of the grid and to indicate the grid's purpose.
 *
 * A grid is defined by (normally) two, or (in case of a triangular grid) three lists of grid axes.
 *
 * The following figures shows some examples.
 *
 * A grid may support a rectangular layout as shown in Figure 160, a radial layout as shown in Figure 161, or a triangular layout as shown in Figure 162.
 *
 * Informal Propositions:
 */
 class IfcGrid extends IfcProduct {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, UAxes:Array<IfcGridAxis>, VAxes:Array<IfcGridAxis>, WAxes:Array<IfcGridAxis>) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation)
        this.UAxes = UAxes
        this.VAxes = VAxes
        this.WAxes = WAxes
    }
    /** List of grid axes defining the first row of grid lines.
    */
    UAxes: Array<IfcGridAxis>
    /** List of grid axes defining the second row of grid lines.
    */
    VAxes: Array<IfcGridAxis>
    /** List of grid axes defining the third row of grid lines.
     * It may be given in the case of a triangular grid.
    */
    WAxes?: Array<IfcGridAxis>
}

export default IfcGrid