// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcCoordinateOperation

import { IfcCoordinateReferenceSystemSelect } from '../types'
import { IfcCoordinateReferenceSystem } from './'

/** The coordinate operation is an abstract supertype to handle any operation (transformation or conversion) between two coordinate reference systems.
 *
 * It is meant to provide expandability for future versions, since currently only the conversion of a local engineering coordinate system into a map coordinate reference system is dealt with by the subtype IfcMapConversion
 *
 * By convention, a coordinate operation is given between the SourceCRS being the more local, or child coordinate reference system, and the TargetCRS being the more remote or parent coordinate reference system, in the special case the coordinate operation between the local engineering coordinate system of the construction project and any map or other coordinate reference system.
 */
abstract class IfcCoordinateOperation  {
    constructor(SourceCRS:IfcCoordinateReferenceSystemSelect, TargetCRS:IfcCoordinateReferenceSystem) {

        this.SourceCRS = SourceCRS
        this.TargetCRS = TargetCRS
    }
    /** Source coordinate reference system for the operation.
    */
    SourceCRS: IfcCoordinateReferenceSystemSelect
    /** Target coordinate reference system for the operation.
    */
    TargetCRS: IfcCoordinateReferenceSystem
}

export default IfcCoordinateOperation