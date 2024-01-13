/**
* This file was @generated using pocketbase-typegen
*/

export enum Collections {
	Artiste = "artiste",
	Oeuvre = "oeuvre",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type ArtisteRecord = {
	nom?: string
	prenom?: string
	image?: string
	naissance?: IsoDateString
	mort?: IsoDateString
	description?: string
	oeuvres?: RecordIdString[]
	favoris?: boolean
}

export type OeuvreRecord = {
	nom?: string
	date?: IsoDateString
	image?: string
	description?: string
	artiste?: RecordIdString
	favoris?: boolean
	lartiste?: string
}

export type UsersRecord = {
	name?: string
	avatar?: string
}

// Response types include system fields and match responses from the PocketBase API
export type ArtisteResponse<Texpand = unknown> = Required<ArtisteRecord> & BaseSystemFields<Texpand>
export type OeuvreResponse<Texpand = unknown> = Required<OeuvreRecord> & BaseSystemFields<Texpand>
export type UsersResponse = Required<UsersRecord> & AuthSystemFields

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	artiste: ArtisteRecord
	oeuvre: OeuvreRecord
	users: UsersRecord
}

export type CollectionResponses = {
	artiste: ArtisteResponse
	oeuvre: OeuvreResponse
	users: UsersResponse
}