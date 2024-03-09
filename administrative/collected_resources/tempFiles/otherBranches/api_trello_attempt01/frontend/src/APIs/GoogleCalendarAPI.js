// ./frontend/src/components/APIs/GoogleCalendarAPI.js

// If/when I abstract the Google Calendar API logic, this is where it will go.

// TODO: change this callback url. Maybe to http://localhost:2000/
const CALLBACK_URL = "https://oauth.pstmn.io/v1/callback";
const AUTH_URL = "https://accounts.google.com/o/oauth2/auth";
const ACCESS_TOKEN_URL = "https://accounts.google.com/o/oauth2/token";
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
const SCOPE = "https://www.googleapis.com/auth/calendar.calendarlist.readonly";
