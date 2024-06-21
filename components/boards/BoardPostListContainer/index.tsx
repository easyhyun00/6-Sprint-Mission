import React, { useMemo, useState } from 'react';
import BoardPost from '../BoardPost';
import { Post } from '@/types/post';
import { getArticleList } from '@/apis/board/getArticleList';
import style from './style.module.scss';
import { SortType } from '@/constants/sortOption';
import LoadingSpinner from '@/public/svgs/spinner.svg';
import { useFetch } from '@/hooks/useFetch';
import Button from '@/components/common/Button';
import { BOARD_PAGE_SIZE } from '@/constants/pageSize';

interface BoardPostListContainerProps {
  orderBy: SortType;
  keyword: string;
}

const BoardPostListContainer = ({
  orderBy,
  keyword,
}: BoardPostListContainerProps) => {
  const [pageSize, setPageSize] = useState(BOARD_PAGE_SIZE);
  const params = useMemo(
    () => ({
      orderBy,
      pageSize,
      keyword,
    }),
    [orderBy, pageSize, keyword]
  );

  const { data, isLoading, loadError } = useFetch<{
    list: Post[];
    totalCount: number;
  }>(getArticleList, params);

  if (isLoading && pageSize === BOARD_PAGE_SIZE) {
    return (
      <LoadingSpinner width={200} height={200} className={style.spinner} />
    );
  }
  if (loadError) {
    return <span>{loadError.message}</span>;
  }

  return (
    <div className={style.wrapper}>
      {data && data.list.map((post) => <BoardPost key={post.id} post={post} />)}
      {data && data.totalCount > data.list.length && (
        <div className={style.button}>
          <Button
            disabled={isLoading}
            onClick={() => setPageSize(pageSize + BOARD_PAGE_SIZE)}
          >
            더보기
          </Button>
        </div>
      )}
    </div>
  );
};

export default BoardPostListContainer;
