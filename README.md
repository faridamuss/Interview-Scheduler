# Interview Scheduler

Scheduler is a React based project that uses a RESTful API to manage interview scheduling for clients. The interactive UI displays messages accordingly and will notify users if there is some kind of error making a request to the server or a user-generated error.

The app also used Storybook to preform isolated component tests, Jest for integration testing and Cypress for end-to-end testing.

## Main Features of Interview Scheduler

### Interviews can be booked between Monday and Friday
Appointments can be made between noon and 5pm for each day of the week. When the application is loaded, a request is made to the API server. The appointments are displayed for the selected day. Choosing another day shows that more appointments have been booked. 

!["choose a day"](https://github.com/faridamoussaeff/Scheduler/blob/master/docs/0chooseDay.gif)

### Interviews are booked by typing in a student name and clicking on an interviewer from a list of available interviewers
When an appointment is created, the user can type in a student name and choose an interviewer from a list. Clicking on the "Save" button will perform a save action. A save action will make a request to the server to persist the change. Immediately, before sending the request, a user will see a status indicator. The request will take some time and the user should know that something is happening. When a response is returned from the server, the status indicator is hidden, and the interview is shown with updated data. The user can edit an interview. This allows them to change the student’s name or chosen interviewer and save those changes to the server.

!["save/edit an appointment"](https://github.com/faridamoussaeff/Scheduler/blob/master/docs/1saveInterview.gif)

### A user is presented with a confirmation when they attempt to cancel an interview
If an interview is no longer needed, then it can be deleted. Before deleting the interview, is presented with a confirmation when they attempt to cancel an interview. since it is a destructive action. 

!["delete an appointment"](https://github.com/faridamoussaeff/Scheduler/blob/master/docs/2deleteInterview.gif)

### A user is shown an error if an interview cannot be saved or deleted.
If the server returns an error while performing an operation, a user will see a message. The message can be dismissed be pressing the "Close" button. 

!["screenshot of error"](https://github.com/faridamoussaeff/Scheduler/blob/master/docs/3error.png)

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
## Dependencies
- React
- React-dom
- React-scripts
- Axios
- Sass
- Prop-types
- React Test Renderer
- Babel
- React Testing Library
- Storybook
- Cypress
- Jest
