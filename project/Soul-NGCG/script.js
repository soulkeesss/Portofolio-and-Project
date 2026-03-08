        // Pertanyaan kuis
        const quizQuestions = [
            {
                question: `Apa fungsi yang tepat saat ingin mendeklerasikan suatu variable?`,
                options: ["vars", "lot", "const", "conts"],
                correct: 2
            },
            {
                question: `Bagaimana cara menggambil isi html berdasarkan "class"? `,
                options: ["getDocumentById", "querySelector", "getElementByTagName", "getElementsByClassName"],
                correct: 3
            }, 
            {
                question: `Apa jenis-jenis tipe dari output di javascript? `,
                options: ["Number, String, True, False", "Number, String, Booelan, Undefined, NaN", "String, Number, Booelan, Float, Undefined NaN", "String, Booelan, Number"],
                correct: 1
            }, 
            {
                question: "Kondisi apa yang membuat JavaScript tidak berjalan?",
                options: ['Tidak ada link rel="stylesheet" href="style.css"', 'Nama html bukan "index.html"', 'Tidak menambahkan script', "Tidak menggunakan var"],
                correct: 2
            },
            {
                question: `Dengan code "for (let i = 0; i <= 10; i++) {console.log(i);}" apa output yang akan muncul?`,
                options: ["0,1,2,3,...,9,10", "10,9,...,3,2,1", "1,2,3,...,9,10", "1,2,3,...,9"],
                correct: 0
            },
            {
                question: `let x = "4" -> console.log(x+8); Output dari kode ini adalah?`,
                options: ["48", "12", "32", "Error"],
                correct: 3
            },
            {
                question: `let fruit = ["apple", "durian", "orange", "starfruit", "pear" ] -> for (let i = 2; i < fruit.length; i++) {console.log(fruit[i]);} Apa output dari kode ini?`,
                options: ["apple, durian, orange ", "apple, durian, orange, starfruit, pear", "orange, starfruit, pear", "No Output because i undefined"],
                correct: 2
            },
            {
                question: `const x = 4 -> x += 1 -> console.log(x). Apa output di console?`,
                options: ["5", "3", "True", "Error"],
                correct: 3
            },
            {
                question: `Apa kode yang paling menjelaskan 'increment'?`,
                options: ["-=1", "+=1 ", ">=1", "=>1"],
                correct: 1
            },
            {
                question: "var x = 4 -> y = 4*x*2*x Apa output yang tepat di console untuk ini?",
                options: [`8x`, "128", "16^2", ""],
                correct: 3
            },
            {
                question: "x = 4.633233345232 -> console.log(Math.floor(x) + Math.ceil(x)). Apa output yang tepat untuk code ini?",
                options: [`9`, "10", "8", "11"],
                correct: 0
            }, 
            {
                question: "x = 76 -> let a = x -> x*=a -> console.log(a) Apa output yang tepat untuk code ini?",
                options: [`a`, "76", "5776", "Undefined because x have no variable declaration"],
                correct: 1
            }, 
            {
                question: "x^x Apa penulisan yang tepat di javascript?",
                options: [`x**2`, "x^x", "x**x", "x*x"],
                correct: 2
            }, 
            {
                question: "let a = x -> x *=a -> console.log(x) Apa output yang benar?",
                options: [`Undefined`, "x^a", "x**2", "a**2"],
                correct: 0
            },
            {
                question: "let  x = 5.76*z -> z = Math.pi*2 -> y = Math.ceil(x**2) -> console.log(y*Math.floor(x)) Apa output yang benar?",
                options: [`Undefined / Error`, "Math.pi^2", "47124", "45364"],
                correct: 2
            },

        ];

        const infoTitle = document.getElementById('info-title');
        const infoSubtitle = document.getElementById('info-subtitle');
        const infoDescription = document.getElementById('info-description');
        const infoFacts = document.getElementById('info-facts');
        const infoIcon = document.getElementById('info-icon');

        const quizContainer = document.getElementById('quiz-container');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const submitBtn = document.getElementById('submit-btn');
        const restartBtn = document.getElementById('restart-btn');
        const quizResult = document.getElementById('quiz-result');
        const resultScore = document.getElementById('result-score');
        const resultPercent = document.getElementById('result-percent');
        const resultMessage = document.getElementById('result-message');

        let currentQuestion = 0;
        let userAnswers = [];
        let quizSubmitted = false;

        function adjustColor(color, amount) {
            const num = parseInt(color.replace("#", ""), 16);
            const r = Math.max(0, Math.min(255, (num >> 16) + amount));
            const g = Math.max(0, Math.min(255, ((num >> 8) & 0x00FF) + amount));
            const b = Math.max(0, Math.min(255, (num & 0x0000FF) + amount));
            return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
        }
        function initQuiz() {
            currentQuestion = 0;
            userAnswers = [];
            quizSubmitted = false;
            quizResult.style.display = 'none';
            submitBtn.style.display = 'none';
            restartBtn.style.display = 'none';
            nextBtn.style.display = 'inline-block';
            prevBtn.style.display = 'inline-block';
            prevBtn.disabled = true;
            
            displayQuestion();
        }

        function displayQuestion() {
            if (currentQuestion >= quizQuestions.length) {
                showQuizResults();
                return;
            }
            
            const question = quizQuestions[currentQuestion];
            quizContainer.innerHTML = `
                <div class="question">
                    <h3>Pertanyaan ${currentQuestion + 1}: ${question.question}</h3>
                    <div class="options">
                        ${question.options.map((option, index) => `
                            <div class="option" data-index="${index}">${option}</div>
                        `).join('')}
                    </div>
                </div>
            `;
            
            const options = document.querySelectorAll('.option');
            options.forEach(option => {
                option.addEventListener('click', function() {
                    if (!quizSubmitted) {
                        options.forEach(opt => opt.classList.remove('selected'));
                        this.classList.add('selected');
                        userAnswers[currentQuestion] = parseInt(this.getAttribute('data-index'));
                    }
                });
            });
            
            if (userAnswers[currentQuestion] !== undefined) {
                options[userAnswers[currentQuestion]].classList.add('selected');
            }
            
            prevBtn.disabled = currentQuestion === 0;
            if (currentQuestion === quizQuestions.length - 1) {
                nextBtn.style.display = 'none';
                submitBtn.style.display = 'inline-block';
            } else {
                nextBtn.style.display = 'inline-block';
                submitBtn.style.display = 'none';
            }
        }

        function showQuizResults() {
            quizSubmitted = true;
            quizContainer.style.display = 'none';
            prevBtn.style.display = 'none';
            nextBtn.style.display = 'none';
            submitBtn.style.display = 'none';
            restartBtn.style.display = 'inline-block';
            quizResult.style.display = 'block';
            
            let score = 0;
            userAnswers.forEach((answer, index) => {
                if (answer === quizQuestions[index].correct) {
                    score++;
                }
            });
            
            resultScore.textContent = `${score}/${quizQuestions.length}`;

            const percentage = (score / quizQuestions.length) * 100;
             if (percentage >= 100) {
                resultMessage.textContent = "Perfect! Kamu ahli JavaScript dan html!";
            } else if (percentage >= 80) {
                resultMessage.textContent = "Hebat! Dikit lagi sempurna nih!";
            } else if (percentage >= 70) {
                resultMessage.textContent = "Bagus! Kamu tahu banyak tentang JavaScript.";
            } else if (percentage >= 40) {
                resultMessage.textContent = "Lumayan! Terus belajar lebih banyak tentang JavaScript dan html.";
            } else {
                resultMessage.textContent = "Terus belajar! JavaScript penuh hal yang menakjubkan yang menunggu.";
            }
            
            resultPercent.textContent = `${Math.floor(percentage)}/100`

        }

        prevBtn.addEventListener('click', () => {
            if (currentQuestion > 0) {
                currentQuestion--;
                displayQuestion();
            }
        });

        nextBtn.addEventListener('click', () => {
            if (currentQuestion < quizQuestions.length - 1) {
                currentQuestion++;
                displayQuestion();
            }
        });

        submitBtn.addEventListener('click', () => {
            showQuizResults();
        });

        restartBtn.addEventListener('click', () => {
            quizContainer.style.display = 'block';
            initQuiz();
        });

        document.addEventListener('DOMContentLoaded', () => {
            initQuiz();
        });
