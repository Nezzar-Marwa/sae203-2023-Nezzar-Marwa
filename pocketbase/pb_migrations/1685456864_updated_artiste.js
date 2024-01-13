migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dlidj9onehsntlw")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dwf0wzen",
    "name": "oeuvres",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "ux1xyk5xfq671ta",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": [
        "nom"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dlidj9onehsntlw")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dwf0wzen",
    "name": "oeuvres",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "ux1xyk5xfq671ta",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
