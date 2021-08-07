import {Greeter} from './greeter';

let title: string = 'MeuApp';
let paragraph: string = 'Blablabla';

let counter: number = 0;

let intervalId = setInterval(() => {
  counter = counter + 1;
  const appParagraph: HTMLElement = document.getElementById('app.counter');
  appParagraph.innerHTML = counter + '';
}, 1000);

const btn = document.getElementById('app.btn');
btn.addEventListener('click', alertMethod);
function alertMethod(this: HTMLElement, ev: Event) {
  alert('Alertando pelo Typescript');
}

const appTitle: HTMLElement = document.getElementById('app.title');
appTitle.innerHTML = title;

let greeter = new Greeter("Impiedoso")
const appParagraph: HTMLElement = document.getElementById('app.paragraph');
appParagraph.innerHTML = greeter.getGreeting();
