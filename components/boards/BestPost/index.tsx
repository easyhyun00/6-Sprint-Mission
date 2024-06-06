import React from 'react';
import { Post } from '@/types/post';
import Image from 'next/image';
import style from './style.module.scss';
import { dateToString } from '@/utils/dateToString';
import HeartIcon from '@/public/svgs/heart-icon.svg';
import BestBadge from '@/public/svgs/best_badge.svg';
import Link from 'next/link';

interface BestPostProps {
  post: Post;
}

const BestPost = ({ post }: BestPostProps) => {
  return (
    <article className={style.container}>
      <Link href={`/addboard/${post.id}`}>
        <BestBadge width="102" height="30" />
        <div className={style.top_info}>
          <h3>{post.title}</h3>
          {post.image && (
            <div className={style.image}>
              <Image
                src={post.image}
                alt="게시물 이미지"
                width="48"
                height="45"
              />
            </div>
          )}
        </div>
        <div className={style.bottom_info}>
          <div className={style.bottom_left}>
            <span>{post.writer.nickname}</span>
            <HeartIcon />
            <span>{post.likeCount}</span>
          </div>
          <span>{dateToString(post.createdAt)}</span>
        </div>
      </Link>
    </article>
  );
};

export default BestPost;
