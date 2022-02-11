// Tracking our cursorState (pagination)
//
import './App.css';
import React, { useState } from 'react';
import { IssueCard } from './components/IssueCard.simple';
import SearchForm from './components/SearchForm';
import { Issue, useGetIssuesMinimalWithPaginationQuery } from './graphql';
import PaginationControls from './components/PaginationControls';

type IssueFinderProps = {
  login: string;
};

type CursorState = {
  before?: string | null;
  after?: string | null;
};

const IssueFinder = (props: IssueFinderProps) => {
  const { login } = props;
  const [cursorState, setCursor] = useState<CursorState>({});
  const { data, loading, error } = useGetIssuesMinimalWithPaginationQuery({
    variables: {
      login,
      ...cursorState,
    },
  });

  if (loading) {
    return <div> Loading </div>;
  }

  if (error) {
    return <div> Error occurred {error.toString()} </div>;
  }

  const pageInfo = data?.user?.issues?.pageInfo;
  const issues = (data?.user?.issues?.nodes || []) as Issue[];

  const onPrevious = () => setCursor({ before: pageInfo?.startCursor });
  const onNext = () => setCursor({ after: pageInfo?.endCursor });

  const issuesList = issues.map((x: Issue) => <IssueCard key={x.id} {...x} />);
  const Controls = (
    <PaginationControls {...pageInfo} onPrevious={onPrevious} onNext={onNext} />
  );

  return (
    <div className="Results">
      <div>{issuesList}</div>
      {Controls}
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
