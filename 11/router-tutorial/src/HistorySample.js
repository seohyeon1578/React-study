import { useNavigate } from 'react-router-dom';
//v6에서 useNavigate으로 업데이트됨

function HistorySample() {
   const navigate = useNavigate();
   const goBack = () => {
   const confirm = window.confirm('정말 떠나실건가요?')
   if (confirm) {
      navigate(-1);
    }
  };

const goHome = () => {
    navigate('/');
  }
  return (
    <div>
      <button onClick={goBack}>뒤로가기</button>
      <button onClick={goHome}>홈으로</button>
    </div>
  );
}

export default HistorySample;