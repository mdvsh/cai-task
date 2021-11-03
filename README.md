## cai task

> meme generator

### stack

- react with tailwindcss for the frontend
- express backend functioning as vercel serverless functions
- deployed on vercel

### setup

- install `node`
- clone the repo and install dependencies
```sh
git clone https://github.com/mdvsh/cai-task
cd cai-task
npm i
cd client
npm i
```
- fill out `.env.example` with your [Flickr](https://www.flickr.com/services/apps/create/noncommercial/?) API Key
- add a development proxy to the express server by adding 
```js
// client/package.json
...
  "proxy": "http://localhost:3001",
...
```
- `npm run start` both in the project root and inside `client/` directory
- app should be running at `localhost:3000`

#### _to deploy_

- undo step `4`
- install vercel and run it in the root directory as `$ vercel`

---

#### TODO

- [x] setup client and server for dev
- [x] integrate tailwind
- [x] implement flickr search form and display grid
  - [x] extra - masonry grid
  - [x] extra - responsive entirely
- [x] form error handling
- [x] functionality to add text (memification)
  - [x] currentImage set and focus
  - [x] retain state (back)
  - [x] retain state (search)
  - [x] options to add on / above / below currentImage
  - [x] place text on image
- [x] download meme
  - [x] button and file ext
  - [x] capture image component for download
- [x] push to prod
  - [x] refactor components (~~if~~ possible)
  - [x] final bug testing

##### extras

- maybe add pagination to the API
- ability to choose different fonts for the text
- social export

---

#### questions

if you have any questions, comments or feedback, feel free to email me at `madhavss@umich.edu`