import React from 'react';
import BoardDetail from '@/components/addboardDetail/BoardDetail';
import FormTextarea from '@/components/addboard/FormTextarea';
import Button from '@/components/common/Button';
import CommentList from '@/components/addboardDetail/CommentList';
import style from './style.module.scss';

const AddboardDetail = () => {
  return (
    <main>
      <BoardDetail />

      <section>
        <form>
          <FormTextarea
            label="댓글 달기"
            id="comment"
            placeholder="댓글을 입력해주세요."
            rows={3}
          />
          <div className={style.button}>
            <Button>등록</Button>
          </div>
        </form>
      </section>

      <CommentList />
    </main>
  );
};

export default AddboardDetail;
