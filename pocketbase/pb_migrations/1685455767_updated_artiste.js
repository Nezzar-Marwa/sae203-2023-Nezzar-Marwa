migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dlidj9onehsntlw")

  // remove
  collection.schema.removeField("zegegimo")

  // add
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dlidj9onehsntlw")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zegegimo",
    "name": "oeuvres",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "dlidj9onehsntlw",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  // remove
  collection.schema.removeField("dwf0wzen")

  return dao.saveCollection(collection)
})
