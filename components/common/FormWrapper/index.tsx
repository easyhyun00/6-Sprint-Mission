import React, { ReactNode } from 'react';
import style from './style.module.scss';

interface FormWrapperProps {
  label: string;
  id: string;
  children: ReactNode;
}

const FormWrapper = ({ label, id, children }: FormWrapperProps) => {
  return (
    <section className={style.wrapper}>
      <label htmlFor={id} className={style.title}>
        {label}
      </label>
      {children}
    </section>
  );
};

export default FormWrapper;
