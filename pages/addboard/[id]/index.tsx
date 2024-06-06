import React from 'react';
import BoardDetail from '@/components/addboardDetail/BoardDetail';
import FormTextarea from '@/components/addboard/FormTextarea';
import Button from '@/components/common/Button';
import CommentList from '@/components/addboardDetail/CommentList';
import style from './style.module.scss';
import axios from '@/lib/axios';
import { Article } from '@/types/article';
import { ArticleCommentList } from '@/types/comment';

interface AddboardDetailProps {
  article: Article;
  comments: ArticleCommentList;
}

export async function getServerSideProps(context: {
  params: { [x: string]: any };
}) {
  const articleId = context.params['id'];

  let article;
  try {
    const res = await axios.get(`/articles/${articleId}`);
    article = res.data;
  } catch (error) {
    return {
      notFound: true,
    };
  }

  const res = await axios.get(`/articles/${articleId}/comments?limit=10`);
  const comments = res.data;

  return {
    props: {
      article,
      comments,
    },
  };
}

const AddboardDetail = ({ article, comments }: AddboardDetailProps) => {
  return (
    <main>
      <BoardDetail article={article} />

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

      <CommentList comments={comments} />
    </main>
  );
};

export default AddboardDetail;
