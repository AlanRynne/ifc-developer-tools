// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcDistributionControlElement

import { IfcIdentifier, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcDistributionElement } from './'

/** The distribution element IfcDistributionControlElement defines occurrence elements of a building automation control system that are used to impart control over elements of a distribution system
 *
 * IfcDistributionControlElement defines elements of a building automation control system.
 *
 * These are typically used to control distribution system elements to maintain variables such as temperature, humidity, pressure, flow, power, or lighting levels, through the modulation, staging or sequencing of mechanical or electrical devices.
 *
 * The three general functional categories of control elements are as follows:Since IfcDistributionControlElement and its subtypes typically relate to many different distribution flow elements (IfcDistributionFlowElement), the objectified relationship IfcRelFlowControlElements has been provided to relate control and flow elements as required
 *
 * The key distinction between IfcDistributionFlowElement and IfcDistributionControlElement is whether it is internal or external to the flow system, respectively.
 *
 * For example, the distinction between IfcFlowMeter (subtype of IfcDistributionFlowElement measuring a flow quantity) and IfcFlowInstrument (subtype of IfcDistributionControlElement measuring a flow quality), is based on this principal.
 *
 * A physical device that connects within the flow system in which it measures (having inlet/outlet pipes for the measured substance) follows the IfcDistributionFlowElement hierarchy (and therefore IfcFlowMeter which measures the flow internally).
 *
 * Otherwise, if it monitors/controls but does not connect inline within the flow system (it is external or is a component of another device), then it follows the IfcDistributionControlElement hierarchy (and therefore IfcFlowInstrument which may display various attributes through connected sensors).
 */
 class IfcDistributionControlElement extends IfcDistributionElement {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier, ControlElementId:IfcIdentifier) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag)
        this.ControlElementId = ControlElementId
    }
    /** undefined
    */
    ControlElementId?: IfcIdentifier
}

export default IfcDistributionControlElement