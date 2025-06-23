import { playAudio } from './Audio';
import { myGame } from './Game';

export class Card {
  constructor(name, image) {
    this.name = name;
    this.image = image;
  }
  displaySingleCard(sourceWord, targetWord) {
    const container = document.querySelector('#cards-container');

    const cardDiv = document.createElement('div');
    cardDiv.classList.add('single-card');
    cardDiv.classList.add(
      'h-62',
      'mb-2',
      'bg-white-700',
      'border-4',
      'rounded-md',
      'mr-4'
    );

    const cardInner = document.createElement('div');

    cardInner.classList.add('card-inner');
    const cardFront = document.createElement('div');
    cardFront.classList.add('card-front');

    const cardImage = new Image();
    cardImage.classList.add('w-2/3', 'h-3/5', 'mb-2', 'm-auto', 'card-image');
    cardImage.src = `./data/img/${targetWord}.jpg`;

    const frontDescription = document.createElement('div');
    frontDescription.classList.add('card-description');

    const sourceTitle = document.createElement('h3');
    sourceTitle.textContent = `${sourceWord}`;
    sourceTitle.classList.add('text-3xl');

    const flipBtn = document.createElement('button');
    flipBtn.id = `flip-card-${sourceWord}`;
    flipBtn.classList.add('flip-card');

    frontDescription.append(sourceTitle, flipBtn);

    cardFront.append(cardImage, frontDescription);

    const cardBack = document.createElement('div');
    cardBack.classList.add('card-back');

    const backDescription = document.createElement('div');
    backDescription.classList.add('card-back-description');

    const targetTitle = document.createElement('h3');
    targetTitle.textContent = `${targetWord}`;
    targetTitle.classList.add('text-3xl', 'text-left', 'ml-4');

    backDescription.append(targetTitle);

    cardBack.append(backDescription);

    cardInner.append(cardFront, cardBack);
    cardDiv.append(cardInner);

    container.append(cardDiv);

    // #Events
    const buttonToFlip = document.querySelector(`#flip-card-${sourceWord}`);

    cardInner.addEventListener('mouseleave', () => {
      cardInner.classList.remove('is-flipped');
    });

    cardFront.addEventListener('click', () => {
      console.log('testing', myGame.getMode());
      if (myGame.getMode() === 'train') {
        const audioPath = `./data/audio/${targetWord}.mp3`;
        playAudio(audioPath);
      }
    });

    buttonToFlip.addEventListener('click', (event) => {
      cardInner.classList.add('is-flipped');
      event.stopPropagation();
    });
  }

  // displaySingleCard(sourceWord, targetWord) {
  //   const container = document.querySelector('#cards-container');
  //   const card = document.createElement('div');
  //   card.classList.add('single-card');
  //   card.id = sourceWord;
  //   // card.setAttribute('data', this.name);
  //   card.innerHTML = `
  //   <div class=" mb-2 bg-white-700 border-4 rounded-md mr-4 ">
  //     <div class="card-inner">
  //       <div class="card-front">
  //         <img class="w-2/3 h-3/5 mb-2 m-auto card-image" src="./data/img/${targetWord}.jpg">
  //         <div class="card-description">
  //           <h3 class="text-3xl text-left ml-4">${sourceWord} </h3>

  //           <button id="flip-card-${sourceWord}" class="flip-card"> </button>
  //         </div>
  //       </div>

  //       <div class="card-back">
  //         <img class="w-2/3 h-3/5 mb-2 m-auto card-image" src="./data/img/${targetWord}.jpg">
  //           <div class="card-description">
  //             <h3 class="text-3xl text-left ml-4">${targetWord} </h3>

  //           </div>
  //       </div>

  //     </div>
  //   </div>`;

  //   const buttonToFlip= document.querySelector(`#flip-card-${sourceWord}`)

  //   // flipBtn.addEventListener('click', () => {
  //   //   cardInner.classList.add('flipped');
  //   //   stats.incViews(card.word);
  //   //   cardInner.addEventListener('mouseleave', () => {
  //   //     cardInner.classList.remove('flipped');
  //   //   }, { once: true });
  //   // });

  //   // buttonToFlip.addEventListener('click', ()=> {
  //   //   alert('clicked')
  //   //   // card.classList.add('is-flipped');
  //   // })

  //   // card.addEventListener('mouseleave',()=> {
  //   //   card.classList.remove('is-flipped');
  //   // })

  //   container.appendChild(card);
  //   alert(buttonToFlip)
  // }

  displayCategoryCard(word, icon) {
    const CATEGORY_PREFIX = 'category-';
    const container = document.querySelector('#cards-container');
    const card = document.createElement('div');
    card.id = word.es;
    // card.setAttribute('data', this.name);
    card.innerHTML = `
    <div class="h-62 mb-2 bg-white-700 border-4 rounded-md mr-4 "> 
      <div >
        <img class="w-2/3 h-3/5 mb-2 m-auto card-image" src="./data/img/${icon}">
        <div class="card-description">
          <h3 class="text-3xl text-left ml-4">${word.es} </h3>
        </div>
      </div>
      
      
    </div>`;

    card.classList.add('category-card');

    container.appendChild(card);
    card.addEventListener('click', () => {
      window.location.href = `#${CATEGORY_PREFIX}${word.es}`;
    });
  }
}
