// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRelConnectsElements

import { IfcConnectionGeometry, IfcElement, IfcOwnerHistory, IfcRelConnects } from './'
import { IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'

/** The IfcRelConnectsElements objectified relationship provides the generalization of the connectivity between elements.
 *
 * It is a 1 to 1 relationship.
 *
 * The concept of two elements being physically or logically connected is described independently from the connecting elements.
 *
 * The connectivity may be related to the shape representation of the connected entities by providing a connection geometry.
 */
 class IfcRelConnectsElements extends IfcRelConnects {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ConnectionGeometry:IfcConnectionGeometry, RelatingElement:IfcElement, RelatedElement:IfcElement) {
        super(GlobalId, OwnerHistory, Name, Description)
        this.ConnectionGeometry = ConnectionGeometry
        this.RelatingElement = RelatingElement
        this.RelatedElement = RelatedElement
    }
    /** The geometric shape representation of the connection geometry that is provided in the object coordinate system of the RelatingElement (mandatory) and in the object coordinate system of the RelatedElement (optionally).
    */
    ConnectionGeometry?: IfcConnectionGeometry
    /** Reference to a subtype of IfcElement that is connected by the connection relationship in the role of RelatingElement.
    */
    RelatingElement: IfcElement
    /** Reference to a subtype of IfcElement that is connected by the connection relationship in the role of RelatedElement.
    */
    RelatedElement: IfcElement
}

export default IfcRelConnectsElements