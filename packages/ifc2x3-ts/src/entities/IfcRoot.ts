// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRoot

import { IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory } from './'

/** IfcRoot is the most abstract and root class for all entity definitions that roots in the kernel or in subsequent layers of the IFC specification.
 *
 * It is therefore the common supertype of all IFC entities, beside those defined in an IFC resource schema.
 *
 * All entities that are subtypes of IfcRoot can be used independently, whereas resource schema entities, that are not subtypes of IfcRoot, are not supposed to be independent entities.
 */
abstract class IfcRoot  {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText) {

        this.GlobalId = GlobalId
        this.OwnerHistory = OwnerHistory
        this.Name = Name
        this.Description = Description
    }
    /** Assignment of a globally unique identifier within the entire software world.
    */
    GlobalId: IfcGloballyUniqueId
    /** Assignment of the information about the current ownership of that object, including owning actor, application, local identification and information captured about the recent changes of the object, only the last modification in stored - either as addition, deletion or modification.
     * IFC4 CHANGE The attribute has been changed to be OPTIONAL.
    */
    OwnerHistory: IfcOwnerHistory
    /** Optional name for use by the participating software systems or users.
     * For some subtypes of IfcRoot the insertion of the Name attribute may be required.
     * This would be enforced by a where rule.
    */
    Name?: IfcLabel
    /** Optional description, provided for exchanging informative comments.
    */
    Description?: IfcText
}

export default IfcRoot