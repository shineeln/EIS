const container = document.querySelector('.quiz')
const questionBox = document.querySelector('.quiz-item')
const answerBox = document.querySelector('.answers ul')
let answers = [
    {
        question: "Цэнхэр, шар өнгөний дундаас ямар өнгө гардаг вэ?",
        answers: ["ногоон", "цагаан", "цэнхэр", "хар"],
        correctAnswer: "ногоон"
    },
    {
        question: "МУ-ын үндсэн хууль хэдэн бүлэгтэй вэ?",
        answers: [6, 3, 10, 11],
        correctAnswer: 6
    },
    {
        question: "Шатарт хүний хэдэн дүрс байдаг вэ?",
        answers: [6, 3, 2, 4],
        correctAnswer: 3
    },
    {
        question: "Дэлхийн хамгийн жижиг хот улс",
        answers: ["Гүрж", "Ватикан", "Монако", "Тувалу"],
        correctAnswer: "Ватикан"
    },
    {
        question: "Ёлын ам аль аймагт байдаг вэ?",
        answers: ["Өмнөговь", "Даланзадгад", "Хэнтий", "Дорноговь"],
        correctAnswer: "Өмнөговь"
    },
    {
        question: "Дэлхийн хамгийн чийглэг улс?",
        answers: ["Хятад", "Солонгос", "Энэтхэг", "Япон"],
        correctAnswer: "Энэтхэг"
    },
    {
        question: "Нэг мөч хэдэн минуттай тэнцэх вэ?",
        answers: [10, 1, 5, 15],
        correctAnswer: 15
    },
    {
        question: "Дэлхий дээр хэдэн жилийн өмнө бичиг үсэг үүссэн бэ?",
        answers: [10000, 6000, 5000, 3000],
        correctAnswer: 5000
    },
    {
        question: "Хүн хоногт хичнээн хэмжээний агаар амьсгалдаг вэ? ",
        answers: ["10кг", "2кг", "15кг", "12кг"],
        correctAnswer: "12кг"
    },
    {
        question: "Хөвөнг юунаас гаргаж авдаг вэ?",
        answers: ["Мод", "Ургамал", "Даавуу", "Утас"],
        correctAnswer: "Мод"
    },
];
let result = [];

function Quiz(element) {
    this.question = element.question;
    this.answers = element.answers;
    this.correctAnswer = element.correctAnswer;
}