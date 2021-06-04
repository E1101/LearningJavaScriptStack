import React, { useRef } from "react";
import { useUpdateRepoDescription } from "../queries/update-repo-description";

export const Repo = ({ repo }) => {
  const inputRef = useRef(null);
  const [update, { loading: isUpdating }] = useUpdateRepoDescription();

  const submit = () => {
    const repositoryId = repo.id;
    const description = inputRef.current.value;
    update({ variables: { repositoryId, description }});
  };

  return (
    <div key={repo.id}>
      <a href={repo.url}>{repo.nameWithOwner}</a>
      <input ref={inputRef} defaultValue={repo.description} />
      <button disabled={isUpdating} onClick={submit}>
        {" "}
        Submit{" "}
      </button>
    </div>
  );
};
