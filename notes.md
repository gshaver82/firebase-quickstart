
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

possible problems and solutions

problem 1
ls: cannot access '/app/build/static/js/*.js': No such file or directory
2021-04-13T07:17:05.025894+00:00 app[web.1]: Error injecting runtime env: bundle not found '/app/build/static/js/*.js'. See: https://github.com/mars/create-react-app-buildpack/blob/master/README.md#user-content-custom-bundle-location

solution 1
entered in ALL config vars, uncommented service account in routes index, adjusted package json, reordered buildpacks order to have nodes buildpack AFTER react buildpack. 

--------------
fill out .env file

## Firebase
REACT_APP_FIREBASE_KEY=""
REACT_APP_FIREBASE_DOMAIN=""
-------
the below one line is optional if you have a firebase database or not
------
REACT_APP_FIREBASE_DATABASE=""
REACT_APP_FIREBASE_PROJECT_ID=""
REACT_APP_FIREBASE_STORAGE_BUCKET=""
REACT_APP_FIREBASE_SENDER_ID=""
REACT_APP_FIREBASE_APP_ID=""

--------------------
add sign in methods on firebase console under authentication > sign in method.

google, email/password etc

for facebook
https://developers.facebook.com/docs/facebook-login/web
look here and for a facebook developer account
not currently implemented in this quickstart

