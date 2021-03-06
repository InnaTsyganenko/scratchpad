import React from 'react';

function Properties() {

  return (
    <section className="conspect">
      <h2>Свойство children, дочерние элементы</h2>
      <p>Мы можем найти элементы не только через querySelectorAll, но и с помощью свойства children</p>
      <p>Обращение к свойству выглядит так: DOM-элемент.children. Это свойство возвращает коллекцию дочерних, то есть вложенных, DOM-элементов.</p>

      <h2>Свойство textContent</h2>
      <p>У каждого элемента имеется множество свойств: его размеры, цвет и так далее. Свойство textContent хранит в себе текстовое содержимое элемента, которое можно не только прочитать, но и записать или перезаписать. Свойствам можно присваивать новые значения:</p>
      <pre>{`
// HTML
<p>Я — <em>текстовый элемент</em>.</p>

// JS
var p = document.querySelector('p');
console.log(p.textContent);
// Выведет: Я — текстовый элемент.


let paragraph = document.querySelector('p');
paragraph.textContent = 'Здесь был Кекс. Мяу!';
`}
      </pre>
      <p>Обратите внимание, что строки с текстом нужно заключать в кавычки.</p>
      <p>Когда мы присваиваем свойству textContent новое значение, оно полностью заменяет собой старое.</p>
      <p>Как и в случае с переключением классов, JavaScript не влияет на исходную разметку, а меняет текст прямо в браузере пользователя.</p>
      <p>Свойство textContent предназначено только для текста, если записать туда HTML-теги, браузер их не поймёт.</p>

      <h2>Свойство src, адрес изображения</h2>
      <p>Чтобы картинка отобразилась на странице, нужно задать ей адрес файла с изображением, то есть значение атрибута src. Значением этого атрибута можно управлять с помощью одноимённого свойства DOM-элемента:</p>
      <pre>{`
var picture = document.createElement('img');
picture.src = 'images/picture.jpg'
`}
      </pre>
      <p>Таким же образом добавим изображению альтернативный текст, то есть описание фотографии.</p>
      <pre>{`
picture.alt = 'Непотопляемая селфи-палка';
`}
      </pre>

      <h2>Свойство value</h2>
      <p>У полей ввода есть особое свойство — value. Оно хранит данные, введённые в поле. Мы можем вывести их прямо на страницу:</p>
      <pre>{`<code>let input = document.querySelector('input'); //Получаем данные из поля ввода с помощью input.value
      paragraph.textContent = input.value; // вывести данные из поля ввода прямо на страницу.</code>`}
      </pre>
      <p>Представим, что у нас на странице есть абзац, который мы нашли и сохранили в переменную paragraph.</p>
      <p>И теперь то, что ввёл пользователь в поле input, отобразится на странице как текстовое содержимое элемента paragraph.</p>
      <p>В нашем случае пользователь вводит свой адрес в поле с классом subscription-email.</p>
      <p>Найдём его и скажем JavaScript вывести полученные данные на страницу.</p>
      <p>Почему бы не прочитать текст из поля ввода с помощью textContent? Если мы попытаемся это сделать, то получим пустую строку.</p>
      <p>Для JavaScript поля формы не имеют текстового содержимого, их значения хранятся именно в value.</p>

      <h2>Свойство length</h2>
      <p>Узнать длину строки можно с помощью свойства length (по-английски «длина»). Значение этого свойства равно числу символов в строке. Символами считаются не только буквы и цифры, но также пробелы и переносы строки.</p>
      <pre>{`let text = 'Я люблю JavaScript';
console.log(text.length); // Выведет: 18

let textarea = document.querySelector('textarea');
console.log(textarea.value); // Выведет: Кекс
console.log(textarea.value.length); // Выведет: 4`}
      </pre>

      <h2>Свойство disabled</h2>
      <p>Блокировать и разблокировать кнопку в JavaScript можно, присваивая булевы значения свойству disabled (по-английски значит «отключён») этой кнопки. Если присвоено значение true, то кнопка заблокирована, а если false — разблокирована.</p>
      <pre>{`let button = document.querySelector('button');

// Блокирует кнопку
button.disabled = true;

// Разблокирует кнопку
button.disabled = false;`}
      </pre>
    </section>
  );
}
export default Properties;
