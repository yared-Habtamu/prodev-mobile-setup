# ProDev Mobile Setup - Expo Router First App

This repository documents the setup of the first mobile application using the Expo Router template.

## 1. Scaffolding Process

The initial setup involved creating a new Expo project and configuring it to use the Expo Router for navigation.

### Steps Followed:

1.  **Created Parent Directory:**
    ```bash
    mkdir prodev-mobile-setup
    cd prodev-mobile-setup
    ```

2.  **Initialized Expo Project:**
    Created the Expo app `app-example` using the `expo-router` template:
    ```bash
    npx create-expo-app@latest app-example --template expo-router
    ```

3.  **Navigated into Project:**
    ```bash
    cd app-example
    ```

4.  **Modified Home Screen:**
    Changed the text in `app/(tabs)/index.tsx` from "Welcome!" to "First App Created".

5.  **Ran Development Server:**
    Started the app using:
    ```bash
    npx expo start
    ```
    The QR code was scanned using a mobile device (iOS Camera app or Android Expo Go app) to view the application.

### File Structure Overview (Expo Router Template)

The `create-expo-app` command with the `--template expo-router` option generates a project structure optimized for file-based routing:

*   `app/`: This is the core directory for routing. Files and folders within `app/` define your app's navigation structure.
    *   `index.tsx`: Represents the root route (`/`).
    *   `(tabs)/`: A folder group indicating a segment of the URL. Here, it's used for tab navigation.
        *   `index.tsx`: The root screen for the `/` path within the `(tabs)` group.
        *   `_layout.tsx`: Defines the layout and navigation pattern for the `(tabs)` group (e.g., setting up a bottom tab bar).
*   `assets/`: Contains static assets like images, icons, and fonts.
*   `components/`: A common place to store reusable UI components.
*   `constants/`: Holds configuration values, themes, colors, etc. (e.g., `Colors.tsx`).
*   `App.tsx` / `index.ts`: The main entry point of the application (often handled by `app/_layout.tsx` in Expo Router).
*   `package.json`: Manages project dependencies and scripts.
*   `app.json`: Expo configuration file.

### 2. Reset Project Command Observations

The `npm run reset-project` command is a custom script defined in `package.json` to clean and reset the project's development environment.

**Execution:**
```bash
npm run reset-project