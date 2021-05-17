// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRelInterferesElements

import { IfcElement, IfcConnectionGeometry, IfcOwnerHistory, IfcRelConnects } from './'
import { IfcIdentifier, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'

/** The IfcRelInterferesElements objectified relationship indicates that two elements interfere.
 *
 * Interference is a spatial overlap between the two elements.
 *
 * It is a 1 to 1 relationship.
 *
 * The concept of two elements interfering physically or logically is described independently from the elements.
 *
 * The interference may be related to the shape representation of the entities by providing an interference geometry
 *
 * The RelatingElement and RelatedElement define the two elements in the relationship, that may have different roles.
 *
 * This is controlled by the attribute ImpliedOrder.
 */
 class IfcRelInterferesElements extends IfcRelConnects {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, RelatingElement:IfcElement, RelatedElement:IfcElement, InterferenceGeometry:IfcConnectionGeometry, InterferenceType:IfcIdentifier, ImpliedOrder:boolean | null) {
        super(GlobalId, OwnerHistory, Name, Description)
        this.RelatingElement = RelatingElement
        this.RelatedElement = RelatedElement
        this.InterferenceGeometry = InterferenceGeometry
        this.InterferenceType = InterferenceType
        this.ImpliedOrder = ImpliedOrder
    }
    /** Reference to a subtype of IfcElement that is the RelatingElement in the interference relationship.
     * Depending on the value of ImpliedOrder the RelatingElement may carry the notion to be the element from which the interference geometry should be subtracted.
    */
    RelatingElement: IfcElement
    /** Reference to a subtype of IfcElement that is the RelatedElement in the interference relationship.
     * Depending on the value of ImpliedOrder the RelatedElement may carry the notion to be the element from which the interference geometry should not be subtracted.
    */
    RelatedElement: IfcElement
    /** The geometric shape representation of the interference geometry that is provided in the object coordinate system of the RelatingElement (mandatory) and in the object coordinate system of the RelatedElement (optionally).
    */
    InterferenceGeometry?: IfcConnectionGeometry
    /** Optional identifier that describes the nature of the interference.
     * Examples could include 'Clash', 'ProvisionForVoid', etc.
    */
    InterferenceType?: IfcIdentifier
    /** Logical value indicating whether the interference geometry should be subtracted from the RelatingElement (if TRUE), or whether it should be either subtracted from the RelatingElement or the RelatedElement (if FALSE), or whether no indication can be provided (if UNKNOWN).
    */
    ImpliedOrder: boolean | null
}

export default IfcRelInterferesElements