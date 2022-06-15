import React from 'react';
import {ErrorContent, ErrorWrapper} from './errorStyles';

const Error = () => {
  return (
    <ErrorWrapper>
      <ErrorContent>
        Error 404!
        Page isn't found
      </ErrorContent>
    </ErrorWrapper>
  );
};

export default Error;
