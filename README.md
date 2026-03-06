# Prompt Engineering Presentation Site

A modern, interactive, and beautifully designed presentation website built to confidently teach a 4-hour beginner's course on Prompt Engineering. 

This project goes beyond static slides—it is a fully functional web application featuring smooth transitions, a dark-mode glassmorphism UI, real-time code examples, and interactive mini-games that keep audiences engaged.

## ✨ Features

*   **Interactive Mini-Games**: Built-in games like "Prompt Roulette," "Build the Perfect Prompt," and "Prompt Battle" allow students to practice what they learn immediately.
*   **Comprehensive Curriculum**: Covers everything from AI/LLM foundations, the PART framework, to advanced techniques like Few-Shot prompting and Chain of Thought.
*   **Custom Slide Engine**: A bespoke, lightweight vanilla JS engine handling keyboard/click navigation, smooth CSS animations, and progress tracking.
*   **Premium Design**: A polished "Enhanced Swiss Style" aesthetic featuring dark themes, vibrant accents (navy, purple, sage, terracotta, gold), and glassmorphism.
*   **Cloud-Ready**: Includes a fully configured multi-stage `Dockerfile` and Google Cloud Build (`cloudbuild.yaml`) pipeline for instant deployment to Cloud Run.

## 🚀 Getting Started Locally

This project uses [Vite](https://vitejs.dev/) for an incredibly fast, lightweight development experience.

### Prerequisites
*   [Node.js](https://nodejs.org/) (v18 or higher recommended)

### Installation
1.  Clone the repository:
    ```bash
    git clone https://github.com/matmatromero/prompt_engineering_lecture.git
    cd prompt_engineering_lecture
    ```
2.  Install the dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```
4.  Open your browser and navigate to the local URL provided in your terminal (usually `http://localhost:5173`).

## ☁️ Deployment (Google Cloud Run)

This repository is ready to be deployed as a containerized application to Google Cloud Run. 

1. Ensure you have the [Google Cloud CLI](https://cloud.google.com/sdk/docs/install) installed and authenticated.
2. Ensure you have the necessary permissions and billing enabled on your target GCP project.
3. Submit the build using the provided configuration:
   ```bash
   gcloud builds submit --config cloudbuild.yaml .
   ```

*Note: The `cloudbuild.yaml` file automatically sets the deployment to allow unauthenticated invocations (`--allow-unauthenticated`), making the presentation accessible to the public.*

## 🛠️ Built With

*   **HTML, CSS, JavaScript** (Vanilla, no heavy UI frameworks!)
*   **[Vite](https://vitejs.dev/)** - Next Generation Frontend Tooling
*   **[Docker](https://www.docker.com/)** & **[Nginx](https://www.nginx.com/)** - For lightweight, high-performance production serving
*   **[Google Cloud Run](https://cloud.google.com/run)** - Serverless container execution

## 📝 License
This project is open-sourced and available for instructional and educational use.  
