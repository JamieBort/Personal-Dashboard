# administrative

## How to use

### Locally

1. Start back end server.

   See [Start back end server locally](../backend/README.md#start-back-end-server-locally) in the `README.md` file.

2. Start front end server.

   ~~See `Start front end server locally` in the `./jamiebort.github.io/frontend/README.md` file.~~

### Hosted

Currently hosted on Render. I cloned [this Flask app](https://docs.render.com/deploy-flask) and followed the instructions to deploy it.

~~See~~

- ~~`Start front end server remotely` in the `./jamiebort.github.io/frontend/README.md` file.~~

- ~~and see `Start back end server remotely` in the `./jamiebort.github.io/backend/README.md` file.~~

## Branch Structure

```
master - Production branch.
  |
  +-- dev - Development branch.
      |
      +-- fullstack - To set up a deploy full stack app.
         |
         +-- fullstack_react_python - To set up a deploy a React TypeScript and Python full stack app.
            |
            +-- fullstack_react_python_be_endpoints - (Not created yet) To set up an endpoints to receive REST API calls from the frontend (fe).
            |
            +-- fullstack_react_python_fe_REST_api - To set up REST API calls to the backend (be).
```

## Directories and Files

### Directories

#### [./.github/](../.github)

This is where the Pull Request template lives (PULL_REQUEST_TEMPLATE.md). See [Pull Request Templates](https://github.com/JamieBort/LearningDirectory/tree/master/Git/pull_request_templates).

This is also where the Dependabot yml file is (dependabot.yml). Right now it is used just for `Dependabot version updates`. See [Dependabot](https://github.com/JamieBort/LearningDirectory/tree/master/Git/security#dependabot).

And this is where the Issue templates live (ISSUE_TEMPLATE/).

<!-- This .vscode/ directory doesn't exist -->
<!-- #### [./.vscode/](../.vscode)

Directory for config file for VS Code.

For information, see the .vscode section of the configFiles directory of the LearningDirectory repo.

Omitted from this repo. -->

#### [administrative/](../administrative/)

Files and directories for organizational purposes.

##### [administrative/collected_resources/](./collected_resources/)

This directory houses resources for this project/repo from various sources; such as old branches, directories, various Trello cards, etc.

Created for [Issue #27](https://github.com/JamieBort/Personal-Dashboard/issues/27).

To be cleaned out and deleted eventually.

#### [backend/](../backend)

Directory containing the back end of this app.

#### [frontend/](../frontend)

Directory containing the front end of this app.

### Files

##### [administrative/milestones.md](./milestones.md)

For organizing my project milestones.

Possibly a temporary file.

##### [administrative/README.md](./README.md)

This readme file.

##### [administrative/resources_by_topic.md](./resources_by_topic.md)

File containing resource distilled from the [administrative/project_resources/](#administrativeproject_resources) and the [administrative/tempFiles/](#administrativetempfiles) directories.

##### [administrative/Tasks.md](./Tasks.md)

To-Do items that need to be addressed.

#### [.gitignore](../.gitignore)

Specifies intentionally untracked files. See https://git-scm.com/docs/gitignore

#### [CONTRIBUTING.md](../CONTRIBUTING.md)

The contribution guide for this repo.

#### [Contributor_Covenant_Code_of_Conduct.md](../Contributor_Covenant_Code_of_Conduct.md)

The code of conduct for this repo.

#### [LICENSE.txt](../LICENSE.txt)

The license for this repo.

The text can be found [here](../LICENSE.txt).

#### [README.md](../README.md)

The README file for the repo.
