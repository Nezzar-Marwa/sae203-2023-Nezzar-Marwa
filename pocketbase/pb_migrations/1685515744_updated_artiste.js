migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dlidj9onehsntlw")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bqsww3ih",
    "name": "favoris",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dlidj9onehsntlw")

  // remove
  collection.schema.removeField("bqsww3ih")

  return dao.saveCollection(collection)
})
