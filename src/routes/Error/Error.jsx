import React from 'react';
import {ErrorContent, ErrorWrapper} from './errorStyles';

const Error = () => {
  return (
    <ErrorWrapper>
      <ErrorContent>
        Error 404!
        This page is being prepared
      </ErrorContent>
    </ErrorWrapper>
  );
};

export default Error;
