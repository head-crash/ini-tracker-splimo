# ini-tracker.de / splimo (Splittermond) Angular version (as new development from scratch)

This repository contains a **new Angular-based implementation** of the Splimo app, reimagined with modern frontend technologies. Initially, **only the frontend** will be developed in this repository. A separate project will handle the **Go-based REST backend**.  

You can find more information about the original application at [https://ini-app.de/splimo](https://ini-app.de/splimo), along with additional background:

- **Splittermond RPG**: [https://splittermond.de](https://splittermond.de)
- **Splimo Forum Thread**: [https://forum.splittermond.de/index.php?topic=2924](https://forum.splittermond.de/index.php?topic=2924)  
- **User Documentation**: [Google Docs](https://docs.google.com/document/d/1li2cjd-Ru_ZAhcQZsvCDJkvhIuj9CgljhoQCURceygY/edit?tab=t.0)

## Table of Contents

1. [About the Project](#about-the-project)  
2. [Features](#features)  
3. [Technologies Used](#technologies-used)  
4. [Prerequisites](#prerequisites)  
5. [Installation & Setup](#installation--setup)  
6. [Project Structure](#project-structure)  
7. [Configuration](#configuration)  
8. [Scripts & Important Commands](#scripts--important-commands)  
9. [Deployment](#deployment)  
10. [End-to-End Tests](#end-to-end-tests)  
11. [Additional Documentation & References](#additional-documentation--references)  
12. [Contributing](#contributing)  
13. [License](#license)

---

## About the Project

The tick-based initiative system in Splittermond is a really cool alternative to standard round-based systems. However, in our gaming group, we never really warmed up to the solution of visualizing the relevant part of the timeline as a kind of “mini board game.” Therefore, after discussing ideas and collecting suggestions from my fellow players, I built a web app tool with a touch-optimized interface to manage the current slice of the timeline for the (fight) scene, many years ago

Essentially, the whole thing is a dynamic list of all participating characters. Even events that happen at a specific time can be created as their own entry (or “character”) in the list. Each participant’s position on the timeline, i.e., the tick value, is shown as a large red number. To support floor plans and color-coded miniatures (common in our battles), you can assign each participant not only a name but also a color.

Besides color, name, current tick on the timeline, and an intuition value, you can also track how much damage each participant has suffered, making it easier to keep an overview.

### Angular Frontend & Go REST Backend

- **Current Focus**: Rebuild the entire frontend with Angular and modern best practices.  
- **Future Go Backend**: The backend will be written in Go as a separate project, providing a new RESTful API for this Angular frontend.  
- **Objectives**:
  - Establish a modern, maintainable codebase  
  - Improve the structure of components and services  
  - Implement best practices in frontend development  
  - Enhance performance and user experience  
  - Provide a **Tailwind CSS**-based UI, combined with **Angular Material** for additional styled components  

For more in-depth details about the current app’s features and functionality, refer to the [Splimo Forum Thread](https://forum.splittermond.de/index.php?topic=2924) and [User Documentation](https://docs.google.com/document/d/1li2cjd-Ru_ZAhcQZsvCDJkvhIuj9CgljhoQCURceygY/edit?tab=t.0).

---

## Features

- **Character & Adventure Management**: Create and organize characters, sessions, and adventure logs
- **Responsive Design**: Automatic adaptation for smartphone, tablet, and desktop
- **User Management**: Registration, login, password reset  (later)
- **Roles & Permissions** (optional): Assign different access rights based on user roles (later)
- **Multiuser online sessions**: future usecase is a interactive multi user app (later)

---

## Technologies Used (in frontend)

- **Angular 19**: The latest version of the Angular framework  
- **TypeScript**: Strongly typed JavaScript superset for maintainable code  
- **RxJS**: Reactive programming library used by Angular  
- **Angular CLI**: For scaffolding, building, and testing  
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development  
- **Angular Material**: Pre-built Angular components for a consistent and accessible UI  
- **Node.js** (optional for backend integration)  

---

## Prerequisites

Before you begin, ensure you have met the following requirements:

1. **Node.js & npm**  
   - Node.js >= 14.x (or the latest LTS version)  
   - npm >= 6.x  

2. **Angular CLI** (globally installed):  

   ```bash
   npm install -g @angular/cli
   ```

3. **Git** (optional, but recommended)  
   - Git >= 2.x  

---

## Installation & Setup

1. **Clone the Repository**  

   ```bash
   git clone https://github.com/YOUR_USERNAME/splimo-angular.git
   cd splimo-angular
   ```

2. **Install Dependencies**  

   ```bash
   npm install
   ```

3. **Start the Development Server**  

   ```bash
   ng serve
   ```

   By default, the app will run at [http://localhost:4200](http://localhost:4200).

> **Note**: The Go-based backend will be a separate project. You can integrate it once it’s available, or connect to an existing API during development.

---

## Project Structure

Below is a simplified overview of the main directories and files:

```
splimo-angular
├── e2e/                         # End-to-end tests
├── src/
│   ├── app/
│   │   ├── core/               # Core module (e.g., auth services, guards)
│   │   ├── shared/             # Shared components, pipes, and directives
│   │   ├── features/           # Feature modules (e.g., characters, sessions, etc.)
│   │   ├── app-routing.module.ts
│   │   └── app.component.ts
│   ├── assets/                 # Images, icons, fonts
│   ├── environments/           # Environment config (dev, prod)
│   ├── index.html
│   ├── main.ts                 # Main entry file
│   └── styles.scss             # Global styles (Tailwind imports, overrides)
├── tailwind.config.js          # Tailwind CSS configuration
├── angular.json
├── package.json
├── tsconfig.json
├── .editorconfig
├── .gitignore
└── README.md
```

- **app/core**: Core functionalities (e.g., authentication, route guards, interceptors).  
- **app/shared**: Common components (e.g., headers, footers), pipes, and directives shared across the application.  
- **app/features**: Separate subfolders for feature modules (e.g., `characters`, `sessions`, `adventures`, etc.).  
- **tailwind.config.js**: Config file for Tailwind CSS customization.  

---

## Configuration

- **Environments**: Environment-specific configurations in `src/environments/`  
  - `environment.ts` (development)  
  - `environment.prod.ts` (production)  

Set API endpoints, feature flags, or any other environment-based variable within these files.

```ts
// src/environments/environment.ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api' // Example backend endpoint
};
```

- **Tailwind CSS**:  
  - Ensure Tailwind is imported in your global `styles.scss` or `styles.css`.  
  - Configure custom colors, fonts, and breakpoints in `tailwind.config.js`.

---

## Scripts & Important Commands

| Command           | Description                                                                               |
| ----------------- | ----------------------------------------------------------------------------------------- |
| `ng serve`        | Start the development server on `http://localhost:4200`                                  |
| `ng serve --prod` | Start a production-like server                                                            |
| `ng build`        | Build the application for production                                                      |
| `ng e2e`          | Run end-to-end tests via [Protractor](https://www.protractortest.org/) or [Cypress](https://www.cypress.io/) |

---

## Deployment

1. **Production Build**  

   ```bash
   ng build --prod
   ```

   Creates a production-ready bundle in the `dist/` folder.

2. **Hosting**  
   - Copy or upload the contents of `dist/splimo-angular` to your preferred web server.  
   - Configure your server to handle Angular’s routing, typically redirecting all routes to `index.html`.

3. **Docker** (optional)  
   - If you wish to containerize the app, create a `Dockerfile`:

     ```dockerfile
     FROM node:16-alpine as build
     WORKDIR /app
     COPY package*.json ./
     RUN npm install
     COPY . .
     RUN npm run build

     FROM nginx:stable-alpine
     COPY --from=build /app/dist/splimo-angular /usr/share/nginx/html
     EXPOSE 80
     ```

   - Build and run the image:

     ```bash
     docker build -t splimo-angular .
     docker run -p 80:80 splimo-angular
     ```

---

## End-to-End Tests

For higher-level testing of user flows, you can use [Protractor](https://www.protractortest.org/) or [Cypress](https://www.cypress.io/).

### Running E2E Tests

```bash
ng e2e
```

> **Note**: Adjust your testing framework and configuration in `angular.json` and the `e2e/` directory as needed.

---

## Additional Documentation & References

- **Original Splimo App**: [https://ini-app.de/splimo](https://ini-app.de/splimo)  
- **Splimo Forum Thread**: [https://forum.splittermond.de/index.php?topic=2924](https://forum.splittermond.de/index.php?topic=2924)  
- **User Documentation**: [Google Docs](https://docs.google.com/document/d/1li2cjd-Ru_ZAhcQZsvCDJkvhIuj9CgljhoQCURceygY/edit?tab=t.0)  
- **Angular Official Docs**: [https://angular.io/docs](https://angular.io/docs)  
- **Tailwind CSS**: [https://tailwindcss.com/docs](https://tailwindcss.com/docs)  
- **Angular Material**: [https://material.angular.io/](https://material.angular.io/)  

Feel free to include any other references or links that may be relevant to your project’s specific functionality and architecture.

---

## Contributing

If you want to contribute to this project:

1. **Fork** the project repository  
2. Create a **new branch** (`git checkout -b feature/my-new-feature`)  
3. **Commit** your changes (`git commit -m 'Add a cool new feature'`)  
4. **Push** to the branch (`git push origin feature/my-new-feature`)  
5. Open a **Pull Request**  

All contributions are welcome and appreciated!

---

## License

This project is licensed under the [MIT License](LICENSE).  
You are free to copy, modify, and distribute this software for personal and commercial purposes.  

---

**Thank you for checking out Splimo Angular!**  
If you have any questions, suggestions, or issues, please open an issue or create a pull request.
