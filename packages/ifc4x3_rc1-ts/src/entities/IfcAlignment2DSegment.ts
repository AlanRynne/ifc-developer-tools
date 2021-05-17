// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcAlignment2DSegment

import { IfcBoolean, IfcLabel } from '../types'
import { IfcGeometricRepresentationItem } from './'

/** An abstract entity defining common information about horizontal and vertical alignment segments.
 */
abstract class IfcAlignment2DSegment extends IfcGeometricRepresentationItem {
    constructor(TangentialContinuity:IfcBoolean, StartTag:IfcLabel, EndTag:IfcLabel) {
        super()
        this.TangentialContinuity = TangentialContinuity
        this.StartTag = StartTag
        this.EndTag = EndTag
    }
    /** Connectivity between the continuous segments is not enforced per se to be tangential.
     * Setting "TangentialContinuity" to True means that the current segment shall continue with tangential continuity to the previous one.
    */
    TangentialContinuity?: IfcBoolean
    /** Tag to annotate the start point of the alignment segment.
    */
    StartTag?: IfcLabel
    /** Tag to annotate the end point of the alignment segment.
    */
    EndTag?: IfcLabel
}

export default IfcAlignment2DSegment