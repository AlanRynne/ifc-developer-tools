// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcStyleModel

import { IfcRepresentationContext, IfcRepresentationItem, IfcRepresentation } from './'
import { IfcLabel } from '../types'

/** IfcStyleModel represents the concept of a particular presentation style defined for a material (or other characteristic) of a product or a product component within a representation context.
 *
 * This representation context may (but has not to be) a geometric representation context
 *
 * IfcStyleModel can be a style representation (presentation style) of a material (via IfcMaterialDefinitionRepresentation), potentially differentiated for different representation contexts (for example, different material hatching depending on the scale of the target representation context).
 */
abstract class IfcStyleModel extends IfcRepresentation {
    constructor(ContextOfItems:IfcRepresentationContext, RepresentationIdentifier:IfcLabel, RepresentationType:IfcLabel, Items:Array<IfcRepresentationItem>) {
        super(ContextOfItems, RepresentationIdentifier, RepresentationType, Items)

    }

}

export default IfcStyleModel