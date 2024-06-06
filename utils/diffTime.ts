/**
 * 몇 분 or 몇 시간 or 몇 일 전에 업데이트 되었는지 반환하는 함수
 * @param updatedAt
 */
export const diffTime = (updatedAt: Date): string => {
  const updateTime = new Date(updatedAt).getTime();
  const nowTime = new Date().getTime();

  const diffSecond = nowTime - updateTime;
  const diffMinutes = diffSecond / (60 * 1000);
  const diffHour = diffMinutes / 60;

  if (diffHour < 1) {
    return `${Math.ceil(diffMinutes)}분 전`;
  } else if (diffHour < 24) {
    return `${Math.ceil(diffHour)}시간 전`;
  } else {
    return `${Math.ceil(diffHour / 24)}일 전`;
  }
};
