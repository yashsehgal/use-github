
# useGitHub - A Custom React Hook for GitHub Data

Easily fetch and manage GitHub user data and repositories in your React applications with `useGitHub`.

## 🚀 Features

- **Fetch GitHub User Information**: Access basic details about a GitHub user.
- **Retrieve Repositories**: Fetch all repositories for a user.
- **Get Pinned Repositories**: Retrieve the user's pinned repositories.
- **Filter by Language**: Filter repositories by programming language(s).
- **Top Repositories**: Fetch the top N repositories based on stars, forks, etc.

## 📦 Installation

Get started by installing the necessary dependencies:

```bash
npm install use-github-react axios
```

## 🛠️ Usage

To use the `useGitHub` hook, simply import and configure it with your GitHub username and personal access token:

```javascript
import { useGitHub } from 'use-github-react/dist/use-github';

const MyComponent = () => {
  const { userInfo, metadata, getRepositories } = useGitHub({
    username: 'your-github-username',
    personalAccessToken: 'your-github-personal-access-token',
  });

  // Utilize userInfo, metadata, or repositories here...
};
```

## 📘 API Documentation

### Hook Parameters

| Parameter             | Type   | Description                                |
|-----------------------|--------|--------------------------------------------|
| `username`            | string | The GitHub username to fetch data for.     |
| `personalAccessToken` | string | Personal access token for GitHub API. (Required for pinned repositories) |

### Returned Values

| Value            | Type     | Description                                             |
|------------------|----------|---------------------------------------------------------|
| `userInfo`       | Object   | Contains user information from GitHub.                  |
| `metadata`       | Object   | API response metadata.                                  |
| `getRepositories`| Function | Function that returns repository-related methods.        |

#### Repository Methods

The `getRepositories()` function returns an object with several useful methods:

- **`all()`**: Retrieves all repositories.
- **`withLanguage(languages)`**: Filters repositories by the specified programming languages.
- **`top(n)`**: Fetches the top N repositories.
- **`pinned()`**: Retrieves the user's pinned repositories.

## 🔥 Example

Here’s an example of how you can use the hook in a component:

```javascript
import { useGitHub } from 'use-github-react/dist/use-github';

const MyGitHubComponent = () => {
  const { userInfo, getRepositories } = useGitHub({
    username: 'octocat',
    personalAccessToken: 'your-token-here',
  });

  // Logging fetched data to the console for demonstration
  console.log(userInfo);
  console.log(getRepositories().all());
  console.log(getRepositories().withLanguage(['javascript', 'typescript']));
  console.log(getRepositories().top(5));
  console.log(getRepositories().pinned());

  // You can use this data to render your component...
};
```

## ⚙️ Prerequisites

Make sure you've installed the following packages before using the hook:

```bash
npm install use-github-react axios
```

## 🔑 Personal Access Token

To fetch pinned repositories or to make authenticated requests, you’ll need a [GitHub personal access token](https://github.com/settings/tokens). Ensure you have the necessary permissions to access repository information.

## 📝 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
