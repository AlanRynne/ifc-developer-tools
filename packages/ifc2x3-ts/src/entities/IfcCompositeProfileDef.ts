// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcCompositeProfileDef

import { IfcProfileDef } from './'
import { IfcLabel, IfcProfileTypeEnum } from '../types'

/** The IfcCompositeProfileDef defines the profile by composition of other profiles.
 *
 * The composition is given by a set of at least two other profile definitions.
 *
 * Any profile definition (except for another composite profile) can be used to construct the composite.
 *
 * Figure 314 illustrates the composite profile definition.
 *
 * The IfcCompositeProfileDef does not define an own position coordinate system, it is directly defined in the underlying coordinate system.
 *
 * The underlying coordinate system is defined by the swept surface or swept area solid that uses the profile definition.
 *
 * It is the xy plane of either:Or in case of sectioned spines it is the xy plane of each list member of IfcSectionedSpine.CrossSectionPositions.
 *
 * The IfcCompositeProfileDef is defined using other profile definitions.
 *
 * Those other profile definitions are directly inserted into the underlying coordinate system
 *
 * Twin profiles special caseIf twin profiles are modeled by profile composition, the base profile should only be specified once.
 *
 * It is then included into the composite profile directly and additionally indirectly via IfcMirroredProfileDef.
 *
 * For example, a double angle made of two L100x10 with 10mm air gap between them, i.e. a _| |_ shape, can be modeled as
 */
 class IfcCompositeProfileDef extends IfcProfileDef {
    constructor(ProfileType:IfcProfileTypeEnum, ProfileName:IfcLabel, Profiles:Array<IfcProfileDef>, Label:IfcLabel) {
        super(ProfileType, ProfileName)
        this.Profiles = Profiles
        this.Label = Label
    }
    /** The profiles which are used to define the composite profile.
    */
    Profiles: Array<IfcProfileDef>
    /** The name by which the composition may be referred to.
     * The actual meaning of the name has to be defined in the context of applications.
    */
    Label?: IfcLabel
}

export default IfcCompositeProfileDef