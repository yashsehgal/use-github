# useGitHub Hook

`useGitHub` is a custom React hook that provides an easy way to fetch and manage GitHub user data and repositories in your React applications.

## Features

- Fetch GitHub user information
- Retrieve user's repositories
- Get user's pinned repositories
- Filter repositories by programming language
- Get top N repositories

## Installation

```bash
npm install use-github-react axios
```

## Usage

```javascript
import { useGitHub } from 'use-github-react/dist/use-github';

const MyComponent = () => {
  const { userInfo, metadata, getRepositories } = useGitHub({
    username: 'your-github-username',
    personalAccessToken: 'your-github-personal-access-token',
  });

  // Use the hook's returned data and functions
  // ...
};
```

## API

### Hook Parameters

- `username`: GitHub username
- `personalAccessToken`: GitHub personal access token (required for fetching pinned repositories)

### Return Values

- `userInfo`: Object containing user information
- `metadata`: Object containing API response metadata
- `getRepositories`: Function to access and filter repositories

#### `getRepositories()`

Returns an object with the following methods:

- `all()`: Returns all repositories
- `withLanguage(languages)`: Filters repositories by programming language(s)
- `top(n)`: Returns top N repositories
- `pinned()`: Returns pinned repositories

## Example

```javascript
import { useGitHub } from 'use-github-react/dist/use-github';

const MyGitHubComponent = () => {
  const { userInfo, getRepositories } = useGitHub({
    username: 'octocat',
    personalAccessToken: 'your-token-here',
  });

  console.log(userInfo);
  console.log(getRepositories().all());
  console.log(getRepositories().withLanguage(['javascript', 'typescript']));
  console.log(getRepositories().top(5));
  console.log(getRepositories().pinned());

  // Render your component using the data...
};
```

## Note

This hook requires the `axios` library. Make sure to install both `use-github-react` and `axios` before using the hook.

## License

[MIT License](https://opensource.org/licenses/MIT)
