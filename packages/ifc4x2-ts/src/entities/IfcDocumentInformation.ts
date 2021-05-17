// This file was generated automatically using "ifc-syntax-codegen"
//
// Licensed under MIT by Alan Rynne
//
// Contains the following entities:
//    - IfcDocumentInformation

import { IfcIdentifier, IfcLabel, IfcText, IfcURIReference, IfcActorSelect, IfcDateTime, IfcDate, IfcDocumentConfidentialityEnum, IfcDocumentStatusEnum } from '../types'
import { IfcExternalInformation } from './'

/** IfcDocumentInformation captures "metadata" of an external document.
 *
 * The actual content of the document is not defined in this specification; instead, it can be found following the Location attribute
 *
 * The same IfcDocumentInformation can be referenced from the exchange structure in total or in parts (e.g. by refering to particular chapters or paragraphs) using the IfcDocumentReference.
 *
 * All IfcDocumentReference's that utilize the IfcDocumentInformation are accessible by the inverse relationship HasDocumentReferences.
 */
 class IfcDocumentInformation extends IfcExternalInformation {
    constructor(Identification:IfcIdentifier, Name:IfcLabel, Description:IfcText, Location:IfcURIReference, Purpose:IfcText, IntendedUse:IfcText, Scope:IfcText, Revision:IfcLabel, DocumentOwner:IfcActorSelect, Editors:Array<IfcActorSelect>, CreationTime:IfcDateTime, LastRevisionTime:IfcDateTime, ElectronicFormat:IfcIdentifier, ValidFrom:IfcDate, ValidUntil:IfcDate, Confidentiality:IfcDocumentConfidentialityEnum, Status:IfcDocumentStatusEnum) {
        super()
        this.Identification = Identification
        this.Name = Name
        this.Description = Description
        this.Location = Location
        this.Purpose = Purpose
        this.IntendedUse = IntendedUse
        this.Scope = Scope
        this.Revision = Revision
        this.DocumentOwner = DocumentOwner
        this.Editors = Editors
        this.CreationTime = CreationTime
        this.LastRevisionTime = LastRevisionTime
        this.ElectronicFormat = ElectronicFormat
        this.ValidFrom = ValidFrom
        this.ValidUntil = ValidUntil
        this.Confidentiality = Confidentiality
        this.Status = Status
    }
    /** Identifier that uniquely identifies a document.
     * IFC4 CHANGE Attribute renamed from DocumentId.
    */
    Identification: IfcIdentifier
    /** File name or document name assigned by owner.
    */
    Name: IfcLabel
    /** Description of document and its content.
    */
    Description?: IfcText
    /** Resource identifier or locator, provided as URI, URN or URL, of the document information for online references.
     * IFC4 CHANGE New attribute added at the place of the removed attribute DocumentReferences.
    */
    Location?: IfcURIReference
    /** Purpose for this document.
    */
    Purpose?: IfcText
    /** Intended use for this document.
    */
    IntendedUse?: IfcText
    /** Scope for this document.
    */
    Scope?: IfcText
    /** Document revision designation.
    */
    Revision?: IfcLabel
    /** Information about the person and/or organization acknowledged as the 'owner' of this document.
     * In some contexts, the document owner determines who has access to or editing right to the document.
    */
    DocumentOwner?: IfcActorSelect
    /** The persons and/or organizations who have created this document or contributed to it.
    */
    Editors?: Array<IfcActorSelect>
    /** Date and time stamp when the document was originally created.
     * IFC4 CHANGE The data type has been changed to IfcDateTime, the date time string according to ISO8601.
    */
    CreationTime?: IfcDateTime
    /** Date and time stamp when this document version was created.
     * IFC4 CHANGE The data type has been changed to IfcDateTime, the date time string according to ISO8601.
    */
    LastRevisionTime?: IfcDateTime
    /** Describes the media type used in various internet protocols, also referred to as "Content-type", or "MIME-type (Multipurpose Internet Mail Extension), of the document being referenced.
     * It is composed of (at least) two parts, a type and a subtype.
     * The iana (Internet Assigned Numbers Authority) published the media types.
     * EXAMPLE 'image/png' denotes an image type of png (Portable Network Graphics) subtype, 'application/pdf' denotes an application specific type of pdf (Portable Document Format) subtype IFC4 CHANGE The data type has been changed from entity data type to IfcIdentifier.
    */
    ElectronicFormat?: IfcIdentifier
    /** Date when the document becomes valid.
     * IFC4 CHANGE The data type has been changed to IfcDate, the date string according to ISO8601.
    */
    ValidFrom?: IfcDate
    /** Date until which the document remains valid.
     * IFC4 CHANGE The data type has been changed to IfcDate, the date string according to ISO8601.
    */
    ValidUntil?: IfcDate
    /** The level of confidentiality of the document.
    */
    Confidentiality?: IfcDocumentConfidentialityEnum
    /** The current status of the document.
     * Examples of status values that might be used for a document information status include: - DRAFT - FINAL DRAFT - FINAL - REVISION
    */
    Status?: IfcDocumentStatusEnum
}

export default IfcDocumentInformation