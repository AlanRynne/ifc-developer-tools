// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcParameterizedProfileDef

import { IfcAxis2Placement2D, IfcProfileDef } from './'
import { IfcProfileTypeEnum, IfcLabel } from '../types'

/** The parameterized profile definition defines a 2D position coordinate system to which the parameters of the different profiles relate to.
 *
 * All profiles are defined centric to the origin of the position coordinate system, or more specific, the origin [0.,0.] shall be in the center of the bounding box of the profile
 *
 * The Position attribute of IfcParameterizedProfileDef is used to position the profile within the XY plane of the underlying coordinate system of the swept surface geometry, the swept area solid or the sectioned spine.
 *
 * It can be used to position the profile at any point which becomes the origin [0.,0.,0.] of the extruded or rotated surface or solid
 *
 * The Position attribute should not be used if the transformation can be specified in a containing object instead.
 *
 * In particular, this applies if the IfcParameterizedProfileDef is referenced as SweptArea in subtypes of IfcSweptAreaSolid or as CrossSections in IfcSectionedSpine
 *
 * Several subtypes of IfcParameterizedProfileDef provide shape parameters which are optional.
 *
 * Sending systems should always provide values for these parameters if possible.
 *
 * If these parameters are left unspecified, receiving systems may retrieve values for them by external reference (if a reference to an external document or library is given; see guidance at IfcProfileDef), or estimate them, or simply assume zero values.
 */
abstract class IfcParameterizedProfileDef extends IfcProfileDef {
    constructor(ProfileType:IfcProfileTypeEnum, ProfileName:IfcLabel, Position:IfcAxis2Placement2D) {
        super(ProfileType, ProfileName)
        this.Position = Position
    }
    /** Position coordinate system of the parameterized profile definition.
     * If unspecified, no translation and no rotation is applied.
    */
    Position: IfcAxis2Placement2D
}

export default IfcParameterizedProfileDef