import React, { useState } from "react";
import moment from "moment";
import ActionForm from "./ActionForm";
import Responses from "./Responses";
import update from "lodash.update";
import {
  useCloseIssueMutation,
  useReopenIssueMutation,
  useAddCommentMutation,
  Issue,
  IssueState,
  GetIssuesFullDocument,
  GetIssuesFullQuery,
} from "../graphql";

export type IssueProps = Issue & { queryVariables: {} };

const IssueCard = (props: IssueProps) => {
  const [isWriting, setIsWriting] = useState(false);

  const {
    id,
    state,
    author,
    title,
    repository,
    number,
    bodyHTML,
    updatedAt,
    participants,
    comments,
    url,
    queryVariables,
  } = props;

  const variables = {
    issueId: id,
  };

  const [owner, name] = repository.nameWithOwner.split("/");

  const [closeIssue, { loading: isClosing }] = useCloseIssueMutation({
    variables,
  });

  const [reopenIssue, { loading: isReopening }] = useReopenIssueMutation({
    variables,
  });

  const [addComment, { loading: isAddingComment }] = useAddCommentMutation({
    update: (cache, result) => {
      const data = cache.readQuery<GetIssuesFullQuery>({
        query: GetIssuesFullDocument,
        variables: queryVariables,
      });

      if (!data?.user?.issues?.nodes?.length) {
        return;
      }

      const index = (data?.user?.issues?.nodes || []).findIndex(
        (x) => x?.id === id
      );
      const updated = update(
        data as {},
        `user.issues.nodes.${index}.comments.nodes`,
        (comments) => [result?.data?.addComment?.commentEdge?.node, ...comments]
      );

      cache.writeQuery({
        query: GetIssuesFullDocument,
        variables: queryVariables,
        data: updated,
      });
    },
  });

  const onSubmit = (body: string) => {
    addComment({
      variables: {
        issueId: id,
        body,
      },
    });
  };

  if (props.__typename !== "Issue") return null;

  const isOpen = state === IssueState.Open;
  const isClosed = state === IssueState.Closed;
  const isChangingState = isClosing || isReopening;

  return (
    <div className="IssueCard">
      <div className="IssueCardHeader">
        <img src={author?.avatarUrl} alt={author?.login} />
        <div>
          <h3>{title}</h3>
          <div>
            <a href={url}> {repository!.nameWithOwner}</a>
            <span> {moment(updatedAt).fromNow()} </span>
            <span> &#128101; {participants.totalCount}</span>
            <span> &#128172; {comments.totalCount}</span>
          </div>
          <div>
            {isOpen && (
              <button disabled={isChangingState} onClick={() => closeIssue()}>
                Close Issue
              </button>
            )}

            {isClosed && (
              <button disabled={isChangingState} onClick={() => reopenIssue()}>
                Reopen Issue
              </button>
            )}

            <button onClick={() => setIsWriting(!isWriting)}>
              {!isWriting ? "Write Comment" : "Hide Form"}
            </button>
          </div>
        </div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: bodyHTML }} />
      <ActionForm
        show={isWriting}
        onSubmit={onSubmit}
        isLoading={isAddingComment}
      />
      <Responses
        owner={owner}
        name={name}
        number={number}
        comments={comments}
      />
    </div>
  );
};

export default IssueCard;
