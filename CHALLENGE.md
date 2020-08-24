# 👋 Welcome to the Thriva front-end coding challenge

### Background

At Thriva we're striving to be the world's first personalised health care service. A major featured we developed to get us on our way is called Personalisation, funnily enough.

Once a Thriva user has completed one of our tests we are able to provide recommendations to suggest what they should test next. These recommendations are based on their test result data as well as some other information they've provided in their health profile questionnaire — height, weight, medical conditions, diet, etc.

This feature is great — lots of our customers love it and use it frequently. We did however receive requests from users who wanted to be able to do this when they first signed up to Thriva.

We have taken this feedback on board and created a survey that is part of our onboarding flow. This allows us to collect the minimum amount of information we need to be able to make relevant recommendations of what someone should be testing.

This survey collects 5 key pieces of information:

1. First name
2. Health Goals
3. Diet
4. Date of birth
5. Gender

Once the survey is complete we calculate the recommendations and allow the user to further customise their package by adding and removing tests.

There are a few improvements we'd like you to make to this survey to give our users the best experience possible while going through the process. This project only includes the survey phase on the onboarding flow so you don't need to worry about the recommendation side of things.

### Instructions

The tasks below should take around two hours; please complete as many as possible.

We use Zeplin to share designs. If you don't have an account you can [sign up here](https://zeplin.io/).

The mobile and desktop designs can be found in the [Zeplin web app](https://zpl.io/29o5lmz) or the [Zeplin desktop app](zpl://project?pid=5c170e6ec5dd4c508a4717f6).

There is a [NOTES.md](./NOTES.md) file; please leave anything you'd like to let us know in there. This could be reasoning as to why you have done x this way or a comment on one of the tasks. We will use these as discussion point when running through this task in person.

You will find some comments starting with `SUGGESTION` scattered throughout the codebase. These should help you get started.

Any other questions, please get in touch.

#### Task 1

We collect the user's first name in stage one of the survey and want to use it on the goals stage (stage two).

Task 1 is to build a way to store the user's first name so it can be used in the goals stage.

Note: Vuex is included in the project, it's up to you whether you use it or not.

#### Task 2

In `src/components/survey/components` you will find the CheckButton component. This is what's responsible for displaying all of the options the user has for the goals, diet and gender stages.

Task 2 is to style this component to match the designs in Zeplin.

#### Task 3

Now that we have CheckButton.vue styled we need to set up it's functionality.
Task 3 is to make it so the user can select multiple options on the goals stage (limited to 4) and only one option in the diet and gender stages. We need a way to store this data as it will be sent to the server at the end of the survey.

As part of this you should fix any errors the component is causing and also write some unit tests for the component so we can verify it's working correctly. The test file can be found at `test/unit/specs/components/Survey/components/CheckButton.test.js`. `npm run unit` will run the tests.

#### Task 4

In the designs you may have noticed a progress bar in the top right corner of the screen. In the `Survey/connectors` folder you will find `SurveyProgress.vue`. This is the parent component for `components/Shared/ProgressBar.vue`.

Task 4 is to make this component work correctly. The component is already built we just need to supply it with the correct data so it will display how far through the survey stages the user currently is. This component will also need some unit tests.

#### Task 5
We now have everything in order, we just need to tidy things up a bit.

Task 5 is to make sure we have first name, goals, diet, date of birth and gender stored and ready to be sent to the API at the end of the survey. We also need to add in some quick validation. You will see on the name stage that the button is disabled until the user has entered their name. We need to do this on the other stages as well (date of birth is already done so you shouldn't have to do much there).

Also a user shouldn't be able to go to the next stage without completing the current stage they are on. The goals stage is limited to a maximum of 4 selections. You will need to build in a way of enforcing this and also giving the user some feedback when they try to select more than the limit.

#### Task 6
Things feel a bit sudden as you transition from one survey stage to another. It would be good to make this experience nicer.

Task 6 is to make any UX changes that will make things feel nicer for the user.

If you don't have much time, leave some comments in `NOTES.md` about what you would do.

#### Get Started

You can find stage one of the survey [here](https://kylewelsby.github.io/thriva-code-challenge/name)
