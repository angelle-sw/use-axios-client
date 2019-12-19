import React from 'react';
import { Button } from '@chakra-ui/core';

interface Props {
  children: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  outline?: boolean;
}

export default ({ children, loading, disabled, onClick, outline = false }: Props) => (
  <Button
    variantColor="teal"
    size="md"
    marginRight="5px"
    isLoading={loading}
    isDisabled={disabled}
    onClick={onClick}
    variant={outline ? 'outline' : 'solid'}
  >
    {children}
  </Button>
);
