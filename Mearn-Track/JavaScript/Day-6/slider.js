"use strict ";

const startBtn = document.querySelector(".startBtn");
const stopBtn = document.querySelector(".stopBtn");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
const imgTag = document.querySelector("#img");
const images = [
  "./1.jpg",
  "./2.jpg",
  "./3.jpg",
  "./4.jpg",
  "./5.jpg",
  "./6.jpg",
];

let currentIndex = 0;
let img;
let isPlaying = false;

const setImg = () => {
  currentIndex < images.length ? currentIndex : (currentIndex = 0);
  imgTag.setAttribute("src", images[currentIndex]);
};

const startShow = () => {
  if (!isPlaying) {
    currentIndex = 0;
    setImg();

    img = setInterval(() => {
      currentIndex++;
      setImg();
    }, 1000);

    isPlaying = true;
  }
};

const stopShow = () => {
  clearInterval(img);
  isPlaying = false;
};

const nextShow = () => {
  isPlaying && stopShow();
  currentIndex++;
  setImg();
};

const prevShow = () => {
  isPlaying && stopShow();
  currentIndex == 0 ? (currentIndex = images.length - 1) : currentIndex--;
  setImg();
};

startBtn.addEventListener("click", startShow);
stopBtn.addEventListener("click", stopShow);
nextBtn.addEventListener("click", nextShow);
prevBtn.addEventListener("click", prevShow);

/*

<!DOCTYPE html>
<html>
<head>
    <style>
        .width {
            width: 55px;
        }

        table {
            float: left;
            margin-right: 10px;
        }

        #td {
            font-family: comic sans ms;
            text-align: center;
            color: white;
            background-color: gray;
            font-size: 9pt;
        }

        #ans {
            width: 100px;
            text-align: right;
        }
    </style>
</head>
<body>
    <table border="7">
        <tr>
            <td colspan="4" id="td"> JavaScript Calculator </td>
        </tr>
        <tr>
            <td colspan="3">
                <input id="Answer" type="text" id="ans">
            </td>
            <td>
                <input type="button" class="width" value="=" onclick="EnterEqual()">
            </td>
        </tr>
        <tr>
            <td>
                <input type="button" class="width" value="1" onclick="EnterNumber(this.value)">
            </td>
            <td>
                <input type="button" class="width" value="2" onclick="EnterNumber(this.value)">
            </td>
            <td>
                <input type="button" class="width" value="3" onclick="EnterNumber(this.value)">
            </td>
            <td>
                <input type="button" class="width" value="+" onclick="EnterOperator(this.value)">
            </td>
        </tr>
        <tr>
            <td>
                <input type="button" class="width" value="4" onclick="EnterNumber(this.value)">
            </td>
            <td>
                <input type="button" class="width" value="5" onclick="EnterNumber(this.value)">
            </td>
            <td>
                <input type="button" class="width" value="6" onclick="EnterNumber(this.value)">
            </td>
            <td>
                <input type="button" class="width" value="-" onclick="EnterOperator(this.value)">
            </td>
        </tr>
        <tr>
            <td>
                <input type="button" class="width" value="7" onclick="EnterNumber(this.value)">
            </td>
            <td>
                <input type="button" class="width" value="8" onclick="EnterNumber(this.value)">
            </td>
            <td>
                <input type="button" class="width" value="9" onclick="EnterNumber(this.value)">
            </td>
            <td>
                <input type="button" class="width" value="*" onclick="EnterOperator(this.value)">
            </td>
        </tr>
        <tr>
            <td>
                <input type="button" class="width" value="C" onclick="EnterClear()">
            </td>
            <td>
                <input type="button" class="width" value="0" onclick="EnterNumber(this.value)">
            </td>
            <td>
                <input type="button" class="width" value="." onclick="EnterNumber(this.value)">
            </td>
            <td>
                <input type="button" class="width" value="/" onclick="EnterOperator(this.value)">
            </td>
        </tr>
    </table>

    <script>
        const answerInput = document.getElementById('Answer');

        function EnterNumber(value) {
            answerInput.value += value;
        }

        function EnterOperator(value) {
            if (answerInput.value === '') {
                if (value === '-') {
                    answerInput.value = value;
                }
            } else if (answerInput.value.charAt(answerInput.value.length - 1) !== '-' && answerInput.value.charAt(answerInput.value.length - 1) !== '+' && answerInput.value.charAt(answerInput.value.length - 1) !== '*' && answerInput.value.charAt(answerInput.value.length - 1) !== '/') {
                answerInput.value += value;
            }
        }

        function EnterEqual() {
            if (answerInput.value === '') {
                return;
            }

            try {
                const result = eval(answerInput.value);
                answerInput.value = result;
            } catch (error) {
                answerInput.value = 'Error';
            }
        }

        function EnterClear() {
            answerInput.value = '';
        }
    </script>
</body>
</html>



*/
