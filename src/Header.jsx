import './styles.css'

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <h1>
            <img src="/vite.svg" alt="로고" className="logo-img" />
        오락실 지통실
        </h1>
        <nav className="nav">
          <a href="#">홈</a>
          <a href="#">지통실</a>
          <a href="#">서비스</a>
          <a href="#">연락처</a>
        </nav>
      </div>
    </header>
  )
}

export default Header