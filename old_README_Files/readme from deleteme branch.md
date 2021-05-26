readme from deleteme branch

# Calendar Website

One website for things that have to do with my professional productivity and health. Including, but not limited to:
1. GitHub calendar graph.
2. Similar images for going to the gym, working, etc. Feed all/many calendar events into it?
3. BG data/milestones.
4. Which days I run. Which days I lift weights. Which days I stretch. To that end, see this [search phrase](https://calendar.google.com/calendar/r/search?q=Export%20calendar%20to%20csv%20-%20look%20at%20trends).
5. [The calendar in HackerRank](https://www.hackerrank.com/jamiebort). See screengrab of 'Submissions' below.
![HackerRankCalendar](https://github.com/JamieBort/CalendarWebsite/blob/master/images/HackerRankCalendarGraph)
[The HackerRank API docs](https://www.hackerrank.com/work/apidocs#!/Introduction/options_intro_api). It mightnot be the doc I need/want.

The first version, or starting point of this website is based on this repository [github-calendar](https://github.com/IonicaBizau/github-calendar).

The following are copied from the GitCalendar/github-calendar/example directory:
1. CalendarWebsite/css/
2. CalendarWebsite/js/
3. CalendarWebsite/index.html

Once this is functional, remove the bookmarked pages [here](chrome://bookmarks/?id=1558).

## Known issues in 'Spreadsheet' branch:
1. From chrome dev tools: "Refused to display 'https://docs.google.com/sharing/init?id=1NcNskMHklKD6t2HZ7_BfeZG1npWvCEKVXpRtmNaPEzU&foreignService=ritz&gaiaService=wise&shareService=ritz&subapp=10&popupWindowsEnabled=true&shareUiType=default&hl=en&authuser=0&rand=1545847879147' in a frame because it set 'X-Frame-Options' to 'sameorigin'."

## What I want to keep track of.
BG after a meal.
BG after a workout.
How soon I start working after working out.

## Features
Have the event name be listed such that I can toggle the display on and off.

==========
Stream of consiouce notes:
1. Description:Section for dexcom info. Don't do it the way I end up doing it with the workout spreadsheet. Instead use only d3.

2. Have this info be entered into a spreadsheet that my Calendar Website and utilize. If an app already exists, use it. Otherwise create it.
Choose among three options.
    a. Stretching.
    b. Cardio
    c. Weight lifting.

        If weight lifting is chosen, choose among the following
        a. Back
        b. Core
        c. Legs
        d. Arms.

Lastly, choose a start time and an end time or duration in quarter hours with the option to narrow it to 5 min. increments.

Possibly for the future, have the ability to choose based on %, the percentage of time spent weight lifting during the workout period. Likewise for Cardo and Stretching.