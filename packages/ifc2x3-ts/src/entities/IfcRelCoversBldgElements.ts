// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRelCoversBldgElements

import { IfcElement, IfcCovering, IfcOwnerHistory, IfcRelConnects } from './'
import { IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'

/** The IfcRelCoversBldgElements relationship is an objectified relationship between an element and one to many coverings, which cover that element
 *
 * The IFC specification provides two relationships:Whether the relationship between the covering and the space, or between the covering and the element, is regarded as primary, has to be determined within the context of a model view definition.
 */
 class IfcRelCoversBldgElements extends IfcRelConnects {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, RelatingBuildingElement:IfcElement, RelatedCoverings:Array<IfcCovering>) {
        super(GlobalId, OwnerHistory, Name, Description)
        this.RelatingBuildingElement = RelatingBuildingElement
        this.RelatedCoverings = RelatedCoverings
    }
    /** Relationship to the element that is covered.
     * It includes building elements for coverings such as flooring or cladding, or distribution elements for coverings such as sleeving or wrapping.
    */
    RelatingBuildingElement: IfcElement
    /** Relationship to the set of coverings that are assigned to this element.
    */
    RelatedCoverings: Array<IfcCovering>
}

export default IfcRelCoversBldgElements