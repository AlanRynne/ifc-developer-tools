// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcElementComponent

import { IfcGloballyUniqueId, IfcLabel, IfcText, IfcIdentifier } from '../types'
import { IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcElement } from './'

/** An element component is a representation for minor items included in, added to or connecting to or between elements, which usually are not of interest from the overall building structure viewpoint.
 *
 * However, these small parts may have vital and load carrying functions within the construction.
 *
 * These items do not provide any actual space boundaries.
 *
 * Typical examples of IfcElementComponents include different kinds of fasteners and various accessories.
 *
 * One or several instances of subtypes of IfcElementComponent should always be accompanied by a defining instance of a respective subtype of IfcElementComponentType.
 *
 * The type object holds shape and material information
 *
 * It is often desirable to model a number of same-shaped element components by means of a single occurrence object, e.g. several bolts within a connection or a row of reinforcement elements.
 *
 * In this IFC release, this is possible by means of multiple mapped representation as documented below
 *
 * To express the multiplicity of element components also on a higher semantic level, a Qto_ElementComponentPatternQuantities should be provided via IfcRelDefinesByProperties and contain the number of pieces which are placed by a single IfcElementComponent instance
 *
 * Symbolic RepresentationA symbolic representation is defined for a row of components or several rows of components within a single instance of IfcElementComponent.
 *
 * Such rows or arrays may contain possibly large numbers of individual pieces.
 *
 * The product definition shape consists of an IfcShapeRepresentation with the attribute valuesand one or several curves as geometric items.
 *
 * The curves represent where reference points of the pieces are located.
 *
 * For example, such reference points may be at the heads of mechanical fasteners or at the starting point of the extrusion axis of reinforcement bars.
 *
 * In case of straight components (bolts, nails, staples, straight reinforcement bars, or similar), the local placement of the IfcElementComponent shall be located and oriented such that the local z axis is parallel with the axes of the components.
 *
 * A Qto_ElementComponentPatternQuantities should denote the count of pieces in the row or array and their spacing.
 */
abstract class IfcElementComponent extends IfcElement {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, Tag:IfcIdentifier) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, Tag)

    }

}

export default IfcElementComponent