# Interview Scheduler

Interview Scheduler is a single-page application that allows a student to choose a day, a time, and an interviewer to book in appointment with a mentor. Appointments can be easily edited and updated, or cancelled through the app by clicking the icons in the bottom left hand corner of a booked interview timeslot.

## Main features of Interview Scheduler
Appointments can be made between noon and 5pm for each day of the week. When the application is loaded, a request is made to the API server. The appointments are displayed for the selected day. Choosing another day shows that more appointments have been booked. 

!["choose a day"]()

When an appointment is created, the user can type in a student name and choose an interviewer from a list. Clicking on the "Save" button will perform a save action. A save action will make a request to the server to persist the change. Immediately, before sending the request, a user will see a status indicator. The request will take some time and the user should know that something is happening. When a response is returned from the server, the status indicator is hidden, and the interview is shown with updated data. The user can edit an interview. This allows them to change the student’s name or chosen interviewer and save those changes to the server.

!["save/edit an appointment"]()

If an interview is no longer needed, then it can be deleted. Before deleting the interview, the user is asked to provide a confirmation since it is a destructive action. 

!["delete an appointment"]()

If the server returns an error while performing an operation, a user will see a message. The message can be dismissed be pressing the "Close" button. 

!["screenshot of error"]()

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