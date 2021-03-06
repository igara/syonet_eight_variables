// src/index.ts
var backupQiitaListURI = "https://api.github.com/repos/igara/qiita-export/contents/data/igara";
var backupHatenaListURI = "https://api.github.com/repos/igara/hatenablog-export/contents/data/igara1119";
var backupZennArticleListURI = "https://api.github.com/repos/igara/zenn-export/contents/articles";
var backupHatenaDetailURI = (hatenaPostTitle) => `https://raw.githubusercontent.com/igara/hatenablog-export/master/data/igara1119/${hatenaPostTitle}/README.html`;
var backupQiitaDetailURI = (qiitaPostTitle) => `https://raw.githubusercontent.com/igara/qiita-export/master/data/igara/${qiitaPostTitle}/README.html`;
var backupZennArticleDetailURI = (zennPostTitle) => `https://raw.githubusercontent.com/igara/zenn-export/main/html/${zennPostTitle}.html`;
var backupZennArticleDetailHistoryURI = (zennMarkdownName) => `https://api.github.com/repos/igara/zenn-export/commits?path=/articles/${zennMarkdownName}`;
var githubProfileURI = "https://raw.githubusercontent.com/igara/igara/master/README.html";
export {
  backupHatenaDetailURI,
  backupHatenaListURI,
  backupQiitaDetailURI,
  backupQiitaListURI,
  backupZennArticleDetailHistoryURI,
  backupZennArticleDetailURI,
  backupZennArticleListURI,
  githubProfileURI
};
