// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcMaterialProfile

import { IfcLabel, IfcText, IfcInteger } from '../types'
import { IfcMaterial, IfcProfileDef, IfcMaterialDefinition } from './'

/** IfcMaterialProfile is a single and identifiable cross section of an element which is constructed of a number of profiles (one or more).
 */
 class IfcMaterialProfile extends IfcMaterialDefinition {
    constructor(Name:IfcLabel, Description:IfcText, Material:IfcMaterial, Profile:IfcProfileDef, Priority:IfcInteger, Category:IfcLabel) {
        super()
        this.Name = Name
        this.Description = Description
        this.Material = Material
        this.Profile = Profile
        this.Priority = Priority
        this.Category = Category
    }
    /** The name by which the material profile is known.
    */
    Name?: IfcLabel
    /** Definition of the material profile in descriptive terms.
    */
    Description?: IfcText
    /** Optional reference to the material from which the profile is constructed.
    */
    Material?: IfcMaterial
    /** Identification of the profile for which this material profile is associating material.
    */
    Profile: IfcProfileDef
    /** The relative priority of the profile, expressed as normalised integer range [0..100].
     * Controls how profiles intersect in connections and corners of building elements: A profile from one element protrudes into (i.e. displaces) a profile from another element in a joint of these elements if the former element's profile has higher priority than the latter.
     * The priority value for a material profile in an element has to be set and maintained by software applications in relation to the material profiles in connected elements.
    */
    Priority?: IfcInteger
    /** Category of the material profile, e.g. the role it has in the profile set it belongs to.
     * The list of keywords might be extended by model view definitions, however the following keywords shall apply in general: 'LoadBearing' — the material profile having a load bearing function.
     * 'Insulation' — the material profile having an insolating function.
     * 'Finish' — the material profile being the finish.
    */
    Category?: IfcLabel
}

export default IfcMaterialProfile