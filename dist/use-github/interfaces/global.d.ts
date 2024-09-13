export type ProgrammingLanguage = 'javascript' | 'typescript' | 'python' | 'java' | 'c' | 'c++' | 'c#' | 'ruby' | 'go' | 'rust' | 'swift' | 'kotlin' | 'php' | 'html' | 'css' | 'shell' | 'powershell' | 'scala' | 'r' | 'dart' | 'lua' | 'perl' | 'haskell' | 'julia' | 'elixir' | 'clojure' | 'erlang' | 'f#' | 'ocaml' | 'groovy' | 'matlab' | 'assembly' | 'visual basic' | 'objective-c' | 'fortran' | 'lisp' | 'prolog' | 'scheme' | 'cobol' | 'delphi' | 'pascal' | 'ada' | 'sql' | 'pl/sql' | 't-sql' | 'bash' | 'tcl' | 'verilog' | 'vhdl' | 'smalltalk' | 'elm' | 'coffeescript' | 'vba' | 'apex';
export interface IUseGitHubHookProps {
    username: string;
    personalAccessToken?: string;
}
export interface LanguageDistribution {
    language: ProgrammingLanguage;
    percentage: number;
}
export type RepositoryGetter = {
    (): IGitHubRepo[];
    languageDistribution: () => LanguageDistribution[];
};
export interface IGetRepositories {
    all: RepositoryGetter;
    withLanguage: (languages: ProgrammingLanguage[]) => RepositoryGetter;
    top: (n: number) => RepositoryGetter;
    pinned: RepositoryGetter;
}
export interface IUseGitHubHookReturn {
    userInfo: IGitHubUserInfo | null;
    metadata: IUseGitHubHookMetadata | null;
    getRepositories: () => IGetRepositories;
}
export interface IUseGitHubHookMetadata {
    GITHUB_API_DATA: any;
    GITHUB_REQUEST_CONFIG: any;
    GITHUB_API_HEADERS: any;
    GITHUB_API_REQUEST: any;
    GITHUB_API_STATUS_CODE: number;
}
export interface IGitHubUserInfo {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    name: string | null;
    company: string | null;
    blog: string | null;
    location: string | null;
    email: string | null;
    hireable: boolean | null;
    bio: string | null;
    twitter_username: string | null;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: string;
    updated_at: string;
}
export interface IGitHubRepo {
    id: number;
    node_id: string;
    name: string;
    full_name: string;
    private: boolean;
    owner: {
        login: string;
        id: number;
        avatar_url: string;
        url: string;
        html_url: string;
    };
    html_url: string;
    description: string | null;
    fork: boolean;
    url: string;
    created_at: string;
    updated_at: string;
    pushed_at: string;
    homepage: string | null;
    size: number;
    stargazers_count: number;
    watchers_count: number;
    language: ProgrammingLanguage | null;
    forks_count: number;
    open_issues_count: number;
    license: {
        key: string;
        name: string;
        url: string;
    } | null;
    topics: string[];
    visibility: string;
    default_branch: string;
}
