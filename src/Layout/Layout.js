import { Link, Outlet } from 'react-router-dom'
import './Layout.css'
export default function Layout({children}){
    const menuHome = () => {
        document.getElementById('contentFrame').setAttribute('src','./home.js');
        document.getElementById('menuHome').style = 'color:black; background-color: white';
        document.getElementById('menuJukebox').style = 'color:white; background-color:#298eb5';
        document.getElementById('menuGame').style = 'color:white; background-color: #298eb5';
    }
    
    const menuJukebox = () => {
        document.getElementById('contentFrame').setAttribute('src','jukebox.html');
        document.getElementById('menuJukebox').style = 'color:black; background-color: white';
        document.getElementById('menuHome').style = 'color:white; background-color:#298eb5';
        document.getElementById('menuGame').style = 'color:white; background-color: #298eb5';
    }
    
    const menuGame = () => {
        document.getElementById('contentFrame').setAttribute('src','game.html')
        document.getElementById('menuGame').style = 'color:black; background-color: white';
        document.getElementById('menuHome').style = 'color:white; background-color:#298eb5';
        document.getElementById('menuJukebox').style = 'color:white; background-color: #298eb5';
    
    }

    return(
        <div className="background">
            <div className="outerbox">
                <div className="wrapper">
                    <div className="wrapper__left">
                        <div className="wrapper__left__header">
                            <div className="today">
                                <span>TODAY</span>
                                <span className="count">0</span>
                                <span> | TOTAL</span>
                                <span>12345</span>
                            </div>
                        </div>
                        <div className="wrapper__left__body">
                            <div className="left__body__header">
                                <img src="/images/profile.jpg" className="left__body__header__gray" />
                                <div className="left__body__header__line">
                                </div>
                            </div>
                            <div className="left__body__profile">
                                <div className="profile__detail">
                                    <i className="fas fa-file-signature"></i>
                                    name : 정다윤
                                </div>
                                <div className="profile__detail">
                                    <i className="fas fa-phone"></i>
                                    phone : 010-3953-1685
                                </div>
                                <div className="profile__detail">
                                    <i className="fas fa-envelope-square"></i>
                                    mail : jungdayoonyi@gmail.com
                                </div>
                                <div className="profile__detail">
                                    <i className="fas fa-images"></i>
                                    instagram
                                </div>
                            </div>
                            <div className="left__body__footer">
                                <div className="wrapper__feel">
                                    <div className="feel__title">오늘의 기분</div>
                                    <select className="feel__select">
                                        <option>기쁨😊</option>
                                        <option>슬픔😢</option>
                                        <option>당황😯</option>
                                        <option>화남😡</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper__right">
                        <div className="wrapper__right__header">
                            <div className="right__header__title">사이좋은 사람들, 싸이월드</div>
                            <div className="right__header__setting">사생활보호설정 <i className="fas fa-caret-right arrow"></i></div>
                        </div>
                        <div className="wrapper__right__body">
                            <Outlet />
                        </div>
                    </div>
                    <div className="navigation">
                        <Link className="navigation__item" id="menuHome" to={'/home'}>홈</Link>
                        <Link className="navigation__item" id="menuJukebox" to={'/jukebox'}>쥬크박스</Link>
                        <Link className="navigation__item" id="menuGame" to={'/game'}>게임</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}