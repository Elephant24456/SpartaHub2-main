import { useSelector } from "react-redux";

const Mypage = () => {
  const user = useSelector((state) => state.user.user);

  if (!user) {
    return <div>로그인하지 않았습니다.</div>;
  }

  return (
    <div>
      <h1>My Page</h1>
      <p>이메일: {user.email}</p>
      <p>사용자 ID: {user.id}</p>
      {/* 필요한 경우 추가 사용자 정보를 표시 */}
    </div>
  );
};

export default Mypage;
