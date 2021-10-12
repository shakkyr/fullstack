let words = ['scissor', 'paper' , 'rock']


let scissorButton = document.querySelector('.scissor'),
    paperButton = document.querySelector('.paper'),
    rockButton = document.querySelector('.rock'),
    allButtons = document.querySelectorAll('input'),
    userHand = document.querySelector('.userHand'),
    pcHand = document.querySelector('.pcHand'),
    userWins = document.querySelector('.userWins span'),
    pcWins = document.querySelector('.pcWins span');
    

// function button (){
//     [...allButtons].map(e => {
//         console.log(e);
//     })
// }
// button()
// allButtons.forEach(input => {
//     console.log(input);
//     input.addEventListener('click' , eve => {
//         console.log(eve);
//     })
// })
// .addEventListener('click' , function(){
//     console.log(allButtons[0].value);
// })



// for (var i = 0; i < buttons ; i++) {
//     document.querySelectorAll(".btn")[i].addEventListener("click", function() {
//         alert("Button Clicked");
//     });
// }


scissorButton.addEventListener('click' ,function (){
    userHand.style.background = 'url(./scissor.png) no-repeat center center/cover';
    let x = words[Math.floor(Math.random()*words.length)];
    switch (x) {
        case "scissor":
            pcHand.style.background = 'url(./scissor.png) no-repeat center center/cover';
            break;
        
        case 'paper':
            pcHand.style.background = 'url(./paper.png) no-repeat center center/cover';
            userWins.innerHTML ++
            break;
        case 'rock':
            pcHand.style.background = 'url(./rock.png) no-repeat center center/cover';
            pcWins.innerHTML ++
            break;
    }
    
})
paperButton.addEventListener('click' ,function (){
    userHand.style.background = 'url(./paper.png) no-repeat center center/cover';
    let x = words[Math.floor(Math.random()*words.length)];
    switch (x) {
        case "scissor":
            pcHand.style.background = 'url(./scissor.png) no-repeat center center/cover';
            pcWins.innerHTML ++
            break;
        
        case 'paper':
            pcHand.style.background = 'url(./paper.png) no-repeat center center/cover';
            break;
        case 'rock':
            pcHand.style.background = 'url(./rock.png) no-repeat center center/cover';
            userWins.innerHTML ++
            break;
    }
    
})
rockButton.addEventListener('click' ,function (){
    userHand.style.background = 'url(./rock.png) no-repeat center center/cover';
    let x = words[Math.floor(Math.random()*words.length)];
    switch (x) {
        case "scissor":
            pcHand.style.background = 'url(./scissor.png) no-repeat center center/cover';
            userWins.innerHTML ++
            break;
        
        case 'paper':
            pcHand.style.background = 'url(./paper.png) no-repeat center center/cover';
            pcWins.innerHTML ++
            break;
        case 'rock':
            pcHand.style.background = 'url(./rock.png) no-repeat center center/cover';
            
            break;
    }
    
})