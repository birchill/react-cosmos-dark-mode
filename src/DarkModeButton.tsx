import React from 'react';
import { IconButton32 } from 'react-cosmos-ui';

type Props = {
  onClick: () => unknown;
  filled?: boolean;
  highlighted?: boolean;
  selected?: boolean;
};

export function DarkModeButton(props: Props) {
  // I tried for about an hour to do the following styling with
  // styled-components but I couldn't get it to work. I believe we need to use
  // the same instance of styled-components as the Cosmos UI package so that we
  // can extend `IconButton32` in the usual way (`styled(IconButton32)`), but
  // due to the way this module is dynamically loaded, I couldn't get that to
  // work.
  return (
    <div style={{ display: 'grid' }}>
      <div style={{ gridArea: '1 / 1 / -1 / -1' }}>
        <IconButton32
          icon={<MoonIcon filled={props.filled} />}
          selected={props.selected}
          title="Toggle dark mode"
          onClick={props.onClick}
        />
      </div>
      {props.highlighted && (
        <div
          style={{
            gridArea: '1 / 1 / -1 / -1',
            width: '6px',
            height: '3px',
            borderTopLeftRadius: '3px',
            borderTopRightRadius: '3px',
            background: '#28b486',
            alignSelf: 'end',
            justifySelf: 'center',
            boxShadow: '0 -1px 3px 1px rgba(40, 180, 134, 0.58)',
          }}
        />
      )}
    </div>
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
