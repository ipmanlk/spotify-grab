spotify-grab 
======================
Extract useful metadata from various Spotify URIs. 

## Installation
```
npm i @ipmanlk/spotify-grab
```

## Usage

### getInfo(URI) ⇒ <code>Promise.&lt;(Spotify.Info\|undefined)&gt;</code>
**Kind**: global function  
**Returns**: <code>Promise.&lt;(Spotify.Info\|undefined)&gt;</code> - - Data extracted from the URI.  
**Throws**:

- <code>SPOTIFY\_URI\_PARSE\_ERROR</code> - Unable to parse the given URI.
- <code>SPOTIFY\_UNSUPPORTED\_URI\_TYPE</code> - Given URI is not supported.
- <code>SPOTIFY\_REQUEST\_FAILED</code> - Failed to send a request to Spotify.


| Param | Type | Description |
| --- | --- | --- |
| URI | <code>string</code> | Spotify URI in any format. Only URIs for tracks, artists, albums and playlists are supported. |

**Example**  
```js
const { getInfo } = require("@ipmanlk/spotify-grab")

const URI = "https://open.spotify.com/track/6habFhsOp2NvshLv26DqMb?si=FkyYtDchRW-L8L2BlCweRw"

getInfo(URI).then(data => {
		console.log(data);
}).catch(error => {
		console.log(error);
});

 //* Output of the above code will take following shape,
{
  "type": "track", //* Type of the input URI
  "track": {       //* Object with the name of above type (dynamic)
    "id": "6habFhsOp2NvshLv26DqMb",
    "name": "Despacito",
    "preview_url": "https://p.scdn.co/mp3-preview/ce2ad348fa47",
    "album": {
      "name": "VIDA"
    },
    "explicit": false,
    "artists": [
      {
        "id": "4V8Sr092TqfHkfAA5fXXqG",
        "name": "Luis Fonsi",
        "uri": "spotify:artist:4V8Sr092TqfHkfAA5fXXqG"
      }
    ]
  }
}
```
