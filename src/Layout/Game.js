import './Game.css'
export default function Game(){
    return(
        <div class="wrapper__game">
        <div class="wrapper__header__game">
            <div class="header__title">
                <div class="title">GAME</div>
                <div class="subtitle">TODAY CHOICE</div>
            </div>
            <div class="divideLine"></div>
        </div>
        <div class="game__container">
            <img src="/images/word.png"/>
            <div class="game__title">끝말잇기</div>
            <div class="game__subtitle">제시어 : <span id="word">코드캠프</span></div>
            <div class="word__text">
                <input id="myword" class="textbox"  placeholder="단어를 입력하세요"/>
                <button class="search" onclick="search()">입력</button>
            </div>
            <div class="word__result" id="result">결과!</div>
        </div>
        <div class="game__container">
            <img src="/images/lotto.png"/>
            <div class="game__title">LOTTO</div>
            <div class="game__subtitle">버튼을 누르세요.</div>
            <div class="game__lotto__number">
               <span>3</span>
               <span>5</span>
               <span>10</span>
               <span>24</span>
               <span>30</span>
               <span>34</span>
            </div>
            <button class="wrapper__lotto__btn">
                Button
            </button>
        </div>
    </div>
    )
}