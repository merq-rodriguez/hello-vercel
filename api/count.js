const redis = require("redis");
const {promisify} = require('util');

module.exports = async(req, res) => {
    const client = redis.createClient ({
        url : process.env.REDIS_URL
    });
    const incrAsync = promisify(client.incr).bind(client);
    const count = await incrAsync("count")

    client.quit()

    res.json({
        body: JSON.stringify(count)
    })
}
