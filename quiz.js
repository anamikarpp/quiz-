(function() {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function() {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function(ans, callback) {
        var sc;
        
        if (ans === this.correct) {
            console.log('Correct answer!');
            sc = callback(true);
        } else {
            console.log('Wrong answer. Try again :)');
            sc = callback(false);
        }
        
        this.displayScore(sc);
    }

    Question.prototype.displayScore = function(score) {
        console.log('Your current score is: ' + score);
        console.log('------------------------------');
    }
    
    
    var q1 = new Question('Which of the following is a good test dataset characteristic?',['Large enough to yield meaningful results','Is representative of the dataset as a whole','both A and B','None of the above'],2);
    var q2 = new Question('The most widely used metrics and tools to assess a classification model are:',['Confusion matrix','Cost-sensitive accuracy','Area under the ROC curve','All of the above'],3);
    var q3 = new Question('Which of the following is a disadvantage of decision trees?',['Factor analysis','Decision trees are robust to outliers','Decision trees are prone to be overfit','None of the above'],2);
    
    var questions = [q1, q2, q3];
    
    function score() {
        var sc = 0;
        return function(correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }
    var keepScore = score();
    
    
    function nextQuestion() {

        var n = Math.floor(Math.random() * questions.length);
        questions[n].displayQuestion();
        

        var answer = prompt('Please select the correct answer or type exit to end the game');

        if(answer !== 'exit') {
            questions[n].checkAnswer(parseInt(answer), keepScore);
            
            nextQuestion();
        }
        else
        {
            alert("Thankyou for playing");
        }
    }
    alert("This is Machine Learning Quiz please open your console to view the question type exit then open your console and then play");
    nextQuestion();
    
})();
