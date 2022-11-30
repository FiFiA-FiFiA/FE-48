const GameBoard__Wrapper = document.querySelector("[GameBoard__Wrapper]");
const Start__Btn__Container = document.querySelector("[Start__Btn__Container]");
const Btn__Start = document.querySelector("[Btn__Start]");
const Card__Arrival__Positons = document.querySelectorAll("[Card__Arrival__Positons]");
const All__Cards__Wrapper = document.querySelector("[All__Cards__Wrapper]");
const All__Card__Counter = document.querySelector("[All__Card__Counter]");

const First__Player__Cards__Wrapper = document.querySelector("[First__Player__Cards__Wrapper]");
const First__Cards__Wrapper = document.querySelectorAll("[First__Player__Cards__Wrapper] [Cards__Wrapper]");
const Second__Player__Cards__Wrapper = document.querySelector("[Second__Player__Cards__Wrapper]");
const Second__Cards__Wrapper = document.querySelectorAll("[Second__Player__Cards__Wrapper] [Cards__Wrapper]");

const First__Player__Action__Buttons = document.querySelector("[First__Player__Action__Buttons]");
const Second__Player__Action__Buttons = document.querySelector("[Second__Player__Action__Buttons]");

const FP__Btn__Arrival = document.querySelector("[FP__Btn__Arrival]");
const FP__Btn__CutIt = document.querySelector("[FP__Btn__CutIt]");
const FP__Btn__FinishIt = document.querySelector("[FP__Btn__FinishIt]");

const SP__Btn__Arrival = document.querySelector("[SP__Btn__Arrival]");
const SP__Btn__CutIt = document.querySelector("[SP__Btn__CutIt]");
const SP__Btn__FinishIt = document.querySelector("[SP__Btn__FinishIt]");

const FP__Arrival__Wrapper = document.querySelector("[FP__Arrival__Wrapper]");
const SP__Arrival__Wrapper = document.querySelector("[SP__Arrival__Wrapper]");

const FP__TakenCards__Container = document.querySelector("[FP__TakenCards__Container]");
const SP__TakenCards__Container = document.querySelector("[SP__TakenCards__Container]");
const FP__TakenCards__Count = document.querySelector("[FP__TakenCards__Count]");
const SP__TakenCards__Count = document.querySelector("[SP__TakenCards__Count]");
const FP__TakenCards = document.querySelector("[FP__TakenCards]");
const SP__TakenCards = document.querySelector("[SP__TakenCards]");

class Card {
  constructor(Type, Suit, Value) {
    this.Type = Type;
    this.Value = Value;
    this.Img = `./Images/Card_${Type}_${Suit}.png`;
  }
}

let CARDS__ARR = [
  new Card("♠", "10", 10),
  new Card("♠", "A", 11),
  new Card("♠", "J", 2),
  new Card("♠", "Q", 3),
  new Card("♠", "K", 4),
  new Card("♥", "10", 10),
  new Card("♥", "A", 11),
  new Card("♥", "J", 2),
  new Card("♥", "Q", 3),
  new Card("♥", "K", 4),
  new Card("♦", "10", 10),
  new Card("♦", "A", 11),
  new Card("♦", "J", 2),
  new Card("♦", "Q", 3),
  new Card("♦", "K", 4),
  new Card("♣", "10", 10),
  new Card("♣", "A", 11),
  new Card("♣", "J", 2),
  new Card("♣", "Q", 3),
  new Card("♣", "K", 4),
];
let Cards = CARDS__ARR;

let First__Player = false;
let Second__Player = false;

function Show__First__Player__Card(Status) {
  if (First__Player == Status) {
    // First__Player = true;
    Second__Player = false;
    First__Player__Cards__Wrapper.classList.add("Cards__Show")
    Second__Player__Cards__Wrapper.classList.remove("Cards__Show")
    First__Player__Action__Buttons.classList.remove("active");
    Second__Player__Action__Buttons.classList.add("active");
  } else {
    First__Player = false;
    // Second__Player = true;
    Second__Player__Cards__Wrapper.classList.add("Cards__Show");
    First__Player__Cards__Wrapper.classList.remove("Cards__Show");
    Second__Player__Action__Buttons.classList.remove("active");
    First__Player__Action__Buttons.classList.add("active");
  }
}

Show__First__Player__Card(true);

function Close__Start__Container() {
  Start__Btn__Container.classList.add("hidden");
  Start__Game();
}

function Start__Game() {
  GameBoard__Wrapper.classList.add("active");
  Create__All__Cards();
}

function Create__All__Cards() {
  let NewCards = [];
  let Random__Index__Arr = [];

  All__Cards__Wrapper.innerHTML = "";

  while (Random__Index__Arr.length != 20) {
    let Random__Index = Math.floor(Math.random() * Cards.length);

    if (!Random__Index__Arr.includes(Random__Index)) {
      Random__Index__Arr.push(Random__Index);
    }
  }

  for (const I in Random__Index__Arr) {
    NewCards.push(Cards[Random__Index__Arr[I]]);

    let Card = document.createElement('div');
    Card.classList.add("Card", "flip");
    Card.setAttribute("All__Cards", ``);
    Card.setAttribute("Value", `${Cards[Random__Index__Arr[I]].Value}`);
    Card.setAttribute("Type", `${Cards[Random__Index__Arr[I]].Type}`);
    Card.setAttribute("Id", `${I}`);
    Card.style.left = `${I / 10}px`;
    Card.style.zIndex = -I;

    Card.innerHTML = `
    <div class="Card__Inner">
      <div class="Card__Front">
        <img src="${Cards[Random__Index__Arr[I]].Img}" alt="">
      </div>
      <div class="Card__Back">
      <img src="./Images/Card__Back.png" alt="">
      </div>
    </div>`;

    All__Cards__Wrapper.appendChild(Card);
  }

  Cards = NewCards;
  Dealing__Cards(Cards);
  Show__First__Player__Card(true);
}

function Dealing__Cards(Cards) {
  let Cards__Arr = Cards;
  Cards = Cards__Arr;

  let All__Cards = document.querySelectorAll("[All__Cards]");
  let Cards__Wrapper = document.querySelectorAll("[Cards__Wrapper]");

  for (const Index in Cards__Wrapper) {
    if (Cards__Wrapper[Index].innerHTML == "") {
      let I = parseInt(Index);

      Cards__Wrapper[I].appendChild([...All__Cards][I]);
      document.querySelectorAll("[cards__wrapper] .Card").forEach(card => {
        card.removeAttribute("All__Cards");
        card.setAttribute("Player__Cards", "");
        card.classList.remove("flip", "rotate");
        card.classList.remove("rotate");
      });
      All__Card__Counter.textContent = document.querySelectorAll("[All__Cards]").length;
    }
  }

  let Trump = All__Cards.length - 1;
  let TrumpType = Cards__Arr[Trump].Type;
  All__Cards[Trump].classList.add("rotate");
  All__Cards[Trump].classList.remove("flip");

  let First__Player__Cards = document.querySelectorAll("[first__player__cards__wrapper] .Cards__Wrapper [player__cards]");
  let Second__Player__Cards = document.querySelectorAll("[Second__player__cards__wrapper] .Cards__Wrapper [player__cards]");

  let FP__Selected__Arr = [];
  let SP__Selected__Arr = [];

  First__Player__Cards.forEach(Cards => {
    Cards.addEventListener('click', () => {
      let CardType = Cards.getAttribute("Type");

      if (!Cards.classList.contains("selected")) {
        Cards.classList.add("selected");
        FP__Selected__Arr.push(Cards);
      } else {
        Cards.classList.remove("selected");
        let Remove__Index = FP__Selected__Arr.findIndex(f => f == Cards);
        FP__Selected__Arr.splice(Remove__Index, 1);
      }

      if (FP__Selected__Arr != "") {
        FP__Btn__Arrival.classList.remove("disabled");
        FP__Btn__CutIt.classList.add("disabled");
      } else {
        FP__Btn__Arrival.classList.add("disabled");
        FP__Btn__CutIt.classList.add("disabled");
      }

      if (SP__Arrival__Wrapper.innerHTML != "") {
        FP__Btn__CutIt.classList.remove("disabled");
        if (FP__Selected__Arr == "") {
          FP__Btn__CutIt.classList.add("disabled");
        }
      } else {
        FP__Btn__CutIt.classList.add("disabled");
      }
    });
  });

  Second__Player__Cards.forEach(Cards => {
    Cards.addEventListener('click', () => {
      let CardType = Cards.getAttribute("Type");
      if (!Cards.classList.contains("selected")) {
        Cards.classList.add("selected");
        SP__Selected__Arr.push(Cards);
      } else {
        Cards.classList.remove("selected");
        let Remove__Index = SP__Selected__Arr.findIndex(f => f == Cards);
        SP__Selected__Arr.splice(Remove__Index, 1);
      }

      if (SP__Selected__Arr != "") {
        SP__Btn__Arrival.classList.remove("disabled");
        SP__Btn__CutIt.classList.add("disabled");
      } else {
        SP__Btn__CutIt.classList.add("disabled");
        SP__Btn__Arrival.classList.add("disabled");
      }

      if (FP__Arrival__Wrapper.innerHTML != "") {
        SP__Btn__CutIt.classList.remove("disabled");
        if (SP__Selected__Arr == "") {
          SP__Btn__CutIt.classList.add("disabled");
        }
      } else {
        SP__Btn__CutIt.classList.add("disabled");
      }
    });
  });

  FP__Btn__Arrival.addEventListener('click', () => {
    let FP__Selected__Card = [...First__Player__Cards].filter(i => i.classList.contains("selected"));
    let SP__Selected__Card = [...Second__Player__Cards].filter(i => i.classList.contains("selected"));

    if (SP__Arrival__Wrapper.innerHTML != "") {
      for (const I in FP__Selected__Card) {
        FP__Selected__Card[I].classList.remove("selected", "rotate");
        SP__Selected__Card[I].classList.remove("selected", "rotate");
        FP__Selected__Card[I].removeAttribute("player__cards");
        SP__Selected__Card[I].removeAttribute("player__cards");

        SP__TakenCards.appendChild(FP__Selected__Card[I]);
        SP__TakenCards.appendChild(SP__Selected__Card[I]);
      }

      document.querySelector("[SP__TakenCards__Count]").textContent = document.querySelectorAll("[SP__TakenCards] .Card").length;

      if (document.querySelectorAll("[FP__TakenCards] .Card").length != 0) {
        FP__Btn__FinishIt.classList.add('active');
      } else {
        FP__Btn__FinishIt.classList.remove('active')
      }

      if (document.querySelectorAll("[SP__TakenCards] .Card").length != 0) {
        SP__Btn__FinishIt.classList.add('active');
      } else {
        SP__Btn__FinishIt.classList.remove('active')
      }
      Show__First__Player__Card(false);
    } else {
      for (const I in FP__Selected__Card) {
        FP__Arrival__Wrapper.appendChild(FP__Selected__Card[I]);
      }
      Show__First__Player__Card(false);
    }

    FP__Btn__Arrival.classList.add("disabled");
    FP__Btn__CutIt.classList.add("disabled");
    FP__Selected__Arr = [];
  });

  SP__Btn__Arrival.addEventListener('click', () => {
    let FP__Selected__Card = [...First__Player__Cards].filter(i => i.classList.contains("selected"));
    let SP__Selected__Card = [...Second__Player__Cards].filter(i => i.classList.contains("selected"));

    if (FP__Arrival__Wrapper.innerHTML != "") {
      for (const I in SP__Selected__Card) {
        FP__Selected__Card[I].classList.remove("selected", "rotate");
        SP__Selected__Card[I].classList.remove("selected", "rotate");
        FP__Selected__Card[I].removeAttribute("player__cards");
        SP__Selected__Card[I].removeAttribute("player__cards");

        FP__TakenCards.appendChild(SP__Selected__Card[I]);
        FP__TakenCards.appendChild(FP__Selected__Card[I]);
      }

      document.querySelector("[FP__TakenCards__Count]").textContent = document.querySelectorAll("[FP__TakenCards] .Card").length;

      if (document.querySelectorAll("[SP__TakenCards] .Card").length != 0) {
        SP__Btn__FinishIt.classList.add('active');
      } else {
        SP__Btn__FinishIt.classList.remove('active')
      }

      if (document.querySelectorAll("[FP__TakenCards] .Card").length != 0) {
        FP__Btn__FinishIt.classList.add('active');
      } else {
        FP__Btn__FinishIt.classList.remove('active')
      }
      Show__First__Player__Card(true);
    } else {
      for (const I in SP__Selected__Card) {
        SP__Arrival__Wrapper.appendChild(SP__Selected__Card[I]);
      }
      Show__First__Player__Card(true);
    }

    SP__Btn__Arrival.classList.add("disabled");
    SP__Btn__CutIt.classList.add("disabled");
    SP__Selected__Arr = [];
  });
}

const Min__Score = 31;
let FP__Score = 0;
let SP__Score = 0;

FP__Btn__FinishIt.addEventListener('click', () => {
  let Score = 0;
  let Value = [...document.querySelectorAll("[FP__TakenCards] .Card")].map(i => i.getAttribute("Value"));
  for (const score of Value) {
    Score += parseInt(score);
  }

  FP__Score = Score;

  if (FP__Score >= Min__Score) {

  } else {

  }
});

SP__Btn__FinishIt.addEventListener('click', () => {
  let Score = 0;
  let Value = [...document.querySelectorAll("[SP__TakenCards] .Card")].map(i => i.getAttribute("Value"));
  for (const score of Value) {
    Score += parseInt(score);
  }

  SP__Score = Score;

  if (SP__Score >= Min__Score) {

  } else {

  }

  console.log(SP__Score);
});

function FP__Compare__Cards(Cards) {
  let All__Cards = document.querySelectorAll("[All__Cards]");
  let FP__Cards = document.querySelectorAll("[first__player__cards__wrapper] .Cards__Wrapper [player__cards]");
  let SP__Cards = document.querySelectorAll("[Second__player__cards__wrapper] .Cards__Wrapper [player__cards]");
  const FP__Arrival__Wrapper = document.querySelector("[FP__Arrival__Wrapper]");
  const SP__Arrival__Wrapper = document.querySelector("[SP__Arrival__Wrapper]");
  const FP__Arrival__Cards = document.querySelectorAll("[FP__Arrival__Wrapper] [player__cards]");
  const SP__Arrival__Cards = document.querySelectorAll("[SP__Arrival__Wrapper] [player__cards]");

  let TrumpCard = [...All__Cards].filter(i => i.classList.contains("rotate"));
  let TrumpType = TrumpCard.map(i => i.getAttribute("Type"));

  if (FP__Arrival__Wrapper.innerHTML == "" && SP__Arrival__Wrapper.innerHTML != "") {
    let FP__Cards__Selected = [...FP__Cards].filter(i => i.classList.contains("selected"));
    let SP__Cards__Selected = [...SP__Cards].filter(i => i.classList.contains("selected"));
    let FP__Selected__Card = [...FP__Arrival__Cards].filter(i => i.classList.contains("selected"));
    let SP__Selected__Card = [...SP__Arrival__Cards].filter(i => i.classList.contains("selected"));

    if (FP__Cards__Selected.length == SP__Selected__Card.length) {

      let FP__Value = FP__Cards__Selected.map(i => parseInt(i.getAttribute("Value")));
      let FP__Type = FP__Cards__Selected.map(i => i.getAttribute("Type"));
      let SP__Value = SP__Selected__Card.map(i => parseInt(i.getAttribute("Value")));
      let SP__Type = SP__Selected__Card.map(i => i.getAttribute("Type"));

      let FP__Sum__Value = 0;
      let SP__Sum__Value = 0;

      for (const Value of FP__Value) { FP__Sum__Value += Value };
      for (const Value of SP__Value) { SP__Sum__Value += Value };

      if (FP__Sum__Value > SP__Sum__Value && FP__Type[0] == SP__Type[0] || FP__Sum__Value < SP__Sum__Value || FP__Sum__Value > SP__Sum__Value && FP__Type[0] == TrumpType && SP__Type[0] != TrumpType) {
        for (const I in FP__Cards__Selected) {
          FP__Arrival__Wrapper.appendChild(FP__Cards__Selected[I]);
        }

        setTimeout(() => {
          const FP__NewArrival__Cards = document.querySelectorAll("[FP__Arrival__Wrapper] [player__cards]");
          const SP__NewArrival__Cards = document.querySelectorAll("[SP__Arrival__Wrapper] [player__cards]");

          for (const I in FP__NewArrival__Cards) {
            FP__NewArrival__Cards[I].classList.remove("selected", "rotate");
            SP__NewArrival__Cards[I].classList.remove("selected", "rotate");
            FP__NewArrival__Cards[I].removeAttribute("player__cards");
            SP__NewArrival__Cards[I].removeAttribute("player__cards");
            FP__TakenCards.appendChild(FP__NewArrival__Cards[I]);
            FP__TakenCards.appendChild(SP__NewArrival__Cards[I]);
          }
          document.querySelector("[FP__TakenCards__Count]").textContent = document.querySelectorAll("[FP__TakenCards] .Card").length;
          Dealing__Cards(Cards);
        }, 1000);
      }

      if (document.querySelectorAll("[SP__TakenCards] .Card").length != 0) {
        SP__Btn__FinishIt.classList.add('active');
      } else {
        SP__Btn__FinishIt.classList.remove('active')
      }

      if (document.querySelectorAll("[FP__TakenCards] .Card").length != 0) {
        FP__Btn__FinishIt.classList.add('active');
      } else {
        FP__Btn__FinishIt.classList.remove('active')
      }
      Show__First__Player__Card(true);
    }
  }
}

function SP__Compare__Cards(Cards) {
  let All__Cards = document.querySelectorAll("[All__Cards]");
  let FP__Cards = document.querySelectorAll("[first__player__cards__wrapper] .Cards__Wrapper [player__cards]");
  let SP__Cards = document.querySelectorAll("[Second__player__cards__wrapper] .Cards__Wrapper [player__cards]");

  const FP__Arrival__Wrapper = document.querySelector("[FP__Arrival__Wrapper]");
  const SP__Arrival__Wrapper = document.querySelector("[SP__Arrival__Wrapper]");

  const FP__Arrival__Cards = document.querySelectorAll("[FP__Arrival__Wrapper] [player__cards]");
  const SP__Arrival__Cards = document.querySelectorAll("[SP__Arrival__Wrapper] [player__cards]");

  let TrumpCard = [...All__Cards].filter(i => i.classList.contains("rotate"));
  let TrumpType = TrumpCard.map(i => i.getAttribute("Type"));

  if (SP__Arrival__Wrapper.innerHTML == "" && FP__Arrival__Wrapper.innerHTML != "") {
    let FP__Cards__Selected = [...FP__Cards].filter(i => i.classList.contains("selected"));
    let SP__Cards__Selected = [...SP__Cards].filter(i => i.classList.contains("selected"));
    let FP__Selected__Card = [...FP__Arrival__Cards].filter(i => i.classList.contains("selected"));
    let SP__Selected__Card = [...SP__Arrival__Cards].filter(i => i.classList.contains("selected"));


    if (FP__Cards__Selected.length == FP__Selected__Card.length) {

      let SP__Value = SP__Cards__Selected.map(i => parseInt(i.getAttribute("Value")));
      let SP__Type = SP__Cards__Selected.map(i => i.getAttribute("Type"));
      let FP__Value = FP__Selected__Card.map(i => parseInt(i.getAttribute("Value")));
      let FP__Type = FP__Selected__Card.map(i => i.getAttribute("Type"));

      let SP__Sum__Value = 0;
      let FP__Sum__Value = 0;

      for (const Value of SP__Value) { SP__Sum__Value += Value };
      for (const Value of FP__Value) { FP__Sum__Value += Value };

      if (SP__Sum__Value > FP__Sum__Value && SP__Type[0] == FP__Type[0] || SP__Sum__Value < FP__Sum__Value || SP__Sum__Value > FP__Sum__Value && SP__Type[0] == TrumpType && FP__Type[0] != TrumpType) {
        for (const I in SP__Cards__Selected) {
          SP__Arrival__Wrapper.appendChild(SP__Cards__Selected[I]);
        }

        setTimeout(() => {
          const FP__NewArrival__Cards = document.querySelectorAll("[FP__Arrival__Wrapper] [player__cards]");
          const SP__NewArrival__Cards = document.querySelectorAll("[SP__Arrival__Wrapper] [player__cards]");

          for (const I in SP__NewArrival__Cards) {
            FP__NewArrival__Cards[I].classList.remove("selected", "rotate");
            SP__NewArrival__Cards[I].classList.remove("selected", "rotate");
            FP__NewArrival__Cards[I].removeAttribute("player__cards");
            SP__NewArrival__Cards[I].removeAttribute("player__cards");
            SP__TakenCards.appendChild(FP__NewArrival__Cards[I]);
            SP__TakenCards.appendChild(SP__NewArrival__Cards[I]);
          }
          document.querySelector("[SP__TakenCards__Count]").textContent = document.querySelectorAll("[SP__TakenCards] .Card").length;
          Dealing__Cards(Cards)
        }, 1000);
      }

      if (document.querySelectorAll("[SP__TakenCards] .Card").length != 0) {
        SP__Btn__FinishIt.classList.add('active');
      } else {
        SP__Btn__FinishIt.classList.remove('active')
      }

      if (document.querySelectorAll("[FP__TakenCards] .Card").length != 0) {
        FP__Btn__FinishIt.classList.add('active');
      } else {
        FP__Btn__FinishIt.classList.remove('active')
      }
      Show__First__Player__Card(false);
    }
  }
}

Btn__Start.addEventListener('click', Close__Start__Container)
All__Cards__Wrapper.addEventListener('click', () => Dealing__Cards(Cards));
FP__Btn__CutIt.addEventListener('click', () => FP__Compare__Cards(Cards));
SP__Btn__CutIt.addEventListener('click', () => SP__Compare__Cards(Cards));