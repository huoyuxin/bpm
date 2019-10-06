// 引入fastify
const fastify = require("fastify")();
const getAudio = require("./getAudio");

// 声明一个路由
fastify.get("/getAudio", function(req, res) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  // res.header("Content-Type", "audio/mpeg");
  // res.header("Content-Type", "ArrayBuffer");

  console.log("req.query");
  console.log(req.query);
  const audio = getAudio(req.query.path);
  res.send(audio);
});

// 启动服务
fastify.listen(4000, function(err) {
  if (err) throw err;
  console.log(`server listening on ${fastify.server.address().port}`);
});
