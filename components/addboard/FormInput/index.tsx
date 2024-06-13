import React, { ComponentProps, memo } from 'react';
import FormWrapper from '@/components/common/FormWrapper';
import style from './style.module.scss';

interface FormInputProps extends ComponentProps<'input'> {
  label: string;
  id: string;
  placeholder: string;
  type?: string;
}

const FormInput = ({
  label,
  id,
  placeholder,
  type,
  ...props
}: FormInputProps) => {
  return (
    <FormWrapper id={id} label={label}>
      <input
        id={id}
        name={id}
        placeholder={placeholder}
        className={style.input}
        type={type}
        {...props}
      />
    </FormWrapper>
  );
};

export default memo(FormInput);
