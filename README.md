# content-player

play podcasts and videos, view feed posts

## Client

Client is built with [create-react-app](https://github.com/facebookincubator/create-react-app)

**Developing**

```sh
$ cd src/client
$ npm start
# visit http://localhost:3000
```

## Server

**Running**

```sh
$ cd src/server
$ npm start
# visit http://localhost:3001
```
**Testing**

```sh
npm test -- --watch
```

---

## Design

### Views

* create account
* sign in
* content list
* Player
	* Podcast / Audio Player
	* Video Player
	* Post / Page Reader
* Playlists

### Features

* keyword subscription - notification of new podcasts / posts / videos containing keyword
	* javascript, swift, golang
* metrics / event tracking
	* content played
	* save position in content (position/time in audio/video, position in text/article/post content)
* Playlists
	* autoplay next
* Display podcast show notes

---

## TODO

*
