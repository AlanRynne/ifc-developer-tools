// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcAsset

import { IfcIdentifier, IfcActorSelect, IfcDate, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcCostValue, IfcPerson, IfcOwnerHistory, IfcGroup } from './'

/** An asset is a uniquely identifiable grouping of elements acting as a single entity that has a financial value or that can be operated on as a single unit
 *
 * An asset is generally the level of granularity at which maintenance operations are undertaken.
 *
 * An asset is a group that can contain one or more elements.
 *
 * Whilst the financial value of a component or element can be defined, financial value is also defined for accounting purposes at the level of the asset.
 *
 * There are a number of actors that can be associated with an asset, each actor having a role.
 *
 * Actors within the scope of the project are indicated using the IfcRelAssignsToActor relationship in which case roles should be defined through the IfcActorRole class; otherwise principal actors are identified as attributes of the class.
 *
 * In the existence of both, direct attributes take precedence.
 *
 * There are a number of costs that can be associated with an asset, each cost having a role.
 *
 * These are specified through the OriginalValue, CurrentValue, TotalReplacementCost and DepreciatedValue attributes.
 */
 class IfcAsset extends IfcGroup {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, Identification:IfcIdentifier, OriginalValue:IfcCostValue, CurrentValue:IfcCostValue, TotalReplacementCost:IfcCostValue, Owner:IfcActorSelect, User:IfcActorSelect, ResponsiblePerson:IfcPerson, IncorporationDate:IfcDate, DepreciatedValue:IfcCostValue) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType)
        this.Identification = Identification
        this.OriginalValue = OriginalValue
        this.CurrentValue = CurrentValue
        this.TotalReplacementCost = TotalReplacementCost
        this.Owner = Owner
        this.User = User
        this.ResponsiblePerson = ResponsiblePerson
        this.IncorporationDate = IncorporationDate
        this.DepreciatedValue = DepreciatedValue
    }
    /** A unique identification assigned to an asset that enables its differentiation from other assets.
     * The asset identifier is unique within the asset register.
     * It differs from the globally unique id assigned to the instance of an entity populating a database.
    */
    Identification?: IfcIdentifier
    /** The cost value of the asset at the time of purchase.
    */
    OriginalValue?: IfcCostValue
    /** The current cost value of the asset.
    */
    CurrentValue?: IfcCostValue
    /** The total cost of replacement of the asset.
    */
    TotalReplacementCost?: IfcCostValue
    /** The name of the person or organization that 'owns' the asset.
    */
    Owner?: IfcActorSelect
    /** The name of the person or organization that 'uses' the asset.
    */
    User?: IfcActorSelect
    /** The person designated to be responsible for the asset.
     * In some regulations (for example, UK Health and Safety at Work Act, Electricity at Work Regulations), management of assets must have a person identified as being responsible and to whom regulatory, insurance and other organizations communicate.
     * In places where there is not a legal requirement, the responsible person would be the asset manager but would not have a legal status.
    */
    ResponsiblePerson?: IfcPerson
    /** The date on which an asset was incorporated into the works, installed, constructed, erected or completed.
     * This is the date on which an asset is considered to start depreciating.
     * IFC4 CHANGE Type changed from IfcDateTimeSelect.
    */
    IncorporationDate?: IfcDate
    /** The current value of an asset within the accounting rules and procedures of an organization.
    */
    DepreciatedValue?: IfcCostValue
}

export default IfcAsset