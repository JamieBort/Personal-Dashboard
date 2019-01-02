# Calendar Website

One website for things that have to do with my professional productivity and health. Including, but not limited to:
1. GitHub calendar graph.
2. Similar images for going to the gym, working, etc. Feed all/many calendar events into it?
3. BG data/milestones.
4. Which days I run. Which days I lift weights. Which days I stretch. To that end, see this [search phrase](https://calendar.google.com/calendar/r/search?q=Export%20calendar%20to%20csv%20-%20look%20at%20trends).
5. [The calendar in HackerRank](https://www.hackerrank.com/jamiebort). See screengrab of 'Submissions' below. It might not be the doc I need/want. [The HackerRank API docs](https://www.hackerrank.com/work/apidocs#!/Introduction/options_intro_api).
![HackerRankCalendar](https://github.com/JamieBort/CalendarWebsite/blob/master/images/HackerRankCalendarGraph)

**The sources of information are going to be:**
1. The Dexcom API. Failing that, or until I get it working, it will be a spreadsheet that I'll generate periodically from their app. Also, the name of the branch to develop this is 'Dexcom'.
2. The GitHub API for the GitHub calendar. The name of the branch to develop this is 'GitCalendar'.
3. The Google Calendar API for the Google calendar. The name of the branch to develop this is 'GoogleCalendar'.
4. The Google Spreadsheet API for my gym spreadsheet. The name of the branch to develop this is 'GymSpreadsheet'.

The first version, or starting point of this website is based on this repository [github-calendar](https://github.com/IonicaBizau/github-calendar).

**The following are copied from the GitCalendar/github-calendar/example directory:**
1. CalendarWebsite/css/
2. CalendarWebsite/js/
3. CalendarWebsite/index.html

Once this is functional, remove the bookmarked pages [here](chrome://bookmarks/?id=1558).

[The Trello Card associated with this project](https://trello.com/c/XdNG65rY/154-calendarwebsite).

## My View of this Project.
I envision this site to be something I can navigate to from at least my computer. Eventually I will be able to navigate to it from other devices such as my phone. And maybe that will be it. Ideally I'll load the page without entering any credentials. But this may not be possible. At which point I will be able to view on the one page all the information I care to see.