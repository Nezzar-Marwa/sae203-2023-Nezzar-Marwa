migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ux1xyk5xfq671ta")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "86w0zazx",
    "name": "lartiste",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ux1xyk5xfq671ta")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "86w0zazx",
    "name": "l_artiste",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
