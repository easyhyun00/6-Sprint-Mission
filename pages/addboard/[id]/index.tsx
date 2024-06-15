import React, { useState, FormEvent } from 'react';
import BoardDetail from '@/components/addboardDetail/BoardDetail';
import FormTextarea from '@/components/addboard/FormTextarea';
import Button from '@/components/common/Button';
import CommentList from '@/components/addboardDetail/CommentList';
import style from './style.module.scss';
import axios from '@/lib/axios';
import { Article } from '@/types/article';
import { ArticleCommentList } from '@/types/comment';
import { postCreateComment } from '@/apis/board/postCreateComment';

interface AddboardDetailProps {
  articleId: number;
  article: Article;
  commentList: ArticleCommentList;
}

export async function getServerSideProps(context: {
  params: { [x: string]: any };
}) {
  const articleId = context.params['id'];

  try {
    const [articleRes, commentsRes] = await Promise.all([
      axios.get(`/articles/${articleId}`),
      axios.get(`/articles/${articleId}/comments?limit=20`),
    ]);
    return {
      props: {
        articleId,
        article: articleRes.data,
        commentList: commentsRes.data,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

const AddboardDetail = ({
  articleId,
  article,
  commentList: initialCommentList,
}: AddboardDetailProps) => {
  const [commentList, setCommentList] = useState(initialCommentList);
  const [comment, setComment] = useState('');

  const isDisabled = !comment;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await postCreateComment(articleId, comment);

    setCommentList((prevCommentList) => ({
      ...prevCommentList,
      list: [res, ...prevCommentList.list],
    }));

    setComment('');
  };

  return (
    <main>
      <BoardDetail article={article} />

      <section>
        <form onSubmit={handleSubmit}>
          <FormTextarea
            label="댓글 달기"
            id="comment"
            placeholder="댓글을 입력해주세요."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={3}
          />
          <div className={style.button}>
            <Button disabled={isDisabled} type="submit">
              등록
            </Button>
          </div>
        </form>
      </section>

      <CommentList comments={commentList} />
    </main>
  );
};

export default AddboardDetail;
