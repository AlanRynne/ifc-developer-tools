// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcProxy

import { IfcObjectTypeEnum, IfcLabel, IfcGloballyUniqueId, IfcText } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcProduct } from './'

/** IfcProxy is intended to be a kind of a container for wrapping objects which are defined by associated properties, which may or may not have a geometric representation and placement in space.
 *
 * A proxy may have a semantic meaning, defined by the Name attribute, and property definitions, attached through the property assignment relationship, which definition may be outside of the definitions given by the current release of IFC
 *
 * The ProxyType may give an indication to which high level semantic breakdown of object the semantic definition of the proxy relates to.
 *
 * the Tag attribute may be used to assign a human or system interpretable identifier (such as a serial number or bar code).
 */
 class IfcProxy extends IfcProduct {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, ProxyType:IfcObjectTypeEnum, Tag:IfcLabel) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation)
        this.ProxyType = ProxyType
        this.Tag = Tag
    }
    /** High level (and only) semantic meaning attached to the IfcProxy, defining the basic construct type behind the Proxy, e.g. Product or Process.
    */
    ProxyType: IfcObjectTypeEnum
    /** The tag (or label) identifier at the particular instance of a product, e.g. the serial number, or the position number.
     * It is the identifier at the occurrence level.
    */
    Tag?: IfcLabel
}

export default IfcProxy