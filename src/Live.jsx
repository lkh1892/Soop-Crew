import './styles.css'

function Live() {
  return (
    <main className="main-content">
      <h2>메인 콘텐츠 영역</h2>
      <p>여기에 내용을 추가하세요!</p>
      
      <div className="card-grid">
        <div className="card">
          <h3>카드 1</h3>
          <p>첫 번째 카드입니다.</p>
        </div>
        
        <div className="card">
          <h3>카드 2</h3>
          <p>두 번째 카드입니다.</p>
        </div>
        
        <div className="card">
          <h3>카드 3</h3>
          <p>세 번째 카드입니다.</p>
        </div>
      </div>
    </main>
  )
}

export default Live