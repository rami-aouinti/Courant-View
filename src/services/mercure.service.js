class MercureService {
  postItem(item, category) {
    const http = require("http");
    const querystring = require("querystring");

    const postData = querystring.stringify({
      topic: category,
      data: JSON.stringify({
        id: item.id,
        username: item.username,
        message: item.message,
      }),
    });

    const req = http.request(
      {
        hostname: "localhost",
        port: "9090",
        path: "/.well-known/mercure",
        method: "POST",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXJjdXJlIjp7InN1YnNjcmliZSI6W10sInB1Ymxpc2giOlsiKiJdfX0.iTVjHoLv9bB-O5RNnTtzOFxIW-YECk2JXZeMekZ4GwA",
          // the JWT must have a mercure.publish key containing an array of topic selectors (can contain "*" for all topics, and be empty for public updates)
          // the JWT key must be shared between the hub and the server
          "Content-Type": "application/x-www-form-urlencoded",
          "Content-Length": Buffer.byteLength(postData),
        },
      } /* optional response handler */
    );
    console.log(postData);
    req.write(postData);
    req.end();
  }

  postNotification(item, category) {
    const http = require("http");
    const querystring = require("querystring");

    const postData = querystring.stringify({
      topic: category,
      data: JSON.stringify({
        id: item.id,
        username: item.username,
        message: item.message,
      }),
    });

    const req = http.request(
      {
        hostname: "localhost",
        port: "9090",
        path: "/.well-known/mercure",
        method: "POST",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXJjdXJlIjp7InN1YnNjcmliZSI6W10sInB1Ymxpc2giOlsiKiJdfX0.iTVjHoLv9bB-O5RNnTtzOFxIW-YECk2JXZeMekZ4GwA",
          // the JWT must have a mercure.publish key containing an array of topic selectors (can contain "*" for all topics, and be empty for public updates)
          // the JWT key must be shared between the hub and the server
          "Content-Type": "application/x-www-form-urlencoded",
          "Content-Length": Buffer.byteLength(postData),
        },
      } /* optional response handler */
    );
    console.log(postData);
    req.write(postData);
    req.end();
  }
}

export default new MercureService();
