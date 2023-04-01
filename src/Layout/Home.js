import './Home.css'
export default function Home(){
    return(
        <div className="wrapper__home">
            <div className="wrapper__header">
                <div className="contents__title">
                    <div className="title">Updated news</div>
                    <div className="subtitle">TODAY STORY</div>
                </div>
                <div className="divideLine"></div>
                <div className="contents__body">오늘의 기분 너무 좋음~!</div>
        </div>
            <div className="wrapper__body">
                <div className="contents__title">
                    <div className="title">My Video</div>
                    <div className="subtitle">INTRODUCE YOURSELF</div>
                </div>
                <div className="video">
                </div>
            </div>
        </div>
    )
}