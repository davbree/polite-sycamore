export default {
    "type": "document",
    "name": "contact",
    "title": "Contact",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "description": "The title of the page.",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "subtitle",
            "title": "Subtitle",
            "description": "The text shown below the page title.",
            "validation": null
        },
        {
            "type": "image",
            "name": "img_path",
            "title": "Image",
            "description": "The image shown below the page title.",
            "validation": null
        },
        {
            "type": "page_menus",
            "name": "menus",
            "title": "Contact Menus",
            "description": "Which menus should this page show up in",
            "validation": null
        },
        {
            "type": "string",
            "name": "layout",
            "title": "Layout",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "contact"
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_url_path",
            "title": "Contact URL Path",
            "description": "The URL path of this page relative to site root. For example, the site root page would be \"/\", and post page would be \"posts/new-post/\"",
            "validation": Rule => Rule.required()
        },
        {
            "type": "markdown",
            "name": "content",
            "title": "Content",
            "description": "Page content",
            "validation": null
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
                    "page"
                ]
            }
        }
    ],
    "singleInstance": true,
    "preview": {
        "select": {
            "title": "title"
        }
    }
}