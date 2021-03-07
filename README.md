# ARTICLE EVALUATION WITH NATURAL LANGUAGE PROCCESSING APP

This app is an article evaluation through the Sentiment Analysis API from meaning cloud.

## Where do I find this API

You can go on this webwite [Sentiment Analysis API](https://www.meaningcloud.com/developer/sentiment-analysis)

## How it works ? 

The Sentiment Analysis API can analyse either a text, a document or an URL. In our case we will use URL.

The user is invited to enter an url in the client side. It should be a valid URL otherwise it will return a error message. 

Once a valid URL has been entered by the users, it is send from the client to the server.

The server will then get this URL and use it to retrive the information from the API server. 

In the end the server send the data received from the API server to the client side in order to display the information in the user interface.

The URL is checked through REGEX technlogy, please find below the code used and find on [Stack Overflow](https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url)

```js
function checkUrl(urlInput) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(urlInput);
  }

  export { checkUrl }
## What about 