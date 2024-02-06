# Web Woker Mini Project
Usage of Web Workers in Modern Web Applications
# Usage of Web_Workers
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
  - The "Sort Ascending Number of Comments Without WebWorker" button sorts user data in ascending order based on comments without using a web worker.
  - The "Sort Ascending Number of Comments With WebWorker" button sorts user data in ascending order based on comments using a web worker.
  - The "Click Me!" button displays an alert message to test the performance of the application.
# Performance Measure
Using a Web Worker for computationally intensive tasks, such as  sorting large arrays, complex calculations, performing calculations, or filtering results based on user input significantly improves performance. The UI remains responsive during these process when using a Web Worker, whereas, without a Web Worker, the UI may freeze or become unresponsive until the calculation is complete.
As in this app, you can observe a clear difference in the performance of the app with using Web Worker and without Web Worker. Without a web worker when 25000 users are sorted the UI freezes and the alert button will not work until the sort user while with a web worker UI does not freeze and the alert button will work smoothly without any UI lagging.
# Challenges Faced and Solutions
- **Challenges:**
  - Understanding what is web worker.
  - How to use Web Worker in the application
  - Sending and receiving messages between the main thread and the Web Worker.
  - How to integrate web worker code in the application.
- **Solutions:**
  - To Understand web workers, I have used Google, Chatgpt, and other online platforms.
  - I have also used online tutorials.
# References and Resources

- [Web Workers API by MDN Mozilla]([https://github.com](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
- Youtube
- Chatgpt

    


