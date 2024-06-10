import React, { ComponentProps, memo } from 'react';
import FormWrapper from '@/components/common/FormWrapper';
import style from './style.module.scss';

interface FormTextareaProps extends ComponentProps<'textarea'> {
  label: string;
  id: string;
  placeholder: string;
}

const FormTextarea = ({
  label,
  id,
  placeholder,
  ...props
}: FormTextareaProps) => {
  return (
    <FormWrapper id={id} label={label}>
      <textarea
        id={id}
        name={id}
        placeholder={placeholder}
        className={style.textarea}
        {...props}
      />
    </FormWrapper>
  );
};

export default memo(FormTextarea);
