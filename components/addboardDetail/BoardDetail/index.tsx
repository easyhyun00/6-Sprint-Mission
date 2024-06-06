import React from 'react';
import Image from 'next/image';
import style from './style.module.scss';
import ProfileIcon from '@/public/svgs/profile.svg';
import HeartIcon from '@/public/svgs/heart-icon.svg';
import { dateToString } from '@/utils/dateToString';

const BoardDetail = () => {
  const board = require('/public/data/board.json');

  console.log(board);

  return (
    <article className={style.wrapper}>
      <h2 className={style.title}>{board.title}</h2>
      <div className={style.info}>
        <ProfileIcon width={24} height={24} />
        <span>{board.writer.nickname}</span>
        <span>{dateToString(board.createdAt)}</span>
        <div className={style.division} />
        <div className={style.like}>
          <HeartIcon />
          <span>{board.likeCount}</span>
        </div>
      </div>
      <div className={style.division2} />
      <div className={style.content}>
        <span>{board.content}</span>
        {board.image && (
          <div className={style.image}>
            <Image
              alt="상품 이미지"
              src={board.image}
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
