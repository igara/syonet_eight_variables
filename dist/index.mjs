// src/index.ts
var backupQiitaListURI = "https://api.github.com/repos/igara/qiita-export/contents/data/igara";
var backupHatenaListURI = "https://api.github.com/repos/igara/hatenablog-export/contents/data/igara1119";
var backupHatenaDetailURI = (hatenaPostTitle) => `https://raw.githubusercontent.com/igara/hatenablog-export/master/data/igara1119/${hatenaPostTitle}/README.html`;
var backupQiitaDetailURI = (qiitaPostTitle) => `https://raw.githubusercontent.com/igara/qiita-export/master/data/igara/${qiitaPostTitle}/README.html`;
export {
  backupHatenaDetailURI,
  backupHatenaListURI,
  backupQiitaDetailURI,
  backupQiitaListURI
};
