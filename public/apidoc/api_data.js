define({ "api": [
  {
    "type": "delete",
    "url": "/api/posts/:_id",
    "title": "Delete a post",
    "group": "Post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>post id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "post",
            "description": "<p>inserted post</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Success result</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/api.js",
    "groupTitle": "Post",
    "name": "DeleteApiPosts_id"
  },
  {
    "type": "get",
    "url": "/api/posts",
    "title": "Lista all posts",
    "group": "Post",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "posts",
            "description": "<p>Post's lists</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Post's id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Post's title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "body",
            "description": "<p>Post's content</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n  \"_id\": 5a5a3bd56ee705130895e581,\n  \"title\": \"ullam ut quidem id aut vel consequuntur\",\n  \"body\": \"debitis eius sed quibusdam non quis consectetur vitae\\nimpedit ut qui consequatur sed aut in\\nquidem sit nostrum et maiores adipisci atque\\nquaerat voluptatem adipisci repudiandae\"\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Intern\tal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/api.js",
    "groupTitle": "Post",
    "name": "GetApiPosts"
  },
  {
    "type": "get",
    "url": "/api/posts/:id",
    "title": "get post",
    "group": "Post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Post's id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "post",
            "description": "<p>Post object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Post's id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Post's title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "body",
            "description": "<p>Post's content</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": 5a5a3bd56ee705130895e581,\n  \"title\": \"ullam ut quidem id aut vel consequuntur\",\n  \"body\": \"debitis eius sed quibusdam non quis consectetur vitae\\nimpedit ut qui consequatur sed aut in\\nquidem sit nostrum et maiores adipisci atque\\nquaerat voluptatem adipisci repudiandae\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/api.js",
    "groupTitle": "Post",
    "name": "GetApiPostsId"
  },
  {
    "type": "post",
    "url": "/api/post",
    "title": "create new post",
    "group": "Post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Post's title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "body",
            "description": "<p>Post's content</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n\t\"title\": \"ullam ut quidem id aut vel consequuntur\",\n\t\"body\": \"debitis eius sed quibusdam non quis consectetur vitae\\nimpedit ut qui consequatur sed aut in\\nquidem sit nostrum et maiores adipisci atque\\nquaerat voluptatem adipisci repudiandae\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "post",
            "description": "<p>inserted post</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Post's id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Post's title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "body",
            "description": "<p>Post's content</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": 5a5a3bd56ee705130895e581,\n  \"title\": \"ullam ut quidem id aut vel consequuntur\",\n  \"body\": \"debitis eius sed quibusdam non quis consectetur vitae\\nimpedit ut qui consequatur sed aut in\\nquidem sit nostrum et maiores adipisci atque\\nquaerat voluptatem adipisci repudiandae\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/api.js",
    "groupTitle": "Post",
    "name": "PostApiPost"
  },
  {
    "type": "put",
    "url": "/api/posts/:_id",
    "title": "update post information",
    "group": "Post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>post id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n\t\"title\": \"ullam ut quidem id aut vel consequuntur\",\n\t\"body\": \"debitis eius sed quibusdam non quis consectetur vitae\\nimpedit ut qui consequatur sed aut in\\nquidem sit nostrum et maiores adipisci atque\\nquaerat voluptatem adipisci repudiandae\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "post",
            "description": "<p>inserted post</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Success result</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"success\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/api.js",
    "groupTitle": "Post",
    "name": "PutApiPosts_id"
  }
] });
