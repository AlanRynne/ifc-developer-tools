// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcInventory

import { IfcInventoryTypeEnum, IfcActorSelect, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcPerson, IfcCalendarDate, IfcCostValue, IfcOwnerHistory, IfcGroup } from './'

/** An inventory is a list of items within an enterprise
 *
 * Various types of inventory can be included.
 *
 * These are identified by the range of values within the inventory type enumeration which includes space, asset, and furniture.
 *
 * User defined inventories can also be defined for lists of particular types of element such as may be required in operating and maintenance instructions.
 *
 * Such inventories should be constrained to contain a list of elements of a restricted type
 *
 * There are a number of actors that can be associated with an inventory, each actor having a role.
 *
 * Actors within the scope of the project are indicated using the IfcRelAssignsToActor relationship in which case roles should be defined through the IfcActorRole class; otherwise principal actors are identified as attributes of the class.
 *
 * In the existence of both, direct attributes take precedence
 *
 * There are a number of costs that can be associated with an inventory, each cost having a role.
 *
 * These are specified through the CurrentValue and OriginalValue attributes.
 */
 class IfcInventory extends IfcGroup {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, InventoryType:IfcInventoryTypeEnum, Jurisdiction:IfcActorSelect, ResponsiblePersons:Array<IfcPerson>, LastUpdateDate:IfcCalendarDate, CurrentValue:IfcCostValue, OriginalValue:IfcCostValue) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType)
        this.InventoryType = InventoryType
        this.Jurisdiction = Jurisdiction
        this.ResponsiblePersons = ResponsiblePersons
        this.LastUpdateDate = LastUpdateDate
        this.CurrentValue = CurrentValue
        this.OriginalValue = OriginalValue
    }
    /** undefined
    */
    InventoryType: IfcInventoryTypeEnum
    /** The organizational unit to which the inventory is applicable.
    */
    Jurisdiction: IfcActorSelect
    /** Persons who are responsible for the inventory.
    */
    ResponsiblePersons: Array<IfcPerson>
    /** The date on which the last update of the inventory was carried out.
     * IFC4 CHANGE Type changed from IfcDateTimeSelect.
    */
    LastUpdateDate: IfcCalendarDate
    /** An estimate of the current cost value of the inventory.
    */
    CurrentValue?: IfcCostValue
    /** An estimate of the original cost value of the inventory.
    */
    OriginalValue?: IfcCostValue
}

export default IfcInventory