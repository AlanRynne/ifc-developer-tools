// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcResource

import { IfcIdentifier, IfcText, IfcGloballyUniqueId, IfcLabel } from '../types'
import { IfcOwnerHistory, IfcObject } from './'

/** IfcResource contains the information needed to represent the costs, schedule, and other impacts from the use of a thing in a process.
 *
 * It is not intended to use IfcResource to model the general properties of the things themselves, while an optional linkage from IfcResource to the things to be used can be specified (specifically, the relationship from subtypes of IfcResource to IfcProduct through the IfcRelAssignsToResource relationship).
 *
 * There are two basic intended uses of IfcResource.
 *
 * First, if the attributes of the thing are not needed for the purpose of the use of IfcResource, or the types of things are not explicitly modeled in IFC yet, then the linkage between the resource and the thing doesn't have to be instantiated in the system.
 *
 * That is, the attributes of IfcResource (or its subtypes) alone are sufficient to represent the use of the thing as a resource for the purpose of the project.
 *
 * Second, if the attributes of the thing are needed for the use of IfcResource objects, and they are modeled explicitly as objects, then the IfcResource instances can be linked to the instances of the type of the things being referenced.
 *
 * Things that might be used as resources and that are already modeled in the IFC include physical products, people and organizations, and materials.
 *
 * The relationship object IfcRelAssignsToResource is provided for this approach
 *
 * The inherited attribute ObjectType is used as a textual code that identifies the resource type.
 */
abstract class IfcResource extends IfcObject {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, Identification:IfcIdentifier, LongDescription:IfcText) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType)
        this.Identification = Identification
        this.LongDescription = LongDescription
    }
    /** An identifying designation given to a resource.
     * It is the identifier at the occurrence level.
     * IFC4 CHANGE Attribute promoted from subtype IfcConstructionResource.
    */
    Identification?: IfcIdentifier
    /** A detailed description of the resource (e.g. the skillset for a labor resource).
     * IFC4 CHANGE The attribute LongDescription is added replacing the ResourceGroup attribute at subtype IfcConstructionResource.
    */
    LongDescription?: IfcText
}

export default IfcResource