import "./App.css";
import React, { useState } from "react";
import { IssueCard } from "./components/IssueCard.hybrid";
import SearchForm from "./components/SearchForm";
import { GetIssuesFullDocument, Issue, useGetIssuesFullQuery } from "./graphql";
import PaginationControls from "./components/PaginationControls";
import { useCursorPaginator, useQueryPrefetcher } from "./hooks";

type IssueFinderProps = {
  login: string;
};

const IssueFinder = ({ login }: IssueFinderProps) => {
  const { current, previous, next } = useCursorPaginator();

  const { loading, error, data } = useGetIssuesFullQuery({
    variables: {
      login,
      after: current || null,
      commentCount: 3,
    },
  });

  const pageInfo = data?.user?.issues?.pageInfo;
  const endCursor = data?.user?.issues?.pageInfo?.endCursor || null;

  // speculatively pre-load next page
  useQueryPrefetcher(GetIssuesFullDocument, {
    variables: {
      login,
      after: endCursor || null,
      commentCount: 3,
    },
  });

  if (loading) {
    return <div> Loading </div>;
  }

  if (error) {
    return <div> Error occured {error.toString()} </div>;
  }

  const issues = (data?.user?.issues?.nodes || []) as Issue[];

  const issuesList = issues.map((x: Issue) => <IssueCard key={x.id} {...x} />);
  const Controls = (
    <PaginationControls
      {...pageInfo}
      onPrevious={() => previous()}
      onNext={() => next(endCursor)}
    />
  );

  return (
    <div className="Results">
      <div className="Controls">{Controls}</div>
      <div>{issuesList}</div>
      <div className="Controls">{Controls}</div>
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
