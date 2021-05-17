// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcExtrudedAreaSolid

import { IfcDirection, IfcProfileDef, IfcAxis2Placement3D, IfcSweptAreaSolid } from './'
import { IfcPositiveLengthMeasure } from '../types'

/** The IfcExtrudedAreaSolid is defined by sweeping a cross section provided by a profile definition.
 *
 * The direction of the extrusion is given by the ExtrudedDirection attribute and the length of the extrusion is given by the Depth attribute.
 *
 * If the planar area has inner boundaries (holes defined), then those holes shall be swept into holes of the solid.
 *
 * The resulting solid is positioned by the IfcSweptAreaSolid
 *
 * Position relative to the object coordinate system.
 *
 * If provided, it allows to reposition the extruded solid.
 *
 * If not provided, it defaults to the current object coordinate system.
 *
 * The ExtrudedDirection is given within the position coordinate system as defined by IfcSweptAreaSolid.Position.
 *
 * The extruded direction can be any direction which is not perpendicular to the z axis of the position coordinate system.
 *
 * Texture use definitionFor side faces, textures are aligned facing upright continuously along the sides with origin at the first point of an arbitrary profile, and following the outer bound of the profile counter-clockwise (as seen from above).
 *
 * For parameterized profiles, the origin is defined at the +Y extent for rounded profiles (having no sharp edge) and the first sharp edge counter-clockwise from the +Y extent for all other profiles.
 *
 * Textures are stretched or repeated on each side along the outer boundary of the profile according to RepeatS.
 *
 * Textures are stretched or repeated on each side along the extrusion axis according to RepeatT
 *
 * For top and bottom caps, textures are aligned facing front-to-back, with the origin at the minimum X and Y extent.
 *
 * Textures are stretched or repeated on the top and bottom to the extent of each face according to RepeatS and RepeatT
 *
 * For profiles with voids, textures are aligned facing upright along the inner side with origin at the first point of an arbitrary profile, and following the inner bound of the profile clockwise (as seen from above).
 *
 * For parameterized profiles, the origin of inner sides is defined at the +Y extent for rounded profiles (having no sharp edge such as hollow ellipses or rounded rectangles) and the first sharp edge clockwise from the +Y extent for all other profiles.
 */
 class IfcExtrudedAreaSolid extends IfcSweptAreaSolid {
    constructor(SweptArea:IfcProfileDef, Position:IfcAxis2Placement3D, ExtrudedDirection:IfcDirection, Depth:IfcPositiveLengthMeasure) {
        super(SweptArea, Position)
        this.ExtrudedDirection = ExtrudedDirection
        this.Depth = Depth
    }
    /** The direction in which the surface, provided by SweptArea is to be swept.
    */
    ExtrudedDirection: IfcDirection
    /** The distance the surface is to be swept along the ExtrudedDirection.
    */
    Depth: IfcPositiveLengthMeasure
}

export default IfcExtrudedAreaSolid