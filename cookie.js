const http = require("http");
const cookie = require("cookie");
http
  .createServer((request, response) => {
    let cookies = {};
    if (request.headers.cookie !== undefined) {
      cookies = cookie.parse(request.headers.cookie);
    }
    response.writeHead(200, {
      "Set-Cookie": [
        "yummy_cookie=choco",
        "tasty_cookie=strawberry",
        `Permanent=cookies; Max-Age=${60 * 60 * 24 * 30}`,
        "Secure=Secure; Secure", // 보안
        "HttpOnly=HttpOnly; HttpOnly", // 자바스크립트로 못보게
        "Path=Path; Path=/cookie", // 경로를 포함한 내부에서 생성되는 쿠키
        "Domain=Domin; Domain=test.co.kr", //  해당 도메인에서 생성되는 쿠키
      ],
    });
    response.end("Cookie!!");
  })
  .listen(3000);
