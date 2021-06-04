import React from "react";
import moment from "moment";
import update from "lodash.update";
import {
  IssueCommentConnection,
  useGetCommentsQuery,
  IssueComment,
  GetCommentsQuery,
} from "../graphql";

const mergeComments = (
  prev: GetCommentsQuery,
  next: GetCommentsQuery | undefined
): GetCommentsQuery => {
  if (!next) return prev;
  return update(next, "repository.issue.comments.nodes", (nodes: Array<{}>) => [
    ...(prev?.repository?.issue?.comments?.nodes || []),
    ...nodes,
  ]);
};
export interface ResponsesProps {
  owner: string;
  name: string;
  number: number;
  comments: IssueCommentConnection;
}

const Responses = ({ owner, name, number, comments }: ResponsesProps) => {
  const endCursor = comments.pageInfo.endCursor || null;
  const { data, fetchMore } = useGetCommentsQuery({
    variables: {
      owner,
      name,
      number,
      after: endCursor,
      first: 5,
    },
  });

  if (!data) return null;

  const hasNextPage = data?.repository?.issue?.comments?.pageInfo?.hasNextPage;

  const loadMore = () => {
    const nextEndCursor =
      data?.repository?.issue?.comments?.pageInfo?.endCursor;
    console.log(endCursor, nextEndCursor);
    fetchMore({
      variables: {
        after: nextEndCursor,
        first: 5,
      },
      updateQuery: (
        prev: GetCommentsQuery | undefined,
        {
          fetchMoreResult: next,
        }: { fetchMoreResult?: GetCommentsQuery | undefined }
      ): GetCommentsQuery => mergeComments(prev || data, next),
    });
  };

  const responses = (comments!.nodes || [])
    .concat((data?.repository?.issue?.comments?.nodes || []) as IssueComment[])
    .map((x, id) => (
      <div className="Response" key={id}>
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
      {hasNextPage && (
        <div className="Controls">
          <button onClick={loadMore}>Load More</button>
        </div>
      )}
    </div>
  );
};

export default Responses;
