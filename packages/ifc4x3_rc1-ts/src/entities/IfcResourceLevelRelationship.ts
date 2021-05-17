// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcResourceLevelRelationship

import { IfcLabel, IfcText } from '../types'

/** IfcResourceLevelRelationship is an abstract base entity for relationships between resource-level entities.
 */
abstract class IfcResourceLevelRelationship  {
    constructor(Name:IfcLabel, Description:IfcText) {

        this.Name = Name
        this.Description = Description
    }
    /** A name used to identify or qualify the relationship.
    */
    Name?: IfcLabel
    /** A description that may apply additional information about the relationship.
    */
    Description?: IfcText
}

export default IfcResourceLevelRelationship