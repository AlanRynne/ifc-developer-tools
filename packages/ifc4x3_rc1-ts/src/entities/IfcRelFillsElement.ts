// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRelFillsElement

import { IfcOpeningElement, IfcElement, IfcOwnerHistory, IfcRelConnects } from './'
import { IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'

/** IfcRelFillsElement is an objectified relationship between an opening element and an element that fills (or partially fills) the opening element.
 *
 * It is an one-to-one relationship
 *
 * As shown in Figure 169, the insertion of a door into a wall is represented by two separate relationships.
 *
 * First the door opening is created within the wall by IfcWall(StandardCase) IfcOpeningElement, then the door is inserted within the opening by IfcOpeningElement IfcDoor.
 */
 class IfcRelFillsElement extends IfcRelConnects {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, RelatingOpeningElement:IfcOpeningElement, RelatedBuildingElement:IfcElement) {
        super(GlobalId, OwnerHistory, Name, Description)
        this.RelatingOpeningElement = RelatingOpeningElement
        this.RelatedBuildingElement = RelatedBuildingElement
    }
    /** Opening Element being filled by virtue of this relationship.
    */
    RelatingOpeningElement: IfcOpeningElement
    /** Reference to building element that occupies fully or partially the associated opening.
     * IFC2x CHANGE The data type has been changed from IfcBuildingElement to IfcElement with upward compatibility for file based exchange.
    */
    RelatedBuildingElement: IfcElement
}

export default IfcRelFillsElement