import React, { ChangeEvent, ComponentProps, useState } from 'react';
import FormWrapper from '@/components/common/FormWrapper';
import style from './style.module.scss';
import PlusIcon from '@/public/svgs/plus-icon.svg';
import Image from 'next/image';
import DeleteIcon from '@/public/svgs/delete-icon.svg';

interface FormImageProps extends ComponentProps<'input'> {
  label: string;
  id: string;
}

const FormImage = ({ label, id, ...props }: FormImageProps) => {
  const [imagePreview, setImagePreview] = useState('');

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleDelete = () => {
    setImagePreview('');
  };

  return (
    <FormWrapper id={id} label={label}>
      <input
        className={style.hidden}
        id={id}
        name={id}
        type="file"
        accept=".png, .jpg, .jpeg"
        onChange={handleImage}
        {...props}
      />
      <div className={style.input}>
        <label className={style.add} htmlFor={id}>
          <PlusIcon />
          이미지 등록
        </label>
        {imagePreview && (
          <div className={style.preview}>
            <Image
              alt="등록한 이미지"
              src={imagePreview}
              style={{ objectFit: 'cover', borderRadius: '12px' }}
              fill
            />
            <DeleteIcon className={style.delete} onClick={handleDelete} />
          </div>
        )}
      </div>
    </FormWrapper>
  );
};

export default FormImage;
