import React, { useState } from "react";

import "./App.css";

import GetIssues from "./queries/get-issues.full";
import { useCursorPaginator, useQueryPrefetcher } from "./hooks";

import PaginationControls from "./components/PaginationControls";
import SearchForm from "./components/SearchForm";
import IssueCard from "./components/IssueCard";
import { Issue, useGetIssuesFullQuery } from "./graphql";

const App = () => {
  const [login, setLogin] = useState("leebyron");
  const { current, cursors, previous, next } = useCursorPaginator();
  const variables = {
    login,
    after: current || null,
  };
  const { loading, error, data } = useGetIssuesFullQuery({
    variables,
  });

  const pageInfo = data?.user?.issues?.pageInfo;
  const endCursor = data?.user?.issues?.pageInfo?.endCursor || null;

  const Controls = (
    <PaginationControls
      {...pageInfo}
      onPrevious={() => previous()}
      onNext={() => next(endCursor)}
    />
  );

  // speculatively pre-load next page
  useQueryPrefetcher(GetIssues, {
    variables: {
      login,
      after: endCursor || null,
    },
  });

  const Result = () => {
    if (loading) {
      return <h1>Loading</h1>;
    }

    if (error) {
      console.log(error);
      return <h1>User not found</h1>;
    }

    if (!data?.user?.issues?.totalCount) {
      return <h1>User does not have any open issues</h1>;
    }

    const nodes = (data?.user?.issues?.nodes || []).filter(Boolean) as Issue[];

    const issues = nodes.map((x) => (
      <IssueCard {...x} queryVariables={variables} key={x.url} />
    ));

    const totalCount = data?.user?.issues?.totalCount || 0;
    const count = data?.user?.issues?.nodes?.length || 0;
    const offset = cursors.length * 10;

    return (
      <div className="Results">
        <div className="Info">
          <span>
            displaying {offset} ... {offset + count} out of {totalCount} open
            issues
          </span>
          {Controls}
        </div>
        <div>{issues}</div>
        {Controls}
      </div>
    );
  };

  return (
    <>
      <div className="header">
        <h1> Issues Finder </h1>
        <SearchForm login={login} setLogin={setLogin} />
      </div>
      <Result />
    </>
  );
};

export default App;
