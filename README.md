# NestJS Starter

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

A powerful and minimal [Nest](https://github.com/nestjs/nest) starter template featuring:

- **Docker**
- **Logger** (enhanced with optional customization)
- **Zod** for request validation and configuration validation
- **Environment Variables** config and strict validation using Zod
- **VS Code** ready for debugging
- **Swagger** documentation out of the box
- **API Versioning** setup

---

## Project setup

```bash
$ npm install
```

```bash
$ npm run start:dev
```

## Features

### Docker
A Dockerfile is included to allow easy containerization of the application.
This enables the project to be built and run inside a Docker container for consistent deployments across environments.
The Docker setup ensures that environment variables, production builds, and node modules are properly handled for optimized performance.

### Logger
The project uses NestJS’s built-in logger, providing structured logs for better observability. The logger is configured to support different logging levels and can be easily extended or replaced with external libraries if needed.

---

### Zod and Zod Validation Pipe
Request payloads are validated using Zod, ensuring strong typing and runtime validation.  
A custom Zod validation pipe is integrated into the application, automatically validating incoming data against Zod schemas without the need for manual checks.

---

### Environment Variable Configuration and Validation
Environment variables are loaded and validated at application startup using Zod schemas.  
This guarantees that all required configuration values are present and correctly typed, preventing misconfigurations and runtime errors.

---

### VS Code Debugging
A ready-to-use VS Code debug configuration is included, enabling seamless debugging of the NestJS application with TypeScript support.  
Developers can set breakpoints and step through code easily without additional setup.

---

### Swagger Integration
Swagger is pre-configured for automatic API documentation generation.  
All API endpoints, their request bodies, parameters, and responses are automatically documented and made accessible through an interactive UI.

---

### API Versioning
The project supports API versioning based on URI versioning strategy.  
This allows for multiple API versions to coexist, enabling smooth upgrades and backward compatibility for client applications.

---

## Getting Started

1. Install project dependencies.
2. Set up your environment variables following the validation schema.
3. Run the application in development or production mode.
4. Access Swagger UI to explore and test available APIs.

---

## Requirements

- Node.js 20 or newer
- npm 10 or newer
