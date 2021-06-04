import React from "react";
import moment from "moment";
import { useGetCommentsQuery, IssueComment } from "../graphql";

export interface ResponsesProps {
  nameWithOwner: string;
  number: number;
}

const Responses = ({ nameWithOwner, number }: ResponsesProps) => {
  const [owner, name] = nameWithOwner.split("/");
  const { data } = useGetCommentsQuery({
    variables: {
      owner,
      name,
      number,
    },
  });

  if (!data) return null;

  const nodes = (data?.repository?.issue?.comments?.nodes ||
    []) as IssueComment[];

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
    </div>
  );
};

export default Responses;
