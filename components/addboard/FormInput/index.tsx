import React, { ComponentProps } from 'react';
import FormWrapper from '@/components/common/FormWrapper';
import style from './style.module.scss';

interface FormInputProps extends ComponentProps<'input'> {
  label: string;
  id: string;
  placeholder: string;
}

const FormInput = ({ label, id, placeholder, ...props }: FormInputProps) => {
  return (
    <FormWrapper id={id} label={label}>
      <input
        id={id}
        name={id}
        placeholder={placeholder}
        className={style.input}
        {...props}
      />
    </FormWrapper>
  );
};

export default FormInput;
