const rep_obj = {
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

// NOTE: (2) The function I used to extract just the names of each repo.
function extractName(param) {
  const tempArray = [];
  //   let tempArray = [];
  //   console.log("Process");
  const edges = param.data.user.repositories.edges;
  //   console.log("edges:", edges);
  edges.forEach((element) => {
    // console.log("element:", element);
    const name = element.node.name;
    // console.log("name:", name);
    tempArray.push(name);
  });
  return tempArray;
}

// NOTE: (5) The function I used to extract just the names of each repo. And to add a status property to each.
function addStatus(param) {
  const tempArray = [];
  const edges = param.data.user.repositories.edges;
  //   return edges;
  edges.forEach((element) => {
    const node = element.node;
    node.status = "Need to check this repo.";
    // console.log("node:", node);
    tempArray.push(node);
  });
  return tempArray;
}
console.log(addStatus(rep_obj));

// NOTE: (6) The array containing the names and status' of each repo. Added to the results.js file.
const name_and_status = [
  { name: "iBeer_Layout-Flexbox", status: "Need to check this repo." },
  { name: "Bears", status: "Need to check this repo." },
  {
    name: "Week1-WeeklyAssignment",
    status: "Need to check this repo.",
  },
  { name: "Portfolio-Website", status: "Need to check this repo." },
  { name: "FormBuilder", status: "Need to check this repo." },
  { name: "CustomerDatabase", status: "Need to check this repo." },
  {
    name: "BlackjackHandCalculator",
    status: "Need to check this repo.",
  },
  { name: "GitHubDataVCard", status: "Need to check this repo." },
  { name: "RecipeSearch", status: "Need to check this repo." },
  { name: "Brick_Breaker_Mashup", status: "Need to check this repo." },
  { name: "BuildATodoList", status: "Need to check this repo." },
  { name: "CreateASiteWithALogin", status: "Need to check this repo." },
  { name: "express-lecture-1", status: "Need to check this repo." },
  { name: "week3Calculator", status: "Need to check this repo." },
  {
    name: "GitHubDataVCardWithFetch",
    status: "Need to check this repo.",
  },
  {
    name: "Week4iTunesMusicSearch",
    status: "Need to check this repo.",
  },
  {
    name: "Create-A-User-Directory",
    status: "Need to check this repo.",
  },
  {
    name: "BuildAGameWithNodeAndExpress",
    status: "Need to check this repo.",
  },
  { name: "ReturnToRobots", status: "Need to check this repo." },
  { name: "CodeSnippetOrganizer", status: "Need to check this repo." },
  { name: "BillMurrayTime", status: "Need to check this repo." },
  { name: "PuppyLove", status: "Need to check this repo." },
  {
    name: "iPhysicist-CSSLayoutFlexbox",
    status: "Need to check this repo.",
  },
  { name: "GitHubPractice", status: "Need to check this repo." },
  { name: "ResponsiveNavigation", status: "Need to check this repo." },
  {
    name: "CodeForDurhamAffordableHousingDataSet",
    status: "Need to check this repo.",
  },
  { name: "CodeChallenges", status: "Need to check this repo." },
  {
    name: "Talks_Presentations_Workshops_and_Resources",
    status: "Need to check this repo.",
  },
  { name: "LearningDirectory", status: "Need to check this repo." },
  { name: "Personal-Dashboard", status: "Need to check this repo." },
  { name: "Resources", status: "Need to check this repo." },
  { name: "TestPrivateRepo", status: "Need to check this repo." },
  { name: "DotENVPractice", status: "Need to check this repo." },
  { name: "TrelloHeatMap", status: "Need to check this repo." },
  {
    name: "GoogleCalendarAPIPractice",
    status: "Need to check this repo.",
  },
  { name: "TrelloAPI", status: "Need to check this repo." },
  {
    name: "MaxxPotentialCareerLab",
    status: "Need to check this repo.",
  },
  { name: "GmailAPIPractice", status: "Need to check this repo." },
  { name: "JamieBort", status: "Need to check this repo." },
  { name: "ReactJavaFrontBack", status: "Need to check this repo." },
  {
    name: "DummyRepoPublicNameChange",
    status: "Need to check this repo.",
  },
  { name: "DummyRepoPrivate", status: "Need to check this repo." },
  { name: "GoogleMap", status: "Need to check this repo." },
  { name: "tempMapSearch", status: "Need to check this repo." },
  { name: "EastSideRunClub", status: "Need to check this repo." },
  { name: "CNYSilentBookClub", status: "Need to check this repo." },
  { name: "CodeTheDream", status: "Need to check this repo." },
  { name: "rockpaperscissors", status: "Need to check this repo." },
  { name: "JamieBortPersonal", status: "Need to check this repo." },
  {
    name: "personal_dashboard_backend_heroku",
    status: "Need to check this repo.",
  },
  { name: "intro-to-programming", status: "Need to check this repo." },
  { name: "R6-rest-rails", status: "Need to check this repo." },
  { name: "R6-blog", status: "Need to check this repo." },
  { name: "to-do-list-videoWork", status: "Need to check this repo." },
  {
    name: "Espanol-ingles-leyendo-hora",
    status: "Need to check this repo.",
  },
  { name: "to-do-list-classwork", status: "Need to check this repo." },
  { name: "Kanban-Board", status: "Need to check this repo." },
  { name: "weight-lifting-app", status: "Need to check this repo." },
  { name: "cgm-remote-monitor", status: "Need to check this repo." },
  {
    name: "03-task-manager-with-React-front-end",
    status: "Need to check this repo.",
  },
  { name: "API-Playground", status: "Need to check this repo." },
  {
    name: "react-gh-pages-tutorial",
    status: "Need to check this repo.",
  },
  {
    name: "routed-react-app-gh-pages",
    status: "Need to check this repo.",
  },
  {
    name: "GitHub-Actions-Learning-repo",
    status: "Need to check this repo.",
  },
  { name: "Data-Logging-App", status: "Need to check this repo." },
  { name: "To-Do-App", status: "Need to check this repo." },
  { name: "self-care-survey-form", status: "Need to check this repo." },
  {
    name: "Awesome-Profile-README-templates",
    status: "Need to check this repo.",
  },
  {
    name: "Digital_Knowledge_Base",
    status: "Need to check this repo.",
  },
];

// // NOTE: (3) The result of that function. newObj is an array of the names of my repos.
// const newObj = extractName(rep_obj);
// // console.log("array_of_repo_names:", newObj);

// NOTE: (4) The array,copied and pasted from the console. Added to the results.js file.
const array_of_repo_names = [
  "iBeer_Layout-Flexbox",
  "Bears",
  "Week1-WeeklyAssignment",
  "Portfolio-Website",
  "FormBuilder",
  "CustomerDatabase",
  "BlackjackHandCalculator",
  "GitHubDataVCard",
  "RecipeSearch",
  "Brick_Breaker_Mashup",
  "BuildATodoList",
  "CreateASiteWithALogin",
  "express-lecture-1",
  "week3Calculator",
  "GitHubDataVCardWithFetch",
  "Week4iTunesMusicSearch",
  "Create-A-User-Directory",
  "BuildAGameWithNodeAndExpress",
  "ReturnToRobots",
  "CodeSnippetOrganizer",
  "BillMurrayTime",
  "PuppyLove",
  "iPhysicist-CSSLayoutFlexbox",
  "GitHubPractice",
  "ResponsiveNavigation",
  "CodeForDurhamAffordableHousingDataSet",
  "CodeChallenges",
  "Talks_Presentations_Workshops_and_Resources",
  "LearningDirectory",
  "Personal-Dashboard",
  "Resources",
  "TestPrivateRepo",
  "DotENVPractice",
  "TrelloHeatMap",
  "GoogleCalendarAPIPractice",
  "TrelloAPI",
  "MaxxPotentialCareerLab",
  "GmailAPIPractice",
  "JamieBort",
  "ReactJavaFrontBack",
  "DummyRepoPublicNameChange",
  "DummyRepoPrivate",
  "GoogleMap",
  "tempMapSearch",
  "EastSideRunClub",
  "CNYSilentBookClub",
  "CodeTheDream",
  "rockpaperscissors",
  "JamieBortPersonal",
  "personal_dashboard_backend_heroku",
  "intro-to-programming",
  "R6-rest-rails",
  "R6-blog",
  "to-do-list-videoWork",
  "Espanol-ingles-leyendo-hora",
  "to-do-list-classwork",
  "Kanban-Board",
  "weight-lifting-app",
  "cgm-remote-monitor",
  "03-task-manager-with-React-front-end",
  "API-Playground",
  "react-gh-pages-tutorial",
  "routed-react-app-gh-pages",
  "GitHub-Actions-Learning-repo",
  "Data-Logging-App",
  "To-Do-App",
  "self-care-survey-form",
  "Awesome-Profile-README-templates",
  "Digital_Knowledge_Base",
];

// NOTE: (1) The original list generated from an GraphyQL call via https://docs.github.com/en/graphql/overview/explorer
// const original_rep_obj = {
//   data: {
//     user: {
//       repositories: {
//         edges: [
//           {
//             node: {
//               name: "iBeer_Layout-Flexbox",
//             },
//           },
//           {
//             node: {
//               name: "Bears",
//             },
//           },
//           {
//             node: {
//               name: "Week1-WeeklyAssignment",
//             },
//           },
//           {
//             node: {
//               name: "Portfolio-Website",
//             },
//           },
//           {
//             node: {
//               name: "FormBuilder",
//             },
//           },
//           {
//             node: {
//               name: "CustomerDatabase",
//             },
//           },
//           {
//             node: {
//               name: "BlackjackHandCalculator",
//             },
//           },
//           {
//             node: {
//               name: "GitHubDataVCard",
//             },
//           },
//           {
//             node: {
//               name: "RecipeSearch",
//             },
//           },
//           {
//             node: {
//               name: "Brick_Breaker_Mashup",
//             },
//           },
//           {
//             node: {
//               name: "BuildATodoList",
//             },
//           },
//           {
//             node: {
//               name: "CreateASiteWithALogin",
//             },
//           },
//           {
//             node: {
//               name: "express-lecture-1",
//             },
//           },
//           {
//             node: {
//               name: "week3Calculator",
//             },
//           },
//           {
//             node: {
//               name: "GitHubDataVCardWithFetch",
//             },
//           },
//           {
//             node: {
//               name: "Week4iTunesMusicSearch",
//             },
//           },
//           {
//             node: {
//               name: "Create-A-User-Directory",
//             },
//           },
//           {
//             node: {
//               name: "BuildAGameWithNodeAndExpress",
//             },
//           },
//           {
//             node: {
//               name: "ReturnToRobots",
//             },
//           },
//           {
//             node: {
//               name: "CodeSnippetOrganizer",
//             },
//           },
//           {
//             node: {
//               name: "BillMurrayTime",
//             },
//           },
//           {
//             node: {
//               name: "PuppyLove",
//             },
//           },
//           {
//             node: {
//               name: "iPhysicist-CSSLayoutFlexbox",
//             },
//           },
//           {
//             node: {
//               name: "GitHubPractice",
//             },
//           },
//           {
//             node: {
//               name: "ResponsiveNavigation",
//             },
//           },
//           {
//             node: {
//               name: "CodeForDurhamAffordableHousingDataSet",
//             },
//           },
//           {
//             node: {
//               name: "CodeChallenges",
//             },
//           },
//           {
//             node: {
//               name: "Talks_Presentations_Workshops_and_Resources",
//             },
//           },
//           {
//             node: {
//               name: "LearningDirectory",
//             },
//           },
//           {
//             node: {
//               name: "Personal-Dashboard",
//             },
//           },
//           {
//             node: {
//               name: "Resources",
//             },
//           },
//           {
//             node: {
//               name: "TestPrivateRepo",
//             },
//           },
//           {
//             node: {
//               name: "DotENVPractice",
//             },
//           },
//           {
//             node: {
//               name: "TrelloHeatMap",
//             },
//           },
//           {
//             node: {
//               name: "GoogleCalendarAPIPractice",
//             },
//           },
//           {
//             node: {
//               name: "TrelloAPI",
//             },
//           },
//           {
//             node: {
//               name: "MaxxPotentialCareerLab",
//             },
//           },
//           {
//             node: {
//               name: "GmailAPIPractice",
//             },
//           },
//           {
//             node: {
//               name: "JamieBort",
//             },
//           },
//           {
//             node: {
//               name: "ReactJavaFrontBack",
//             },
//           },
//           {
//             node: {
//               name: "DummyRepoPublicNameChange",
//             },
//           },
//           {
//             node: {
//               name: "DummyRepoPrivate",
//             },
//           },
//           {
//             node: {
//               name: "GoogleMap",
//             },
//           },
//           {
//             node: {
//               name: "tempMapSearch",
//             },
//           },
//           {
//             node: {
//               name: "EastSideRunClub",
//             },
//           },
//           {
//             node: {
//               name: "CNYSilentBookClub",
//             },
//           },
//           {
//             node: {
//               name: "CodeTheDream",
//             },
//           },
//           {
//             node: {
//               name: "rockpaperscissors",
//             },
//           },
//           {
//             node: {
//               name: "JamieBortPersonal",
//             },
//           },
//           {
//             node: {
//               name: "personal_dashboard_backend_heroku",
//             },
//           },
//           {
//             node: {
//               name: "intro-to-programming",
//             },
//           },
//           {
//             node: {
//               name: "R6-rest-rails",
//             },
//           },
//           {
//             node: {
//               name: "R6-blog",
//             },
//           },
//           {
//             node: {
//               name: "to-do-list-videoWork",
//             },
//           },
//           {
//             node: {
//               name: "Espanol-ingles-leyendo-hora",
//             },
//           },
//           {
//             node: {
//               name: "to-do-list-classwork",
//             },
//           },
//           {
//             node: {
//               name: "Kanban-Board",
//             },
//           },
//           {
//             node: {
//               name: "weight-lifting-app",
//             },
//           },
//           {
//             node: {
//               name: "cgm-remote-monitor",
//             },
//           },
//           {
//             node: {
//               name: "03-task-manager-with-React-front-end",
//             },
//           },
//           {
//             node: {
//               name: "API-Playground",
//             },
//           },
//           {
//             node: {
//               name: "react-gh-pages-tutorial",
//             },
//           },
//           {
//             node: {
//               name: "routed-react-app-gh-pages",
//             },
//           },
//           {
//             node: {
//               name: "GitHub-Actions-Learning-repo",
//             },
//           },
//           {
//             node: {
//               name: "Data-Logging-App",
//             },
//           },
//           {
//             node: {
//               name: "To-Do-App",
//             },
//           },
//           {
//             node: {
//               name: "self-care-survey-form",
//             },
//           },
//           {
//             node: {
//               name: "Awesome-Profile-README-templates",
//             },
//           },
//           {
//             node: {
//               name: "Digital_Knowledge_Base",
//             },
//           },
//         ],
//       },
//     },
//   },
// };
