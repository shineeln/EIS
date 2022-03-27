const container = document.querySelector('.quiz')
const questionEl = document.querySelector('.question')
const answersEl = document.querySelector('.answers ul')
const resultEl = document.querySelector('.result-box');
const nextBtn = document.querySelector('#next');
let result = [];

class Quiz {
    constructor(question, answers, correctAnswer) {
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }
    printQuestion() {
        questionEl.textContent = this.question;
        answersEl.innerHTML = '';
        this.answers.forEach(element => {
            answersEl.innerHTML += `<li onclick="nextQuestion('${element}', '${this.correctAnswer}')">${element}</li>`; 
        });
    }
}

class Questions {
    questions = [
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
    ]

    randomShuffle() {
        let arr = this.questions;
        for (let element = 0; element < arr.length; element++) {
            var random = Math.floor(Math.random() * (element + 1));
            var temp = arr[element];
            arr[element] = arr[random];
            arr[random] = temp;
        }
        return arr;
    }
}

let count = 0;
function nextQuestion(answer, correctAnswer) {
    nextBtn.classList.remove('disabled')
    if (answer == correctAnswer) {
        count++
        resultEl.innerHTML = `<span class="correct" >Зөв хариуллаа.</span>`
    } else {
        resultEl.innerHTML = `<span class="incorrect" >Буруу хариуллаа. Зөв хариулт ${correctAnswer}</span>`
    }
    answersEl.classList.add('disabled')
}

function next() {
    questions.shift();
    renderQuestion();
    answersEl.classList.remove('disabled')
    nextBtn.classList.add('disabled')
    resultEl.innerHTML = '';
}

questions = new Questions().randomShuffle();

function renderQuestion() {
    if(questions.length > 0) {
        let question = new Quiz(questions[0].question, questions[0].answers, questions[0].correctAnswer);
        question.printQuestion();
    } else {
        alert('Асуулт дууслаа. Та ' + count + ' асуултад зөв хариулсан байна.')
        questions = new Questions().randomShuffle();
        renderQuestion();
    }
}

renderQuestion()
