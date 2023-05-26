import { FC } from 'react';

import { ReactComponent as Avatar } from '../assets/avatar.svg';

type PropsType = {
  width: string;
  height: string;
};

export const BaseAvatar: FC<PropsType> = ({ width, height }) => {
  return (
    <Avatar
      width={width}
      height={height}
      style={{
        borderRadius: '50%',
        backgroundColor: '#f8f9fa',
        marginRight: '10px',
      }}
    />
  );
};
