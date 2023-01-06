import { defaultLanguage, languages } from "./i18n";

export const getTranslatedPath = (pathname, to) => {
  const currentPageLanguage = getCurrentPageLanguage(pathname);
  let languagePath = '';
  const isDefaultLanguage = defaultLanguage === currentPageLanguage;
  if (!isDefaultLanguage) {
    languagePath = '/' + currentPageLanguage
  }
  let outputPath = `${languagePath}${to}`;
  const hasTrailingSlash = outputPath.endsWith("/");
  if (!hasTrailingSlash) {
    outputPath += "/";
  }
  return outputPath;
}

export const getCurrentPageLanguage = (pathname) => {
  const pathElements = pathname.split("/");
  for (let element of pathElements) {
    for (let language of languages) {
      if (element === language) {
        return language;
      }
    }
  }
  return ''; // defatultLang ko
};
