function truncate(
  str: string,
  limit: number,
  // a default parameter for the suffix is used so that the caller of
  // the function can optionally pass a custom suffix for truncated strings.
  suffix: string = '...',
): string {
  if (str.length <= limit) {
    return str;
  }

  const end = limit - suffix.length;
  const truncatedStr = str.substring(0, end);
  const strWithSuffix = `${truncatedStr}${suffix}`;

  // we use a ternary operator to add conditional logic.

  return strWithSuffix.length <= limit
    ? strWithSuffix
    : strWithSuffix.substring(0, limit);
}

export default truncate;
