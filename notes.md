
heroku config vars
NODE_ENV
production

create new firebase project card

go to project settings and add app to project

register app
go to the app and CDN snippet and copy unique API KEY codes etc over to service account key

go to >> settings>> service accounts>> generate new private key
put that info into service acount key


put firebase database URL routes index if needed. 
 "databaseURL": "",

when setting up firebase auth
authentication >> sign in method

and enable google and add authorized domain of the host (example heroku)

------------------
add config vars for heroku authentication deployment


NODE_ENV
FIREBASE_PRIVATE_KEY
FIREBASE_PROJECT_ID
FIREBASE_CLIENT_EMAIL
REACT_APP_FIREBASE_APP_ID
REACT_APP_FIREBASE_DOMAIN
REACT_APP_FIREBASE_KEY
REACT_APP_FIREBASE_PROJECT_ID
REACT_APP_FIREBASE_SENDER_ID
REACT_APP_FIREBASE_STORAGE_BUCKET
