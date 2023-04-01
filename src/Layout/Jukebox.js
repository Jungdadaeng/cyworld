import './Jukebox.css'
export default function Jukebox(){
    return(
        <div className="wrapper__juke">
        <div className="wrapper__header__juke">
            <div className="header__title" >
                <div className="title">추억의 BGM</div>
                <div className="subtitle" >TODAY CHOICE</div>
            </div>
            <div className="devideLine"></div>
            <div className="albumWrapper">
                <div className="albumWrapper__item">
                    <img className="album-thumbnail" src="/images/jukebox-01.png"/>
                    <div className="album-songtitle">Y(Please Tell Me Why)</div>
                    <div className="album-artist">프리스타일</div>
                </div>
                <div className="albumWrapper__item">
                    <img className="album-thumbnail" src="/images/jukebox-02.png"/>
                    <div className="album-songtitle">눈의 꽃</div>
                    <div className="album-artist">박효신</div>
                </div>
                <div className="albumWrapper__item">
                    <img className="album-thumbnail" src="/images/jukebox-03.png"/>
                    <div className="album-songtitle">사랑했나봐</div>
                    <div className="album-artist">윤도현</div>
                </div>
            </div>
        </div>
        <div className="wrapper__body">
            <div className="header__title">
                <div className="title">추억의 BGM</div>
                <div className="subtitle">TODAY CHOICE</div>
            </div>
            <table className="albumTable">
                <tr>
                    <th className="albumTable__checkbox"><input type="checkbox"/></th>
                    <th className="albumTable__number">번호</th>
                    <th className="albumTable__song">곡명</th>
                    <th className="albumTable__artist">아티스트</th>
                </tr>
                <tr>
                    <td className="album-table-checkbox"><input type="checkbox" /></td>
                    <td className="album-table-number">1</td>
                    <td className="album-table-song"><i className="fas fa-caret-right arrow"></i> 눈의 꽃</td>
                    <td className="album-table-artist">박효신</td>
                </tr>
                <tr>
                    <td className="album-table-checkbox"><input type="checkbox" /></td>
                    <td className="album-table-number">2</td>
                    <td className="album-table-song"><i className="fas fa-caret-right arrow"></i> 사랑스러워</td>
                    <td className="album-table-artist">김종국</td>
                </tr>
                <tr>
                    <td className="album-table-checkbox"><input type="checkbox" /></td>
                    <td className="album-table-number">3</td>
                    <td className="album-table-song"><i className="fas fa-caret-right arrow"></i> 내사람: Partner For Life</td>
                    <td className="album-table-artist">SG워너비</td>
                </tr>
                <tr>
                    <td className="album-table-checkbox"><input type="checkbox" /></td>
                    <td className="album-table-number">4</td>
                    <td className="album-table-song"><i className="fas fa-caret-right arrow"></i> Love Love Love</td>
                    <td className="album-table-artist">에픽하이</td>
                </tr>
                <tr>
                    <td className="album-table-checkbox"><input type="checkbox" /></td>
                    <td className="album-table-number">5</td>
                    <td className="album-table-song"><i className="fas fa-caret-right arrow"></i> 애인...있어요</td>
                    <td className="album-table-artist">이은미</td>
                </tr>
            </table>
            <div className="albumTable__footer">
                <div className="albumTable__footer__left">
                    <button>듣기</button>
                </div>
                <div className="albumTable__footer__center">
                    | <span>1</span> |
                </div>
                <div className="albumTable__footer__right">
                    <button>이동</button>
                    <button>배경음악 등록</button>
                </div>
            </div>
        </div>
    </div>
    )
}