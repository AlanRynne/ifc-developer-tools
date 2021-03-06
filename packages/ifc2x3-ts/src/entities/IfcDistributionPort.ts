// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcDistributionPort

import { IfcFlowDirectionEnum, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcPort } from './'

/** A distribution port is an inlet or outlet of a product through which a particular substance may flow
 *
 * Distribution ports are used for passage of solid, liquid, or gas substances, as well as electricity for power or communications.
 *
 * Flow segments (pipes, ducts, cables) may be used to connect ports across products.
 *
 * Distribution ports are defined by system type and flow direction such that for two ports to be connected, they must share the same system type and have opposite flow directions (one side being a SOURCE and the other being a SINK).
 *
 * Ports are similar to openings in that they do not have any visible geometry; such geometry is captured at the shape representation of the enclosing element or element type.
 *
 * Ports may have placement that indicates the position and orientation of the connection
 *
 * Ports are assigned the distribution systems in order to indicate its role in a particular system, e.g. cold water inlet.
 */
 class IfcDistributionPort extends IfcPort {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, FlowDirection:IfcFlowDirectionEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation)
        this.FlowDirection = FlowDirection
    }
    /** Enumeration that identifies if this port is a Sink (inlet), a Source (outlet) or both a SinkAndSource.
    */
    FlowDirection?: IfcFlowDirectionEnum
}

export default IfcDistributionPort