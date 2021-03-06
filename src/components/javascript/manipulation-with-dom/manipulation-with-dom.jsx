import React from 'react';

function ManipulationWithDOM() {

  return (
    <section className="conspect">
      <h1>Manipulation with DOM</h1>
      <h2>Коллекции</h2>
      <p>Есть несколько способов, чтобы найти сразу несколько элементов на странице. Элементы записываются в структуру, которая называется коллекцией. Коллекцию можно сохранить в переменной.</p>
      <p>Коллекции похожи на массив, но ими не являются. При этом к элементам коллекции можно обращаться по индексу и перебирать в цикле for, как и обычные массивы. Индекс — это порядковый номер элемента в коллекции. Отсчёт начинается с нуля, поэтому у первого элемента индекс 0, а у второго — 1.</p>
      <p>Индексы пишут в квадратных скобках после имени коллекции:</p>
      <pre>{`console.log(elements[0]); // Выведет первый элемент коллекции
console.log(elements[1]); // Выведет второй элемент коллекции`}
      </pre>
      <p>В консоли коллекция выглядит как список, в котором элементы перечислены через запятую. Весь список обёрнут в квадратные скобки, а у элементов указан только их тег и, например, класс.</p>
      <pre>{`[p.card__text, p, p]
<p class="card__text">Готовим мороженое!</p>
<p>Санкт-Петербург</p>
<p>mail@htmlacademy.ru</p> `}
      </pre>
      <p>Способы получения коллекций:</p>
      <p><span className="hl-3">element.querySelectorAll()</span> — возвращает все элементы, которые подходят под указанное правило. Эта запись остаётся статичной и изменения в DOM на неё никак не влияют. Можно сказать, что querySelectorAll работает, как любая переменная, в которую мы записали какое-нибудь значение. Пока мы не переопределим переменную, в ней так и будет находиться то значение, которое мы в неё записали, независимо от того, что происходит в коде. Поэтому такая коллекция называется статичной.</p>
      <p>В консоли рядом с коллекцией выводится NodeList - это тип этой коллекции, такой тип возвращает querySelectorAll и ряд других методов. Особенность такой коллекции в том, что она может содержать не только DOM-элементы вроде li или div, но и перенос строки, текстовое содержимое элементов в качестве отдельных элементов коллекции. NodeList может быть статичной или динамической, это зависит от того, каким способом она вызвана.</p>
      <p><span className="hl-3">parentElement.children</span> — вызывается на родительском элементе и собирает все дочерние элементы в динамическую коллекцию. Такие коллекции реагируют на изменения в DOM. Если один из элементов коллекции будет удалён из DOM, то он пропадёт и из коллекции.</p>
      <p>children возвращает другой тип коллекции — HTMLCollection.</p>
      <p>Такая коллекция содержит только DOM-элементы. Текстовое содержимое или переносы строк не могут попасть в неё в виде отдельных элементов. Все HTMLCollection живые в отличие от NodeList.</p>

      <h2>Работа с элементами</h2>
      <h2>Data-атрибуты</h2>
      <p>В HTML можно создавать свои собственные атрибуты. Имена таких атрибутов начинаются с префикса data-, после которого идёт любое выбранное разработчиком слово.</p>
      <pre>{'<div data-menu-item="Nemesida">'}</pre>
      <p>Чтобы получить значение data-атрибута в JavaScript, используют свойство dataset, после которого указывают имя атрибута без префикса data-:</p>
      <pre>{'элемент.dataset.menuItem'}</pre>
      <p>Если имя атрибута состояло из нескольких слов и в нём были дефисы, то в JavaScript его записывают в «верблюжьем» стиле (по-английски camelCase): дефисы убирают, а каждое слово, кроме первого, пишут с большой буквы.</p>
      <pre>{`let element = document.querySelector('div');
console.log(element.dataset.catName); // Выведет: Кекс`}
      </pre>

      <h3>Удаление элемента</h3>
      <p>Удалять элементы со страницы можно разными способами, один из самых простых — вызов метода remove на элементе, который нужно удалить.</p>
      <pre>{'element.remove();'}</pre>

      <h3>Клонирование элемента</h3>
      <p>Для вставки элементов на страницу можно использовать метод appendChild. Он добавляет указанные элементы в конец родительского блока. В коде вы обнаружите обращение к дочернему элементу шаблона через element.children[0].</p>
      <p>Сравнительно недавно в стандарте появились методы, которые позволяют вставить что угодно и куда угодно:</p>
      <ul>
        <li>node.append(...nodes) – вставляет nodes в конец node,</li>
        <li>node.prepend(...nodes) – вставляет nodes в начало node,</li>
        <li>node.after(...nodes) – вставляет nodes после узла node,</li>
        <li>node.before(...nodes) – вставляет nodes перед узлом node,</li>
        <li>node.replaceWith(...nodes) – вставляет nodes вместо node.</li>
      </ul>
      <p>Мы не можем вставить один элемент несколько раз в разные места страницы. Мы же не можем быть в нескольких местах одновременно? Вот и элементы DOM не могут.</p>
      <p>Для это нужно использовать метод cloneNode. Он возвращает склонированный элемент.</p>
      <pre>{`element.cloneNode(true);
// Вернёт склонированный элемент со всеми вложенностями

element.cloneNode(false);
// Вернёт склонированный элемент без вложенностей

element.cloneNode();
// 0_o`}
      </pre>
      <p>При передаче true в качестве аргумента клонируется сам элемент вместе со всеми вложенностями. Причём клонируются атрибуты, классы и текстовое содержимое всех вложенностей. Такое клонирование называется глубоким.</p>
      <p>Если передать методу в качестве аргумента значение false, то будет скопирован сам элемент со своими классами и атрибутами, но без дочерних элементов.</p>
      <div className="note">Лучше всегда явно передавать аргумент в cloneNode, чтобы избежать ошибок в работе программ.</div>

      <h3>Как получить текст из поля ввода</h3>
      <p>Нужно обратиться к свойству поля ввода value. Оно хранит информацию, введённую в поле. Результат можно сохранить в переменную и использовать дальше в коде.</p>
      <pre>{'input.value;'}</pre>

      <h2>Шаблоны и тег &lt;template&gt;</h2>
      <p>Тег template хранит в себе шаблон для будущих элементов. Он там же, где и вся разметка сайта, только его содержимое не отображается на странице.</p>
      <p>Обычно каждому тегу template дают уникальное название и записывают в атрибут id (идентификатор). Значения этого атрибута не могут повторяться на одной странице. По id можно найти необходимый шаблон.</p>
      <p>Шаблон в разметке:</p>
      <pre>{`<body>
  …
  <template id="text-template">
    <p class="text"></p>
  </template>
</body>`}
      </pre>

      <h3>Контент тега &lt;template&gt;, document-fragment</h3>
      <p>Внутри <span className="hl-7">template</span> находится document-fragment или просто фрагмент. Он является хранилищем содержимого тега <span className="hl-5">template</span>. Именно благодаря ему разметка из template не отображается на странице.</p>
      <p>Чтобы получить необходимые элементы в шаблоне, надо обратиться к <span className="hl-6">document-fragment</span>, он находится в свойстве <span className="hl-8">content</span> и дальше искать нужные элементы привычными методами поиска.</p>
      <p>Если искать элементы через querySelector и другие методы поиска внутри template, то мы не получим нужные нам элементы. Они лежат в свойстве content этого тега. Это свойство и содержит document-fragment, внутри которого уже можно искать привычными методами поиска.</p>
      <p>Если мы хотим найти элемент в шаблоне, надо искать так:</p>
      <pre>{`const template = document.querySelector('#text-template');
// Нашли template в документе

const content = template.content;
// Получили содержимое, фрагмент

const text = content.querySelector('.text');
// Нашли нужный шаблон
Эту запись можно сократить. 
Например, записать в отдельную переменную контент, а в другую искомый шаблон.

const textTemplate = document.querySelector('#text-template').content;
const text = textTemplate.querySelector('.text');`}
      </pre>
      <p>Эту запись можно сократить. Например, записать в отдельную переменную контент, а в другую искомый шаблон.</p>
      <pre>{`const textTemplate = document.querySelector('#text-template').content;
const text = textTemplate.querySelector('.text');`}
      </pre>
      <p>Такая запись удобней, потому что отдельно в коде элемент template обычно не используют. Вся работа ведётся с его контентом и шаблоном, который в этом контенте хранится.</p>
      <p>В шаблоне можно менять текст, классы, а затем добавлять элементы на страницу. Это мы сделаем в следующих шагах. А пока найдём content и внутри него элемент с классом item, который является шаблоном новой задачи.</p>
      <div className="note">Есть ещё один метод в DOM API, который позволяет искать элементы по идентификатору — getElementById. В отличие от других методов он может быть вызван только на всём документе, а не отдельном элементе.</div>

      <h2>Надо запрограммировать приложение — список дел.</h2>
      <ul>
        <li>задача считается выполненной и исчезает, если юзер кликнул по чекбоксу;</li>
        <li>если все задачи выполнены, появляется сообщение, что больше задач нет;</li>
        <li>если в пустой список добавляется новая задача, сообщение исчезает;</li>
        <li>чтобы добавить новую задачу, надо ввести описание в поле ввода и нажать «Добавить задачу», задача появится в конце списка.</li>
      </ul>
      <p>Найдём список и каждую задачу в списке с помощью querySelector и querySelectorAll. Каждая задача состоит из текста и поля с типом checkbox.</p>
      <p>Мы могли бы добавлять событие клика на всю задачу, на весь элемент &lt;li&gt;, но это решение не оптимальное. Пользователь может случайно кликнуть по задаче, не желая её закрывать.</p>
      <p>Поэтому сначала найдём чекбокс внутри каждой задачи, навесим обработчик. У нас много элементов, будем использовать функцию.</p>
      <p>Кстати, почему мы использовали именно функцию, а не добавили обработчик на элемент прямо внутри цикла? Всё дело в областях видимости. Мы уже говорили про замыкания, когда делали галерею в этой главе про события. Если бы мы навесили обработчик внутри цикла, наша программа работала бы некорректно, потому что удалялся бы только последний элемент коллекции элементов.</p>
      <p>Если задачи будут удалены, то и длина коллекции будет равна 0. И тогда можно показать сообщение.</p>
      <p>Для добавления задачи можно ловить клики по этой кнопке, но универсальней будет использовать специальное событие submit. Оно срабатывает всегда при отправке формы. Это событие универсально потому, что иногда форму можно отправить не только кликом по кнопке, но и нажатием какой-то клавиши. Например, «Enter».</p>
      <p>Отправка формы — действие формы по умолчанию, которое нам нужно отменить. Для этого будем использовать evt.preventDefault().</p>
      <p>Запустим цикл, в теле цикла будем клонировать шаблон, менять содержимое дочернего элемента и последовательно вставлять копии на страницу.</p>
      <p>Мы уже нашли шаблон задачи и записали его в переменную newItemTemplate. Попробуем склонировать этот шаблон и записать копию в новую переменную. Выведем копию в консоль, чтобы убедиться, что копирование сработало. Будем использовать глубокое клонирование, чтобы сохранить все элементы в структуре задачи.</p>
      <p>Чтобы задача удалялись, надо повесить обработчик на чекбокс. При изменении статуса чекбокса будем удалять задачу из списка… Ничего не напоминает? Мы уже писали этот код, он есть в функции addCheckHandler. Мы передавали в эту функцию те элементы списка, которые уже были на странице. Теперь у нас есть новый элемент, который до этого не существовал, и его тоже надо передать в эту функцию, чтобы добавить обработчик.</p>
      <p>Мы будем передавать task в функцию addCheckHandler до того, как будем добавлять этот элемент на страницу. Тогда в списке будет появляться элемент с обработчиком и всем необходимым функционалом. Мы как будто сначала настраиваем элемент, а уже затем добавляем его на страницу.</p>
      <p>Осталась пара мелочей. Нужно прятать сообщение, если задачи в списке появились. Для этого добавим ветку else в функцию toggleEmptyListMessage. В ней будем добавлять класс hidden абзацу с сообщением. Будем вызывать эту функцию сразу после того, как задача добавилась в список.</p>
      <p>Ещё будем удалять текст из поля ввода после того, как задача добавилась на страницу. Это маленький, но приятный элемент для пользователей — не нужно каждый раз перед добавлением новой задачи удалять текст руками.</p>
      <p><a href="examples/list-of-tasks/index.html" target="_blank" rel="nofollow noopener noreferrer">Программа: «Список дел»</a></p>
      <p><a href="examples/messenger/index.html" target="_blank" rel="nofollow noopener noreferrer">Программа: «Мессенджер»</a></p>
      <p><a href="#">Result (Likes counter)</a></p>
    </section>
  );
}
export default ManipulationWithDOM;
