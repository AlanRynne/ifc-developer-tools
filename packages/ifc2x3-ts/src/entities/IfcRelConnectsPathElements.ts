// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRelConnectsPathElements

import { IfcConnectionTypeEnum, IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'
import { IfcOwnerHistory, IfcConnectionGeometry, IfcElement, IfcRelConnectsElements } from './'

/** The IfcRelConnectsPathElements relationship provides the connectivity information between two elements, which have path information
 *
 * The objectified relationship provides the additional information required to describe the connection between two path based elements that might have single or multiple layers of material.
 *
 * The connection type specifies where at the path based element a connection is given (at the start, in the middle or at the end)
 *
 * The connection is described by a connection geometry, given within the object coordinate systems of the RelatingElement and of the RelatedElement.
 *
 * In case of IfcWallStandardCase as the RelatingElement and RelatedElement the connection geometry is provided by the subtype IfcConnectionCurveGeometry.
 *
 * Both curves indicate the so called "end cap", i.e. the curve that trims the wall outer edges (being parallel along the wall axis) at the end.
 */
 class IfcRelConnectsPathElements extends IfcRelConnectsElements {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ConnectionGeometry:IfcConnectionGeometry, RelatingElement:IfcElement, RelatedElement:IfcElement, RelatingPriorities:Array<number>, RelatedPriorities:Array<number>, RelatedConnectionType:IfcConnectionTypeEnum, RelatingConnectionType:IfcConnectionTypeEnum) {
        super(GlobalId, OwnerHistory, Name, Description, ConnectionGeometry, RelatingElement, RelatedElement)
        this.RelatingPriorities = RelatingPriorities
        this.RelatedPriorities = RelatedPriorities
        this.RelatedConnectionType = RelatedConnectionType
        this.RelatingConnectionType = RelatingConnectionType
    }
    /** Overriding priorities at this connection.
     * It overrides the standard priority given at the wall layer provided by IfcMaterialLayer.Priority.
     * The list of RelatingProperties corresponds to the list of IfcMaterialLayerSet
     * MaterialLayers of the element referenced by RelatingObject.
     * IFC4 CHANGE Data type changed to NUMBER and usage to hold a normalized ratio measure [0..1].
    */
    RelatingPriorities: Array<number>
    /** Overriding priorities at this connection.
     * It overrides the standard priority given at the wall layer provided by IfcMaterialLayer.Priority.
     * The list of RelatedProperties corresponds to the list of IfcMaterialLayerSet
     * MaterialLayers of the element referenced by RelatedObject.
     * IFC4 CHANGE Data type changed to NUMBER and usage to hold a normalized ratio measure [0..1].
    */
    RelatedPriorities: Array<number>
    /** Indication of the connection type in relation to the path of the RelatingObject.
    */
    RelatedConnectionType: IfcConnectionTypeEnum
    /** Indication of the connection type in relation to the path of the RelatingObject.
    */
    RelatingConnectionType: IfcConnectionTypeEnum
}

export default IfcRelConnectsPathElements