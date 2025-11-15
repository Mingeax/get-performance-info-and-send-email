export const matchKeywords = (keywords, text) => {
  for (const keyword of keywords) {
    if (text.includes(keyword)) return true;
  }
  return false;
};

/**
 * @description 给URL实例批量设置查询参数,柯里化. 调用时会立即设置一遍查询参数,
 *              然后返回一个更简便的函数,用于后续设置更多查询参数
 * @param {URL} URLObj URL实例
 * @param {[string, string][]} [entries=[]] 字符串键值对二元数组组成的数组
 * @returns {(entries: [string, string][]) => void} 批量设置查询字符串的方法,好处是不用传URLObj
 */
export const setURLQueries = (URLObj, entries = []) => {
  setQueries(URLObj, entries);

  return (entries) => setQueries(URLObj, entries);
};

const setQueries = (URLObj, entries = []) => {
  entries.forEach((entry) => URLObj.searchParams.set(...entry));
};
