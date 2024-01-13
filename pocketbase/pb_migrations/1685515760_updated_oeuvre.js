migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ux1xyk5xfq671ta")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qqwkwvhg",
    "name": "favoris",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ux1xyk5xfq671ta")

  // remove
  collection.schema.removeField("qqwkwvhg")

  return dao.saveCollection(collection)
})
