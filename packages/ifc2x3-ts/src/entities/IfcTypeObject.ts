// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcTypeObject

import { IfcLabel, IfcGloballyUniqueId, IfcText } from '../types'
import { IfcPropertySetDefinition, IfcOwnerHistory, IfcObjectDefinition } from './'

/** The object type defines the specific information about a type, being common to all occurrences of this type.
 *
 * It refers to the specific level of the well recognized generic - specific - occurrance modeling paradigm.
 *
 * The IfcTypeObject gets assigned to the individual object instances (the occurrences) via the IfcRelDefinesByType relationship
 *
 * The object type is represented by a set of property set definitions.
 *
 * The attached property sets describe the available alpha-numeric information about the object type.
 *
 * and are used to define all common properties that apply to all object occurrences of that type
 *
 * Object types may be exchanged without being already assigned to objects.
 *
 * An object type may have an indication of the library (or catalogue) from which its definition originates.
 *
 * This association is handled by the inherited HasAssociations relationship pointing to IfcRelAssociatesLibrary.
 */
 class IfcTypeObject extends IfcObjectDefinition {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcLabel, HasPropertySets:Array<IfcPropertySetDefinition>) {
        super(GlobalId, OwnerHistory, Name, Description)
        this.ApplicableOccurrence = ApplicableOccurrence
        this.HasPropertySets = HasPropertySets
    }
    /** The attribute optionally defines the data type of the occurrence object, to which the assigned type object can relate.
     * If not present, no instruction is given to which occurrence object the type object is applicable.
     * The following conventions are used: The IFC entity name of the applicable occurrence using the IFC naming convention, CamelCase with IFC prefix It can be optionally followed by the predefined type after the separator "/" (forward slash), using uppercase If one type object is applicable to many occurrence objects, then those occurrence object names should be separate by comma "," forming a comma separated string.
     * EXAMPLE Refering to a furniture as applicable occurrence entity would be expressed as 'IfcFurnishingElement', refering to a brace as applicable entity would be expressed as 'IfcMember/BRACE', refering to a wall and wall standard case would be expressed as 'IfcWall, IfcWallStandardCase'.
    */
    ApplicableOccurrence?: IfcLabel
    /** Set list of unique property sets, that are associated with the object type and are common to all object occurrences referring to this object type.
     * IFC2x3 CHANGE The attribute aggregate type has been changed from LIST to SET.
    */
    HasPropertySets?: Array<IfcPropertySetDefinition>
}

export default IfcTypeObject