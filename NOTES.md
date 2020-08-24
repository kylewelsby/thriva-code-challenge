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

What I found was the Vue Router did not have a default fallback URL path. Adding a default route path allowed cypress to be redirected to the correct path after loading an initial test.

Also found that minification was breaking the build because of the bundled already minified content in `index.html` so for the moment we've disabled CSS minification.

