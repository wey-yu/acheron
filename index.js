const mosca = require("mosca");
const server = new mosca.Server({
  http: {
    port: 8080,
    bundle: true,
    static: './'
  }
});
