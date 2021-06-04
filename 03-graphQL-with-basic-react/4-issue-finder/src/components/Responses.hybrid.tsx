import React from "react";
import moment from "moment";
import {
  useGetCommentsLazyQuery,
  IssueComment,
  IssueCommentConnection,
} from "../graphql";

export interface ResponsesProps {
  nameWithOwner: string;
  number: number;
  comments: IssueCommentConnection;
}

const Responses = ({ nameWithOwner, number, comments }: ResponsesProps) => {
  const [owner, name] = nameWithOwner.split("/");
  const [load, { data }] = useGetCommentsLazyQuery({
    variables: {
      owner,
      name,
      number,
      after: comments.pageInfo.endCursor,
      first: 7,
    },
  });

  const nodes = ((comments.nodes || []) as IssueComment[]).concat(
    (data?.repository?.issue?.comments?.nodes || []) as IssueComment[]
  );

  const responses = nodes.map((x) => (
    <div className="Response" key={x!.id}>
      <div className="Info">
        <img src={x?.author?.avatarUrl} alt={x?.author?.login} />
      </div>
      <div className="Message">
        <div dangerouslySetInnerHTML={{ __html: x?.bodyHTML }} />
        <span> {moment(x!.updatedAt).fromNow()}</span>
      </div>
    </div>
  ));

  return (
    <div className="ResponsesContainer">
      <div>{responses}</div>
      {!comments.pageInfo.hasNextPage || data ? null : (
        <button onClick={() => load()}> Load Comments </button>
      )}
    </div>
  );
};

export default Responses;
