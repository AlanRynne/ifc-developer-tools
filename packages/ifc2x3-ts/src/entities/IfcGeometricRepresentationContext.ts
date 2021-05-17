// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcGeometricRepresentationContext

import { IfcDimensionCount, IfcAxis2Placement, IfcLabel } from '../types'
import { IfcDirection, IfcRepresentationContext } from './'

/** The IfcGeometricRepresentationContext defines the context that applies to several shape representations of products within a project.
 *
 * It defines the type of the context in which the shape representation is defined, and the numeric precision applicable to the geometric representation items defined in this context.
 *
 * In addition it can be used to offset the project coordinate system from a global point of origin, using the WorldCoordinateSystem attribute.
 *
 * The main representation context may also provide the true north direction, see Figure 437
 *
 * The use of one instance of IfcGeometricRepresentationContext to represent the model (3D) view is mandatory, the use of a second instance of IfcGeometricRepresentationContext to represent the plan (2D) view is optional (but needs to be given, if there are scale dependent plan views), the additional scale or view dependent contexts need to be handled by using the subtype IfcGeometricRepresentationSubContext pointing to the model view (or the plan view) as the ParentContext.
 *
 * See Figure 438 for an example using geometric representation contexts for 3D and 2D with assigned sub contexts.
 */
 class IfcGeometricRepresentationContext extends IfcRepresentationContext {
    constructor(ContextIdentifier:IfcLabel, ContextType:IfcLabel, CoordinateSpaceDimension:IfcDimensionCount, Precision:number, WorldCoordinateSystem:IfcAxis2Placement, TrueNorth:IfcDirection) {
        super(ContextIdentifier, ContextType)
        this.CoordinateSpaceDimension = CoordinateSpaceDimension
        this.Precision = Precision
        this.WorldCoordinateSystem = WorldCoordinateSystem
        this.TrueNorth = TrueNorth
    }
    /** The integer dimension count of the coordinate space modeled in a geometric representation context.
    */
    CoordinateSpaceDimension: IfcDimensionCount
    /** Value of the model precision for geometric models.
     * It is a double value (REAL), typically in 1E-5 to 1E-8 range, that indicates the tolerance under which two given points are still assumed to be identical.
     * The value can be used e.g. to sets the maximum distance from an edge curve to the underlying face surface in brep models.
    */
    Precision?: number
    /** Establishment of the engineering coordinate system (often referred to as the world coordinate system in CAD) for all representation contexts used by the project.
     * It can be used to provide better numeric stability if the placement of the building(s) is far away from the origin.
     * In most cases however it would be set to origin: (0.,0.,0.) and directions x(1.,0.,0.), y(0.,1.,0.), z(0.,0.,1.).
     * If an geographic placement is provided using IfcMapConversion then the WorldCoordinateSystem atttibute is used to define the offset between the zero point of the local engineering coordinate system and the geographic reference point to which the IfcMapConversion offset relates.
     * In preferred practise both points (also called "project base point" and "survey point") should be coincidental.
     * However it is possible to offset the geographic reference point from the local zero point.
    */
    WorldCoordinateSystem: IfcAxis2Placement
    /** Direction of the true north, or geographic northing direction, relative to the underlying project coordinate system.
     * It is given by a 2 dimensional direction within the xy-plane of the project coordinate system.
     * If not present, it defaults to 0. 1., meaning that the positive Y axis of the project coordinate system equals the geographic northing direction.
     * If a geographic placement is provided using IfcMapConversion then the true north is for information only.
     * In case of inconsistency, the value provided with IfcMapConversion shall take precedence.
    */
    TrueNorth?: IfcDirection
}

export default IfcGeometricRepresentationContext