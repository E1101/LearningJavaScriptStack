import "./App.css";
import React, { useState } from "react";
import { IssueCard } from "./components/IssueCard.simple";
import SearchForm from "./components/SearchForm";
import { Issue, useGetIssuesMinimalQuery } from "./graphql";

type IssueFinderProps = {
  login: string;
};

const IssueFinder = (props: IssueFinderProps) => {
  const { login } = props;
  const { data, loading, error } = useGetIssuesMinimalQuery({
    variables: {
      login,
    },
  });

  if (loading) {
    return <div> Loading </div>;
  }

  if (error) {
    return <div> Error occurred {error.toString()} </div>;
  }

  const issues = (data?.user?.issues?.nodes || []) as Issue[];

  const issuesList = issues.map((x: Issue) => <IssueCard key={x.id} {...x} />);

  return (
    <div className="Results">
      <div>{issuesList}</div>
    </div>
  );
};

export default () => {
  const [login, setLogin] = useState("leebyron");
  return (
    <>
      <div className="header">
        <h1> Issues Finder </h1>
        <SearchForm login={login} setLogin={setLogin} />
      </div>
      <IssueFinder login={login} />
    </>
  );
};
