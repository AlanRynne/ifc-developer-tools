// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcSite

import { IfcCompoundPlaneAngleMeasure, IfcLengthMeasure, IfcLabel, IfcGloballyUniqueId, IfcText, IfcElementCompositionEnum } from '../types'
import { IfcPostalAddress, IfcOwnerHistory, IfcObjectPlacement, IfcProductRepresentation, IfcSpatialStructureElement } from './'

/** A site is a defined area of land, possibly covered with water, on which the project construction is to be completed.
 *
 * A site may be used to erect, retrofit or turn down building(s), or for other construction related developments
 *
 * A site may include a definition of the single geographic reference point for this site (global position using WGS84 with Longitude, Latitude and Elevation).
 *
 * The precision is provided up to millionth of a second and it provides an absolute placement in relation to the real world as used in exchange with geospational information systems.
 *
 * If asserted, the Longitude, Latitude and Elevation establish the point in WGS84 where the point 0.,0.,0. of the LocalPlacement of IfcSite is situated
 *
 * The geometrical placement of the site, defined by the IfcLocalPlacement, shall be always relative to the spatial structure element, in which this site is included, or absolute, i.e. to the world coordinate system, as established by the geometric representation context of the project.
 *
 * The world coordinate system, established at the IfcProject
 *
 * RepresentationContexts, may include a definition of the true north within the XY plane of the world coordinate system, if provided, it can be obtained at IfcGeometricRepresentationContext
 *
 * TrueNorth.A project may span over several connected or disconnected sites.
 *
 * Therefore site complex provides for a collection of sites included in a project.
 *
 * A site can also be decomposed in parts, where each part defines a site section.
 *
 * This is defined by the composition type attribute of the supertype IfcSpatialStructureElements which is interpreted as follow:The IfcSite is used to build the spatial structure of a building (that serves as the primary project breakdown and is required to be hierarchical).
 *
 * Figure 181 shows the IfcSite as part of the spatial structure.
 *
 * In addition to the logical spatial structure, also the placement hierarchy is shown.
 *
 * In this example the spatial structure hierarchy and the placement hierarchy are identical
 *
 * Figure 182 describes the heights and elevations of the IfcSite.
 *
 * It is used to provide the geographic longitude, latitude, and height above sea level for the origin of the site.
 *
 * The origin of the site is the local placement
 *
 * The provision of longitude, latitude, height at the IfcSite for georeferencing is provided for upward compatibility reasons.
 *
 * It requires a single instance of IfcSite and WGS84 as coordinate reference system
 *
 * For exact georeferencing (or referencing to any other geographic coordinate system other than WSG84) the entities IfcCoordinateReferenceSystem and IfcMapConversion have to be used to define an exact mapping of the project engineering coordinate system to the geographic (or map) coordinate system.
 */
 class IfcSite extends IfcSpatialStructureElement {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, ObjectType:IfcLabel, ObjectPlacement:IfcObjectPlacement, Representation:IfcProductRepresentation, LongName:IfcLabel, CompositionType:IfcElementCompositionEnum, RefLatitude:IfcCompoundPlaneAngleMeasure, RefLongitude:IfcCompoundPlaneAngleMeasure, RefElevation:IfcLengthMeasure, LandTitleNumber:IfcLabel, SiteAddress:IfcPostalAddress) {
        super(GlobalId, OwnerHistory, Name, Description, ObjectType, ObjectPlacement, Representation, LongName, CompositionType)
        this.RefLatitude = RefLatitude
        this.RefLongitude = RefLongitude
        this.RefElevation = RefElevation
        this.LandTitleNumber = LandTitleNumber
        this.SiteAddress = SiteAddress
    }
    /** World Latitude at reference point (most likely defined in legal description).
     * Defined as integer values for degrees, minutes, seconds, and, optionally, millionths of seconds with respect to the world geodetic system WGS84.
     * Latitudes are measured relative to the geodetic equator, north of the equator by positive values - from 0 till +90, south of the equator by negative values - from 0 till -90.
    */
    RefLatitude?: IfcCompoundPlaneAngleMeasure
    /** World Longitude at reference point (most likely defined in legal description).
     * Defined as integer values for degrees, minutes, seconds, and, optionally, millionths of seconds with respect to the world geodetic system WGS84.
     * Longitudes are measured relative to the geodetic zero meridian, nominally the same as the Greenwich prime meridian: longitudes west of the zero meridian have negative values - from 0 till -180, longitudes east of the zero meridian have positive values - from 0 till -180.
     * EXAMPLE Chicago Harbor Light has according to WGS84 a longitude -87.35.40 (or 87.35.40W) and a latitude 41.53.30 (or 41.53.30N).
    */
    RefLongitude?: IfcCompoundPlaneAngleMeasure
    /** Datum elevation relative to sea level.
    */
    RefElevation?: IfcLengthMeasure
    /** The land title number (designation of the site within a regional system).
    */
    LandTitleNumber?: IfcLabel
    /** Address given to the site for postal purposes.
    */
    SiteAddress?: IfcPostalAddress
}

export default IfcSite