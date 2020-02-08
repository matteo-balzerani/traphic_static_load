work in progress.

-- with docker
use this compose:

```
version: "3.3"

services:
  mongo-db:
    image: mongo
    ports:
      - "27017:27017"

  load-app:
    image: traphic/load-app
    ports:
      - "3000:3000"
    links:
      - mongo-db
```

-- without docker
download rome_static_gtfs.zip from https://romamobilita.it/it/tecnologie/open-data

extract the archive in ../files/

start mongoDB

npm run watch
