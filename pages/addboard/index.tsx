import Button from '@/components/common/Button';
import TitleText from '@/components/common/TitleText';
import React, { FormEvent, useState } from 'react';
import style from './style.module.scss';
import FormInput from '@/components/addboard/FormInput';
import FormTextarea from '@/components/addboard/FormTextarea';
import FormImage from '@/components/addboard/FormImage';
import useIsMobile from '@/hooks/useIsMobile';

const AddBoard = () => {
  const isMobile = useIsMobile();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState<File | null>(null);

  const isDisabled = !title || !content;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(title.trim());
    console.log(content.trim());
    console.log(image);

    const formData = new FormData();
    formData.append('title', title.trim());
    formData.append('content', content.trim());
    formData.append('image', JSON.stringify(image));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={style.header}>
        <TitleText title="게시글 쓰기" />
        <Button disabled={isDisabled} type="submit">
          등록
        </Button>
      </div>
      <div className={style.container}>
        <FormInput
          label="*제목"
          id="title"
          placeholder="제목을 입력해주세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <FormTextarea
          label="*내용"
          id="content"
          placeholder="내용을 입력해주세요"
          rows={isMobile ? 7 : 10}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <FormImage
          label="이미지"
          id="image"
          image={image}
          handleChange={setImage}
        />
      </div>
    </form>
  );
};

export default AddBoard;
