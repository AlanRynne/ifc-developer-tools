// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRelFlowControlElements

import { IfcDistributionControlElement, IfcDistributionFlowElement, IfcOwnerHistory, IfcRelConnects } from './'
import { IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'

/** This objectified relationship between a distribution flow element occurrence and one-to-many control element occurrences indicates that the control element(s) sense or control some aspect of the flow element.
 *
 * It is applied to IfcDistributionFlowElement and IfcDistributionControlElement
 *
 * This relationship may be used to indicate an operational relationship such as an actuator operating a valve, damper, or switch.
 *
 * It may also be used to indicate a sensing relationship such as a sensor detecting conditions of fluid flow
 *
 * This relationship implies a sensing or controlling relationship; if elements are merely connected without any control relationship, then IfcRelConnectsElements should be used.
 */
 class IfcRelFlowControlElements extends IfcRelConnects {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, RelatedControlElements:Array<IfcDistributionControlElement>, RelatingFlowElement:IfcDistributionFlowElement) {
        super(GlobalId, OwnerHistory, Name, Description)
        this.RelatedControlElements = RelatedControlElements
        this.RelatingFlowElement = RelatingFlowElement
    }
    /** References control elements which may be used to impart control on the Distribution Element.
    */
    RelatedControlElements: Array<IfcDistributionControlElement>
    /** Relationship to a distribution flow element
    */
    RelatingFlowElement: IfcDistributionFlowElement
}

export default IfcRelFlowControlElements