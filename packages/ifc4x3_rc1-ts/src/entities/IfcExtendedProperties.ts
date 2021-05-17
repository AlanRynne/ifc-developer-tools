// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcExtendedProperties

import { IfcIdentifier, IfcText } from '../types'
import { IfcProperty, IfcPropertyAbstraction } from './'

/** The IfcExtendedProperties is an abstract supertype of all extensible property collections that are applicable to certain characterized entities.
 *
 * Instantiable subtypes of IfcExtendedProperties assign the property collection to a particular characterized entity.
 *
 * Instantiable subtypes have a set of Properties, each providing property name, value and unit and other instance information, depending on the subtype of IfcProperty referenced.
 */
abstract class IfcExtendedProperties extends IfcPropertyAbstraction {
    constructor(Name:IfcIdentifier, Description:IfcText, Properties:Array<IfcProperty>) {
        super()
        this.Name = Name
        this.Description = Description
        this.Properties = Properties
    }
    /** The name given to the set of properties.
    */
    Name?: IfcIdentifier
    /** Description for the set of properties.
    */
    Description?: IfcText
    /** The set of properties provided for this extended property collection.
    */
    Properties: Array<IfcProperty>
}

export default IfcExtendedProperties