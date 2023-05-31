let buttons = document.querySelectorAll('.choose-item');

let r = document.getElementById('r').value;
let p = document.getElementById('p').value;
let s = document.getElementById('s').value;

let show = document.getElementById('win');

let player = document.getElementById('player-item');
let comp = document.getElementById('computer-item');

let plScore = document.getElementById('pl-score');
let compScore = document.getElementById('comp-score');

let x = parseInt(plScore.innerText);
let y = parseInt(compScore.innerText);

let arr = [r, p, s];

Array.from(buttons).forEach((element) => {
    element.addEventListener('click', () => {
        let computer = arr[Math.floor(Math.random() * arr.length)];

        if (element.value == computer) {
            if (element.value == r) {
                player.innerHTML = "<img src=\"assets/images/rock.png\" width=\"400px\" height=\"150px\">"
                comp.innerHTML = "<img src=\"assets/images/rock.png\" width=\"400px\" height=\"150px\">"
            }
            else if (element.value == p) {
                player.innerHTML = "<img src=\"assets/images/Paper.png\" width=\"400px\" height=\"150px\">"
                comp.innerHTML = "<img src=\"assets/images/Paper.png\" width=\"400px\" height=\"150px\">"
            }
            else if (element.value == s) {
                player.innerHTML = "<img src=\"assets/images/sissor.png\" width=\"400px\" height=\"150px\">"
                comp.innerHTML = "<img src=\"assets/images/sissor.png\" width=\"400px\" height=\"150px\">"
            }

            show.innerHTML = '*Tie'
        }
        else if ((element.value == r) && (computer == p)) {
            player.innerHTML = "<img src=\"assets/images/rock.png\" width=\"400px\" height=\"150px\">"
            comp.innerHTML = "<img src=\"assets/images/Paper.png\" width=\"400px\" height=\"150px\">"

            y += 1;
            compScore.innerHTML = y;

            show.innerHTML = '*Computer Wins (Computer choose paper)';
        }
        else if ((element.value == r) && (computer == s)) {
            player.innerHTML = "<img src=\"assets/images/rock.png\" width=\"400px\" height=\"150px\">"
            comp.innerHTML = "<img src=\"assets/images/sissor.png\" width=\"400px\" height=\"150px\">"

            x += 1;
            plScore.innerHTML = x;

            show.innerHTML = '*Player Wins (Computer choose sissors)';
        }
        else if ((element.value == p) && (computer == r)) {
            player.innerHTML = "<img src=\"assets/images/Paper.png\" width=\"400px\" height=\"150px\">"
            comp.innerHTML = "<img src=\"assets/images/rock.png\" width=\"400px\" height=\"150px\">"

            x += 1;
            plScore.innerHTML = x;
            show.innerHTML = '*Player Wins (Computer choose rock)';
        }
        else if ((element.value == p) && (computer == s)) {
            player.innerHTML = "<img src=\"assets/images/Paper.png\" width=\"400px\" height=\"150px\">"
            comp.innerHTML = "<img src=\"assets/images/sissor.png\" width=\"400px\" height=\"150px\">"

            y += 1;
            compScore.innerHTML = y;
            show.innerHTML = '*Computer Wins (Computer choose sissors)';
        }
        else if ((element.value == s) && (computer == r)) {
            player.innerHTML = "<img src=\"assets/images/sissor.png\" width=\"400px\" height=\"150px\">"
            comp.innerHTML = "<img src=\"assets/images/rock.png\" width=\"400px\" height=\"150px\">"

            y += 1;
            compScore.innerHTML = y;
            show.innerHTML = '*Computer Wins (Computer choose rock)';
        }
        else if ((element.value == s) && (computer == p)) {
            player.innerHTML = "<img src=\"assets/images/sissor.png\" width=\"400px\" height=\"150px\">"
            comp.innerHTML = "<img src=\"assets/images/Paper.png\" width=\"400px\" height=\"150px\">"

            x += 1;
            plScore.innerHTML = x;
            show.innerHTML = '*Player Wins (Computer choose paper)';
        }
    });
});
