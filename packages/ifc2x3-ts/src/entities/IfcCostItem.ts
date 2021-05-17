// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcCostItem

import { IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcControl } from './'

/** An IfcCostItem describes a cost or financial value together with descriptive information that describes its context in a form that enables it to be used within a cost schedule.
 *
 * An IfcCostItem can be used to represent the cost of goods and services, the execution of works by a process, lifecycle cost and more
 *
 * Each instance of IfcCostItem may have a name and a description.
 *
 * Depending on the use for which the cost is intended, these values should be asserted on the basis of agreement.
 *
 * For instance, the Name attribute could be used to provide a common value that enables distinct instances to be brought together in a nesting arrangement (see below) while the Description attribute may be used to provide text used for item description in a costing schedule
 *
 * An IfcCostItem can link one or many IfcCostValue's representing a unit cost, total cost, or a unit cost with one or many quantities used to generate the total cost.
 *
 * The quantities can be given as individual quantities, or those quantities are provided as element quantities by one or many building elements.
 *
 * The IfcCostValue
 *
 * CostType attribute indicates the category of cost, which may be used to present the value in a particular column.
 *
 * For nested cost items (having IfcRelNests relationship), IfcCostValue
 *
 * CostType is significant such that IfcCostValue
 *
 * AppliedValue is calculated as the sum of all nested costs having the same IfcCostValue
 *
 * CostType or if set to an asterisk ('*'), then the sum of all nested costs of all cost types.
 *
 * An IfcCostValue may represent an original value or a value derived from formulas using IfcAppliedValueRelationship.
 *
 * For example, taxes may be calculated as a percentage of a subtotal.
 */
 class IfcCostItem extends IfcControl {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType)

    }

}

export default IfcCostItem