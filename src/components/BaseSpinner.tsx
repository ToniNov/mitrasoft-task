import { FC } from 'react';

import { Spinner } from 'react-bootstrap';
import { SpinnerProps } from 'react-bootstrap/Spinner';

type BaseSpinnerPropsType = SpinnerProps;

export const BaseSpinner: FC<BaseSpinnerPropsType> = ({ variant }) => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: '100vh' }}
    >
      <style type="text/css">
        {`
          .custom {
            color: #01A09A!important;
          }

          .custom.spinner-border {
            color: #01A09A;
          }
        `}
      </style>
      <Spinner variant={variant} animation="grow" role="status" className="custom" />
    </div>
  );
};
