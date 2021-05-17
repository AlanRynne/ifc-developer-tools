// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRelConnects

import { IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcRelationship } from './'

/** IfcRelConnects is a connectivity relationship that connects objects under some criteria.
 *
 * As a general connectivity it does not imply constraints, however subtypes of the relationship define the applicable object types for the connectivity relationship and the semantics of the particular connectivity.
 */
abstract class IfcRelConnects extends IfcRelationship {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText) {
        super(GlobalId, OwnerHistory, Name, Description)

    }

}

export default IfcRelConnects