migrate((db) => {
  const collection = new Collection({
    "id": "ux1xyk5xfq671ta",
    "created": "2023-05-30 14:08:12.427Z",
    "updated": "2023-05-30 14:08:12.427Z",
    "name": "oeuvre",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "lvbqcblj",
        "name": "nom",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "gqjn7g9d",
        "name": "date",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "riiahjsc",
        "name": "image",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [],
          "thumbs": [],
          "protected": false
        }
      },
      {
        "system": false,
        "id": "1h3ngezb",
        "name": "description",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ux1xyk5xfq671ta");

  return dao.deleteCollection(collection);
})
