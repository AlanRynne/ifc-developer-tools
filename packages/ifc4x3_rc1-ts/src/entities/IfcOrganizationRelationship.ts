// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcOrganizationRelationship

import { IfcOrganization, IfcResourceLevelRelationship } from './'
import { IfcLabel, IfcText } from '../types'

/** The IfcOrganizationRelationship establishes an association between one relating organization and one or more related organizations.
 */
 class IfcOrganizationRelationship extends IfcResourceLevelRelationship {
    constructor(Name:IfcLabel, Description:IfcText, RelatingOrganization:IfcOrganization, RelatedOrganizations:Array<IfcOrganization>) {
        super(Name, Description)
        this.RelatingOrganization = RelatingOrganization
        this.RelatedOrganizations = RelatedOrganizations
    }
    /** Organization which is the relating part of the relationship between organizations.
    */
    RelatingOrganization: IfcOrganization
    /** The other, possibly dependent, organizations which are the related parts of the relationship between organizations.
    */
    RelatedOrganizations: Array<IfcOrganization>
}

export default IfcOrganizationRelationship