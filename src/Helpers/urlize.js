export const urlize = (str, urls) => {
  Object.keys(urls).forEach((key) => {
    const strPiece = urls[key];

    str = str.replace(strPiece.find, strPiece.replace);
  });

  return str;
};
