/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Division,
  Inquiry,
  EmptyComment,
  Comment,
  CommentUser,
  BackButton,
} from './style';
import Button from 'components/Button';
import BackIcon from 'assets/icons/Back';
import { getProductComment } from 'api/getProductComment';
import useLoading from 'hooks/useLoading';
import EmptyLogo from 'assets/logos/empty-logo.png';
import { diffTime } from 'utils/diffTime';

const InquiryComment = ({ productId }) => {
  const { isLoading, error, handleLoad } = useLoading(getProductComment);
  const [commentList, setCommentList] = useState(null);

  const [inquiry, setInquiry] = useState('');

  const navigate = useNavigate();

  const handleChangeTextarea = (e) => {
    setInquiry(e.target.value);
  };

  const handleCommentLoad = async () => {
    const comment = await handleLoad({ productId: productId });
    if (comment) {
      setCommentList(comment.list);
    }
  };

  useEffect(() => {
    handleCommentLoad();
  }, []);

  if (isLoading || commentList === null) {
    return <h1>로딩 중</h1>;
  } else if (error) {
    return <h1>{error.message}</h1>;
  } else {
    return (
      <div>
        <Division />
        <Inquiry>
          <span>문의하기</span>
          <textarea
            onChange={handleChangeTextarea}
            value={inquiry}
            id="inquiry"
            rows={3}
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          />
          <Button title="등록" type="submit" disabled={inquiry === ''} />
        </Inquiry>
        {commentList.length === 0 ? (
          <EmptyComment>
            <img src={EmptyLogo} alt="문의 비었음" />
            <p>아직 문의가 없습니다.</p>
          </EmptyComment>
        ) : (
          <div>
            {commentList.map((comment) => (
              <Comment key={comment.id}>
                <p>{comment.content}</p>
                <CommentUser>
                  <img
                    src={comment.writer.image}
                    alt={`${comment.writer.nickname} 프로필 사진`}
                  />
                  <div>
                    <span>{comment.writer.nickname}</span>
                    <span>{diffTime(comment.updatedAt)}</span>
                  </div>
                </CommentUser>
                <Division />
              </Comment>
            ))}
          </div>
        )}
        <BackButton onClick={() => navigate('/items')}>
          목록으로 돌아가기
          <BackIcon />
        </BackButton>
      </div>
    );
  }
};

export default InquiryComment;
