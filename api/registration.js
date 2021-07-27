export default function handler(request, response) {
  console.log(request.method);
  if (request.method === "POST") {
    console.log(request.body);
    response.statusCode = 200;
    response.end("OK");
  } else {
    response.statusCode = 400;
    response.end("Bad request");
  }
}
