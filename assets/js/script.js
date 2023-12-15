const choice =
    Array.from(document.querySelector('.choices').children);

const message =
    document.querySelector('.message');

const [user1_score, user1_name] =
    document.querySelector('.user1').children;

const [user2_score, user2_name] =
    document.querySelector('.user2').children;

const scoreDisplay = (win_OR_lose, user1_choice, user2_choice) => {

    if (win_OR_lose === 'win') {

        message.style.background = 'green';
        message.innerHTML =
            user1_name.innerHTML + ' WIN, ' + choice[user1_choice].classList[1] + ' beats ' + choice[user2_choice].classList[1];
        user1_score.innerHTML =
            parseInt(user1_score.innerHTML, 10) + 1;

    } else if (win_OR_lose === 'lose') {

        message.style.background = 'red';
        message.innerHTML =
            user1_name.innerHTML + ' lose, ' + choice[user2_choice].classList[1] + ' beats ' + choice[user1_choice].classList[1];
        user2_score.innerHTML =
            parseInt(user2_score.innerHTML, 10) + 1;

    } else {

        message.style.background = '';
        message.innerHTML = 'It\'s a draw ';

    }
};

const result = (user1_choice, user2_choice) => {

    choice[user1_choice].style.background = '#272727';
    choice[user2_choice].style.background = '#272727';

    choice[user1_choice].firstElementChild.style.boxShadow = 'none';
    choice[user2_choice].firstElementChild.style.boxShadow = 'none';

    setTimeout(() => {
        choice[user1_choice].style.background = 'none';
        choice[user2_choice].style.background = 'none';
        choice[user1_choice].firstElementChild.style.boxShadow = '';
        choice[user2_choice].firstElementChild.style.boxShadow = '';
    }, 1500);

    if (user1_choice === user2_choice) {
        return 'draw'
    }
    else {
        switch (`${user1_choice}${user2_choice}`) {
            case '01':
                return 'lose';
            case '02':
                return 'win';
            case '10':
                return 'win';
            case '12':
                return 'lose';
            case '20':
                return 'lose';
            case '21':
                return 'win';
        }
    }
}

const nameDisplay = () => {
    user1_name.innerHTML = "You";
    user2_name.innerHTML = "Computer";
}

nameDisplay();
let user1_choice = 0;
let user2_choice = 0;

choice.forEach(option => {

    option.addEventListener('click', () => {
 
        user1_choice = Array.from(choice).indexOf(option);
        user2_choice = Math.floor(Math.random() * 3);
 
        scoreDisplay(
            result(user1_choice, user2_choice), user1_choice, user2_choice
        );
    });
});