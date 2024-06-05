import Button from '@/components/common/Button';
import TitleText from '@/components/common/TitleText';
import React from 'react';
import style from './style.module.scss';
import FormInput from '@/components/addboard/FormInput';
import FormTextarea from '@/components/addboard/FormTextarea';
import FormImage from '@/components/addboard/FormImage';

const AddBoard = () => {
  return (
    <form>
      <div className={style.header}>
        <TitleText title="게시글 쓰기" />
        <Button>등록</Button>
      </div>
      <div className={style.container}>
        <FormInput label="*제목" id="title" placeholder="제목을 입력해주세요" />
        <FormTextarea
          label="*내용"
          id="content"
          placeholder="내용을 입력해주세요"
        />
        <FormImage label="이미지" id="image" />
      </div>
    </form>
  );
};

export default AddBoard;
