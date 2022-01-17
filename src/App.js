import logo from './logo.svg';
import './App.css';
function App() {
  return (
    <body id="insta">
      <div className="insta-border">
        <div className="fixed-top">
          <div className="top">
            <div className="top__column">
              <span className="top__column-text">2:22</span>
              <i className="fas fa-location-arrow fa-xs" />
            </div>
            <div className="top__column">
              <i className="fas fa-signal fa-xs" />
              <i className="fas fa-wifi fa-xs" />
              <i className="fas fa-battery-three-quarters fa-xs" />
            </div>
          </div>
          {/* top */}
          <div className="header">
            <div className="header__column">
              <i className="fas fa-lock fa-xs" />
              <span className="header__column-text">j__chobi</span>
              <i className="fas fa-chevron-down fa-xs" />
            </div>
            <div className="header__icons">
              <div className="header__column">
                <i className="far fa-plus-square fa-lg" />
                <i className="fas fa-bars" />
              </div>
            </div>
          </div>
        </div>
        <div className="profile">
          <div className="profile-picture">
            <img src="sd.jpg" />
            <div className="cross">
            <i className="fas fa-plus fa-xs"></i>
            </div>
          </div>
            <ul className='profile-items'>
              <li>
              <p>204</p>
                <p>게시물</p>

              </li>
              <li>
              <p>178</p>
                <p>팔로워</p>

              </li>
              <li>
              <p>111</p>
                <p>팔로잉</p>
              
              </li>
            </ul>
        </div>

        <div className="myname">
          <span>홍_윤제</span>
        </div>
        <div className="text-icon">
            {/* <div className="text-icon-button">
              <button> 프로필 편집</button>
            </div>
            <div className="text-icon-button">
              <button>
                <i className="fas fa-chevron-down fa-xs" />
              </button>
            </div> */}
            <button> 프로필 편집</button>
            <button>
                <i className="fas fa-chevron-down fa-xs" />
              </button>
        </div>
        <div className="pictures">
            <div className="user">
              <div className="use__component">
                <img src="gumetongue.jpg" className="user__component-avatar" />
                <div className="user__component-text">
                  <i className="far fa-grin fa-lg" />
                </div>
              </div>
              <div className="user__component">
                <img src="sdd.jpg" className="user__component-avatar" />
                <div className="user__component-text">
                  <span className="user__component-name">부산</span>
                  <i className="fab fa-pagelines" />
                </div>
              </div>
              <div className="use__component">
                <img src="sds.jpg" className="user__component-avatar" />
                <div className="user__component-text">
                  <span className="user__component-name">제주도</span>
                  <i className="fas fa-seedling" />
                </div>
              </div>
              <div className="use__component">
                <img src="sdds.jpg" className="user__component-avatar" />
                <div className="user__component-text">
                  <span className="user__component-name">속초</span>
                  <i className="fas fa-cloud" />
                </div>
              </div>
              <div className="use__component">
                <img src="sdss.jpg" className="user__component-avatar" />
                <div className="user__component-text">
                  <span className="user__component-name">산책</span>
                </div>
              </div>
            </div>
        </div>


          {/*      pictures */}
        <div className="md-icons">
            <i className="fas fa-th fa-lg" />
            <i className="fas fa-play fa-lg" />
            <i className="far fa-user-circle fa-lg " />
        </div>
          {/*    md icons */}
        <nav className="md-pictures">
            <div className="float-picture">
              <img src="gogume.jpg" />
              <i className="fas fa-comments" />
            </div>
            <div className="float-picture">
              <img src="gugume.jpg" />
              <i className="fas fa-comments" />
            </div>
            <div className="float-picture">
              <img src="guryeon.jpg" />
              <i className="fas fa-comments" />
            </div>
            <div className="float-picture">
              <img src="gumeface.jpg" />
              <i className="fas fa-comments" />
            </div>
            <div className="float-picture">
              <img src="gumewow.jpg" />
              <i className="fas fa-comments" />
            </div>
            <div className="float-picture">
              <img src="gumetwo.jpg" />
              <i className="fas fa-comments" />
            </div>
            <div className="float-picture">
              <img src="gumetwo.jpg" />
              <i className="fas fa-comments" />
            </div>
            <div className="float-picture">
              <img src="sdsd.jpg" />
              <i className="fas fa-comments" />
            </div>
            <div className="float-picture">
              <img src="theback.jpg" />
              <i className="fas fa-comments" />
            </div>
        </nav>
          {/* md pictures */}
        <div className="under">
            <div className="under__column">
              <i className="fas fa-home fa-lg" />
              <i className="fas fa-search fa-lg" />
              <i className="far fa-caret-square-right fa-lg" />
              <i className="fas fa-shopping-bag fa-lg" />
              <img src="sd.jpg" className="under__column-avatar" />
            </div>
        </div>
      </div>
    </body>
  );
}
export default App;