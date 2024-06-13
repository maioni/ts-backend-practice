import { createServer } from "http";
import { IncomingMessage, ServerResponse } from "node:http";

export class Server {

  public startServer() {
    createServer((req: IncomingMessage, res: ServerResponse) => {
        console.log(`Request received from ${req.headers['user-agent']} for ${req.url}`);
        res.write('Hello from TS Server');
        res.end();
    }).listen(8080);
    console.log('Server started at http://localhost:8080');
  }

}
