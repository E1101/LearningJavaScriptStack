interface Summary {
  // The intention of the prefix parameter is to let the user pass
  // an optional prefix string that will be prepended to each line
  // of the output string. This will come in handy when we have
  // summaries within summaries as we can use prefix strings to
  // indent nested summaries
  getSummary(prefix?: string): string;
}

export default Summary;
