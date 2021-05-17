// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcPort

import { IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcProduct } from './'

/** A port provides the means for an element to connect to other elements
 *
 * An IfcPort is associated with an IfcElement, it belongs to through the objectified relationship IfcRelNests if such port is fixed, or IfcRelConnectsPortToElement if such port is dynamically attached.
 *
 * Exactly two ports, belonging to two different elements, are connected with each other through the objectified relationship IfcRelConnectsPorts
 *
 * An instance of IfcElement may have one or more points at which it connects to other instances of IfcElement.
 *
 * An instance of em&gt;IfcPort is located at a point where a connection can occur.
 *
 * The location of the port is determined in the context of the local coordinate system of the element to which it belongs.
 *
 * As a subordinate part being fully dependent on the master element the IfcPort shall have no independent containment relationship to the spatial structure
 *
 * The local placement for IfcPort is defined in its supertype IfcProduct.
 *
 * It is defined by the IfcLocalPlacement, which defines the local coordinate system that is referenced by all geometric representations.
 *
 * The PlacementRelTo relationship of IfcLocalPlacement shall point to the local placement of the master IfcElement or IfcElementType (relevant subtypes), which is related to the IfcPort by the relationship object IfcRelNests for fixed ports, or IfcRelConnectsPortToElement for dynamic ports.
 */
abstract class IfcPort extends IfcProduct {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation)

    }

}

export default IfcPort