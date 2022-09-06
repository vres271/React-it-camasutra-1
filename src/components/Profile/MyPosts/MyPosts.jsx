import css from './MyPosts.module.css'
import Post from './Post/Post';

const testMess = 'Мы любим животных и стараемся поддерживать тех из них, кому не посчастливилось иметь ласковых хозяев и тёплый кров. Один из проверенных способов это сделать — помочь приюту для животных Домашний. У этих ребят живёт более 1500 четвероногих, и благодаря их труду ежегодно сотни питомцев находят свой новый дом.';
let postsItems = [
  {name:'Привет как дела', message:testMess, likescount: Math.round(100*Math.random())},
  {name:'Я уехал на дачу', message:testMess, likescount: Math.round(100*Math.random())},
  {name:'И вернулся с дачи', message:testMess, likescount: Math.round(100*Math.random())},
  {name:'Невыносимая легкость бытия', message:testMess, likescount: Math.round(100*Math.random())},
  {name:'Как дела у меня', message:testMess, likescount: Math.round(100*Math.random())},
];
const MyPosts = ()=>{

  return (
      <div className={css.posts}>
        <h2>My posts</h2>
        <div className="">
          <div className=""><textarea name="" id="" cols="30" rows="10"></textarea></div>
          <div className=""><button>Button</button></div>
        </div>
        <div>New post</div>
        <div className={css.posts_block}>
          {postsItems.map((item,key)=><Post name={item.name} message={item.message} likescount={item.likescount} key={key}/>)}
        </div>
      </div>
  );
}

export default MyPosts;