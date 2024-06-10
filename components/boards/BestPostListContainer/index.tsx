import React, { useMemo } from 'react';
import { Post } from '@/types/post';
import BestPost from '../BestPost';
import style from './style.module.scss';
import { getArticleList } from '@/apis/getArticleList';
import useItemsCountOnWindowSize from '@/hooks/useItemsCountOnWindowSize';
import { useFetch } from '@/hooks/useFetch';
import LoadingSpinner from '@/public/svgs/spinner.svg';
import Link from 'next/link';

const BestPostListContainer = () => {
  const pageSize = useItemsCountOnWindowSize({
    desktop: 3,
    tablet: 2,
    mobile: 1,
  });

  const params = useMemo(
    () => ({
      pageSize,
    }),
    [pageSize]
  );

  const { data, isLoading, loadError } = useFetch<{ list: Post[] }>(
    getArticleList,
    params
  );

  if (isLoading) {
    return <LoadingSpinner className={style.spinner} />;
  }
  if (loadError) {
    return <span>{loadError.message}</span>;
  }

  return (
    <div className={style.wrapper}>
      {data && data.list.map((post) => <BestPost key={post.id} post={post} />)}
    </div>
  );
};

export default BestPostListContainer;
