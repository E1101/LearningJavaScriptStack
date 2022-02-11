import React, { useRef } from "react";
import { useUpdateRepoDescription } from "../queries/update-repo-description";

export const Repo = ({ repo }) => {
  const inputRef = useRef(null);
  // useMutation takes a query and optional variables but unlike
  // useQuery it returns it's state and a callback that needs to
  // be called to fire the mutation query.
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
