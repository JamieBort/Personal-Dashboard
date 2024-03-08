# administrative

## How to use

### Locally

1. Start back end server.

   ~~See `Start back end server locally` in the `./jamiebort.github.io/backend/README.md` file.~~

2. Start front end server.

   ~~See `Start front end server locally` in the `./jamiebort.github.io/frontend/README.md` file.~~

### Hosted

See

- ~~`Start front end server remotely` in the `./jamiebort.github.io/frontend/README.md` file.~~

- ~~and see `Start back end server remotely` in the `./jamiebort.github.io/backend/README.md` file.~~

## Branch Structure

```
master - Production branch.
  |
  +-- dev - Development branch.
      |
      +-- fullstack - To set up a deployed full stack app.
```

## Directories and Files

### Directories

#### [./.github/](../.github)

This is where the Pull Request template lives (PULL_REQUEST_TEMPLATE.md). See [Pull Request Templates](https://github.com/JamieBort/LearningDirectory/tree/master/Git/pull_request_templates).

This is also where the Dependabot yml file is (dependabot.yml). Right now it is used just for `Dependabot version updates`. See [Dependabot](https://github.com/JamieBort/LearningDirectory/tree/master/Git/security#dependabot).

And this is where the Issue templates live (ISSUE_TEMPLATE/).

#### [./.vscode/](../.vscode)

Directory for config file for VS Code.

For information, see the .vscode section of the configFiles directory of the LearningDirectory repo.

Omitted from this repo.

#### [administrative/](../administrative/)

Files and directories for organizational purposes.

##### [administrative/project_resources/](./project_resources/)

Created for [Issue #14](https://github.com/JamieBort/Personal-Dashboard/issues/14).

This directory houses all of the resources I'll need to refer back to as I build out this project.

Per[Issue #14](https://github.com/JamieBort/Personal-Dashboard/issues/14), these resources will be moved to other locations.

This project_resources/ directory will be deleted when

- the `fullstack` branch is deleted

- and/or when the [Prepare repo administratively to start building out the font and back ends](https://github.com/JamieBort/Personal-Dashboard/milestone/3) milestone is closed.

##### [administrative/tempFiles/](./tempFiles/)

Contains files and directories from

- other branches,

- other repos, and

- directories from the root directory in this `fullstack` branch.

Created for [Issue #23](https://github.com/JamieBort/Personal-Dashboard/issues/23).

To be deleted when everything needed is extracted/salvaged.

[tempFiles/ README.md](./tempFiles/README.md)

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
