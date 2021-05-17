// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRelConnectsWithRealizingElements

import { IfcElement, IfcOwnerHistory, IfcConnectionGeometry, IfcRelConnectsElements } from './'
import { IfcLabel, IfcGloballyUniqueId, IfcText } from '../types'

/** IfcRelConnectsWithRealizingElements defines a generic relationship that is made between two elements that require the realization of that relationship by means of further realizing elements.
 *
 * An IfcRelConnectsWithRealizingElements is a specialization of IfcRelConnectsElement where the connecting operation has the additional attribute of (one or many) realizing elements that may be used to realize or further qualify the relationship.
 *
 * It is defined as a ternary relationship.
 *
 * The connection types for bridges include:
 */
 class IfcRelConnectsWithRealizingElements extends IfcRelConnectsElements {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ConnectionGeometry:IfcConnectionGeometry, RelatingElement:IfcElement, RelatedElement:IfcElement, RealizingElements:Array<IfcElement>, ConnectionType:IfcLabel) {
        super(GlobalId, OwnerHistory, Name, Description, ConnectionGeometry, RelatingElement, RelatedElement)
        this.RealizingElements = RealizingElements
        this.ConnectionType = ConnectionType
    }
    /** Defines the elements that realize a connection relationship.
    */
    RealizingElements: Array<IfcElement>
    /** The type of the connection given for informal purposes, it may include labels, like 'joint', 'rigid joint', 'flexible joint', etc.
    */
    ConnectionType?: IfcLabel
}

export default IfcRelConnectsWithRealizingElements