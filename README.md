# Event App

This contains the admin panel which is password protected. you can add event and view as a admin.
It has option to publish or unpublish any event.

## Quick Start
Assuming this is run on the local server:

```bash
git clone https://github.com/cool-monk/event_app.git
cd event_app
npm install
npm start
```

## Controllers

### Event Controllers
Responsible for addition , view and list the events for both logged in user and general user.

### Users Controllers
Responsible for signup and login.

## Helpers

###  Reference Generator
Generates 10character reference using random character for the slug.

## Models
Models are placed in the `Model` folder in the root of the app.

### User 
save basic details for signup, find by reference, find by name and find existing user using phone username.

### Event
Can add event, find by reference, get published and unpublished events.


## Schema

### Event
Schema are placed in the `Schema` folder in the root of the app. The project currently uses MongoDB as the database management system and utilizes the Mongoose ORM for NodeJs.

```md
Event
----
    - Title
    - start Date
    - End Date
    - Time
    - Description
    - Creator
    - Venue
```
