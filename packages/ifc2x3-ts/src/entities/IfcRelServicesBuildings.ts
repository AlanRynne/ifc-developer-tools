// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcRelServicesBuildings

import { IfcSystem, IfcSpatialStructureElement, IfcOwnerHistory, IfcRelConnects } from './'
import { IfcGloballyUniqueId, IfcLabel, IfcText } from '../types'

/** The IfcRelServicesBuildings is an objectified relationship that defines the relationship between a system and the sites, buildings, storeys, spaces, or spatial zones, it serves.
 *
 * Examples of systems are:
 */
 class IfcRelServicesBuildings extends IfcRelConnects {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, RelatingSystem:IfcSystem, RelatedBuildings:Array<IfcSpatialStructureElement>) {
        super(GlobalId, OwnerHistory, Name, Description)
        this.RelatingSystem = RelatingSystem
        this.RelatedBuildings = RelatedBuildings
    }
    /** System that services the Buildings.
    */
    RelatingSystem: IfcSystem
    /** Spatial structure elements (including site, building, storeys) that are serviced by the system.
     * IFC2x CHANGE The data type has been changed from IfcBuilding to IfcSpatialStructureElement with upward compatibility for file based exchange.
     * IFC4 CHANGE The data type has been changed from IfcSpatialStructureElement to IfcSpatialElement with upward compatibility for file based exchange.
    */
    RelatedBuildings: Array<IfcSpatialStructureElement>
}

export default IfcRelServicesBuildings