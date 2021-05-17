// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcCoordinateReferenceSystem

import { IfcLabel, IfcText, IfcIdentifier } from '../types'

/** The IfcCoordinateReferenceSystem is a definition of a coordinate reference system by means of qualified identifiers only.
 *
 * The interpretation of the identifier is expected to be well-known to the receiving software
 *
 * The unambiguous identifier by which the coordinate reference system is know, is stored in the Name attribute.
 *
 * Well defined identifiers include the geodetic and often also the vertical datum.
 *
 * In these cases the GeodeticDatum and the VerticalDatum can be omitted.
 */
abstract class IfcCoordinateReferenceSystem  {
    constructor(Name:IfcLabel, Description:IfcText, GeodeticDatum:IfcIdentifier, VerticalDatum:IfcIdentifier) {

        this.Name = Name
        this.Description = Description
        this.GeodeticDatum = GeodeticDatum
        this.VerticalDatum = VerticalDatum
    }
    /** Name by which the coordinate reference system is identified.
     * The name shall be taken from the list recognized by the European Petroleum Survey Group EPSG.
     * It should then be qualified by the EPSG name space, for example as 'EPSG:5555'.
    */
    Name: IfcLabel
    /** Informal description of this coordinate reference system.
    */
    Description?: IfcText
    /** Name by which this datum is identified.
     * The geodetic datum is associated with the coordinate reference system and indicates the shape and size of the rotation ellipsoid and this ellipsoid's connection and orientation to the actual globe/earth.
     * It needs to be provided, if the Name identifier does not unambiguously define the geodetic datum as well.
     * EXAMPLE geodetic datums include: ED50 EUREF89 WSG84
    */
    GeodeticDatum?: IfcIdentifier
    /** Name by which the vertical datum is identified.
     * The vertical datum is associated with the height axis of the coordinate reference system and indicates the reference plane and fundamental point defining the origin of a height system.
     * It needs to be provided, if the Name identifier does not unambiguously define the vertical datum as well and if the coordinate reference system is a 3D reference system.
     * EXAMPLE vertical datums include: DHHN92: the German 'Haupthöhennetz' EVRS2007; the European Vertical Reference System
    */
    VerticalDatum?: IfcIdentifier
}

export default IfcCoordinateReferenceSystem