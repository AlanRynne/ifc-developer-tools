// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcMaterialProfileSet

import { IfcLabel, IfcText } from '../types'
import { IfcMaterialProfile, IfcCompositeProfileDef, IfcMaterialDefinition } from './'

/** The IfcMaterialProfileSet is a designation by which individual material(s) of a prismatic element (for example, beam or column) constructed of a single or multiple material profiles is known.
 */
 class IfcMaterialProfileSet extends IfcMaterialDefinition {
    constructor(Name:IfcLabel, Description:IfcText, MaterialProfiles:Array<IfcMaterialProfile>, CompositeProfile:IfcCompositeProfileDef) {
        super()
        this.Name = Name
        this.Description = Description
        this.MaterialProfiles = MaterialProfiles
        this.CompositeProfile = CompositeProfile
    }
    /** The name by which the material profile set is known.
    */
    Name?: IfcLabel
    /** Definition of the material profile set in descriptive terms.
    */
    Description?: IfcText
    /** Identification of the profiles from which the material profile set is composed.
    */
    MaterialProfiles: Array<IfcMaterialProfile>
    /** Reference to the composite profile definition for which this material profile set associates material to each of its individual profiles.
     * If only a single material profile is used (the most typical case) then no CompositeProfile is asserted.
     * The referenced IfcCompositeProfileDef instance shall be composed of all of the IfcProfileDef instances which are used via the MaterialProfiles list in the current IfcMaterialProfileSet.
    */
    CompositeProfile?: IfcCompositeProfileDef
}

export default IfcMaterialProfileSet