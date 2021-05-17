// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRepresentationItem



/** The IfcRepresentationItem is used within an IfcRepresentation (directly or indirectly through other IfcRepresentationItem's) to represent an IfcProductRepresentation.
 *
 * Most commonly these IfcRepresentationItem's are geometric or topological representation items, that can (but not need to) have presentation style infomation assigned
 *
 * In case that presentation style information is applied, it can be either applied by an IfcStyledItem, or by an assignment to an IfcPresentationLayerWithStyle.
 *
 * If both are present, and both style assignments include the same subtype of IfcPresentationStyle, then the style assigned by IfcStyledItem takes priority
 *
 * Figure 380 shows an instance diagram explaining the use of IfcStyledItem and IfcPresentationLayerWithStyle to apply presentation styles
 *
 * Figure 381 shows in instance diagram explaining the override of IfcPresentationLayerWithStyle by IfcStyledItem to apply presentation styles.
 */
abstract class IfcRepresentationItem  {
    constructor() {


    }

}

export default IfcRepresentationItem