// ./administrative/gitHub_repos_to_comb_though/repo_obj.js

// NOTE: (1) The original list generated from an GraphyQL call via https://docs.github.com/en/graphql/overview/explorer
const original_rep_obj = {
  data: {
    user: {
      repositories: {
        edges: [
          {
            node: {
              name: "iBeer_Layout-Flexbox",
            },
          },
          {
            node: {
              name: "Bears",
            },
          },
          {
            node: {
              name: "Week1-WeeklyAssignment",
            },
          },
          {
            node: {
              name: "Portfolio-Website",
            },
          },
          {
            node: {
              name: "FormBuilder",
            },
          },
          {
            node: {
              name: "CustomerDatabase",
            },
          },
          {
            node: {
              name: "BlackjackHandCalculator",
            },
          },
          {
            node: {
              name: "GitHubDataVCard",
            },
          },
          {
            node: {
              name: "RecipeSearch",
            },
          },
          {
            node: {
              name: "Brick_Breaker_Mashup",
            },
          },
          {
            node: {
              name: "BuildATodoList",
            },
          },
          {
            node: {
              name: "CreateASiteWithALogin",
            },
          },
          {
            node: {
              name: "express-lecture-1",
            },
          },
          {
            node: {
              name: "week3Calculator",
            },
          },
          {
            node: {
              name: "GitHubDataVCardWithFetch",
            },
          },
          {
            node: {
              name: "Week4iTunesMusicSearch",
            },
          },
          {
            node: {
              name: "Create-A-User-Directory",
            },
          },
          {
            node: {
              name: "BuildAGameWithNodeAndExpress",
            },
          },
          {
            node: {
              name: "ReturnToRobots",
            },
          },
          {
            node: {
              name: "CodeSnippetOrganizer",
            },
          },
          {
            node: {
              name: "BillMurrayTime",
            },
          },
          {
            node: {
              name: "PuppyLove",
            },
          },
          {
            node: {
              name: "iPhysicist-CSSLayoutFlexbox",
            },
          },
          {
            node: {
              name: "GitHubPractice",
            },
          },
          {
            node: {
              name: "ResponsiveNavigation",
            },
          },
          {
            node: {
              name: "CodeForDurhamAffordableHousingDataSet",
            },
          },
          {
            node: {
              name: "CodeChallenges",
            },
          },
          {
            node: {
              name: "Talks_Presentations_Workshops_and_Resources",
            },
          },
          {
            node: {
              name: "LearningDirectory",
            },
          },
          {
            node: {
              name: "Personal-Dashboard",
            },
          },
          {
            node: {
              name: "Resources",
            },
          },
          {
            node: {
              name: "TestPrivateRepo",
            },
          },
          {
            node: {
              name: "DotENVPractice",
            },
          },
          {
            node: {
              name: "TrelloHeatMap",
            },
          },
          {
            node: {
              name: "GoogleCalendarAPIPractice",
            },
          },
          {
            node: {
              name: "TrelloAPI",
            },
          },
          {
            node: {
              name: "MaxxPotentialCareerLab",
            },
          },
          {
            node: {
              name: "GmailAPIPractice",
            },
          },
          {
            node: {
              name: "JamieBort",
            },
          },
          {
            node: {
              name: "ReactJavaFrontBack",
            },
          },
          {
            node: {
              name: "DummyRepoPublicNameChange",
            },
          },
          {
            node: {
              name: "DummyRepoPrivate",
            },
          },
          {
            node: {
              name: "GoogleMap",
            },
          },
          {
            node: {
              name: "tempMapSearch",
            },
          },
          {
            node: {
              name: "EastSideRunClub",
            },
          },
          {
            node: {
              name: "CNYSilentBookClub",
            },
          },
          {
            node: {
              name: "CodeTheDream",
            },
          },
          {
            node: {
              name: "rockpaperscissors",
            },
          },
          {
            node: {
              name: "JamieBortPersonal",
            },
          },
          {
            node: {
              name: "personal_dashboard_backend_heroku",
            },
          },
          {
            node: {
              name: "intro-to-programming",
            },
          },
          {
            node: {
              name: "R6-rest-rails",
            },
          },
          {
            node: {
              name: "R6-blog",
            },
          },
          {
            node: {
              name: "to-do-list-videoWork",
            },
          },
          {
            node: {
              name: "Espanol-ingles-leyendo-hora",
            },
          },
          {
            node: {
              name: "to-do-list-classwork",
            },
          },
          {
            node: {
              name: "Kanban-Board",
            },
          },
          {
            node: {
              name: "weight-lifting-app",
            },
          },
          {
            node: {
              name: "cgm-remote-monitor",
            },
          },
          {
            node: {
              name: "03-task-manager-with-React-front-end",
            },
          },
          {
            node: {
              name: "API-Playground",
            },
          },
          {
            node: {
              name: "react-gh-pages-tutorial",
            },
          },
          {
            node: {
              name: "routed-react-app-gh-pages",
            },
          },
          {
            node: {
              name: "GitHub-Actions-Learning-repo",
            },
          },
          {
            node: {
              name: "Data-Logging-App",
            },
          },
          {
            node: {
              name: "To-Do-App",
            },
          },
          {
            node: {
              name: "self-care-survey-form",
            },
          },
          {
            node: {
              name: "Awesome-Profile-README-templates",
            },
          },
          {
            node: {
              name: "Digital_Knowledge_Base",
            },
          },
        ],
      },
    },
  },
};

// NOTE: (2) The function I used to extract just the names of each repo. And to add a status property to each. The returned value is saved in the `name_and_status` array.
function addStatus(param) {
  const FATE = 1, // 1 = Keep as is. 2 = Delete. 3 = Other = see note.
    INFO = 1, // 1 = Info to salvage. 2 = No info to salvage.  3 = Other = see note.
    NOTE = "",
    tempArray = [],
    edges = param.data.user.repositories.edges;
  edges.forEach((element) => {
    const node = element.node;
    node.status = { fate: FATE, info: INFO, note: NOTE };
    tempArray.push(node);
  });
  return tempArray;
}
// const name_and_status = addStatus(original_rep_obj);
// // console.log("name_and_status:", name_and_status);

// // NOTE: (3) The array containing the names and status' of each repo.
// const name_and_status = [
//   { name: "iBeer_Layout-Flexbox", status: "Need to check this repo." },
//   { name: "Bears", status: "Need to check this repo." },
//   {
//     name: "Week1-WeeklyAssignment",
//     status: "Need to check this repo.",
//   },
//   { name: "Portfolio-Website", status: "Need to check this repo." },
//   { name: "FormBuilder", status: "Need to check this repo." },
//   { name: "CustomerDatabase", status: "Need to check this repo." },
//   {
//     name: "BlackjackHandCalculator",
//     status: "Need to check this repo.",
//   },
//   { name: "GitHubDataVCard", status: "Need to check this repo." },
//   { name: "RecipeSearch", status: "Need to check this repo." },
//   { name: "Brick_Breaker_Mashup", status: "Need to check this repo." },
//   { name: "BuildATodoList", status: "Need to check this repo." },
//   { name: "CreateASiteWithALogin", status: "Need to check this repo." },
//   { name: "express-lecture-1", status: "Need to check this repo." },
//   { name: "week3Calculator", status: "Need to check this repo." },
//   {
//     name: "GitHubDataVCardWithFetch",
//     status: "Need to check this repo.",
//   },
//   {
//     name: "Week4iTunesMusicSearch",
//     status: "Need to check this repo.",
//   },
//   {
//     name: "Create-A-User-Directory",
//     status: "Need to check this repo.",
//   },
//   {
//     name: "BuildAGameWithNodeAndExpress",
//     status: "Need to check this repo.",
//   },
//   { name: "ReturnToRobots", status: "Need to check this repo." },
//   { name: "CodeSnippetOrganizer", status: "Need to check this repo." },
//   { name: "BillMurrayTime", status: "Need to check this repo." },
//   { name: "PuppyLove", status: "Need to check this repo." },
//   {
//     name: "iPhysicist-CSSLayoutFlexbox",
//     status: "Need to check this repo.",
//   },
//   { name: "GitHubPractice", status: "Need to check this repo." },
//   { name: "ResponsiveNavigation", status: "Need to check this repo." },
//   {
//     name: "CodeForDurhamAffordableHousingDataSet",
//     status: "Need to check this repo.",
//   },
//   { name: "CodeChallenges", status: "Need to check this repo." },
//   {
//     name: "Talks_Presentations_Workshops_and_Resources",
//     status: "Need to check this repo.",
//   },
//   { name: "LearningDirectory", status: "Need to check this repo." },
//   { name: "Personal-Dashboard", status: "Need to check this repo." },
//   { name: "Resources", status: "Need to check this repo." },
//   { name: "TestPrivateRepo", status: "Need to check this repo." },
//   { name: "DotENVPractice", status: "Need to check this repo." },
//   { name: "TrelloHeatMap", status: "Need to check this repo." },
//   {
//     name: "GoogleCalendarAPIPractice",
//     status: "Need to check this repo.",
//   },
//   { name: "TrelloAPI", status: "Need to check this repo." },
//   {
//     name: "MaxxPotentialCareerLab",
//     status: "Need to check this repo.",
//   },
//   { name: "GmailAPIPractice", status: "Need to check this repo." },
//   { name: "JamieBort", status: "Need to check this repo." },
//   { name: "ReactJavaFrontBack", status: "Need to check this repo." },
//   {
//     name: "DummyRepoPublicNameChange",
//     status: "Need to check this repo.",
//   },
//   { name: "DummyRepoPrivate", status: "Need to check this repo." },
//   { name: "GoogleMap", status: "Need to check this repo." },
//   { name: "tempMapSearch", status: "Need to check this repo." },
//   { name: "EastSideRunClub", status: "Need to check this repo." },
//   { name: "CNYSilentBookClub", status: "Need to check this repo." },
//   { name: "CodeTheDream", status: "Need to check this repo." },
//   { name: "rockpaperscissors", status: "Need to check this repo." },
//   { name: "JamieBortPersonal", status: "Need to check this repo." },
//   {
//     name: "personal_dashboard_backend_heroku",
//     status: "Need to check this repo.",
//   },
//   { name: "intro-to-programming", status: "Need to check this repo." },
//   { name: "R6-rest-rails", status: "Need to check this repo." },
//   { name: "R6-blog", status: "Need to check this repo." },
//   { name: "to-do-list-videoWork", status: "Need to check this repo." },
//   {
//     name: "Espanol-ingles-leyendo-hora",
//     status: "Need to check this repo.",
//   },
//   { name: "to-do-list-classwork", status: "Need to check this repo." },
//   { name: "Kanban-Board", status: "Need to check this repo." },
//   { name: "weight-lifting-app", status: "Need to check this repo." },
//   { name: "cgm-remote-monitor", status: "Need to check this repo." },
//   {
//     name: "03-task-manager-with-React-front-end",
//     status: "Need to check this repo.",
//   },
//   { name: "API-Playground", status: "Need to check this repo." },
//   {
//     name: "react-gh-pages-tutorial",
//     status: "Need to check this repo.",
//   },
//   {
//     name: "routed-react-app-gh-pages",
//     status: "Need to check this repo.",
//   },
//   {
//     name: "GitHub-Actions-Learning-repo",
//     status: "Need to check this repo.",
//   },
//   { name: "Data-Logging-App", status: "Need to check this repo." },
//   { name: "To-Do-App", status: "Need to check this repo." },
//   { name: "self-care-survey-form", status: "Need to check this repo." },
//   {
//     name: "Awesome-Profile-README-templates",
//     status: "Need to check this repo.",
//   },
//   {
//     name: "Digital_Knowledge_Base",
//     status: "Need to check this repo.",
//   },
// ];

// // NOTE: (4) Duplicated the `name_and_status` array so that I could updated the data without touching the original array.
// const name_and_status_v2= name_and_status

const name_and_status_v2 = [
  {
    name: "iBeer_Layout-Flexbox",
    status: { fate: 3, info: 3, note: "Need to check. 50/50 chance delete or fold into TheIronYard repo, the LearningDirectory repo, or something similar." },
  },
  {
    name: "Bears",
    status: { fate: 3, info: 3, note: "Need to check. 50/50 chance delete or fold into TheIronYard repo, the LearningDirectory repo, or something similar." },
  },
  {
    name: "Week1-WeeklyAssignment",
    status: { fate: 3, info: 3, note: "Need to check. 50/50 chance delete or fold into TheIronYard repo, the LearningDirectory repo, or something similar." },
  },
  {
    name: "Portfolio-Website",
    status: { fate: 1, info: 3, note: "Maybe has info to use." },
  },
  { name: "FormBuilder", status: { fate: 3, info: 3, note: "IT IS DELETED. Added it to the The-Iron-Yard-Projects repo." } },
  { name: "CustomerDatabase", status: { fate: 3, info: 3, note: "IT IS DELETED. Added it to the The-Iron-Yard-Projects repo." } },
  {
    name: "BlackjackHandCalculator",
    status: { fate: 3, info: 3, note: "Need to check. 50/50 chance delete or fold into TheIronYard repo, the LearningDirectory repo, or something similar." },
  },
  {
    name: "GitHubDataVCard",
    status: { fate: 3, info: 3, note: "Need to check. 50/50 chance delete or fold into TheIronYard repo, the LearningDirectory repo, or something similar." },
  },
  {
    name: "RecipeSearch",
    status: { fate: 3, info: 3, note: "Need to check. 50/50 chance delete or fold into TheIronYard repo, the LearningDirectory repo, or something similar." },
  },
  {
    name: "Brick_Breaker_Mashup",
    status: { fate: 3, info: 3, note: "Need to check. 50/50 chance delete or fold into TheIronYard repo, the LearningDirectory repo, or something similar." },
  },
  {
    name: "BuildATodoList",
    status: { fate: 3, info: 3, note: "Need to check. 50/50 chance delete or fold into TheIronYard repo, the LearningDirectory repo, or something similar." },
  },
  {
    name: "CreateASiteWithALogin",
    status: { fate: 1, info: 3, note: "Keep at least until I have my own login successfully working." },
  },
  {
    name: "express-lecture-1",
    status: { fate: 3, info: 3, note: "Need to check. 50/50 chance delete or fold into TheIronYard repo, the LearningDirectory repo, or something similar." },
  },
  {
    name: "week3Calculator",
    status: { fate: 3, info: 3, note: "Need to check. 50/50 chance delete or fold into TheIronYard repo, the LearningDirectory repo, or something similar." },
  },
  {
    name: "GitHubDataVCardWithFetch",
    status: { fate: 3, info: 3, note: "Need to check. 50/50 chance delete or fold into TheIronYard repo, the LearningDirectory repo, or something similar." },
  },
  {
    name: "Week4iTunesMusicSearch",
    status: { fate: 3, info: 3, note: "Need to check. 50/50 chance delete or fold into TheIronYard repo, the LearningDirectory repo, or something similar." },
  },
  {
    name: "Create-A-User-Directory",
    status: { fate: 3, info: 3, note: "Need to check. 50/50 chance delete or fold into TheIronYard repo, the LearningDirectory repo, or something similar." },
  },
  {
    name: "BuildAGameWithNodeAndExpress",
    status: { fate: 3, info: 3, note: "Need to check. 50/50 chance delete or fold into TheIronYard repo, the LearningDirectory repo, or something similar." },
  },
  {
    name: "ReturnToRobots",
    status: { fate: 3, info: 3, note: "Need to check. 50/50 chance delete or fold into TheIronYard repo, the LearningDirectory repo, or something similar." },
  },
  {
    name: "CodeSnippetOrganizer",
    status: { fate: 3, info: 3, note: "Need to check. 50/50 chance delete or fold into TheIronYard repo, the LearningDirectory repo, or something similar." },
  },
  {
    name: "BillMurrayTime",
    status: { fate: 3, info: 3, note: "Need to check. 50/50 chance delete or fold into TheIronYard repo, the LearningDirectory repo, or something similar." },
  },
  { name: "PuppyLove", status: { fate: 3, info: 3, note: "Need to check. 50/50 chance delete or fold into TheIronYard repo, the LearningDirectory repo, or something similar." } },
  {
    name: "iPhysicist-CSSLayoutFlexbox",
    status: { fate: 3, info: 3, note: "Need to check. 50/50 chance delete or fold into TheIronYard repo, the LearningDirectory repo, or something similar." },
  },
  { name: "GitHubPractice", status: { fate: 2, info: 2, note: "IT IS DELETED." } },
  {
    name: "ResponsiveNavigation",
    status: { fate: 3, info: 3, note: "Need to check. 50/50 chance delete or fold into TheIronYard repo, the LearningDirectory repo, or something similar." },
  },
  {
    name: "CodeForDurhamAffordableHousingDataSet",
    status: {
      fate: 2,
      info: 2,
      note: "IT IS DELETED. Added the markdown to this https://trello.com/c/TtMFVnGC/1330-coding-catchall#comment-65d93981777c1b000956d18b Trello card.",
    },
  },
  {
    name: "CodeChallenges",
    status: {
      fate: 1,
      info: 2,
      note: "Added to the 'The Short List of repos to clean up': https://trello.com/c/NnqWRZIE/158-clean-up-github-repositories-and-gists#comment-65d920475c427a9a15820ea5",
    },
  },
  {
    name: "Talks_Presentations_Workshops_and_Resources",
    status: {
      fate: 1,
      info: 2,
      note: "Added to the 'The Short List of repos to clean up': https://trello.com/c/NnqWRZIE/158-clean-up-github-repositories-and-gists#comment-65d920475c427a9a15820ea5",
    },
  },
  { name: "LearningDirectory", status: { fate: 1, info: 3, note: "Maybe has info to use." } },
  {
    name: "Personal-Dashboard",
    status: { fate: 1, info: 2, note: "I am performing this exercise for this repo..." },
  },
  {
    name: "Resources",
    status: {
      fate: 2,
      info: 2,
      note: "IT IS DELETED.",
    },
  },
  { name: "TestPrivateRepo", status: { fate: 2, info: 2, note: "IT IS DELETED. " } },
  { name: "DotENVPractice", status: { fate: 2, info: 2, note: "IT IS DELETED. Salvaged. First salvage the instructions in the markdown file." } },
  { name: "TrelloHeatMap", status: { fate: 2, info: 2, note: "IT IS DELETED." } },
  {
    name: "GoogleCalendarAPIPractice",
    status: { fate: 2, info: 1, note: "IT IS DELETED." },
  },
  { name: "TrelloAPI", status: { fate: 2, info: 1, note: "IT IS DELETED." } },
  {
    name: "MaxxPotentialCareerLab",
    status: {
      fate: 3,
      info: 3,
      note: "Consolidated inside of another repo.",
    },
  },
  { name: "GmailAPIPractice", status: { fate: 2, info: 1, note: "IT IS DELETED." } },
  { name: "JamieBort", status: { fate: 1, info: 2, note: "" } },
  {
    name: "ReactJavaFrontBack",
    status: { fate: 3, info: 3, note: "IT IS DELETED." },
  },
  {
    name: "DummyRepoPublicNameChange",
    status: { fate: 3, info: 2, note: "IT IS DELETED." },
  },
  { name: "DummyRepoPrivate", status: { fate: 2, info: 2, note: "IT IS DELETED." } },
  { name: "GoogleMap", status: { fate: 2, info: 1, note: "IT IS DELETED." } },
  { name: "tempMapSearch", status: { fate: 3, info: 3, note: "IT IS DELETED." } },
  { name: "EastSideRunClub", status: { fate: 1, info: 2, note: "Consolidated inside of another repo." } },
  { name: "CNYSilentBookClub", status: { fate: 1, info: 2, note: "Consolidated inside of another repo." } },
  { name: "CodeTheDream", status: { fate: 1, info: 2, note: "" } },
  { name: "rockpaperscissors", status: { fate: 1, info: 2, note: "IT IS DELETED. Was forked." } },
  { name: "JamieBortPersonal", status: { fate: 3, info: 2, note: "Keep this one for now. Consider deleting it at a later date." } },
  {
    name: "personal_dashboard_backend_heroku",
    status: { fate: 3, info: 3, note: "IT IS DELETED." },
  },
  {
    name: "intro-to-programming",
    status: { fate: 2, info: 2, note: "IT IS DELETED." },
  },
  { name: "R6-rest-rails", status: { fate: 2, info: 1, note: "IT IS DELETED." } },
  { name: "R6-blog", status: { fate: 2, info: 1, note: "IT IS DELETED." } },
  {
    name: "to-do-list-videoWork",
    status: { fate: 2, info: 2, note: "IT IS DELETED." },
  },
  {
    name: "Espanol-ingles-leyendo-hora",
    status: { fate: 1, info: 2, note: "Consolidated inside of another repo." },
  },
  {
    name: "to-do-list-classwork",
    status: { fate: 2, info: 2, note: "IT IS DELETED." },
  },
  {
    name: "Kanban-Board",
    status: {
      fate: 1,
      info: 2,
      note: "Added to the 'The Short List of repos to clean up': https://trello.com/c/NnqWRZIE/158-clean-up-github-repositories-and-gists#comment-65d920475c427a9a15820ea5",
    },
  },
  {
    name: "weight-lifting-app",
    status: { fate: 1, info: 2, note: "" },
  },
  {
    name: "cgm-remote-monitor",
    status: { fate: 1, info: 3, note: "Definitely keep this one. Need to take a closer look to see if it has anything that I can use..." },
  },
  {
    name: "03-task-manager-with-React-front-end",
    status: { fate: 2, info: 2, note: "IT IS DELETED." },
  },
  { name: "API-Playground", status: { fate: 2, info: 1, note: "IT IS DELETED." } },
  {
    name: "react-gh-pages-tutorial",
    status: { fate: 2, info: 1, note: "IT IS DELETED." },
  },
  {
    name: "routed-react-app-gh-pages",
    status: { fate: 2, info: 3, note: "IT IS DELETED." },
  },
  {
    name: "GitHub-Actions-Learning-repo",
    status: {
      fate: 3,
      info: 3,
      note: "IT IS DELETED.",
    },
  },
  { name: "Data-Logging-App", status: { fate: 1, info: 2, note: "" } },
  { name: "To-Do-App", status: { fate: 1, info: 2, note: "" } },
  {
    name: "self-care-survey-form",
    status: { fate: 2, info: 2, note: "IT IS DELETED." },
  },
  {
    name: "Awesome-Profile-README-templates",
    status: {
      fate: 2,
      info: 2,
      note: "IT IS DELETED. MAKE note of it in LearningDirectory or in Digital_Knowledge_Base. Added to the https://trello.com/c/gZJQgnvv/360-update-github Trello card. No need to keep this.",
    },
  },
  {
    name: "Digital_Knowledge_Base",
    status: {
      fate: 1,
      info: 2,
      note: "Added to the 'The Short List of repos to clean up': https://trello.com/c/NnqWRZIE/158-clean-up-github-repositories-and-gists#comment-65d920475c427a9a15820ea5",
    },
  },
];

// Function for classifying each repo found in the `name_and_status_v2` array.
function modify_name_and_status(param) {
  const tempObj = {
    "Yet to be considered.": [],
    "Keep. Salvage info. See note": [],
    "Keep. No info.": [],
    "Keep. See note.": [],
    "Delete. First salvage info.": [],
    "Delete. No info. See note.": [],
    "Delete. No info.": [],
    "Delete. See note.": [],
    "See note. Salvage info.": [],
    "See note. No info.": [],
    "See note. See note.": [],
    "Create an IronYard repo and put these in there.": [],
    "Do something with these.": [],
    // ---------------------------------
    "THESE ARE THE REMAINING REPOS TO CONSIDER.": [],
    "THESE REPOS HAVE BEEN DELETED.": [],
    "THESE REPOS HAVE BEEN CONSOLIDATED INTO OTHER REPOS.": [],
    "fate===1": [],
    "fate: TO DELETE": [],
    "fate===3": [],
  };
  param.forEach((element) => {
    const status = element.status,
      name = element.name;
    if (status.note.includes("IT IS DELETED.")) tempObj["THESE REPOS HAVE BEEN DELETED."].push({ name: name, status: status });
    else if (
      status.note === "Need to check. 50/50 chance delete or fold into TheIronYard repo, the LearningDirectory repo, or something similar." ||
      status.note === "Consolidated inside of another repo."
    )
      tempObj["THESE REPOS HAVE BEEN CONSOLIDATED INTO OTHER REPOS."].push({ name: name, status: status });
    // else if (status.fate === 1) tempObj["fate===1"].push({ name: name, status: status });
    else if (status.fate === 2) tempObj["fate: TO DELETE"].push({ name: name, status: status });
    // else if (status.fate === 3) tempObj["fate===3"].push({ name: name, status: status });
    else tempObj["THESE ARE THE REMAINING REPOS TO CONSIDER."].push({ name: name, status: status });

    // else if (status.fate === 1 && status.info === 1) tempObj["Keep. Salvage info. See note"].push({ name: name, status: status });
    // else if (status.fate === 1 && status.info === 2) tempObj["Keep. No info."].push({ name: name, status: status });
    // else if (status.fate === 1 && status.info === 3) tempObj["Keep. See note."].push({ name: name, status: status });
    // else if (status.fate === 2 && status.info === 1) tempObj["Delete. First salvage info."].push({ name: name, status: status });
    // else if (status.fate === 2 && status.info === 2 && status.note != "") tempObj["Delete. No info. See note."].push({ name: name, status: status });
    // else if (status.fate === 2 && status.info === 2) tempObj["Delete. No info."].push({ name: name, status: status });
    // else if (status.fate === 2 && status.info === 3) tempObj["Delete. See note."].push({ name: name, status: status });
    // else if (status.fate === 3 && status.info === 1) tempObj["See note. Salvage info."].push({ name: name, status: status });
    // else if (status.fate === 3 && status.info === 2) tempObj["See note. No info."].push({ name: name, status: status });
    // else if (
    //   status.fate === 3 &&
    //   status.info === 3 &&
    //   status.note === "Need to check. 50/50 chance delete or fold into TheIronYard repo, the LearningDirectory repo, or something similar."
    // )
    //   tempObj["Create an IronYard repo and put these in there."].push({ name: name, status: status });
    // else if (status.fate === 3 && status.info === 3) tempObj["See note. See note."].push({ name: name, status: status });
    // else tempObj["Do something with these."].push({ name: name, status: status });
  });

  return tempObj;
}
const name_and_status_v3 = modify_name_and_status(name_and_status_v2);
// console.log("name_and_status_v3:", name_and_status_v3);
// console.log("name_and_status_v3:", typeof name_and_status_v3);

for (const property in name_and_status_v3) {
  if (name_and_status_v3[property].length != 0) {
    console.log("=====================");
    console.log(`${property} Length: ${name_and_status_v3[property].length}.`);

    // NOTE: if statements to determine which gets printed to the console.

    // // NOTE: if statement to print to the console the REMAINING repos to consider.
    // if (property != "THESE REPOS HAVE BEEN DELETED." && property != "THESE REPOS HAVE BEEN CONSOLIDATED INTO OTHER REPOS.") {
    //   console.log("name_and_status_v3[property]:", name_and_status_v3[property]);
    // }

    // NOTE: if statement to print to the console the ALL of the repos from the original list.
    if (true) {
      // console.log("name_and_status_v3[property]:", name_and_status_v3[property]);
      console.log(name_and_status_v3[property]);
    }
  }
}
