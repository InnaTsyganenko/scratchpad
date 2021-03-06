import React from 'react';

function AboutBaseTag() {

  return (
    <div className="add-theory-block">
      <h2>Почему так важно использовать label</h2>
      <p>Подпись к полю является важной частью для создания лёгких в использовании форм.</p>
      <p>Вот почему:</p>
      <ol>
        <li>Зрячие пользователи смогут видеть инструкции и будут знать, что делать.</li>
        <li>Незрячие пользователи смогут услышать инструкции благодаря использованию скринридеров.</li>
        <li>Пользователи с моторными нарушениями смогут легче найти и активировать элементы с помощью мышки или пальца благодаря увеличению размеров активной области. Это происходит потому, что клик и нажатие пальцем по подписи работает так, будто пользователь кликнул по самому элементу управления.</li>
      </ol>
      <p>Но для меню выбора вида/размера/цвета/количества не нужны подписи, не так ли?</p>
      <p>Нужны, и, к сожалению, довольно часто подписей нет в формах выбора товаров.Вместо подписей здесь используется первое значение из раскрывающегося списка. Пока значение не выбрано это допустимо для хорошо видящих пользователей, но создаёт трудности для пользователей с нарушением зрения или моторных функций. Если значение выбрано, сложности возникают уже у всех типов пользователей.</p>
      <div className="note">Всегда используйте тег label.</div>
      <p>Важно: id должен быть только уникальным на странице, он не должен повторяться в других полях или лейблах. Поэтому зачастую он пишется с префиксом — названием формы, и смысловой частью — значением поля. Получается что-то вроде: id=&quot;personalform-firstname&quot;. Такой id даёт полную информацию о содержании, и он точно будет уникальным, ведь в рамках одной формы поля не повторяются.</p>
      <p>Бывают случаи, когда интерактивные элементы могут существовать на странице и без HTML-формы. Например, на макете ниже в шапке есть поле для поиска по контенту сайта. После окончания ввода предполагается, что запустится некий JavaScript, который выполнит задачу поиска. В этом случае встроенная возможность форм по отправке данных на веб-сервер подменяется инструкциями JavaScript.</p>
      <p>Но если следовать принципам прогрессивного улучшения, это поле для ввода нужно всё-таки обернуть формой, которая работает без JavaScript, JavaScript уже добавит дополнительную функциональность. В этом случае, какой подход выбрать, решать вам, оба варианта рабочие.</p>
      <img src="/img/search-form.png" alt="Поле поиска по контенту сайта" width="250" height="50"></img>
      <p>Разметка может выглядеть так:</p>
      <pre>{`&lt;input type="search" placeholder="Поиск:"&gt;</pre>
Или вариант с прогрессивным улучшением:
<pre>&lt;form action="#" method="POST"&gt;
  &lt;input type="search" placeholder="Поиск:"&gt;
&lt;/form&gt;`}
      </pre>
    </div>
  );
}

export default AboutBaseTag;
