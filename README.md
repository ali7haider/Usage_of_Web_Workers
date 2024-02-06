# Web Woker Mini Project
Usage of Web Workers in Modern Web Applications
# Usage_of_Web_Workers
This project is aimed at demonstrating the concept of Web Workers and the performance benefits they offer. This react web application generates dummy data of 25000 users. There is a navbar and there are three buttons below it.
- **Sort Users in Ascending Order Without Using Web Worker:**
  - Implement a function `sortAscendingWithoutWebWorker` to sort user data in ascending order based on comments without using a web worker.
  - Update the state with the sorted user data.
  - Disable the sorting button during the sorting operation.

- **Sort Users in Ascending Order Using Web Worker:**
  - Utilize the existing `sortAscending` function to communicate with the web worker for sorting user data in ascending order based on comments.
  - Disable the sorting button during the sorting operation.

- **Button to Test Performance:**
  - Add a button that, when clicked, displays an alert message to test the performance of the application.


Below that, there is 25000 user data in card style row by row.
The focus is to sort items with web worker and without web worker to measure the performance of the application.
# How to Run the Project Locally
To run the project locally, follow these steps:
- Clone the repository to your local machine.
- Open the project directory and run `npm start` in the cmd.
- The app will run on the local host.
- Click on the buttons to perform the respective actions:
- - The "Sort Ascending Number of Comments Without WebWorker" button sorts user data in ascending order based on comments without using a web worker.
- - The "Sort Ascending Number of Comments With WebWorker" button sorts user data in ascending order based on comments using a web worker.
- - The "Click Me!" button displays an alert message to test the performance of the application.
