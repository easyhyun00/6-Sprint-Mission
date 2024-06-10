import React from 'react';
import Image from 'next/image';
import style from './style.module.scss';
import ProfileIcon from '@/public/svgs/profile.svg';
import HeartIcon from '@/public/svgs/heart-icon.svg';
import { dateToString } from '@/utils/dateToString';
import { Article } from '@/types/article';

interface BoardDetailProps {
  article: Article;
}

const BoardDetail = ({ article }: BoardDetailProps) => {
  return (
    <article className={style.wrapper}>
      <h2 className={style.title}>{article.title}</h2>
      <div className={style.info}>
        <ProfileIcon width={24} height={24} />
        <span>{article.writer.nickname}</span>
        <span>{dateToString(article.createdAt)}</span>
        <div className={style.division} />
        <div className={style.like}>
          <HeartIcon />
          <span>{article.likeCount}</span>
        </div>
      </div>
      <div className={style.division2} />
      <div className={style.content}>
        <span>{article.content}</span>
        {article.image && (
          <div className={style.image}>
            <Image
              alt="상품 이미지"
              src={article.image}
              width={180}
              height={180}
              priority
            />
          </div>
        )}
      </div>
    </article>
  );
};

export default BoardDetail;
