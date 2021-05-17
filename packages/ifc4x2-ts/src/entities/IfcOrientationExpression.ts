// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcOrientationExpression

import { IfcDirection, IfcGeometricRepresentationItem } from './'

/** 
 */
 class IfcOrientationExpression extends IfcGeometricRepresentationItem {
    constructor(LateralAxisDirection:IfcDirection, VerticalAxisDirection:IfcDirection) {
        super()
        this.LateralAxisDirection = LateralAxisDirection
        this.VerticalAxisDirection = VerticalAxisDirection
    }
    /** Direction of the lateral axis.
    */
    LateralAxisDirection: IfcDirection
    /** Direction of the vertical axis.
    */
    VerticalAxisDirection: IfcDirection
}

export default IfcOrientationExpression