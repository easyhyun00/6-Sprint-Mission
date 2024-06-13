import Button from '@/components/common/Button';
import TitleText from '@/components/common/TitleText';
import React, { FormEvent, useState, useCallback, ChangeEvent } from 'react';
import style from './style.module.scss';
import FormInput from '@/components/addboard/FormInput';
import FormTextarea from '@/components/addboard/FormTextarea';
import FormImage from '@/components/addboard/FormImage';
import useIsMobile from '@/hooks/useIsMobile';
import { postCreateImage } from '@/apis/postCreateImage';
import { postCreateArticle } from '@/apis/postCreateArticle';
import { useRouter } from 'next/router';
import { ReqArticle, Article } from '@/types/article';

const AddBoard = () => {
  const isMobile = useIsMobile();
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState<File | null>(null);

  const isDisabled = !title || !content;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const articleData: ReqArticle = {
      title: title.trim(),
      content: content.trim(),
    };

    if (image) {
      const imageUrl = await postCreateImage(image);
      articleData.image = imageUrl.url;
    }

    const newArticle: Article = await postCreateArticle(articleData);
    router.push(`/addboard/${newArticle.id}`);
  };

  const handleChangeTitle = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value),
    []
  );
  const handleChangeContent = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value),
    []
  );

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
          onChange={handleChangeTitle}
        />
        <FormTextarea
          label="*내용"
          id="content"
          placeholder="내용을 입력해주세요"
          rows={isMobile ? 7 : 10}
          value={content}
          onChange={handleChangeContent}
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
