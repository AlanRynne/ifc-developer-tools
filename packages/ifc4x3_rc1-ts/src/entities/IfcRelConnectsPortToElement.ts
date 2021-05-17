// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRelConnectsPortToElement

import { IfcPort, IfcDistributionElement, IfcOwnerHistory, IfcRelConnects } from './'
import { IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'

/** IfcRelConnectsPortToElement is a relationship between a distribution element and dynamically connected ports where connections are realised to other distribution elements.
 *
 * Ports contained in different elements are connected to each other using the IfcRelConnectsPorts relationship.
 */
 class IfcRelConnectsPortToElement extends IfcRelConnects {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, RelatingPort:IfcPort, RelatedElement:IfcDistributionElement) {
        super(GlobalId, OwnerHistory, Name, Description)
        this.RelatingPort = RelatingPort
        this.RelatedElement = RelatedElement
    }
    /** Reference to an Port that is connected by the objectified relationship.
    */
    RelatingPort: IfcPort
    /** Reference to an IfcDistributionElement that has ports assigned.
     * IFC4 CHANGE Data type restricted to IfcDistributionElement.
    */
    RelatedElement: IfcDistributionElement
}

export default IfcRelConnectsPortToElement