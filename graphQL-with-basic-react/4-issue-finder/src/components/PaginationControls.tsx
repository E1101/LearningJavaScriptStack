import React from 'react';

export interface PaginationControlsProps {
  hasPreviousPage?: boolean;
  hasNextPage?: boolean;
  onPrevious?: () => void;
  onNext?: () => void;
}

const PaginationControls = ({
  hasPreviousPage = false,
  hasNextPage = false,
  onPrevious = () => {},
  onNext = () => {},
}: PaginationControlsProps) => (
  <div>
    {hasPreviousPage && (
      <button
        onClick={() => {
          onPrevious();
          window.scrollTo(0, 0);
        }}
      >
        Previous Page
      </button>
    )}
    {hasNextPage && (
      <button
        onClick={() => {
          onNext();
          window.scrollTo(0, 0);
        }}
      >
        Next Page
      </button>
    )}
  </div>
);

export default PaginationControls;
