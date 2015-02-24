# expError

* Run with `npm install` then `npm start`
* Test in DHC by doing a GET for /test1 and /test2

## /test1

This route throws an exception without specifically calling the `csError` factory function, and thus a generic 
message gets sent back to the client:

### Response info

```text
500 Internal Server Error

HEADERS
Connection:		keep-alive
Content-Length:		74 Bytes
Content-Type:		application/json; charset=utf-8
Date:		
2015 Feb 24 17:38:55
ETag:		W/"4a-3d86675c"
X-Powered-By:		Express
```

### Response body

```json
{
  "errors":[
    "There was an unexpected error when processing your request!"
  ]
}
```

## /test2

This route calls `csError` and passes a two-element array. The middleware checks the constructor and 
recognizes this as an intended throw, and thus sends along the actual messages to the client:

### Response info

```text
400 Bad Request

HEADERS
Connection:		keep-alive
Content-Length:		92 Bytes
Content-Type:		application/json; charset=utf-8
Date:		
2015 Feb 24 17:41:46
ETag:		W/"5c-a0f4885c"
X-Powered-By:		Express
```

### Response body

```json
{
  "errors":[
    "Your data is missing a property!",
    "Your data has a property that is too long!"
  ]
}
```
