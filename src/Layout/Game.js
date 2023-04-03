import { useState } from 'react';
import './Game.css'

export default function Game(){
    const [lottos, setLottos] = useState([0,0,0,0,0,0]);
    const search = () => {
        let text = document.getElementById('myword').value;
        let word = document.getElementById('word').innerText;
        if(text[0] === word[word.length-1]){
            document.getElementById('result').innerText="정답입니다!"
            document.getElementById('word').innerText = text;
            document.getElementById('myword').value="";
        }else{
            document.getElementById('result').innerText="땡!"
            document.getElementById('myword').value ="";
        }
    }

     //1. 로또 번호는 6개

    const onClickLottoBtn = () => {
       //1. 로또 번호는 6개
        var lotto = []; //6개로 값이 나열될것이기 때문에 배열처리 - 값은 담지 않음

        //6번처리 - 반복문
        for(var i=0;i<6;i++){
        //새로 추가될 숫자 : 1~45사이의 숫자가 랜덤하게 처리
        //random() : 0~1사이의 랜덤한 소수
        //floor() : 내림처리해서 정수로 변경
        var num = Math.floor(Math.random() * 44) + 1;

        //현재 상태는 같은 숫자가 나올수 있음
        //lotto라는 배열에 담긴 숫자와 같이 같으면 안됨
        for(var j in lotto){
            while(num == lotto[j]){ //현재 새로나온 숫자가 기존 숫자와 같으면
            num = Math.floor(Math.random() * 44) + 1;
            }
        }

        //push() - 배열에 마지막에 값추가메서드
        lotto.push(num);
        }

        //오름차순으로 숫자 정렬
        lotto.sort(function(a,b){
        return a - b;
        });

        setLottos(lotto);
        console.log(lottos)

    }

    return(
        <div className="wrapper__game">
        <div className="wrapper__header__game">
            <div className="header__title">
                <div className="title">GAME</div>
                <div className="subtitle">TODAY CHOICE</div>
            </div>
            <div className="divideLine"></div>
        </div>
        <div className="game__container">
            <img src="/images/word.png"/>
            <div className="game__title">끝말잇기</div>
            <div className="game__subtitle">제시어 : <span id="word">코드캠프</span></div>
            <div className="word__text">
                <input id="myword" className="textbox"  placeholder="단어를 입력하세요"/>
                <button className="search" onClick={search}>입력</button>
            </div>
            <div className="word__result" id="result">결과!</div>
        </div>
        <div className="game__container">
            <img src="/images/lotto.png"/>
            <div className="game__title">LOTTO</div>
            <div className="game__subtitle">버튼을 누르세요.</div>
            <div className="game__lotto__number">
                {
                   lottos && lottos.map((lotto,idx)=>{
                        return (
                            <span key={idx}>{lotto}</span>
                        )
                    })
                }
            </div>
            <button className="wrapper__lotto__btn" onClick={onClickLottoBtn}>
                Button
            </button>
        </div>
    </div>
    )
}
