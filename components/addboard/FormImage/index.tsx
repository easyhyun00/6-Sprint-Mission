import React, { ChangeEvent, ComponentProps, useMemo, memo } from 'react';
import FormWrapper from '@/components/common/FormWrapper';
import style from './style.module.scss';
import PlusIcon from '@/public/svgs/plus-icon.svg';
import Image from 'next/image';
import DeleteIcon from '@/public/svgs/delete-icon.svg';

interface FormImageProps extends ComponentProps<'input'> {
  label: string;
  id: string;
  image: File | null;
  handleChange: (image: File | null) => void;
}

const FormImage = ({
  label,
  id,
  image,
  handleChange,
  ...props
}: FormImageProps) => {
  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      handleChange(file);
    }
  };

  const handleDelete = () => {
    handleChange(null);
  };

  const imageUrl = useMemo(
    () => (image ? URL.createObjectURL(image) : null),
    [image]
  );

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
        {image && imageUrl && (
          <div className={style.preview}>
            <Image
              alt="등록한 이미지"
              src={imageUrl}
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

export default memo(FormImage);
