import React from "react";
import moment from "moment";
import { IssueComment, IssueCommentConnection } from "../graphql";

export interface ResponsesProps {
  comments: IssueCommentConnection;
}
// a small component for showing comments directly embed it into the IssueCard component.
const Responses = ({ comments }: ResponsesProps) => {
  const nodes = (comments?.nodes || []) as IssueComment[];

  const responses = nodes
    .filter((x) => x)
    .map((x) => (
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
    </div>
  );
};

export default Responses;
