// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcObject

import { IfcLabel, IfcGloballyUniqueId, IfcText } from '../types'
import { IfcOwnerHistory, IfcObjectDefinition } from './'

/** An IfcObject is the generalization of any semantically treated thing or process.
 *
 * Objects are things as they appear - i.e. occurrences
 *
 * Objects can be named, using the inherited Name attribute, which should be a user recognizable label for the object occurrance.
 *
 * Further explanations to the object can be given using the inherited Description attribute.
 *
 * The ObjectType attribute is used:Objects are independent pieces of information that might contain or reference other pieces of information.
 *
 * There are several relationships in which objects can be involved:Informal Propositions:
 */
abstract class IfcObject extends IfcObjectDefinition {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel) {
        super(GlobalId, OwnerHistory, Name, Description)
        this.ObjectType = ObjectType
    }
    /** The type denotes a particular type that indicates the object further.
     * The use has to be established at the level of instantiable subtypes.
     * In particular it holds the user defined type, if the enumeration of the attribute PredefinedType is set to USERDEFINED.
    */
    ObjectType?: IfcLabel
}

export default IfcObject