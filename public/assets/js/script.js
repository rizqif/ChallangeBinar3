class Card {
  constructor(cardId) {
    this.cardId = cardId;
    this._chosen = null;
    this.options = [
      {
        name: 'batu',
        url: './assets/img/batu1.png'
      },
      {
        name: 'gunting',
        url: './assets/img/gunting1.png'
      },
      {
        name: 'kertas',
        url: './assets/img/kertas1.png'
      },
    ];
  }

  get chosen() {
    return this._chosen;
  }

  set chosen(card) {
    this._chosen = card;
  }

  getCard() {
    document.getElementById(this.cardId).innerHTML = '';

    const t = this;
    return this.options.forEach((opt) => {
      const img = document.createElement('img');
      img.src = opt.url;
      img.className = 'img';
      img.id = `${this.cardId}-${opt.name}`;

      document.getElementById(this.cardId).append(img);
    });
  }

  getOptions() {
    return this.options;
  }

  setActive(id) {
    document.getElementById(id).classList.add('active');
  }

  resetCard() {
    options.forEach((opt) => {
      document.getElementById(`${this.cardId}-${opt.name}`).classList.remove('active');
    });
  }
}

class RandomCard extends Card {
  constructor(cardId) {
    super(cardId);
  }

  random() {
    let index = Math.floor(Math.random() * Math.floor(3));
    const options = super.getOptions();
    return options[index];
  }
}

const card = new Card('cards');
card.getCard();
const cardComp = new RandomCard('cards-comp');
cardComp.getCard();

function getResult(player, comp) {
  let text = '';
  if (player.name == comp.name) {
    text = `DRAW`;
  } else if (player.name == `batu` && comp.name == `gunting`) {
    text = `PLAYER WIN`;
  } else if (player.name == `batu` && comp.name == `kertas`) {
    text = `COM WIN`;
  } else if (player.name == `gunting` && comp.name == `batu`) {
    text = `COM WIN`;
  } else if (player.name == `gunting` && comp.name == `kertas`) {
    text = `PLAYER WIN`;
  } else if (player.name == `kertas` && comp.name == `batu`) {
    text = `PLAYER WIN`;
  } else if (player.name == `kertas` && comp.name == `gunting`) {
    text = `COM WIN`;
  }

  document.getElementsByClassName('result')[0].innerHTML = text;
  card.setActive(`cards-${card.chosen.name}`);
  cardComp.setActive(`cards-comp-${cardComp.chosen.name}`);
}

const options = card.getOptions();
options.forEach((opt) => {
  document.getElementById(`cards-${opt.name}`).addEventListener('click', () => {
    card.chosen = opt;
    cardComp.chosen = cardComp.random();
    card.resetCard();
    cardComp.resetCard();
    getResult(card.chosen, cardComp.chosen);
  });
});

document.getElementById('reset').addEventListener('click', () => {
  card.chosen = null;
  cardComp.chosen = null;
  card.resetCard();
  cardComp.resetCard();
  document.getElementsByClassName('result')[0].innerHTML = '';
});
