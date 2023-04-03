import * as S from "./Home.styles.js"
export default function Home(){
    return(
        <S.wrapper__home>
            <S.wrapper__header>
                <S.contents__title>
                    <S.title>Updated news</S.title>
                    <S.subtitle>TODAY STORY</S.subtitle>
                </S.contents__title>
                <S.divideLine></S.divideLine>
                <S.contents__body>오늘의 기분 너무 좋음~!</S.contents__body>
            </S.wrapper__header>
            <S.wrapper__body>
                <S.contents__title>
                    <S.title>My Video</S.title>
                    <S.subtitle>INTRODUCE YOURSELF</S.subtitle>
                </S.contents__title>
                <S.video width="440px" height="300px" url="https://www.youtube.com/watch?v=11cta61wi0g">
                </S.video>
            </S.wrapper__body>
        </S.wrapper__home>
    )
}