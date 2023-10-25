export const format = (
  text: string,
  ...args: Array<string | Record<string, unknown>>
) => {
  const regex = /{([^}]+)}/g;
  const argObject = Object.assign({}, ...args);
  const formattedString = text.replace(regex, (match, key) => {
    const value = argObject[key];
    return value !== undefined ? value : match;
  });

  return formattedString;
};
