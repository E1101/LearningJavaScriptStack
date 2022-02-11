import React from "react";
import moment from "moment";
import { useGetCommentsLazyQuery, IssueComment } from "../graphql";

export interface ResponsesProps {
  nameWithOwner: string;
  number: number;
}

const Responses = ({ nameWithOwner, number }: ResponsesProps) => {
  const [owner, name] = nameWithOwner.split("/");
  const [load, { data }] = useGetCommentsLazyQuery({
    variables: {
      owner,
      name,
      number,
    },
  });

  const comments = (data?.repository?.issue?.comments?.nodes ||
    []) as IssueComment[];

  const responses = comments
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

  // button that calls the load callback. And once the data is loaded we hide the button.
  return (
    <div className="ResponsesContainer">
      <div>{responses}</div>
      {data ? null : <button onClick={() => load()}> Load Comments </button>}
    </div>
  );
};

export default Responses;
