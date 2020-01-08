const keys = require('./keys');
const redis = require('redis');
console.log("Creating Redis Client in Worker Module");
console.log("Redis Host in Worker :: "+ keys.redisHost);
const redisClient = redis.createClient({
  host: keys.redisHost,
  port: keys.redisPort,
  retry_strategy: () => 1000
});
const sub = redisClient.duplicate();

function fib(index) {
  if (index < 2) return 1;
  return fib(index - 1) + fib(index - 2);
}
sub.subscribe('insert-indices');

sub.on('message', (channel, message) => {
  console.log("Channel == "+ channel);
  console.log("Index obtained  in Worker" + message);
  redisClient.hset('values', message, fib(parseInt(message)));
});

