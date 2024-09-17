## README.md

### Project Overview

This project aims to create a scalable Node.js application using Docker and various tools and patterns. The application will leverage Nginx for load balancing, PostgreSQL for database management, Kong Gateway for API management, OAuth 2 for authorization, and Redis for caching. Crash analitics and infrastructure logs are to be implemented.

### Starting
Create an .env file based on env-dev.md.<br>
Run "Docker compose up" in project root


### Technologies and Tools

* **Node.js:** The primary programming language for the application.
* **Docker:** Containerization platform for packaging and deploying the application.
* **Nginx:** Web server and reverse proxy for load balancing.
* **PostgreSQL:** Relational database for storing application data.
* **`depends_on` directive:** Ensures containers start in the correct order. WIP

* **Logging** Datadog
* **Analitics** Segment
* **Kong Gateway:** API gateway for managing and securing APIs.
* **OAuth 2:** Authorization framework for providing secure access to resources.
* **Redis:** In-memory data structure store for caching and session management.

### Current Progress

* **Application Development:** The Node.js application has been created, including basic functionality like sign-in and login.
* **Database Integration:** The application connects to PostgreSQL for data storage.
* **Containerization:** The application is packaged as a Docker image.


### Next Steps

* **Docker Compose Configuration:** Initial setup using Docker Compose is underway, including the `depends_on` directive for ensuring the database container starts before the application container.
* **Complete Docker Compose Configuration:** Finish configuring Docker Compose to include all necessary containers (Nginx, PostgreSQL, Kong Gateway, Redis).
* **ImplementLogging:** Datadog ^ Crash analitics
* **Implement Custom Error Handling:** AppError class vs lib
* **Implement OAuth 2:** Integrate OAuth 2 into the application for secure authorization.
* **Configure Kong Gateway:** Set up Kong Gateway to manage and protect the application's APIs.
* **Implement Caching:** Utilize Redis for caching frequently accessed data.
* **Test and Optimize:** Thoroughly test the application and performance.
* **Deployment:** Deploy the application to a production environment.

### Additional Considerations

* **Scalability:** Consider strategies for scaling the application horizontally (adding more instances) and vertically (increasing resource allocation).
* **Monitoring and Logging:** Implement tools for monitoring application health and performance, as well as logging errors and events. Datadog vs Segment
* **Security:** Ensure the application is secure by following best practices for password management, input validation, and vulnerability scanning.
* **Continuous Integration and Continuous Delivery (CI/CD):** Set up CI/CD pipelines to automate testing, building, and deployment.

This README provides a high-level overview of the project and outlines the current progress and future plans. As the project progresses, more details and specific implementation steps will be added.
