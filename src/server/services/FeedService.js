import FeedParser from 'feedparser'
import request from 'request'

export default class FeedService {

  static search({ term }, cb) {
    const url = `https://itunes.apple.com/search?media=podcast&entity=podcast&limit=200&term=${term}`
    request(url, (err, res, body) => {
      if (err) {
        return cb(err)
      }
      cb(null, JSON.parse(body))
    })
  }

  static fetch({feed}, cb) {

    let posts = []

    var req = request(feed, {
      timeout: 10000,
      pool: false
    });
    req.setMaxListeners(50);
    // Some feeds do not respond without user-agent and accept headers.
    req.setHeader('user-agent', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36');
    req.setHeader('accept', 'text/html,application/xhtml+xml');

    const feedparser = new FeedParser();

    req.on('error', cb);
    req.on('response', function(res) {
      if (res.statusCode != 200) {
        cb(new Error('Bad status code'))
      }

      res.pipe(feedparser)
    });

    feedparser.on('error', cb);
    feedparser.on('end', (err) => {
      cb(null, posts)
    });

    feedparser.on('readable', function() {
      var post;
      while (post = this.read()) {
        posts.push(post)
      }
    });

  }

}
