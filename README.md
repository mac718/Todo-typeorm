# To-do TypeORM

My goal for this project is three-fold:

1. Create a fullstack Express+React app using Typescript
2. Use TypeORM to connect the app to a PostgreSQL DB
3. Work on testing both the front and back ends

While to-do apps are not very exciting, I settled on this option as it is a simple medium for the realization of the above goals.

## Features

- Ability to add, complete, restore, and delete tasks
- JWT authentication and authorization
- Input validation via express-validator package
- Custom error handler implemented via an async wrapper function (wraps controllers)
- Service/controller backend architecture
- Automatic environment assignment via cross-env package

## Still need to

- Implement auth context
- Write more tests
- Convert target date display to more readable format
- Text reminders for tasks with approaching target dates?
