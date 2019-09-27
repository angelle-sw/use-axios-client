import React from 'react';
import { Input } from '@chakra-ui/core';

interface Props {
  id?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default ({ id, value, onChange }: Props) => (
  <Input placeholder="search" size="lg" id={id} value={value} onChange={onChange} />
);
