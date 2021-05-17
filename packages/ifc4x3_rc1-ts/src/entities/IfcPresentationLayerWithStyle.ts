// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcPresentationLayerWithStyle

import { IfcLogical, IfcLabel, IfcText, IfcLayeredItem, IfcIdentifier } from '../types'
import { IfcPresentationStyle, IfcPresentationLayerAssignment } from './'

/** An IfcPresentationLayerAssignmentWithStyle extends the presentation layer assignment with capabilities to define visibility control, access control and common style information
 *
 * The visibility control allows to define a layer to be either 'on' or 'off', and/or 'frozen' or 'not frozen'.
 *
 * The access control allows to block graphical entities from manipulations by setting a layer to be either 'blocked' or 'not blocked'.
 *
 * Common style information can be given to the layer.
 */
 class IfcPresentationLayerWithStyle extends IfcPresentationLayerAssignment {
    constructor(Name:IfcLabel, Description:IfcText, AssignedItems:Array<IfcLayeredItem>, Identifier:IfcIdentifier, LayerOn:IfcLogical, LayerFrozen:IfcLogical, LayerBlocked:IfcLogical, LayerStyles:Array<IfcPresentationStyle>) {
        super(Name, Description, AssignedItems, Identifier)
        this.LayerOn = LayerOn
        this.LayerFrozen = LayerFrozen
        this.LayerBlocked = LayerBlocked
        this.LayerStyles = LayerStyles
    }
    /** A logical setting, TRUE indicates that the layer is set to 'On', FALSE that the layer is set to 'Off', UNKNOWN that such information is not available.
    */
    LayerOn: IfcLogical
    /** A logical setting, TRUE indicates that the layer is set to 'Frozen', FALSE that the layer is set to 'Not frozen', UNKNOWN that such information is not available.
    */
    LayerFrozen: IfcLogical
    /** A logical setting, TRUE indicates that the layer is set to 'Blocked', FALSE that the layer is set to 'Not blocked', UNKNOWN that such information is not available.
    */
    LayerBlocked: IfcLogical
    /** Assignment of presentation styles to the layer to provide a default style for representation items.
     * In most cases the assignment of styles to a layer is restricted to an IfcCurveStyle representing the layer curve colour, layer curve thickness, and layer curve type.
     * IFC4 CHANGE The data type has been changed from IfcPresentationStyleSelect (now deprecated) to IfcPresentationStyle.
    */
    LayerStyles: Array<IfcPresentationStyle>
}

export default IfcPresentationLayerWithStyle