import React from 'react';
import { IconButton32 } from 'react-cosmos-ui';

type Props = {
  onClick: () => unknown;
};

export function DarkModeButton({ onClick }: Props) {
  return (
    <IconButton32
      icon={<MoonIcon />}
      title="Toggle dark mode"
      onClick={onClick}
    />
  );
}

function MoonIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
      />
    </svg>
  );
}
