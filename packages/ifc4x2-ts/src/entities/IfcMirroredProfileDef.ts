// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcMirroredProfileDef

import { IfcProfileTypeEnum, IfcLabel } from '../types'
import { IfcProfileDef, IfcCartesianTransformationOperator2D, IfcDerivedProfileDef } from './'

/** The IfcMirroredProfileDef defines the profile by mirroring the parent profile about the y axis of the parent profile coordinate system.
 *
 * That is, left and right of the parent profile are swapped
 *
 * Notes:IfcMirroredProfileDef is primarily useful together with IfcCShapeProfileDef, IfcLShapeProfileDef, IfcUShapeProfileDef, or IfcZShapeProfileDef as parent profile but can be used with other parent profile types as well
 *
 * Mirroring of an IfcParameterizedProfileDef is performed after translation and rotation according to its Position attribute.
 *
 * For example, if the parent profile's Position offsets it by half of its width to the right, then the mirrored profile will be offset by half of its width to the left
 *
 * Mirroring about the x axis, i.e. swapping top and bottom, can be achieved by mirroring about the y axis coupled with 180 degree rotation about the z axis.
 *
 * In general, rotation happens in a containing object such as IfcSweptAreaSolid, i.e. after mirroring by IfcMirroredProfileDef was performed.
 *
 * If the parent profile is an IfcParameterizedProfileDef, rotation can alternatively happen already in the parent profile by means of its Position attribute, i.e. before mirroring by IfcMirroredProfileDef was performed.
 */
 class IfcMirroredProfileDef extends IfcDerivedProfileDef {
    constructor(ProfileType:IfcProfileTypeEnum, ProfileName:IfcLabel, ParentProfile:IfcProfileDef, Operator:IfcCartesianTransformationOperator2D, Label:IfcLabel) {
        super(ProfileType, ProfileName, ParentProfile, Operator, Label)

    }

}

export default IfcMirroredProfileDef