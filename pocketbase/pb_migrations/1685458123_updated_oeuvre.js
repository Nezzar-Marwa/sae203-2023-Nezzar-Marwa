migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ux1xyk5xfq671ta")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "aezgwyef",
    "name": "artiste",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "dlidj9onehsntlw",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": [
        "nom"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ux1xyk5xfq671ta")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "aezgwyef",
    "name": "artiste",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "dlidj9onehsntlw",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
