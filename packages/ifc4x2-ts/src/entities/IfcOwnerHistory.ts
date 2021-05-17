// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcOwnerHistory

import { IfcPersonAndOrganization, IfcApplication } from './'
import { IfcStateEnum, IfcChangeActionEnum, IfcTimeStamp } from '../types'

/** IfcOwnerHistory defines all history and identification related information.
 *
 * In order to provide fast access it is directly attached to all independent objects, relationships and properties
 *
 * IfcOwnerHistory is used to identify the creating and owning application and user for the associated object, as well as capture the last modifying application and user
 *
 * Informal Propositions:
 */
 class IfcOwnerHistory  {
    constructor(OwningUser:IfcPersonAndOrganization, OwningApplication:IfcApplication, State:IfcStateEnum, ChangeAction:IfcChangeActionEnum, LastModifiedDate:IfcTimeStamp, LastModifyingUser:IfcPersonAndOrganization, LastModifyingApplication:IfcApplication, CreationDate:IfcTimeStamp) {

        this.OwningUser = OwningUser
        this.OwningApplication = OwningApplication
        this.State = State
        this.ChangeAction = ChangeAction
        this.LastModifiedDate = LastModifiedDate
        this.LastModifyingUser = LastModifyingUser
        this.LastModifyingApplication = LastModifyingApplication
        this.CreationDate = CreationDate
    }
    /** Direct reference to the end user who currently "owns" this object.
     * Note that IFC includes the concept of ownership transfer from one user to another and therefore distinguishes between the Owning User and Creating User.
    */
    OwningUser: IfcPersonAndOrganization
    /** Direct reference to the application which currently "owns" this object on behalf of the owning user of the application.
     * Note that IFC includes the concept of ownership transfer from one application to another and therefore distinguishes between the Owning Application and Creating Application.
    */
    OwningApplication: IfcApplication
    /** Enumeration that defines the current access state of the object.
    */
    State?: IfcStateEnum
    /** Enumeration that defines the actions associated with changes made to the object.
    */
    ChangeAction?: IfcChangeActionEnum
    /** Date and Time expressed in UTC (Universal Time Coordinated, formerly Greenwich Mean Time or GMT) at which the last modification was made by LastModifyingUser and LastModifyingApplication.
    */
    LastModifiedDate?: IfcTimeStamp
    /** User who carried out the last modification using LastModifyingApplication.
    */
    LastModifyingUser?: IfcPersonAndOrganization
    /** Application used to make the last modification.
    */
    LastModifyingApplication?: IfcApplication
    /** The date and time expressed in UTC (Universal Time Coordinated, formerly Greenwich Mean Time or GMT) when first created by the original OwningApplication.
     * Once defined this value remains unchanged through the lifetime of the entity.
    */
    CreationDate: IfcTimeStamp
}

export default IfcOwnerHistory