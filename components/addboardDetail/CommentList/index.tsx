import React from 'react';
import ProfileIcon from '@/public/svgs/profile.svg';
import { diffTime } from '@/utils/diffTime';
import Button from '@/components/common/Button';
import BackIcon from '@/public/svgs/back-icon.svg';
import ReplyEmpty from '@/public/svgs/reply-empty.svg';
import style from './style.module.scss';
import Link from 'next/link';

const CommentList = () => {
  const commentList = require('/public/data/comment.json');

  console.log(commentList);

  return (
    <section>
      {commentList.list.length === 0 ? (
        <div className={style.empty}>
          <ReplyEmpty />
          <p>
            아직 댓글이 없어요,
            <br /> 지금 댓글을 달아보세요!
          </p>
        </div>
      ) : (
        <div>
          {commentList.list.map((comment: any) => (
            <article key={comment.id}>
              <p className={style.comment}>{comment.content}</p>
              <div className={style.user}>
                <ProfileIcon width={32} height={32} />
                <div className={style.info}>
                  <span>{comment.writer.nickname}</span>
                  <span>{diffTime(comment.updatedAt)}</span>
                </div>
              </div>
              <div className={style.division} />
            </article>
          ))}
        </div>
      )}
      <div className={style.back}>
        <Link href={'/boards'}>
          <Button rounded>
            목록으로 돌아가기
            <BackIcon />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CommentList;
