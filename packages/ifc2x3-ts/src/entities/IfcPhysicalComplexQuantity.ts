// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcPhysicalComplexQuantity

import { IfcPhysicalQuantity } from './'
import { IfcLabel, IfcText } from '../types'

/** The complex physical quantity, IfcPhysicalComplexQuantity, is an entity that holds a set of single quantity measure value (as defined at the subtypes of IfcPhysicalSimpleQuantity), that all apply to a given component or aspect of the element
 *
 * A section "Quantity Use Definition" at individual entities as subtypes of IfcBuildingElement gives guidance to the usage of the Name and Discrimination attribute to characterize the complex quantities.
 */
 class IfcPhysicalComplexQuantity extends IfcPhysicalQuantity {
    constructor(Name:IfcLabel, Description:IfcText, HasQuantities:Array<IfcPhysicalQuantity>, Discrimination:IfcLabel, Quality:IfcLabel, Usage:IfcLabel) {
        super(Name, Description)
        this.HasQuantities = HasQuantities
        this.Discrimination = Discrimination
        this.Quality = Quality
        this.Usage = Usage
    }
    /** Set of physical quantities that are grouped by this complex physical quantity according to a given discrimination.
    */
    HasQuantities: Array<IfcPhysicalQuantity>
    /** Identification of the discrimination by which this physical complex property is distinguished.
     * Examples of discriminations are 'layer', 'steel bar diameter', etc.
    */
    Discrimination: IfcLabel
    /** Additional indication of a quality of the quantities that are grouped under this physical complex quantity.
    */
    Quality?: IfcLabel
    /** Additional indication of a usage type of the quantities that are grouped under this physical complex quantity.
    */
    Usage?: IfcLabel
}

export default IfcPhysicalComplexQuantity