// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcObjectPlacement



/** IfcObjectPlacement is an abstract supertype for the special types defining the object coordinate system.
 *
 * The IfcObjectPlacement has to be provided for each product that has a shape representation
 *
 * The object placement can be given:In any case the object placement has to unambiguously define the object coordinate system as either two-dimensional axis placement (IfcAxis2Placement2D) or three-dimensional axis placement (IfcAxis2Placement3D).
 *
 * The axis placement may have to be calculated.
 */
abstract class IfcObjectPlacement  {
    constructor(PlacementRelTo:IfcObjectPlacement) {

        this.PlacementRelTo = PlacementRelTo
    }
    /** Reference to object placement that provides the relative placement with its placement in a grid, local coordinate system or linear referenced placement.
     * If it is omitted, then in the case of linear placement it is established by the origin of horizontal alignment of the referenced IfcAlignment Axis.
     * In the case of local placement it is established by the geometric representation context.
    */
    PlacementRelTo?: IfcObjectPlacement
}

export default IfcObjectPlacement