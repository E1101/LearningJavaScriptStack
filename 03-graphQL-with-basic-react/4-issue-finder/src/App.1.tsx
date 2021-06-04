import "./App.css";
import React from "react";
import { useGetIssuesMinimalQuery } from "./graphql";

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

  return (
    <div>
      <img src={data?.user?.avatarUrl} alt={data?.user?.login} />
      <div>
        login: {data?.user?.login}
        has {data?.user?.issues?.totalCount} open issues
      </div>
    </div>
  );
};

export default () => {
  return <IssueFinder login="leebyron" />;
};
