// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcProfileDef

import { IfcProfileTypeEnum, IfcLabel } from '../types'

/** IfcProfileDef is the supertype of all definitions of standard and arbitrary profiles within IFC.
 *
 * It is used to define a standard set of commonly used section profiles by their parameters or by their explicit curve geometry
 *
 * Use in material associationBeams, columns, and similarly shaped building elements and their type objects may be associated with a section profile definition, combined with material definition, by means of IfcRelAssociatesMaterial together with IfcMaterialProfileSet and IfcMaterialProfileSetUsage.
 *
 * This way, building elements and element types with same section and material can share a common section profile definition and association
 *
 * The profile definition in material association is required to be consistent with shape representations of the respective building elements
 *
 * A higher-level description of spatial aligment of the section profile of a member (such as centered, bottom-left, in the geometric centroid, and more) can be provided within IfcMaterialProfileSetUsage by means of a cardinal point reference.
 *
 * This can be used redundant to geometric data in order to convey design intent
 *
 * Use in shape modelsProfile definitions are used within the geometry and geometric model resource to create either swept surfaces, swept area solids, or sectioned spines
 *
 * The purpose of the profile definition within the swept surfaces or swept area solids is to define a uniform cross section being swept:The purpose of the profile definition within the sectioned spine is to define a varying cross sections at several positions along a spine curve.
 *
 * The subtype IfcDerivedProfileDef is particularly suited to provide the consecutive profiles to be based on transformations of the start profile and thus maintaining the identity of vertices and edges
 *
 * An IfcProfileDef is treated as bounded area if it is used within swept area solids.
 *
 * In this case, the inside of the profile is part of the profile.
 *
 * The attribute ProfileType is set to AREA.
 *
 * An IfcProfileDef is treated as a curve if it is used within swept surfaces.
 *
 * In this case, the inside of the profile (if the curve is closed) is not part of the profile.
 *
 * The attribute ProfileType is set to CURVE
 *
 * Figure 425 illustrates use of parameterized profiles within a swept area solid
 *
 * Profile typesResults of the different usage of the ProfileType attribute are demonstrated here.
 *
 * The ProfileType defines whether the inside (the bounded area) is part of the profile definition (Area) or not (Curve).
 *
 * Figure 426 illustrates the resulting area or curve depending on ProfileType
 *
 * Profile specification by external referenceIf the profile is standardized by a norm or a catalogue, a reference to this norm or catalogue should be provided by means of HasExternalReference.
 *
 * This inverse relationship is used to associate an IfcExternalReference (notably IfcClassificationReference or IfcLibraryReference) with the profile
 *
 * IfcClassificationReference is used to refer to a profile norm (a common standard or manufacturer's standard).
 *
 * In this case,IfcLibraryReference is used to refer to a library which contains profile definitions.
 *
 * In this case,If an external reference is provided, sending systems shall ensure that the shape of the profile definition object agrees with the definitions in the referenced classification or library
 *
 * Direct instances of IfcProfileDefUsually, only subtypes of IfcProfileDef should be instantiated.
 *
 * In some special cases, e.g. if the profile object is used for purposes other than geometric models (e.g. for structural analysis models), it may be possible to directly instantiate IfcProfileDef and further specify the profile only by external reference or by profile properties.
 *
 * The latter are tracked by the inverse attribute HasProperties.
 */
 class IfcProfileDef  {
    constructor(ProfileType:IfcProfileTypeEnum, ProfileName:IfcLabel) {

        this.ProfileType = ProfileType
        this.ProfileName = ProfileName
    }
    /** Defines the type of geometry into which this profile definition shall be resolved, either a curve or a surface area.
     * In case of curve the profile should be referenced by a swept surface, in case of area the profile should be referenced by a swept area solid.
    */
    ProfileType: IfcProfileTypeEnum
    /** Human-readable name of the profile, for example according to a standard profile table.
     * As noted above, machine-readable standardized profile designations should be provided in IfcExternalReference.ItemReference.
    */
    ProfileName?: IfcLabel
}

export default IfcProfileDef