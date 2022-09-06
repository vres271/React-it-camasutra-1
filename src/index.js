import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const testMess = 'Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый кров. Один из проверенных способов это сделать — помочь приюту для животных Домашний. У этих ребят живёт более 1500 четвероногих, и благодаря их труду ежегодно сотни питомцев находят свой новый дом.';

const Data = {
  postsItems: [
    {name:'Привет как дела', message:testMess, likescount: Math.round(100*Math.random())},
    {name:'Я уехал на дачу', message:testMess, likescount: Math.round(100*Math.random())},
    {name:'И вернулся с дачи', message:testMess, likescount: Math.round(100*Math.random())},
    {name:'Невыносимая легкость бытия', message:testMess, likescount: Math.round(100*Math.random())},
    {name:'Как дела у меня', message:testMess, likescount: Math.round(100*Math.random())},
  ]
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App data={Data}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
