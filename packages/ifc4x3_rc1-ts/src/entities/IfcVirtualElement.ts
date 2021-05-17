// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcVirtualElement

import { IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcElement } from './'

/** A virtual element is a special element used to provide imaginary boundaries, such as between two adjacent, but not separated, spaces.
 *
 * Virtual elements are usually not displayed and does not have quantities and other measures.
 *
 * Therefore IfcVirtualElement does not have material information and quantities attached
 *
 * The IfcVirtualElement is mainly used to define a virtual boundary between two spaces.
 *
 * Figure 192 describes how to use IfcRelSpaceBoundary in conjunction with IfcVirtualElement to define space boundaries.
 */
 class IfcVirtualElement extends IfcElement {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag)

    }

}

export default IfcVirtualElement