const quotes = [
    {
        quote: "고기는 씹을수록 맛이 난다. 그리고 책도 읽을 수록 맛이 난다. ... 말하자면 100번 읽고 100번 익히는 셈이다.",
        author: "세종, 조선 4대 국왕"
    },
    {
        quote: "배우는 사람은 모름지기 심신을 수련해야 한다.",
        author: "퇴계 이황"
    },
    {
        quote: "말은 망령되게 하지 말아야 한다. 기품을 지키되 사치하지 말 것이고, ​지성을 갖추되 자랑하지 말라.",
        author: "신사임당"
    },
    {
        quote: "세월을 헛되이 보내지 말라. 청춘은 다시 돌아오지 않는다.",
        author: "안중근"
    },
    {
        quote: "무슨 일이든 할 수 있다고 생각하는 사람이 해내는 법이다. 의심하면 의심하는 만큼 밖에는 못하고, 할 수 없다고 생각하면 할 수 없는 것이다.",
        author: "정주영, 현대 창업주"
    },
    {
        quote: "자고로 성공에는 세 가지 요체가 있다. 운, 둔, 근이 그것이다. ... 운이 트일 때 까지 버텨내는 끈기와 근성이 있어야 한다.",
        author: "이병철, 삼성 창업주"
    },
    {
        quote: "사람은 나쁜 운과 좋은 운을 동시에 가지고 있다. ...운이 나쁘다고 말하는 사람들은 대개 게으르다. ",
        author: "정주영, 현대 창업주"
    },
    {
        quote: "늦었다고 생각할 때는 너무 늦은 거다. 그러니 지금 당장 시작해라.",
        author: "박명수"
    },
    {
        quote: "가볍게 움직이지 말라.",
        author: "이순신"
    },
    {
        quote: "인간은 일년에 3개월 이상 꽃피우지 못한다.",
        author: "이건희, 전 삼성 회장"
    }
]

const quote = document.querySelector("#quotes");
const author = document.querySelector("#author");
const randQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = randQuote.quote;
author.innerText = "-"+randQuote.author;