// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcObjectDefinition

import { IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcRoot } from './'

/** An IfcObjectDefinition is the generalization of any semantically treated thing or process, either being a type or an occurrences.
 *
 * Object defintions can be named, using the inherited Name attribute, which should be a user recognizable label for the object occurrance.
 *
 * Further explanations to the object can be given using the inherited Description attribute.
 *
 * A context is a specific kind of object definition as it provides the project or library context in which object types and object occurrences are defined
 *
 * Objects are independent pieces of information that might contain or reference other pieces of information.
 *
 * There are four essential kinds of relationships in which object definitons (by their instantiable subtypes) can be involved:
 */
abstract class IfcObjectDefinition extends IfcRoot {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText) {
        super(GlobalId, OwnerHistory, Name, Description)

    }

}

export default IfcObjectDefinition