import React from 'react';
import { IconButton32 } from 'react-cosmos-ui';

type Props = {
  onClick: () => unknown;
  filled?: boolean;
  highlighted?: boolean;
  selected?: boolean;
};

export function DarkModeButton(props: Props) {
  // TODO: Highlighted state
  return (
    <IconButton32
      icon={<MoonIcon filled={props.filled} />}
      selected={props.selected}
      title="Toggle dark mode"
      onClick={props.onClick}
    />
  );
}

function MoonIcon(props: { filled?: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
    >
      <path
        fill={props.filled ? 'currentColor' : 'none'}
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
      />
    </svg>
  );
}
