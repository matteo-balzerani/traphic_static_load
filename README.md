work in progress.

---

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
    env_file:
      - ./traphic_static_load/traphic_static.env
    ports:
      - "3000:3000"
    links:
      - mongo-db
```

---

-- without docker

download rome_static_gtfs.zip from https://romamobilita.it/it/tecnologie/open-data

extract the archive in ../files/rome_static

start mongoDB using docker:

- docker pull mongo
- docker run -d -p 27017-27019:27017-27019 --name mongodb mongo

npm run watch --> refresh at any change in the code.

---

to check mongoDB, use:
https://robomongo.org/download
unzip and run
