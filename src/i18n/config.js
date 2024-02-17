/** @format */

import enus from "./langs/en-US/index.js";
// import assets from "./assets.js";
import enUs from '../assets/image/countrys/en-US.png';

export const tempCodes = {
  enus: "en-US",
  zhTw: "zh-TW",
};

export const countryNameMap = {
  "en-US": "English",
  "zh-TW": "中文繁體",
};

export let langsMenu = Object.keys(countryNameMap).map((key) => {
  // console.log('`assets[key]`',assets[key]);
  return {
    name: countryNameMap[key],
    langCode: key,
    img: enUs
  }
});

export const version = "v1.240201002";

export let defaultLang = tempCodes.enus;

export let superLangs = Object.values(tempCodes);

export const getSuperLangs = () => superLangs;

export const initLanguages = function (siteInfo) {
  let configInvaild = false;
  try {
    let languages = siteInfo.sitePO.language.split(',');
    langsMenu = langsMenu.filter(item => languages.includes(item.langCode));
    if (!langsMenu.length) {
      configInvaild = true;
    }
  } catch (e) {
    configInvaild = true;
  }
  if (configInvaild) {
    langsMenu = langsMenu.filter(item => item.langCode === defaultLang);
  }
  superLangs = langsMenu.map(item => item.langCode);
  if (!superLangs.includes(defaultLang)) {
    defaultLang = superLangs[0];
  }
  return superLangs;
}

export function formatLangCode(locale) {
  if (!locale) {
    return defaultLang;
  }
  if (superLangs.includes(locale)) {
    return locale;
  }
  return tempCodes[locale.toLowerCase()] || defaultLang;
}

const cacheLangKey = "cache_lang_config";

export function getLangConfig() {
  // 获取缓存中的lang数据
  let config = null;
  try {
    config = JSON.parse(localStorage.getItem(cacheLangKey));
  } catch (e) {
    console.log(e);
  }
  if (config && config.version !== version) {
    config = null;
    localStorage.removeItem(cacheLangKey);
  }
  if (
    config &&
    config.locale &&
    config.messages &&
    config.messages[config.locale]
  ) {
    return config;
  }
  return {
    locale: null,
    version,
    messages: Object.assign({}, (config && config.messages) || {}, {
      "th-TH": enus,
    }),
  };
}

export function setLangConfig(configObj) {
  localStorage.setItem(cacheLangKey, JSON.stringify(configObj));
}


export default {
  tempCodes,
  countryNameMap,
  langsMenu,
  version,
  defaultLang,
  superLangs,
  formatLangCode,
  getLangConfig,
  setLangConfig
}