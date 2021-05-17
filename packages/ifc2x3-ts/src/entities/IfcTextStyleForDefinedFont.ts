// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcTextStyleForDefinedFont

import { IfcColour } from '../types'

/** The IfcTextStyleForDefinedFont combines the text font color with an optional background color, that fills the text box, defined by the planar extent given to the text literal.
 */
 class IfcTextStyleForDefinedFont  {
    constructor(Colour:IfcColour, BackgroundColour:IfcColour) {

        this.Colour = Colour
        this.BackgroundColour = BackgroundColour
    }
    /** This property describes the text color of an element (often referred to as the foreground color).
    */
    Colour: IfcColour
    /** This property sets the background color of an element.
    */
    BackgroundColour?: IfcColour
}

export default IfcTextStyleForDefinedFont