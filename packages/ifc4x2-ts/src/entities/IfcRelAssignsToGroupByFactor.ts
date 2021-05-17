// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRelAssignsToGroupByFactor

import { IfcRatioMeasure, IfcGloballyUniqueId, IfcLabel, IfcText, IfcObjectTypeEnum } from '../types'
import { IfcOwnerHistory, IfcObjectDefinition, IfcGroup, IfcRelAssignsToGroup } from './'

/** The objectified relationship IfcRelAssignsToGroupByFactor is a specialization of the general grouping mechanism.
 *
 * It allows to add a factor to define the ratio that applies to the assignment of object definitions (individual object occurrences as subtypes of IfcObject and object types as subtypes of IfcTypeObject) to a group (subtypes of IfcGroup)
 *
 * The ratio can be used to define a percentage assignment.
 *
 * For example, a Factor of 0.8 would indicate that the object is assigned by 80% to the group, or a Factor of 2.5 would indicate the object is assigned with a weight factor of 2.5 to the group
 *
 * The same object or object type may be included with the same or different Factor values to many groups.
 *
 * Grouping relationships are not hierarchical.
 */
 class IfcRelAssignsToGroupByFactor extends IfcRelAssignsToGroup {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, RelatedObjects:Array<IfcObjectDefinition>, RelatedObjectsType:IfcObjectTypeEnum, RelatingGroup:IfcGroup, Factor:IfcRatioMeasure) {
        super(GlobalId, OwnerHistory, Name, Description, RelatedObjects, RelatedObjectsType, RelatingGroup)
        this.Factor = Factor
    }
    /** Factor provided as a ratio measure that identifies the fraction or weighted factor that applies to the group assignment.
    */
    Factor: IfcRatioMeasure
}

export default IfcRelAssignsToGroupByFactor