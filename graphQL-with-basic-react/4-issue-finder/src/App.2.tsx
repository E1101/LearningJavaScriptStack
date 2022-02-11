import './App.css';
import React from 'react';
import { IssueCard } from './components/IssueCard.simple';
import { Issue, useGetIssuesMinimalQuery } from './graphql';

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
    <div>
      <div className="Results">{issuesList}</div>
    </div>
  );
};

export default () => {
  return <IssueFinder login="leebyron" />;
};
