import FeedService from './FeedService'

test('search: has results', (done) => {
  const term = 'news'
  FeedService.search({term}, (err, res) => {
    expect(res.results.length).toBeGreaterThan(0)
    done()
  })
})

test('search: has no results', (done) => {
  const term = 'DKkt3mi7q'
  FeedService.search({term}, (err, res) => {
    expect(res.results.length).toEqual(0)
    done()
  })
})

test('fetch: valid feed', (done) => {
  const feed = 'https://feeds.feedwrench.com/JavaScriptJabber.rss'
  FeedService.fetch({feed}, (err, posts) => {
    expect(posts.length).toBeGreaterThan(0)
    done()
  })
})

test('fetch: invalid feed', (done) => {
  const feed = 'https://feeds.feedwrench.com/loremabc'
  FeedService.fetch({feed}, (err, posts) => {
    expect(err).toBeDefined()
    done()
  })
})
