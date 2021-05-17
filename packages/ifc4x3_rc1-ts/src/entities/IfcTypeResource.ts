// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcTypeResource

import { IfcIdentifier, IfcText, IfcLabel, IfcGloballyUniqueId } from '../types'
import { IfcOwnerHistory, IfcPropertySetDefinition, IfcTypeObject } from './'

/** IfcTypeResource defines a specific (or type) definition of a resource.
 *
 * It is used to define a resource specification (the specific resource, that is common to all occurrences that are defined for that resource) and could act as a resource template
 *
 * An IfcTypeResource may have a list of property sets attached.
 *
 * Values of these properties are common to all occurrences of that resource type.
 *
 * The type occurrence relationship is realized using the objectified relationship IfcRelDefinesByType
 *
 * Subtypes of IfcTypeResource may be exchanged without being already assigned to subtypes of IfcResource.
 */
abstract class IfcTypeResource extends IfcTypeObject {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ApplicableOccurrence:IfcIdentifier, HasPropertySets:Array<IfcPropertySetDefinition>, Identification:IfcIdentifier, LongDescription:IfcText, ResourceType:IfcLabel) {
        super(GlobalId, OwnerHistory, Name, Description, ApplicableOccurrence, HasPropertySets)
        this.Identification = Identification
        this.LongDescription = LongDescription
        this.ResourceType = ResourceType
    }
    /** An identifying designation given to a resource type.
    */
    Identification?: IfcIdentifier
    /** An long description, or text, describing the resource in detail.
     * The inherited SELF\IfcRoot
     * Description attribute is used as the short description.
    */
    LongDescription?: IfcText
    /** The type denotes a particular type that indicates the resource further.
     * The use has to be established at the level of instantiable subtypes.
     * In particular it holds the user defined type, if the enumeration of the attribute 'PredefinedType' is set to USERDEFINED.
    */
    ResourceType?: IfcLabel
}

export default IfcTypeResource