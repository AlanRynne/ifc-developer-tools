// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcStyledRepresentation

import { IfcRepresentationContext, IfcRepresentationItem, IfcStyleModel } from './'
import { IfcLabel } from '../types'

/** The IfcStyledRepresentation represents the concept of a styled presentation being a representation of a product or a product component, like material.
 *
 * within a representation context.
 *
 * This representation context does not need to be (but may be) a geometric representation context
 *
 * A styled representation has to include one or several styled items with the associated style information (curve, symbol, text, fill area, or surface styles).
 *
 * It shall not contain the geometric representation items that are styled.
 */
 class IfcStyledRepresentation extends IfcStyleModel {
    constructor(ContextOfItems:IfcRepresentationContext, RepresentationIdentifier:IfcLabel, RepresentationType:IfcLabel, Items:Array<IfcRepresentationItem>) {
        super(ContextOfItems, RepresentationIdentifier, RepresentationType, Items)

    }

}

export default IfcStyledRepresentation