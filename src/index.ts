export const backupQiitaListURI =
  'https://api.github.com/repos/igara/qiita-export/contents/data/igara';
export const backupHatenaListURI =
  'https://api.github.com/repos/igara/hatenablog-export/contents/data/igara1119';

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

export const backupHatenaDetailtURI = (hatenaPostTitle: string) =>
  `https://raw.githubusercontent.com/igara/hatenablog-export/master/data/igara1119/${hatenaPostTitle}/README.html`;
export const backupQiitaDetailtURI = (qiitaPostTitle: string) =>
  `https://raw.githubusercontent.com/igara/qiita-export/master/data/igara/${qiitaPostTitle}/README.html`;
