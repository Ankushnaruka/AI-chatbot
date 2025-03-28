# AI Chatbot Project

This is a simple AI chatbot application built using Node.js, Express, and Google Generative AI. The chatbot provides responses to user queries using the Gemini model.

## Project Structure

```
.env
.gitignore
app.js
package.json
frontend/
    index.html
    script.js
    styles.css
```

### Files and Directories

- **`app.js`**: The main server file that handles API requests and integrates with Google Generative AI.
- **`frontend/`**: Contains the HTML, CSS, and JavaScript files for the chatbot's user interface.
  - **`index.html`**: The main HTML file for the chatbot interface.
  - **`script.js`**: Handles user interactions and communicates with the backend.
  - **`styles.css`**: Styles for the chatbot interface.
- **`.env`**: Stores environment variables, such as the API key.
- **`.gitignore`**: Specifies files and directories to be ignored by Git.
- **`package.json`**: Contains project metadata and dependencies.

## Features

- User-friendly chatbot interface.
- Uses Google Generative AI's Gemini model for generating responses.
- Markdown support for chatbot responses using the `marked` library.

## Prerequisites

- Node.js installed on your system.
- A valid Google Generative AI API key.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd project_3_chatbot
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your API key:
   ```
   GEMINI_API_KEY=your_api_key_here
   ```

4. Start the server:
   ```bash
   node app.js
   ```

5. Open your browser and navigate to `http://localhost:3000`.

## Usage

1. Type your message in the input box.
2. Click the "Send" button or press Enter.
3. The chatbot will respond with an AI-generated reply.

## Dependencies

- [Express](https://www.npmjs.com/package/express): Web framework for Node.js.
- [dotenv](https://www.npmjs.com/package/dotenv): Loads environment variables from a `.env` file.
- [@google/generative-ai](https://www.npmjs.com/package/@google/generative-ai): Google Generative AI SDK.
- [marked](https://www.npmjs.com/package/marked): Parses Markdown content.

## License

This project is licensed under the ISC License.

## Acknowledgments

- Google Generative AI for providing the Gemini model.
- The `marked` library for Markdown rendering.
