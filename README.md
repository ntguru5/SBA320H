# News Explorer

## Technologies Used
- **React**: For building the user interface and managing the state.
- **JavaScript (ES6+)**: Used for data fetching and handling the logic of the app.
- **CSS**: For basic styling of the app.
- **NewsAPI**: External API used to fetch news articles based on a search query.

## Approach
- The app fetches news articles from the NewsAPI based on a search query entered by the user.
- The search input is controlled using React state.
- Upon submission of the search form, the app fetches the news data and displays it in a list of articles.
- Loading and error states are handled gracefully to improve user experience.

## Live Site
[Link to live site](https://sba320h.netlify.app)

## Usage Instructions
1. Clone this repository to your local machine.
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open the app in your browser: `http://localhost:5173`

## Unsolved Problems
- Have an issue with coding the API key in .env file. Getting "process is not defined" trying to apply to variable using process.env.
- Error deploying to Netlify. Error: Requests from the browser are not allowed on the Developer plan, except from localhost.
- The app could be improved by adding pagination for the search results.
- There could be more error handling for different types of API errors (e.g., network issues).

## API Key
To use the app with the NewsAPI, sign up for a free API key [here](https://newsapi.org/).
