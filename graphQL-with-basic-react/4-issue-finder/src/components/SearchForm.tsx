import React, { useRef } from 'react';

export interface SearchFormProps {
  login: string;
  setLogin: (value: string) => void;
}

const SearchForm = ({ login, setLogin }: SearchFormProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onClick = () => {
    setLogin((inputRef.current || { value: login }).value);
  };

  return (
    <div className="SearchForm">
      <label>
        Username
        <input
          type="text"
          ref={inputRef}
          defaultValue={login}
          placeholder="your login"
        />
      </label>
      <button onClick={onClick}> Search </button>
    </div>
  );
};

export default SearchForm;
