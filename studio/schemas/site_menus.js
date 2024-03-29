export default {
    "type": "document",
    "name": "site_menus",
    "title": "Site Menus",
    "fields": [
        {
            "type": "array",
            "name": "secondary",
            "title": "Secondary menu",
            "description": "List of items for Secondary menu",
            "validation": null,
            "of": [
                {
                    "type": "site_menu_item"
                }
            ]
        },
        {
            "type": "array",
            "name": "main",
            "title": "Main menu",
            "description": "List of items for Main menu",
            "validation": null,
            "of": [
                {
                    "type": "site_menu_item"
                }
            ]
        },
        {
            "type": "string",
            "name": "stackbit_file_path",
            "title": "Site Menus File Path",
            "description": "The file path of the file that stores this data",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "_data/menus.yml"
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_model_type",
            "title": "Stackbit Model Type",
            "description": "Stackbit model type",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "data"
                ]
            }
        }
    ],
    "singleInstance": true
}