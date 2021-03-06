export const backupQiitaListURI =
  'https://api.github.com/repos/igara/qiita-export/contents/data/igara';
export const backupHatenaListURI =
  'https://api.github.com/repos/igara/hatenablog-export/contents/data/igara1119';
export const backupZennArticleListURI =
  'https://api.github.com/repos/igara/zenn-export/contents/articles';

export type BackupHatenaList = {
  name: string;
  path: string;
  sha: string;
  size: number;
  url: string;
  html_url: string;
  git_url: string;
  download_url: string | null;
  type: string;
  _links: {
    self: string;
    git: string;
    html: string;
  };
}[];

export type BackupQiitaList = {
  name: string;
  path: string;
  sha: string;
  size: number;
  url: string;
  html_url: string;
  git_url: string;
  download_url: string | null;
  type: string;
  _links: {
    self: string;
    git: string;
    html: string;
  };
}[];

export type BackupZennArticleList = {
  name: string;
  path: string;
  sha: string;
  size: number;
  url: string;
  html_url: string;
  git_url: string;
  download_url: string | null;
  type: string;
  _links: {
    self: string;
    git: string;
    html: string;
  };
}[];

export type BackupZennArticleDetailHistory = {
  sha: string;
  node_id: string;
  commit: {
    author: {
      name: string;
      email: string;
      date: string;
    };
    committer: {
      name: string;
      email: string;
      date: string;
    };
    message: string;
    tree: {
      sha: string;
      url: string;
    };
    url: string;
    comment_count: number;
    verification: {
      verified: boolean;
      reason: string;
      signature: null;
      payload: null;
    };
  };
  url: string;
  html_url: string;
  comments_url: string;
  author: {
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
  };
  committer: {
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
  };
  parents: {
    sha: string;
    url: string;
    html_url: string;
  }[];
}[];

export const backupHatenaDetailURI = (hatenaPostTitle: string) =>
  `https://raw.githubusercontent.com/igara/hatenablog-export/master/data/igara1119/${hatenaPostTitle}/README.html`;
export const backupQiitaDetailURI = (qiitaPostTitle: string) =>
  `https://raw.githubusercontent.com/igara/qiita-export/master/data/igara/${qiitaPostTitle}/README.html`;
export const backupZennArticleDetailURI = (zennPostTitle: string) =>
  `https://raw.githubusercontent.com/igara/zenn-export/main/html/${zennPostTitle}.html`;
export const backupZennArticleDetailHistoryURI = (zennMarkdownName: string) =>
  `https://api.github.com/repos/igara/zenn-export/commits?path=/articles/${zennMarkdownName}`;

export const githubProfileURI =
  'https://raw.githubusercontent.com/igara/igara/master/README.html';
