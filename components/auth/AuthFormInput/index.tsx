import React, { ComponentProps, forwardRef } from 'react';
import FormWrapper from '@/components/common/FormWrapper';
import style from './style.module.scss';
import cn from 'classnames';

interface FormInputProps extends ComponentProps<'input'> {
  label: string;
  id: string;
  placeholder: string;
  error?: boolean;
}

const AuthFormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, id, placeholder, error, ...props }, ref) => {
    return (
      <FormWrapper id={id} label={label}>
        <input
          id={id}
          name={id}
          placeholder={placeholder}
          className={cn(style.input, {
            [style.error]: error,
          })}
          ref={ref}
          {...props}
        />
      </FormWrapper>
    );
  }
);

AuthFormInput.displayName = 'AuthFormInput';

export default AuthFormInput;
