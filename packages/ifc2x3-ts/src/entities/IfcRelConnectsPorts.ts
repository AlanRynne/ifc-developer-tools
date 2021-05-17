// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRelConnectsPorts

import { IfcPort, IfcElement, IfcOwnerHistory, IfcRelConnects } from './'
import { IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'

/** An IfcRelConnectsPorts relationship defines the relationship that is made between two ports at their point of connection.
 *
 * It may include the connection geometry between two ports.
 *
 * The objectified relationship IfcRelConnectsPorts is required for defining how two instances of IfcPort connect together.
 *
 * Each of the ports is logically contained within the IfcDistributionElement by using the ordered collection IfcRelNests.
 */
 class IfcRelConnectsPorts extends IfcRelConnects {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, RelatingPort:IfcPort, RelatedPort:IfcPort, RealizingElement:IfcElement) {
        super(GlobalId, OwnerHistory, Name, Description)
        this.RelatingPort = RelatingPort
        this.RelatedPort = RelatedPort
        this.RealizingElement = RealizingElement
    }
    /** Reference to the first port that is connected by the objectified relationship.
    */
    RelatingPort: IfcPort
    /** Reference to the second port that is connected by the objectified relationship.
    */
    RelatedPort: IfcPort
    /** Defines the element that realizes a port connection relationship.
    */
    RealizingElement?: IfcElement
}

export default IfcRelConnectsPorts