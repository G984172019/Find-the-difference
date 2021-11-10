const q = [
  ['高', '髙'],
  ['吉', '𠮷'],
  ['酒', '洒'],
  ['人', '入'],
  ['昴', '昂'],
  ['鳴', '嗚'],
  ['倶', '惧'],
  ['師', '帥'],
  ['狭', '挟'],
  ['壁', '璧']
];
const cells = document.getElementById("cells");
const score = document.getElementById("time");
const stage = document.getElementById("stage");
let start = new Date();
const correct = new Audio('sound/correct.mp3');
const wrong = new Audio('sound/wrong.mp3');