// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcLocalPlacement

import { IfcAxis2Placement } from '../types'
import { IfcObjectPlacement } from './'

/** An IfcLocalPlacement defines the relative placement of a product in relation to the placement of another product or the absolute placement of a product within the geometric representation context of the project.
 *
 * The IfcLocalPlacement allows that an IfcProduct can be placed by this IfcLocalPlacement (through the attributeObjectPlacement) within the local coordinate system of the object placement of another IfcProduct, which is referenced by the PlacementRelTo.
 *
 * Rules to prevent cyclic relative placements have to be introduced on the application level
 *
 * If the PlacementRelTo is not given, then the IfcProduct is placed absolutely within the world coordinate system
 *
 * The following conventions shall apply as default relative positions if the relative placement is used.
 *
 * The conventions are given for all five direct subtypes of IfcProduct, the IfcSpatialStructureElement, IfcElement, IfcAnnotation, IfcGrid, IfcPort.
 *
 * More detailed placement information is given at the level of subtypes of those five types mentioned.
 */
 class IfcLocalPlacement extends IfcObjectPlacement {
    constructor(PlacementRelTo:IfcObjectPlacement, RelativePlacement:IfcAxis2Placement) {
        super(PlacementRelTo)
        this.RelativePlacement = RelativePlacement
    }
    /** Geometric placement that defines the transformation from the related coordinate system into the relating.
     * The placement can be either 2D or 3D, depending on the dimension count of the coordinate system.
    */
    RelativePlacement: IfcAxis2Placement
}

export default IfcLocalPlacement