// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcDerivedProfileDef

import { IfcProfileDef, IfcCartesianTransformationOperator2D } from './'
import { IfcLabel, IfcProfileTypeEnum } from '../types'

/** IfcDerivedProfileDef defines the profile by transformation from the parent profile.
 *
 * The transformation is given by a two dimensional transformation operator.
 *
 * Transformation includes translation, rotation, mirror and scaling.
 *
 * The latter can be uniform or non uniform.
 *
 * The derived profiles may be used to define swept surfaces, swept area solids or sectioned spines
 *
 * The transformation effects the position, rotation, mirroring or scale of the profile at the underlying coordinate system, i.e. the coordinate system defined by the swept surface or swept area solid that uses the profile definition.
 *
 * It is the xy plane of either: or in case of sectioned spines the xy plane of each list member of IfcSectionedSpine.CrossSectionPositions.
 *
 * The position and potential rotation of the ParentProfile within the underlying coordinate system is taken into consideration before applying the Cartesian transformation operator
 *
 * Note, if only mirroring is required, IfcMirroredProfileDef should be used instead
 *
 * Figure 420 illustrates examples of derived profiles.
 */
 class IfcDerivedProfileDef extends IfcProfileDef {
    constructor(ProfileType:IfcProfileTypeEnum, ProfileName:IfcLabel, ParentProfile:IfcProfileDef, Operator:IfcCartesianTransformationOperator2D, Label:IfcLabel) {
        super(ProfileType, ProfileName)
        this.ParentProfile = ParentProfile
        this.Operator = Operator
        this.Label = Label
    }
    /** The parent profile provides the origin of the transformation.
    */
    ParentProfile: IfcProfileDef
    /** Transformation operator applied to the parent profile.
    */
    Operator: IfcCartesianTransformationOperator2D
    /** The name by which the transformation may be referred to.
     * The actual meaning of the name has to be defined in the context of applications.
    */
    Label?: IfcLabel
}

export default IfcDerivedProfileDef