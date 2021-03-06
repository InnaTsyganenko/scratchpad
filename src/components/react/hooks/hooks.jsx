import React from 'react';

function Hooks() {

  return (
    <section className="conspect">
      <h1>Hooks</h1>
      <h2>Состояние</h2>
      <p>Как только в нашем приложении появляются изменяемые данные, мы сталкиваемся с необходимостью хранения, обновления и отслеживания изменений таких данных. Для этих целей в приложении заводят состояние.</p>
      <p>Состояние — набор атрибутов, определяющих поведение объекта. <span className="hl-2">Последовательная смена состояний объекта называется процессом.</span></p>
      <p>В зависимости от состояния объекты могут изменять своё поведение. Состояние описывает именно изменяющиеся данные. Хранить в состоянии статичные данные не имеет никакого смысла.</p>
      <p>В программировании состояние имеет огромное значение, ведь на обновление состояния одного объекта могут отреагировать множество различных функций.</p>
      <p>Для примера, возьмём форму регистрации на сайте. Допустим изначально форма пустая. Заполнение полей приводит к изменению состояния этих полей и, как следствие, всей формы. Если какое-то из полей заполнено неверно, может появиться всплывающая подсказка или подсветка поля. Кнопка отправки формы может быть заблокирована до тех пор, пока пользователь не заполнит обязательные поля. А после нажатия на кнопку отправки, может появиться лоадер, показывающий, что форма отправляется.</p>
      <p>Все эти обновления могут повлиять не только на саму форму, но и на состояние сайта в целом. Например, после регистрации пользователю могут стать доступны новые разделы сайта, а в шапке вместо ссылки на форму регистрации появится ссылка на профиль пользователя.</p>
      <p>Изменение состояния объекта — это изменение его свойств. Любое взаимодействие с сайтом, приложением, изменяет состояния того или иного объекта (компонента). Изменение состояния объекта может привести не только к изменению внешнего вида (представления) или поведения этого объекта, но и к изменению других, связанных с ним, объектов.</p>

      <h2>Виды компонентов</h2>
      <p>В первых модулях мы познакомились с функциональными компонентами (Functional Component) или, как их часто называют, простыми компонентами.</p>
      <pre>{`
const GreetingComponent = () => {
  return <div>Hello, world!</div>;
};
Однако, React-компоненты можно описывать и с помощью классов (Class Component),
их часто называют сложными компонентами.

class GreetingComponent extends React.Component {
  render() {
      return <div>Hello, world!</div>;
  }
}`}
      </pre>
      <p>Для React эти два компонента одинаковы. Название «сложные» класс-компоненты получили из-за дополнительных возможностей — жизненных циклов и возможности хранения состояния.</p>
      <p>Поэтому в рамках курса мы будем оперировать двумя терминами: компонент с состоянием (Statefull component) и компонент без состояния (Stateless component). Первые — всегда классы, вторыми могут быть и функциональные, и класс-компоненты, но обычно это функции.</p>
    </section>
  );
}
export default Hooks;
