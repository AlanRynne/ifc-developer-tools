// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcElementQuantity

import { IfcLabel, IfcGloballyUniqueId, IfcText } from '../types'
import { IfcPhysicalQuantity, IfcOwnerHistory, IfcPropertySetDefinition } from './'

/** An IfcElementQuantity defines a set of derived measures of an element's physical property.
 *
 * Elements could be spatial structure elements (like buildings, storeys, or spaces) or building elements (like walls, slabs, finishes).
 *
 * The IfcElementQuantity gets assigned to the element by using the IfcRelDefinesByProperties relationship
 *
 * The optional MethodOfMeasurement attribute defines the code, e.g. from a standard method of measurement, which had been used to calculate the element quantity.
 *
 * The name attribute, given at the individual Quantities provides a recognizable semantic meaning of the element quantity.
 *
 * Both information is needed to establish a precise meaning for the measure value.
 *
 * An optional description may be assigned to each of the Quantities.
 *
 * All quantities assigned by a single instance of IfcElementQuantity are deemed to have been generated according to the same method of measurement.
 *
 * However several instances of IfcElementQuantity are assignable to an element, thus allowing for an element having quantities generated according to several methods of measurement.
 *
 * The IfcElementQuantity can have the following subtypes of IfcPhysicalQuantity within its SET of Quantities, which count for the basis measure types used:Base quantities are quantity definitions that are independent of a particular method of measurement and therefore internationally applicable.
 *
 * Base quantities are defined as gross and net values and provided by measurement of the correct geometric shape representation of the element.
 *
 * This specification includes a set of base quantity definition.
 *
 * See each subtype of IfcElement for applicable base quantities
 *
 * The following general agreements apply for each base quantity set
 */
 class IfcElementQuantity extends IfcPropertySetDefinition {
    constructor(GlobalId:IfcGloballyUniqueId, OwnerHistory:IfcOwnerHistory, Name:IfcLabel, Description:IfcText, MethodOfMeasurement:IfcLabel, Quantities:Array<IfcPhysicalQuantity>) {
        super(GlobalId, OwnerHistory, Name, Description)
        this.MethodOfMeasurement = MethodOfMeasurement
        this.Quantities = Quantities
    }
    /** Name of the method of measurement used to calculate the element quantity.
     * The method of measurement attribute has to be made recognizable by further agreements.
     * IFC2x2 Addendum 1 change: The attribute has been changed to be optional
    */
    MethodOfMeasurement?: IfcLabel
    /** The individual quantities for the element, can be a set of length, area, volume, weight or count based quantities.
    */
    Quantities: Array<IfcPhysicalQuantity>
}

export default IfcElementQuantity