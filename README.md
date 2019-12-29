## Get List
```
/**
    * api/v1/list
    *   get:
    *     description: Get Products List.
    *     produces:
    *       - application/json
    *     query parameters:
    *      - name: queryString to search product by name.For example:-api/v1/list?name=Redmi
    *        filters: it takes array of json which includes filters like Storage,RAM,Color.For example:-api/v1/list/?filters=[{Storage:"64GB,128GB"}]
    *        
    *     responses:
    *       200:
    *         description: Successful
    *       404:
    *          description: Not Found.
    *       

```
**Sample response**

```
{
  "status": "success",
  "results": 1,
  "data": {
    "purchaseAbles": [
      {
        "images": [
          "https://rukminim1.flixcart.com/image/128/128/k0lbdzk0pkrrdj/mobile/c/r/v/mi-redmi-note-7-pro-mzb7464in-original-imafgdhwn8jfxejv.jpeg?q=70"
        ],
        "option_ids": [
          "5e08b21905c941d2792ffc70",
          "5e08b10805c941d2792ffc6c",
          "5e08b07d05c941d2792ffc6a"
        ],
        "_id": "5e08814d05c941d2792ffc69",
        "name": "Redmi Note 7 Pro (Neptune Blue, 64 GB)  (4 GB RAM)",
        "price": 15999,
        "discounted_price": 10999,
        "description": "Whether it’s work or entertainment, the Redmi Note 7 Pro challenges all odds and provides a truly immersive and enriched smartphone experience. Its 2.0 GHz Qualcomm Snapdragon 675 processor makes multitasking easy and it also comes with a (48 MP + 5 MP) dual-rear camera and a 13 MP front camera which let you click truly beautiful pictures. What’s more, the Face Unlock features makes unlocking this phone a piece of cake.",
        "product_id": "5e08713805c941d2792ffc65"
      }
    ]
  }
}

```


## Get Detail
```
/**
    * api/v1/details/:id
    *   get:
    *     description: Get Detail and siblings.
    *     produces:
    *       - application/json
    *      parameters:
    *      - id: to search product by id.For example:-api/v1/details/5e08814d05c941d2792ffc69
    *     responses:
    *       200:
    *         description: Successful
    *       404:
    *          description: Not Found.
    *       

```
**Sample response**

```
{
  "status": "success",
  "data": {
    "outout": {
      "product": {
        "images": [
          "https://rukminim1.flixcart.com/image/128/128/jyyqc280/mobile/x/s/d/mi-redmi-note-7-pro-mzb8433in-original-imafj36ggzkarsuz.jpeg?q=70"
        ],
        "option_ids": [
          "5e08b22005c941d2792ffc71",
          "5e08b0a305c941d2792ffc6b",
          "5e08b1c205c941d2792ffc6f"
        ],
        "_id": "5e08b96c1ae76364d8373c0a",
        "name": "Redmi Note 7 Pro (Astro Moonlight White, 128 GB)  (6 GB RAM)",
        "price": 17999,
        "discounted_price": 14999,
        "description": "Whether it’s work or entertainment, the Redmi Note 7 Pro challenges all odds and provides a truly immersive and enriched smartphone experience. Its 2.0 GHz Qualcomm Snapdragon 675 processor makes multitasking easy and it also comes with a (48 MP + 5 MP) dual-rear camera and a 13 MP front camera which let you click truly beautiful pictures. What’s more, the Face Unlock features makes unlocking this phone a piece of cake.",
        "product_id": "5e08713805c941d2792ffc65"
      },
      "variants": [
        {
          "images": [
            "https://rukminim1.flixcart.com/image/128/128/k0lbdzk0pkrrdj/mobile/c/r/v/mi-redmi-note-7-pro-mzb7464in-original-imafgdhwn8jfxejv.jpeg?q=70"
          ],
          "option_ids": [
            "5e08b21905c941d2792ffc70",
            "5e08b10805c941d2792ffc6c",
            "5e08b07d05c941d2792ffc6a"
          ],
          "_id": "5e08814d05c941d2792ffc69",
          "name": "Redmi Note 7 Pro (Neptune Blue, 64 GB)  (4 GB RAM)",
          "price": 15999,
          "discounted_price": 10999,
          "description": "Whether it’s work or entertainment, the Redmi Note 7 Pro challenges all odds and provides a truly immersive and enriched smartphone experience. Its 2.0 GHz Qualcomm Snapdragon 675 processor makes multitasking easy and it also comes with a (48 MP + 5 MP) dual-rear camera and a 13 MP front camera which let you click truly beautiful pictures. What’s more, the Face Unlock features makes unlocking this phone a piece of cake.",
          "product_id": "5e08713805c941d2792ffc65"
        },
        {
          "images": [
            "https://rukminim1.flixcart.com/image/128/128/jyxaw7k0/mobile/r/q/n/mi-redmi-note-7-pro-mzb7701in-original-imafgdhw7gzzcm9t.jpeg?q=70"
          ],
          "option_ids": [
            "5e08b22005c941d2792ffc71",
            "5e08b0a305c941d2792ffc6b",
            "5e08b1a905c941d2792ffc6e"
          ],
          "_id": "5e08bc921ae76364d8373c0b",
          "name": "Redmi Note 7 Pro (Nebula Red, 128 GB)  (6 GB RAM)",
          "price": 17999,
          "discounted_price": 14999,
          "description": "Whether it’s work or entertainment, the Redmi Note 7 Pro challenges all odds and provides a truly immersive and enriched smartphone experience. Its 2.0 GHz Qualcomm Snapdragon 675 processor makes multitasking easy and it also comes with a (48 MP + 5 MP) dual-rear camera and a 13 MP front camera which let you click truly beautiful pictures. What’s more, the Face Unlock features makes unlocking this phone a piece of cake.",
          "product_id": "5e08713805c941d2792ffc65"
        }
      ],
      "attributes": [
        {
          "_id": "5e0871ef05c941d2792ffc66",
          "name": "Storage"
        },
        {
          "_id": "5e0874d605c941d2792ffc67",
          "name": "Color"
        },
        {
          "_id": "5e08752105c941d2792ffc68",
          "name": "RAM"
        }
      ],
      "options": [
        {
          "_id": "5e08b07d05c941d2792ffc6a",
          "name": "64GB",
          "attribute_id": "5e0871ef05c941d2792ffc66",
          "product_id": "5e08713805c941d2792ffc65"
        },
        {
          "_id": "5e08b0a305c941d2792ffc6b",
          "name": "128GB",
          "attribute_id": "5e0871ef05c941d2792ffc66",
          "product_id": "5e08713805c941d2792ffc65"
        },
        {
          "_id": "5e08b10805c941d2792ffc6c",
          "name": "Neptune Blue",
          "attribute_id": "5e0874d605c941d2792ffc67",
          "product_id": "5e08713805c941d2792ffc65"
        },
        {
          "_id": "5e08b19705c941d2792ffc6d",
          "name": "Space Black",
          "attribute_id": "5e0874d605c941d2792ffc67",
          "product_id": "5e08713805c941d2792ffc65"
        },
        {
          "_id": "5e08b1a905c941d2792ffc6e",
          "name": "Nebula Red",
          "attribute_id": "5e0874d605c941d2792ffc67",
          "product_id": "5e08713805c941d2792ffc65"
        },
        {
          "_id": "5e08b1c205c941d2792ffc6f",
          "name": "Astro Moonlight White",
          "attribute_id": "5e0874d605c941d2792ffc67",
          "product_id": "5e08713805c941d2792ffc65"
        },
        {
          "_id": "5e08b21905c941d2792ffc70",
          "name": "4GB",
          "attribute_id": "5e08752105c941d2792ffc68",
          "product_id": "5e08713805c941d2792ffc65"
        },
        {
          "_id": "5e08b22005c941d2792ffc71",
          "name": "6GB",
          "attribute_id": "5e08752105c941d2792ffc68",
          "product_id": "5e08713805c941d2792ffc65"
        }
      ]
    }
  }
}
```


