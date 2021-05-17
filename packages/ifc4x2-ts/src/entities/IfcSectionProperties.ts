// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcSectionProperties

import { IfcSectionTypeEnum } from '../types'
import { IfcProfileDef, IfcPreDefinedProperties } from './'

/** IfcSectionProperties defines the cross section properties for a single longitudinal piece of a cross section.
 *
 * It is a special-purpose helper class for IfcSectionReinforcementProperties
 *
 * The section piece may be either uniform or tapered.
 *
 * In the latter case an end profile should also be provided.
 *
 * The start and end profiles are assumed to be of the same profile type.
 *
 * Generally only rectangular or circular cross section profiles are assumed to be used.
 */
 class IfcSectionProperties extends IfcPreDefinedProperties {
    constructor(SectionType:IfcSectionTypeEnum, StartProfile:IfcProfileDef, EndProfile:IfcProfileDef) {
        super()
        this.SectionType = SectionType
        this.StartProfile = StartProfile
        this.EndProfile = EndProfile
    }
    /** An indicator whether a specific piece of a cross section is uniform or tapered in longitudinal direction.
    */
    SectionType: IfcSectionTypeEnum
    /** The cross section profile at the start point of the longitudinal section.
    */
    StartProfile: IfcProfileDef
    /** The cross section profile at the end point of the longitudinal section.
    */
    EndProfile?: IfcProfileDef
}

export default IfcSectionProperties