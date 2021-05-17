// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcFailureConnectionCondition

import { IfcForceMeasure, IfcLabel } from '../types'
import { IfcStructuralConnectionCondition } from './'

/** Defines forces at which a support or connection fails
 *
 * Applicability:
 */
 class IfcFailureConnectionCondition extends IfcStructuralConnectionCondition {
    constructor(Name:IfcLabel, TensionFailureX:IfcForceMeasure, TensionFailureY:IfcForceMeasure, TensionFailureZ:IfcForceMeasure, CompressionFailureX:IfcForceMeasure, CompressionFailureY:IfcForceMeasure, CompressionFailureZ:IfcForceMeasure) {
        super(Name)
        this.TensionFailureX = TensionFailureX
        this.TensionFailureY = TensionFailureY
        this.TensionFailureZ = TensionFailureZ
        this.CompressionFailureX = CompressionFailureX
        this.CompressionFailureY = CompressionFailureY
        this.CompressionFailureZ = CompressionFailureZ
    }
    /** Tension force in x-direction leading to failure of the connection.
    */
    TensionFailureX?: IfcForceMeasure
    /** Tension force in y-direction leading to failure of the connection.
    */
    TensionFailureY?: IfcForceMeasure
    /** Tension force in z-direction leading to failure of the connection.
    */
    TensionFailureZ?: IfcForceMeasure
    /** Compression force in x-direction leading to failure of the connection.
    */
    CompressionFailureX?: IfcForceMeasure
    /** Compression force in y-direction leading to failure of the connection.
    */
    CompressionFailureY?: IfcForceMeasure
    /** Compression force in z-direction leading to failure of the connection.
    */
    CompressionFailureZ?: IfcForceMeasure
}

export default IfcFailureConnectionCondition