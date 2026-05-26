const questionEl = document.getElementById("question");
const buttonsEl = document.getElementById("buttons");
const imageEl = document.getElementById("aki-image");
const spanEl =
  document.getElementById("image-span");
const creditEl =
  document.getElementById("image-credit");

let akiData;
let currentState;

// 画像エラー時
imageEl.onerror = () => {
  imageEl.style.display = "none";
};

fetch("../../db/iphoneAkiFlow.json")
.then(res => res.json())
.then(data => {

  akiData = data;

    // 最初の画面
  showStartScreen();

});

// ===== 開始画面 =====

// ===== 開始画面 =====

// ===== 開始画面 =====

function showStartScreen(){

const randomImages = [

  {
    image: "/pic/iphone/model/iphone1.png",
    span: "iPhone",
    credit: "© Rafael Fernandez (From Wikipedia)/CC BY-SA 4.0"
  },

  {
    image: "/pic/iphone/model/iphone3g.png",
    span: "iPhone 3G",
    credit: "© Rafael Fernandez (From Wikipedia)/CC BY-SA 4.0"
  },

  {
    image: "/pic/iphone/model/iphone3g.png",
    span: "iPhone 3GS",
    credit: "© Rafael Fernandez (From Wikipedia)/CC BY-SA 4.0"
  },

  {
    image: "/pic/iphone/model/iphone4.png",
    span: "iPhone 4",
    credit: "© Rafael Fernandez (From Wikipedia)/CC BY-SA 4.0"
  },

  {
    image: "/pic/iphone/model/iphone4s.png",
    span: "iPhone 4S",
    credit: "© Rafael Fernandez (From Wikipedia)/CC BY-SA 4.0"
  },

  {
    image: "/pic/iphone/model/iphone5.png",
    span: "iPhone 5",
    credit: "© Rafael Fernandez (From Wikipedia)/CC BY-SA 4.0"
  },

  {
    image: "/pic/iphone/model/iphone5c.png",
    span: "iPhone 5c",
    credit: "© Rafael Fernandez (From Wikipedia)/CC BY-SA 4.0"
  },

  {
    image: "/pic/iphone/model/iphone5s.png",
    span: "iPhone 5s",
    credit: "© Rafael Fernandez (From Wikipedia)/CC BY-SA 4.0"
  },

  {
    image: "/pic/iphone/model/iphone6.png",
    span: "iPhone 6",
    credit: "© Rafael Fernandez (From Wikipedia)/CC BY-SA 4.0"
  },

  {
    image: "/pic/iphone/model/iphone6s.png",
    span: "iPhone 6s",
    credit: "© Rafael Fernandez (From Wikipedia)/CC BY-SA 4.0"
  },

  {
    image: "/pic/iphone/model/iphone6plus.png",
    span: "iPhone 6 Plus",
    credit: "© Rafael Fernandez (From Wikipedia)/CC BY-SA 4.0"
  },

  {
    image: "/pic/iphone/model/iphone6splus.png",
    span: "iPhone 6s Plus",
    credit: "© Rafael Fernandez (From Wikipedia)/CC BY-SA 4.0"
  },

  {
    image: "/pic/iphone/model/iphone7.png",
    span: "iPhone 7",
    credit: "© Rafael Fernandez (From Wikipedia)/CC BY-SA 4.0"
  },

  {
    image: "/pic/iphone/model/iphone7plus.png",
    span: "iPhone 7 Plus",
    credit: "© Rafael Fernandez (From Wikipedia)/CC BY-SA 4.0"
  },

  {
    image: "/pic/iphone/model/iphone8.png",
    span: "iPhone 8",
    credit: "© Rafael Fernandez (From Wikipedia)/CC BY-SA 4.0"
  },

  {
    image: "/pic/iphone/model/iphone8plus.png",
    span: "iPhone 8 Plus",
    credit: "© Rafael Fernandez (From Wikipedia)/CC BY-SA 4.0"
  },

  {
    image: "/pic/iphone/model/iphoneX.png",
    span: "iPhone X",
    credit: "© Rafael Fernandez (From Wikipedia)/CC BY-SA 4.0"
  },

  {
    image: "/pic/iphone/model/iphoneXs.png",
    span: "iPhone Xs",
    credit: "© Rafael Fernandez (From Wikipedia)/CC BY-SA 4.0"
  },

  {
    image: "/pic/iphone/model/iphoneXR.png",
    span: "iPhone XR",
    credit: "© Rafael Fernandez (From Wikipedia)/CC BY-SA 4.0"
  },

  {
    image: "/pic/iphone/model/iphone11.png",
    span: "iPhone 11",
    credit: "© Rafael Fernandez (From Wikipedia)/CC BY-SA 4.0"
  },

  {
    image: "/pic/iphone/model/iphone11pro.png",
    span: "iPhone 11 Pro",
    credit: "© Rafael Fernandez (From Wikipedia)/CC BY-SA 4.0"
  },

  {
    image: "/pic/iphone/model/iphonese2.png",
    span: "iPhone SE (第2世代)",
    credit: "© Rafael Fernandez (From Wikipedia)/CC BY-SA 4.0"
  },

  {
    image: "/pic/iphone/model/iphonese.png",
    span: "iPhone SE",
    credit: "© Rafael Fernandez (From Wikipedia)/CC BY-SA 4.0"
  },

  {
    image: "/pic/iphone/model/iphonese3.png",
    span: "iPhone SE (第3世代)",
    credit: "© Rafael Fernandez (From Wikipedia)/CC BY-SA 4.0"
  },

  {
    image: "/pic/iphone/model/iphone12.png",
    span: "iPhone 12",
    credit: "© Rafael Fernandez (From Wikipedia)/CC BY-SA 4.0"
  },

  {
    image: "/pic/iphone/model/iphone12pro.png",
    span: "iPhone 12 Pro",
    credit: "© Rafael Fernandez (From Wikipedia)/CC BY-SA 4.0"
  },

  {
    image: "/pic/iphone/model/iphone13.png",
    span: "iPhone 13",
    credit: "© Rafael Fernandez (From Wikipedia)/CC BY-SA 4.0"
  },

  {
    image: "/pic/iphone/model/iphone13pro.png",
    span: "iPhone 13 Pro",
    credit: "© Rafael Fernandez (From Wikipedia)/CC BY-SA 4.0"
  },

  {
    image: "/pic/iphone/model/iphone14.png",
    span: "iPhone 14",
    credit: "© Rafael Fernandez (From Wikipedia)/CC BY-SA 4.0"
  },

  {
    image: "/pic/iphone/model/iphone14pro.png",
    span: "iPhone 14 Pro",
    credit: "© Rafael Fernandez (From Wikipedia)/CC BY-SA 4.0"
  },

  {
    image: "/pic/iphone/model/iphone15.png",
    span: "iPhone 15",
    credit: "© Rafael Fernandez (From Wikipedia)/CC BY-SA 4.0"
  },

  {
    image: "/pic/iphone/model/iphone15pro.png",
    span: "iPhone 15 Pro",
    credit: "© Rafael Fernandez (From Wikipedia)/CC BY-SA 4.0"
  },

  {
    image: "/pic/iphone/model/iphone16.png",
    span: "iPhone 16",
    credit: "© Rafael Fernandez (From Wikipedia)/CC BY-SA 4.0"
  },

  {
    image: "/pic/iphone/model/iphone16pro.png",
    span: "iPhone 16 Pro",
    credit: "© Rafael Fernandez (From Wikipedia)/CC BY-SA 4.0"
  },

  {
    image: "/pic/iphone/model/iphone16e.png",
    span: "iPhone 16e",
    credit: "© Rafael Fernandez (From Wikipedia)/CC BY-SA 4.0"
  },

  {
    image: "/pic/iphone/model/iphone17.png",
    span: "iPhone 17",
    credit: "© Rafael Fernandez (From Wikipedia)/CC BY-SA 4.0"
  },

  {
    image: "/pic/iphone/model/iphone17pro.png",
    span: "iPhone 17 Pro",
    credit: "© Rafael Fernandez (From Wikipedia)/CC BY-SA 4.0"
  },

  {
    image: "/pic/iphone/model/iphoneair.png",
    span: "iPhone Air",
    credit: "© Rafael Fernandez (From Wikipedia)/CC BY-SA 4.0"
  },

  {
    image: "/pic/iphone/model/iphone17e.png",
    span: "iPhone 17e",
    credit: "© Rafael Fernandez (From Wikipedia)/CC BY-SA 4.0"
  }

];

  const random =
    randomImages[
      Math.floor(
        Math.random() *
        randomImages.length
      )
    ];

  // 画像
  imageEl.src = random.image;

  imageEl.style.display = "block";

  // span
  if(random.span){

    spanEl.textContent =
      random.span;

    spanEl.style.display =
      "block";

  }else{

    spanEl.style.display =
      "none";

  }

  // credit
  if(random.credit){

    creditEl.textContent =
      random.credit;

    creditEl.style.display =
      "block";

  }else{

    creditEl.style.display =
      "none";

  }

  questionEl.innerHTML = `
    <div class="start-title">



    <div class="start-text">
      いくつかの質問で<br>
      君のiPhoneを特定するよ！✨
    </div>
  `;

  buttonsEl.innerHTML = `
    <button class="start-btn">
      ▶ 開始する
    </button>
  `;

  document
    .querySelector(".start-btn")
    .onclick = () => {

      currentState = akiData.start;

      renderState(currentState);

    };

}

  currentState = akiData.start;

  renderState(currentState);



function renderState(stateId){

  const state = akiData.states[stateId];

  // ===== 画像 =====

if(state.image){

  imageEl.src = state.image;

  imageEl.style.display = "block";

  // 反転
  if(state.invert){

    imageEl.classList.add("invert");

  }else{

    imageEl.classList.remove("invert");

  }

}else{

  imageEl.style.display =
    "none";

  imageEl.classList.remove("invert");

}


// span
if(state.span){

  spanEl.textContent =
    state.span;

  spanEl.style.display =
    "block";

}else{

  spanEl.style.display =
    "none";

}


// credit
if(state.credit){

  creditEl.textContent =
    state.credit;

  creditEl.style.display =
    "block";

}else{

  creditEl.style.display =
    "none";

}
  // ===== 結果 =====

  if(state.result){

    const confirms =
      akiData.confirmMessages || [];

    let message =
      `もしかして ${state.result} ?`;

    if(confirms.length > 0){

      const random =
        confirms[
          Math.floor(Math.random() * confirms.length)
        ];

      message =
        random.replace(
          "{result}",
          state.result
        );

    }

    questionEl.innerHTML = `
      <div class="result">
        ${message}
      </div>
    `;

    buttonsEl.innerHTML = `
      <button class="aki-btn yes-btn">
        合ってる！
      </button>

      <button class="aki-btn no-btn">
        違う...
      </button>
    `;

    // ===== 合ってる =====

    document
      .querySelector(".yes-btn")
      .onclick = () => {

        questionEl.innerHTML = `
          <div class="result">

             ${
              state.comment
              ? `
              <div class="comment">COMMENT</div>
                <div class="result-comment">
                ${state.result}:<br>
                  ${state.comment}
                </div>
              `
              : ""
            }

            <br>

            <div class="success-message">
              ( ˶¯ ꒳¯˵)⟡ふふ〜ん！特定完了〜！<br>
              君のiPhoneは<br><br>

              <strong>
                ${state.result}
              </strong>

              <br><br>

              なんだね！✨
            </div>

           

          </div>
        `;

        buttonsEl.innerHTML = `
          <button class="restart-btn">
            🔄 もう一回
          </button>

          <button class="othergame-btn">
            🎮 ほかのゲームも見る
          </button>
        `;

        document
          .querySelector(".restart-btn")
          .onclick = restart;

        document
          .querySelector(".othergame-btn")
          .onclick = () => {

            location.href = "../../index.html";

          };

      };

    // ===== 違う =====

    document
      .querySelector(".no-btn")
      .onclick = () => {

        questionEl.innerHTML = `
          <div class="result">
            （T^T）えー違うのー？残念...<br>
          </div>
        `;

        buttonsEl.innerHTML = `
          <button class="restart-btn">
            🔄 もう一回やる
          </button>
        `;

        document
          .querySelector(".restart-btn")
          .onclick = restart;

      };

    return;
  }

  // ===== 質問 =====

  questionEl.textContent = state.question;

  buttonsEl.innerHTML = "";

  Object.keys(state.options).forEach(label => {

    const btn = document.createElement("button");

    btn.className = "aki-btn";

    btn.textContent = label;

    btn.onclick = () => {

      currentState = state.options[label];

      renderState(currentState);

    };

    buttonsEl.appendChild(btn);

  });

}

function restart(){

  currentState = akiData.start;

   showStartScreen();

}