# Thriva Frontend Code-challenge

Firstly, thank you for Thriva for inviting me to complete this code challenge and share my skills.

## 2020-08-24 09:30:00

It has been a few days since receiving this code challenge and finding an ounce of time to attempt it.

I've been moving over the past week and haven't found a spare moment.

I have downloaded the designs from the invited Zeplin design share to `__DESIGNS__` for archival reference and maybe some Visual Image Testing via Cypress (no promises).

I have re-worked [`README.md`](./README.md) to flow better and resemble what this project is for my Github archive.

Also, there's some initial setup code to utilise Github actions for Continuous Integration and Continuous Deployment to Github Pages.

As I have completed a few code challenges, I have developed a few processes that help boilerplate starting a new project for the assignments.

## 2020-08-24 10:10:00

While getting the repository setup with CI/CD I've found a bug in the initial codebase code with end-2-end testing Cypress setup.

I'm getting the initial outline of the project setup into a working state before attempting the requested tasks.

What I found was the Vue Router did not have a default fallback URL path. Providing a default route path allowed cypress to be redirected to the correct path after loading an initial test.

Also found that minification was breaking the build because of the bundled already minified content in `index.html` so for the moment we've disabled CSS minification.

## 2020-08-24 10:45:00

Github pages deployment target has been a little temperamental due to the `baseUrl` which needed a subtle alteration.

## 2020-08-24 18:45:00

Right, now to approach the tasks after getting the codebase into a relaxed state to start with.

Reading through the tasks, I see a few things I would like to challenge;

#### Task 1

Use Vuex to store the state through transitions, possibly hook in local storage for persistent storage.

#### Task 2

Try my hand with the Stylus dependency to get this component looking as requested.

#### Task 3

Get some unit-tests for the component written, will use `npx jest --watchAll test/unit/specs/components/Survey/components/CheckButton.test.js` to watch for changes and continuously test the assertions I write.

#### Task 5

I see Vee validate installed into the project, so I'll see about adding client-side validations for this.

#### Task 6

Utilise the Transition functionality in Vue to allow the screens to flow nicely with CSS.

## 2020-08-24 19:33:00

Wired up Vuex with the `Name.vue` component allowing the persistence between the connectors with a simple committer and state access.


## 2020-08-24 20:00:00

As I am working on CheckButton CSS and functionality, I Managed to get myself stuck on the unit testing as the environment is missing something to do with Core.js.

I got around it by not demanding too much from the current codebase installation and just working with the defined Vue Test Utils which have been changed a few times since finding unique ways to unit test components over the years.


## 2020-08-25 09:15:00

I managed to get Tasks 1-3 completed last night and had to step away from the computer.

This morning I'm committing last nights work and working on finishing the final tasks.

## 2020-08-25 09:18:00

I am aware of the lack of unit tests for connector components.  The testing framework is not working well on my machine right outside of running `npm run unit`. I would debug and resolve the issue, but I'm aware the tasks are not yet complete.  So I will complete the core tasks first and re-visit the broken testing framework to patch in some unit tests that currently do not exist.

I write E2E tests as I go along.

## 2020-08-25 10:00:00

Date of Birth input component had a bug which the validator would not react on key presses.

I fixed this bug by listening to keypresses and re-evaluating the validation status of the component.

I also taken the liberty to remove Moment.js from this component, simply because there's no need for it as the validation and date code can be written in vanilla JavaScript.

## 2020-08-25 10:15:00

Added feature to components to ensure the component is loaded with stored data if available when navigating backwards.
