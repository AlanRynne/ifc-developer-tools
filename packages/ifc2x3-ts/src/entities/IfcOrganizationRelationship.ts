// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcOrganizationRelationship

import { IfcLabel, IfcText } from '../types'
import { IfcOrganization } from './'

/** The IfcOrganizationRelationship establishes an association between one relating organization and one or more related organizations.
 */
 class IfcOrganizationRelationship  {
    constructor(Name:IfcLabel, Description:IfcText, RelatingOrganization:IfcOrganization, RelatedOrganizations:Array<IfcOrganization>) {

        this.Name = Name
        this.Description = Description
        this.RelatingOrganization = RelatingOrganization
        this.RelatedOrganizations = RelatedOrganizations
    }
    /** undefined
    */
    Name: IfcLabel
    /** undefined
    */
    Description?: IfcText
    /** Organization which is the relating part of the relationship between organizations.
    */
    RelatingOrganization: IfcOrganization
    /** The other, possibly dependent, organizations which are the related parts of the relationship between organizations.
    */
    RelatedOrganizations: Array<IfcOrganization>
}

export default IfcOrganizationRelationship