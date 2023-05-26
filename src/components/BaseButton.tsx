import { FC, ReactNode } from 'react';

import { Button } from 'react-bootstrap';
import { ButtonProps } from 'react-bootstrap/Button';
import { ButtonVariant } from 'react-bootstrap/types';

type PropsType = {
  variant?: 'custom' | ButtonVariant;
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
};

type BaseButtonPropsType = ButtonProps & PropsType;

export const BaseButton: FC<BaseButtonPropsType> = ({
  variant,
  children,
  onClick,
  className,
}) => {
  return (
    <>
      <style type="text/css">
        {`
      .btn-custom {
        background-color: #01A09A;
        border-color: #01A09A;
        color: #fff;
        border-radius: 0;
      }
      .btn-custom:hover {
        color: #fff;
        background-color: #F03F37;
        border-color: #F03F37;
      }
      .btn-custom:active {
        color: #fff!important;
        background-color: #F03F37!important;
        border-color: #F03F37!important;
        opacity: 0.65!important;
      }
    `}
      </style>

      <Button className={className} onClick={onClick} variant={variant}>
        {children}
      </Button>
    </>
  );
};
