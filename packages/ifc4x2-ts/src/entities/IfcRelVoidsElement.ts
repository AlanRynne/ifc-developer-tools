// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRelVoidsElement

import { IfcElement, IfcFeatureElementSubtraction, IfcOwnerHistory, IfcRelDecomposes } from './'
import { IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'

/** IfcRelVoidsElement is an objectified relationship between a building element and one opening element that creates a void in the element.
 *
 * It is a one-to-one relationship.
 *
 * This relationship implies a Boolean operation of subtraction between the geometric bodies of the element and the opening
 *
 * As shown in Figure 179, the insertion of a void into a wall is represented by the relationship IfcRelVoidsElement.
 *
 * The opening is created within the wall by IfcWall(StandardCase) o-- IfcRelVoidsElement --o IfcOpeningElement.
 */
 class IfcRelVoidsElement extends IfcRelDecomposes {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, RelatingBuildingElement:IfcElement, RelatedOpeningElement:IfcFeatureElementSubtraction) {
        super(GlobalId, OwnerHistory, Name, Description)
        this.RelatingBuildingElement = RelatingBuildingElement
        this.RelatedOpeningElement = RelatedOpeningElement
    }
    /** Reference to element in which a void is created by associated feature subtraction element.
     * IFC2x CHANGE The data type has been changed from IfcBuildingElement to IfcElement with upward compatibility for file based exchange.
    */
    RelatingBuildingElement: IfcElement
    /** Reference to the feature subtraction element which defines a void in the associated element.
     * IFC2x CHANGE The data type has been changed from IfcOpeningElement to IfcFeatureElementSubtraction with upward compatibility for file based exchange.
    */
    RelatedOpeningElement: IfcFeatureElementSubtraction
}

export default IfcRelVoidsElement