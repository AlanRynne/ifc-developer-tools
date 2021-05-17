// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRevolvedAreaSolid

import { IfcAxis1Placement, IfcProfileDef, IfcAxis2Placement3D, IfcSweptAreaSolid } from './'
import { IfcPlaneAngleMeasure } from '../types'

/** An IfcRevolvedAreaSolid is a solid created by revolving a cross section provided by a profile definition about an axis
 *
 * The resulting solid is positioned by the IfcSweptAreaSolid
 *
 * Position relative to the object coordinate system.
 *
 * If provided, it allows to reposition the revolved solid.
 *
 * If not provided, it defaults to the current object coordinate system.
 *
 * The axis and the cross section shall be in the same plane, prior to any repositioning
 *
 * Informal Propositions:Texture Use DefinitionFor side faces, textures are aligned facing upright along the sides with origin at the first point of an arbitrary profile, and following the outer bound of the profile counter-clockwise (as seen from above).
 *
 * For parameterized profiles, the origin is defined at the +Y extent for rounded profiles (having no sharp edge) and the first sharp edge counter-clockwise from the +Y extent for all other profiles.
 *
 * Textures are stretched or repeated on each side along the outer boundary of the profile according to RepeatS.
 *
 * Textures are stretched or repeated on each side along the outermost (longest) revolution path according to RepeatT, where coordinates are compressed towards the axis of revolution
 *
 * For top and bottom caps, textures are aligned facing front-to-back, with the origin at the minimum X and Y extent.
 *
 * Textures are stretched or repeated on the top and bottom to the extent of each face according to RepeatS and RepeatT
 *
 * For profiles with voids, textures are aligned facing upright along the inner side with origin at the first point of an arbitrary profile, and following the inner bound of the profile clockwise (as seen from above).
 *
 * For parameterized profiles, the origin of inner sides is defined at the +Y extent for rounded profiles (having no sharp edge such as hollow ellipses or rounded rectangles) and the first sharp edge clockwise from the +Y extent for all other profiles.
 */
 class IfcRevolvedAreaSolid extends IfcSweptAreaSolid {
    constructor(SweptArea:IfcProfileDef, Position:IfcAxis2Placement3D, Axis:IfcAxis1Placement, Angle:IfcPlaneAngleMeasure) {
        super(SweptArea, Position)
        this.Axis = Axis
        this.Angle = Angle
    }
    /** Axis about which revolution will take place.
    */
    Axis: IfcAxis1Placement
    /** The angle through which the sweep will be made.
     * This angle is measured from the plane of the swept area provided by the XY plane of the position coordinate system.
    */
    Angle: IfcPlaneAngleMeasure
}

export default IfcRevolvedAreaSolid