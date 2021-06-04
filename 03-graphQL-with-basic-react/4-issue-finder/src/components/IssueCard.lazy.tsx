import React from "react";
import { Issue } from "../graphql";
import Responses from "./Responses.lazy";

export const IssueCard = (issue: Issue) => (
  <div key={issue?.id} className="IssueCard">
    <div className="IssueCardHeader">
      <img src={issue?.author?.avatarUrl} />
      <div>
        {" "}
        <h3> {issue?.title} </h3>{" "}
      </div>
    </div>

    <div className="IssueContent">
      <h1> {issue?.title} </h1>
      <p dangerouslySetInnerHTML={{ __html: issue?.bodyHTML }} />
    </div>
    <Responses {...issue?.repository} number={issue?.number} />
  </div>
);
