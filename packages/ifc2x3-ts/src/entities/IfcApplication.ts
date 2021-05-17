// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcApplication

import { IfcOrganization } from './'
import { IfcLabel, IfcIdentifier } from '../types'

/** IfcApplication holds the information about an IFC compliant application developed by an application developer.
 *
 * The IfcApplication utilizes a short identifying name as provided by the application developer.
 */
 class IfcApplication  {
    constructor(ApplicationDeveloper:IfcOrganization, Version:IfcLabel, ApplicationFullName:IfcLabel, ApplicationIdentifier:IfcIdentifier) {

        this.ApplicationDeveloper = ApplicationDeveloper
        this.Version = Version
        this.ApplicationFullName = ApplicationFullName
        this.ApplicationIdentifier = ApplicationIdentifier
    }
    /** Name of the application developer.
    */
    ApplicationDeveloper: IfcOrganization
    /** The version number of this software as specified by the developer of the application.
    */
    Version: IfcLabel
    /** The full name of the application as specified by the application developer.
    */
    ApplicationFullName: IfcLabel
    /** Short identifying name for the application.
    */
    ApplicationIdentifier: IfcIdentifier
}

export default IfcApplication