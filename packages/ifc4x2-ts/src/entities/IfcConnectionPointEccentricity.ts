// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcConnectionPointEccentricity

import { IfcLengthMeasure, IfcPointOrVertexPoint } from '../types'
import { IfcConnectionPointGeometry } from './'

/** IfcConnectionPointEccentricity is used to describe the geometric constraints that facilitate the physical connection of two objects at a point or vertex point with associated point coordinates.
 *
 * There is a physical distance, or eccentricity, etween the connection points of both object.
 *
 * The eccentricity can be either given by:The IfcPoint (or the IfcVertexPoint with an associated IfcPoint) at the PointOnRelatingElement attribute defines the point where the basic geometry items of the connected elements connects.
 *
 * The point coordinates are provided within the local coordinate system of the RelatingElement, as specified at the IfcRelConnects subtype that utilizes the IfcConnectionPointGeometry.
 *
 * Optionally, the same point coordinates can also be provided within the local coordinate system of the RelatedElement by using the PointOnRelatedElement attribute, otherwise the distance to the point at the RelatedElement has to be given by the three eccentricity values
 *
 * The explicit values for EccentricityInX, EccentricityInY, and EccentricityInZ are always measured in the following direction and coordinate system (defining when the value is positive or negative):
 */
 class IfcConnectionPointEccentricity extends IfcConnectionPointGeometry {
    constructor(PointOnRelatingElement:IfcPointOrVertexPoint, PointOnRelatedElement:IfcPointOrVertexPoint, EccentricityInX:IfcLengthMeasure, EccentricityInY:IfcLengthMeasure, EccentricityInZ:IfcLengthMeasure) {
        super(PointOnRelatingElement, PointOnRelatedElement)
        this.EccentricityInX = EccentricityInX
        this.EccentricityInY = EccentricityInY
        this.EccentricityInZ = EccentricityInZ
    }
    /** Distance in x direction between the two points (or vertex points) engaged in the point connection.
    */
    EccentricityInX?: IfcLengthMeasure
    /** Distance in y direction between the two points (or vertex points) engaged in the point connection.
    */
    EccentricityInY?: IfcLengthMeasure
    /** Distance in z direction between the two points (or vertex points) engaged in the point connection.
    */
    EccentricityInZ?: IfcLengthMeasure
}

export default IfcConnectionPointEccentricity