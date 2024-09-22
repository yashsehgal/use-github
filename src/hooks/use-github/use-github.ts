import { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import {
  IGitHubUserInfo,
  IUseGitHubHookMetadata,
  IUseGitHubHookProps,
  IUseGitHubHookReturn,
  IGitHubRepo,
  ProgrammingLanguage,
  LanguageDistribution,
  IGetRepositories,
  RepositoryGetter,
} from './interfaces/global';

const GITHUB_REST_URL: string = 'https://api.github.com' as const;
const GITHUB_GRAPHQL_URL: string = 'https://api.github.com/graphql' as const;
const GITHUB_RAW_CONTENT_URL: string =
  'https://raw.githubusercontent.com' as const;

const useGitHub = ({
  username,
  personalAccessToken,
}: IUseGitHubHookProps): IUseGitHubHookReturn => {
  const [metadata, setMetadata] = useState<IUseGitHubHookMetadata | null>(null);
  const [userInfo, setUserInfo] = useState<IGitHubUserInfo | null>(null);
  const [repositories, setRepositories] = useState<IGitHubRepo[]>([]);
  const [pinnedRepositories, setPinnedRepositories] = useState<IGitHubRepo[]>(
    [],
  );
  const [followers, setFollowers] = useState<IGitHubUserInfo[]>([]);
  const [followings, setFollowings] = useState<IGitHubUserInfo[]>([]);
  const [profileReadmeContent, setProfileReadmeContent] = useState<
    string | null
  >(null);

  const fetchGitHubData = useCallback(async () => {
    if (!username) return null;

    try {
      const response = await axios.get(`${GITHUB_REST_URL}/users/${username}`);
      const { data, config, headers, request, status } = response;
      const newMetadata: IUseGitHubHookMetadata = {
        GITHUB_API_DATA: data,
        GITHUB_REQUEST_CONFIG: config,
        GITHUB_API_HEADERS: headers,
        GITHUB_API_REQUEST: request,
        GITHUB_API_STATUS_CODE: status,
      };
      setMetadata(newMetadata);
      return newMetadata;
    } catch (error) {
      console.error('Error while fetching GitHub user info:', error);
      return null;
    }
  }, [username]);

  const updateUserInfo = useCallback((meta: IUseGitHubHookMetadata) => {
    if (meta && meta.GITHUB_API_STATUS_CODE === 200) {
      setUserInfo(meta.GITHUB_API_DATA as IGitHubUserInfo);
    } else {
      console.error(
        'Error while fetching GitHub user info, Please check network tab for more info',
      );
      console.error(
        'Getting status code',
        meta ? meta.GITHUB_API_STATUS_CODE : 'Unknown',
      );
      setUserInfo(null);
    }
  }, []);

  const fetchRepositories = useCallback(async () => {
    if (!username) return;

    try {
      const response = await axios.get(
        `${GITHUB_REST_URL}/users/${username}/repos?per_page=100&sort=updated`,
      );
      setRepositories(
        response.data.map((repo: any) => ({
          ...repo,
          language: repo.language
            ? (repo.language.toLowerCase() as ProgrammingLanguage)
            : null,
        })),
      );
    } catch (error) {
      console.error('Error while fetching repositories:', error);
    }
  }, [username]);

  const fetchPinnedRepositories = useCallback(async () => {
    if (!username || !personalAccessToken) return;

    const query = `
      query {
        user(login: "${username}") {
          pinnedItems(first: 6, types: REPOSITORY) {
            nodes {
              ... on Repository {
                id
                name
                description
                url
                stargazerCount
                forkCount
                primaryLanguage {
                  name
                }
              }
            }
          }
        }
      }
    `;

    try {
      const response = await axios.post(
        GITHUB_GRAPHQL_URL,
        { query },
        {
          headers: {
            Authorization: `Bearer ${personalAccessToken}`,
          },
        },
      );

      const pinnedRepos = response.data.data.user.pinnedItems.nodes.map(
        (repo: any) => ({
          id: repo.id,
          name: repo.name,
          description: repo.description,
          html_url: repo.url,
          stargazers_count: repo.stargazerCount,
          forks_count: repo.forkCount,
          language: repo.primaryLanguage
            ? (repo.primaryLanguage.name.toLowerCase() as ProgrammingLanguage)
            : null,
        }),
      );

      setPinnedRepositories(pinnedRepos);
    } catch (error) {
      console.error('Error while fetching pinned repositories:', error);
    }
  }, [username, personalAccessToken]);

  const fetchFollowers = useCallback(async () => {
    if (!username) return;

    try {
      const response = await axios.get(
        `${GITHUB_REST_URL}/users/${username}/followers?per_page=100`,
      );
      const followerPromises = response.data.map((follower: { url: string }) =>
        axios.get(follower.url),
      );
      const followerResponses = await Promise.all(followerPromises);
      setFollowers(followerResponses.map((response) => response.data));
    } catch (error) {
      console.error('Error while fetching followers:', error);
    }
  }, [username]);

  const fetchFollowings = useCallback(async () => {
    if (!username) return;

    try {
      const response = await axios.get(
        `${GITHUB_REST_URL}/users/${username}/following?per_page=100`,
      );
      const followingPromises = response.data.map(
        (following: { url: string }) => axios.get(following.url),
      );
      const followingResponses = await Promise.all(followingPromises);
      setFollowings(followingResponses.map((response) => response.data));
    } catch (error) {
      console.error('Error while fetching followings:', error);
    }
  }, [username]);

  const fetchProfileReadme = useCallback(async () => {
    if (!username) return;

    try {
      const response = await axios.get(
        `${GITHUB_RAW_CONTENT_URL}/${username}/${username}/main/README.md`,
      );
      setProfileReadmeContent(response.data);
    } catch (error) {
      console.error('Error while fetching profile README:', error);
      setProfileReadmeContent(null);
    }
  }, [username]);

  useEffect(() => {
    fetchGitHubData().then((meta) => {
      if (meta) {
        updateUserInfo(meta);
      }
    });
    fetchRepositories();
    fetchPinnedRepositories();
    fetchFollowers();
    fetchFollowings();
    fetchProfileReadme();
  }, [
    fetchGitHubData,
    updateUserInfo,
    fetchRepositories,
    fetchPinnedRepositories,
    fetchFollowers,
    fetchFollowings,
    fetchProfileReadme,
  ]);

  const calculateLanguageDistribution = (
    repos: IGitHubRepo[],
  ): LanguageDistribution[] => {
    const languageCounts: { [key in ProgrammingLanguage]?: number } = {};
    let totalCount = 0;

    repos.forEach((repo) => {
      if (repo.language) {
        languageCounts[repo.language] =
          (languageCounts[repo.language] || 0) + 1;
        totalCount++;
      }
    });

    return Object.entries(languageCounts).map(([language, count]) => ({
      language: language as ProgrammingLanguage,
      percentage: count! / totalCount,
    }));
  };

  const getRepositories = useCallback((): IGetRepositories => {
    const createRepositoryGetter = (
      repoGetter: () => IGitHubRepo[],
    ): RepositoryGetter => {
      const getter = repoGetter as RepositoryGetter;
      getter.languageDistribution = () =>
        calculateLanguageDistribution(repoGetter());
      return getter;
    };

    return {
      all: createRepositoryGetter(() => repositories),
      withLanguage: (languages: ProgrammingLanguage[]) =>
        createRepositoryGetter(() =>
          repositories.filter(
            (repo) => repo.language && languages.includes(repo.language),
          ),
        ),
      top: (n: number) =>
        createRepositoryGetter(() => repositories.slice(0, n)),
      pinned: createRepositoryGetter(() => pinnedRepositories),
    };
  }, [repositories, pinnedRepositories]);

  const getFollowers = useCallback(() => followers, [followers]);
  const getFollowings = useCallback(() => followings, [followings]);
  const profileReadme = useCallback(
    () => profileReadmeContent,
    [profileReadmeContent],
  );

  return {
    userInfo: userInfo
      ? {
          ...userInfo,
          getFollowers,
          getFollowings,
          profileReadme,
        }
      : null,
    metadata,
    getRepositories,
  };
};

export { useGitHub };
