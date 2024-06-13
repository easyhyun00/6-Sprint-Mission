import React, { forwardRef } from 'react';
import FormWrapper from '@/components/common/FormWrapper';
import style from './style.module.scss';
import cn from 'classnames';

interface FormInputProps extends React.ComponentProps<'input'> {
  label: string;
  id: string;
  placeholder: string;
  type?: string;
  error?: boolean;
}

const AuthFormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, id, placeholder, type, error, ...props }, ref) => {
    return (
      <FormWrapper id={id} label={label}>
        <input
          id={id}
          name={id}
          placeholder={placeholder}
          className={cn(style.input, {
            [style.error]: error,
          })}
          type={type}
          ref={ref}
          {...props}
        />
      </FormWrapper>
    );
  }
);

AuthFormInput.displayName = 'AuthFormInput';

export default AuthFormInput;
