import { FC } from 'react';

import { ProgressBar } from 'react-bootstrap';
import { ProgressBarProps } from 'react-bootstrap/ProgressBar';

type PropsType = {
  variant?: 'custom' | 'success' | 'danger' | 'warning' | 'info' | string;
};

type BaseLineSpinnerPropsType = ProgressBarProps & PropsType;

export const BaseLineSpinner: FC<BaseLineSpinnerPropsType> = ({ variant }) => {
  return (
    <>
      <style type="text/css">
        {`
      .bg-custom {
        background-color: #01A09A!important;
        width: '100%'
      }
    `}
      </style>
      <ProgressBar animated now={100} variant={variant} />
    </>
  );
};
