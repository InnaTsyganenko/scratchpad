import React from 'react';

function Arrays() {

  return (
    <section className="conspect">
      <h1>Массивы</h1>
      <p><a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array" target="_blank" rel="noopener noreferrer">MDN. Array</a></p>
      <p><a href="https://habr.com/ru/company/ruvds/blog/413169/" target="_blank" rel="noopener noreferrer">Полезные методы массивов и объектов в JavaScript</a></p>
      <div className="note">Объекты и массивы лучше объявлять через <abbr data-title="Литерал (англ. literal) — запись в исходном коде компьютерной программы, представляющая собой фиксированное значение(константа). Литералами также называют представление значения некоторого типа данных">литералы</abbr> (то есть объявить с помощью скобок, квадратных у массива и фигурных у объекта).</div>
      <div className="warn">Разница между объектом и массивом в упорядоченности ключей и в форме записи. В объекте не гарантируется такая же последовательность ключей, как она была задана, а в массиве будет такая же последовательность как и указали в начале.</div>
      <p>Массив — список элементов. У каждого из них есть порядковый номер. Массивы и чтение из них выглядят так:</p>
      <pre>{`// Массив чисел
var array = [10, 20, 30, 40, 50];

// Читаем элементы из массива по индексу (порядковому номеру)
console.log(array[0]); // Выведет: 10
console.log(array[3]); // Выведет: 40`}
      </pre>

      <h2>Как скопировать исходный массив</h2>
      <p>Так как массивы передаются по ссылке, то просто сохранить в переменную не получится.</p>
      <ol>
        <li>метод slice
          <pre>{`this.#points = points;
    this.#sourcedPoints = points.slice();

    #sortPoints = (sortType) => {
      switch (sortType) {
        case SortType.TIME:
          this.#points.sort((a, b) => b.duration - a.duration);
          break;
        case SortType.PRICE:
          this.#points.sort((a, b) => b.price - a.price);
          break;
        default:
          this.#points = [...this.#sourcedPoints]; // вернётся исходный массив
      }

      this.#currentSortType = sortType;
    }

    или
    get points() {
      this.#filterType = this.#filterModel.filter;
      const points = this.#pointsModel.points.slice(0, this.#pointsModel.points.length - 1);
      const filteredPoints = filter[this.#filterType](points);

      switch (this.#currentSortType) {
        case SortType.TIME:
          return filteredPoints.sort((a, b) => b.duration - a.duration);
        case SortType.PRICE:
          return filteredPoints.sort((a, b) => b.price - a.price);
      }

      return filteredPoints;
    }`}
          </pre>
        </li>
        <li>Оператор spread
          <pre>{`this.#points = points;
    this.#sourcedPoints = [...points];

    #sortPoints = (sortType) => {
      switch (sortType) {
        case SortType.TIME:
          this.#points.sort((a, b) => b.duration - a.duration);
          break;
        case SortType.PRICE:
          this.#points.sort((a, b) => b.price - a.price);
          break;
        default:
          this.#points = [...this.#sourcedPoints]; // вернётся исходный массив
      }

      this.#currentSortType = sortType;`}
          </pre>
        </li>
      </ol>

      <h3>Массивы в ES2015</h3>
      <p>В ES2015 появились новые способы объявления массивов. Если раньше мы могли создавать массив или через конструктор Array, или через литерал массива [ ] (квадратные скобки), то теперь у нас появились ещё три метода: Array.from, Array.of и операторы spread и rest.</p>

      <h2>Методы массивов</h2>

      <h3>Метод push</h3>
      <p>Этот метод добавляет переданные ему элементы в конец указанного массива.</p>
      <h3>Array.prototype.join()</h3>
      <p>Метод join() объединяет все элементы массива (или массивоподобного объекта) в строку.</p>

      <h3>Array.from</h3>
      <p>Array.from используется для создания массивов на основании других перечисляемых объектов. Например, если у вас есть результат работы функции querySelectorAll (HTMLElementsList), вы можете превратить её в обычный массив одной короткой строкой.</p>
      <pre>{`const allDivs = Array.from(document.querySelectorAll(div));

Создадим массив, содержащий удвоенные значения элементов исходного числового массива.

const doubledValues = Array.from([2, 4, 6], number => number * 2);
// в массив doubleValues будут записаны следующие данные: [4, 8, 12]`}
      </pre>

      <h3>Array.of</h3>
      <p>Array.of используется для создания массива на основе набора отдельных значений. Его синтаксис похож на синтаксис Array.from, только разница в том, что каждый элемент нового массива нужно передавать как отдельный аргумент.</p>
      <pre>
        const numbers = Array.of(1, 2, 3); // [1, 2, 3]
      </pre>

      <h3>Цикл for of</h3>
      <p>Цикл — это конструкция, которая позволяет выполнить код несколько раз.</p>
      <p>Цикл for of выполнит код из фигурных скобок столько раз, сколько элементов содержится в коллекции, указанной в круглых скобках. Каждое такое повторение называется итерацией.</p>
      <p>Ещё одна новинка в синтаксисе ES2015, это новый способ перебора всех элементов с помощью цикла for. Если в ES5 для того, чтобы перебрать массив с помощью цикла for приходилось придумывать много абстракций, таких как счётчик массива, который изменяет своё значение от 0 до длины массива минус один или текущий элемент, который равен элементу массива, индекс которого совпадает со счётчиком, то теперь можно перебрать массив гораздо проще.</p>
      <pre>{`for (переменная of коллекция) {
  // Код, который нужно выполнить несколько раз
}`}
      </pre>
      <p>При создании цикла в круглых скобках также нужно указать переменную. Обычно для этого объявляют новую переменную и используют её только внутри цикла. На каждой итерации JavaScript будет автоматически записывать в эту переменную очередной элемент коллекции.</p>
      <pre>{`let elements = document.querySelectorAll('p'); // Находим все абзацы

for (let element of elements) {  // Создаём цикл и переменную
  console.log(element);          // Выводим элементы в консоль
}`}
      </pre>
      <pre>{`const friends = ['Joey', 'Chandler', 'Ross', 'Rachel', 'Monica', 'Phoebe'];

for (const friend of friends) {
  console.log('Hello, &dollar;{friend}');
}`}
      </pre>
      <p>Этот синтаксис отличается от привычного нам for тем, что for..of делает всё за нас: нам не нужно следить за переполнением счётчика, да и вообще не нужно заводить счётчик; переменная с текущим элементом создаётся сама, нам не нужно искать его в массиве по индексу; цикл завершается без нашего участия. В остальном, это такой же цикл. Например, в нём точно так же, как в обычном цикле можно пропускать итерации с помощью конструкции continue или завершать цикл принудительно с помощью конструкции break.</p>
      <p>Интересная особенность цикла for..of в том, что с помощью него можно перебирать не только массивы, но и другие перечисляемые структуры данных, так называемые Iterable-структуры. В ES2015 к ним относятся массивы, все виды коллекций, Set, Map и другие.</p>

      <h3>Перебор значений массива <span className="hl-6">forEach</span></h3>
      <p>Можно воспользоваться операторами циклов for или while, или сделать тоже самое с помощью метода forEach.</p>
      <p>Метод forEach позволяет выполнить произвольную функцию однократно для каждого элемента. Попросту говоря: он запускает перебор значений массива и для каждого значения выполняет функцию. Рассмотрим пример:</p>
      <pre>{`const fruits = ['banana', 'apple', 'lemon', 'orange'];

fruits.forEach((value, index, array) => { // value — текущий элемент массива;
                                            index — порядковый номер текущего элемента массива;
                                            array — ссылка на сам массив.
  console.log(value);
});

// Выведет:
// banana
// apple
// lemon
// orange`}
      </pre>
      <p>Если вам не требуется порядковый номер элемента в массиве или как-то взаимодействовать с массивом, то соответствующие параметры в функции можно не определять и воспользоваться более сокращённой записью:</p>
      <pre>{`fruits.forEach((value) => {
console.log(value);
});`}
      </pre>
      <p>При использовании метода forEach стоит помнить одну важную деталь: работу метода нельзя остановить. Оператор break не поможет. Поэтому если вам требуется перебрать только часть массива, то forEach следует отодвинуть в сторонку, и воспользоваться циклом for.</p>

      <h3>Преобразование массива <span className="hl-4">map</span></h3>
      <p>Результатом выполнения метода map будет новый массив, собранный из значений, которые вернёт функция, переданная в качестве параметра методу map.</p>
      <p>Кстати, параметры метода map такие же, как у forEach — currentValue, index, array. Выходит, что метод map похож на forEach. Только он позволяет не просто перебрать все значения массива, а получить новый массив значений.</p>
      <p>Метод map удобно использовать, когда требуется трансформировать массив, то есть создать новый массив на основе существующего.</p>
      <p>Предположим у нас есть массив films с фильмами. Каждый фильм описан в виде объекта с двумя ключами: id и title.</p>
      <pre>{`const films = [
{
  id: 0,
  title: 'Die hard'
},
{
  id: 1,
  title: 'Terminator'
}
];`}
      </pre>
      <p>Наша задача заключается в получении массива, который будет содержать только названия фильмов, мы должны получить массив вида: [&apos;Die hard&apos;, &apos;Terminator&apos;].</p>
      <pre>{`Способ с forEach:

const titles = [];

films.forEach((film, index) => {
  titles[index] = film.title;
});


Способ с map:

const titles = films.map((film) => film.title);

Оба способа вернут:
console.log(titles); // ["Die hard", "Terminator"]`}
      </pre>

      <h3>Сгладить результат в новый массив <span className="hl-5">flatMap</span></h3>
      <p>Этот метод применяет функцию к каждому элементу массива, а затем сглаживает результат в новый массив. Он объединяет метод flat() и метод map() в одну функцию.</p>
      <pre>{`const myAwesomeArray = [[1], [2], [3], [4], [5]]

myAwesomeArray.flatMap(arr => arr * 10)
//-------> Output : [10, 20, 30, 40, 50]

// With .flat() and .map()
myAwesomeArray.flat().map(arr => arr * 10)
//-------> Output : [10, 20, 30, 40, 50]`}
      </pre>

      <h3>Перевернуть массив <span className="hl-2">reverse</span></h3>
      <pre>{`const numbers = [0, 1, 2, 3, 4];
const reverseNumbers = numbers.reverse();
console.log(reverseNumbers); // [4, 3, 2, 1, 0]`}
      </pre>
      <p>Метод вернёт новый массив, который будет состоять из элементов, расположенных в обратном порядке.</p>

      <h3>Найти индекс в массиве <span className="hl-8">findIndex</span></h3>
      <p>Этот метод принимает функцию в качестве параметра и в дальнейшем применяет ее к массиву. Он возвращает индекс найденного элемента, если элемент удовлетворяет условию проверяющей функции, переданной в качестве аргумента. Если не удовлетворяет, возвращается –1.</p>
      <pre>{`const myAwesomeArray = [
  { id: 1, name: "john" },
  { id: 2, name: "Ali" },
  { id: 3, name: "Mass" },
]

myAwesomeArray.findIndex(element => element.id === 3)
//-------> Output : 2

myAwesomeArray.findIndex(element => element.id === 7)
//-------> Output : -1`}
      </pre>

      <h3>Отфильтровать массив <span className="hl-7">filter</span></h3>
      <p>Этот метод принимает функцию в качестве параметра и возвращает новый массив, содержащий все элементы массива, для которого функция фильтрации передавалась в качестве аргумента, и возвращает ее со значением true.</p>
      <pre>{`const myAwesomeArray = [
  { id: 1, name: "john" },
  { id: 2, name: "Ali" },
  { id: 3, name: "Mass" },
  { id: 4, name: "Mass" },
]

myAwesomeArray.filter(element => element.name === "Mass")
//-------> Output : 0:{id: 3, name: "Mass"},
//                  1:{id: 4, name: "Mass"}`}
      </pre>

      <h3>Склеить массивы <span className="hl-7">concat</span></h3>
      <p>Этот метод объединяет два или более массива/значения и возвращает новый массив.</p>
      <pre>{`const myAwesomeArray = [1, 2, 3, 4, 5]
const myAwesomeArray2 = [10, 20, 30, 40, 50]
myAwesomeArray.concat(myAwesomeArray2)
//-------> Output : [1, 2, 3, 4, 5, 10, 20, 30, 40, 50]`}
      </pre>

      <h3>Проверка на содержание значения <span className="hl-1">includes</span></h3>
      <h4>includes - для примитивных значений (строка, число, логическое значение, символ и специальное значение undefined).</h4>
      <p>Он похож на метод .some(), но он проверяет не соответствие элементов массива некоему условию, а наличие в массиве заданного при его вызове значения.</p>
      <p>Этот метод возвращает значение true, если массив содержит определенный элемент, и значение false — если нет.</p>
      <p>array.includes(value, fromIndex) также принимает необязательный второй аргумент, чтобы начать поиск значения, начиная с индекса.</p>
      <pre>{`const myAwesomeArray = [1, 2, 3, 4, 5]
myAwesomeArray.includes(3) // => true
myAwesomeArray.includes(8) //=> false

const greetings = ['hi', 'hello'];
greetings.includes('hi');  // => true
greetings.includes('hey'); // => false

const letters = ['a', 'b', 'c', 'd'];
letters.includes('c', 1); // => true
letters.includes('a', 1); // => false`}
      </pre>
      <p>Также includes методом можно определить содержит ли массив ссылку на объект:</p>
      <pre>{`const greetings = [{ message: 'hi' }, { message: 'hello' }];
const toSearch = greetings[0];
greetings.includes(toSearch); // => true`}
      </pre>
      <p>Но поиск по содержимому этим способом не выполнить. Искать по содержимому можно с помощью some.</p>

      <h3>Проверить значение массива <span className="hl-9">some</span></h3>
      <p>С его помощью можно проверить присутствует ли в массиве элемент, который удовлетворяет определённому условию. Результатом выполнения метода some будет true или false.</p>
      <p>Метод some перебирает элементы массива и для каждого элемента вызывает переданную функцию. Метод some будет вызывать функцию для каждого элемента, пока она не вернёт true. Как только это случится, метод some прервёт работу и вернёт в качестве результата значение true.</p>
      <p>Если для всех элементов массива переданная функция вернёт false, тогда результатом some станет false.</p>
      <p>У метода some есть одна особенность. Если вызвать его на пустом массиве, то результатом всегда будет false.</p>
      <pre>{`const numbers = [1, 4, 10, 5];

const isExistsOverFive = numbers.some((value) => {
  return value > 5; // Проверяем каждый элемент, больше ли он, чем 5
}); // Когда some дойдёт до 10, то прекратит работу и вернёт true

const isExistsOverTwenty = numbers.some((value) => {
  return value > 20; // Проверяем каждый элемент, больше ли он, чем 20
}); // some пройдёт все элементы, они все меньше 20, поэтому он вернёт false`}
      </pre>

      <h3>Проверить элементы массива <span className="hl-10">every</span></h3>
      <p>Если метод some позволяет убедиться, что хотя бы один элемент массива удовлетворяет условию, то при помощи метода every можно проверить, что условию соответствуют все элементы массива. Результатом вызова метода every будет булево значение: true или false.</p>
      <p>Метод every так же аргументом принимает функцию, которая будет вызываться для каждого элемента до тех пор, пока при проверке условия не вернётся false. В таком случае метод every прекратит выполнение и вернёт false. Если для каждого элемента массива будет возвращено значение true, то результатом метода every также станет true:</p>
      <pre>{`const numbers = [11, 12, 13, 15, 100];

const isEveryNumberOverTen = numbers.every((value) => {
  return value > 10;
}); // every вернёт true, потому что все элементы массива больше 10`}
      </pre>
      <p>Если вызвать его на пустом массиве, то результатом всегда будет true.</p>

      <h3>Поиск элемента <span className="hl-7">find</span></h3>
      <p>Этот метод принимает функцию в качестве аргумента и в дальнейшем применяет ее к массиву. Он возвращает значение элемента, найденного в массиве, если элемент удовлетворяет условию проверяющей функции. В противном случае оно возвращается со значением undefined.</p>
      <p>Метод find <span className="hl-10">возвращает объект из массива объектов</span>. Рассмотрим на примере поиска фильма в массиве:</p>
      <pre>{`const myAwesomeArray = [
  { id: 1, name: "john" },
  { id: 2, name: "Ali" },
  { id: 3, name: "Mass" },
]

myAwesomeArray.find(element => element.id === 3)
//-------> Output : {id: 3, name: "Mass"}

myAwesomeArray.find(element => element.id === 7)
//-------> Output : undefined



const films = [
{
  id: 0,
  title: 'Die hard'
},
{
  id: 1,
  title: 'Terminator'
}
];

const terminatorFilm = films.find((film) => {
return film.title === 'Terminator';
});

console.log(terminatorFilm); // { id: 1, title: "Terminator" }`}
      </pre>
      <p>Но что вернёт функция, если в массиве есть несколько элементов, удовлетворяющих условию? Ответ прост: первый элемент, который соответствует условию. После этого работа метода будет прервана. А если метод find не найдёт ни одного элемента, удовлетворяющего условию, функция вернёт undefined.</p>

      <h3>Свернуть массив <span className="hl-4">reduce</span></h3>
      <p><a href="https://habr.com/ru/post/483182/" target="_blank" rel="noopener noreferrer">Пять интересных способов использования Array.reduce() (и один скучный путь)</a></p>
      <p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce" target="_blank" rel="noopener noreferrer">MDN. Array.prototype.reduce()</a></p>
      <p>Сворачивает массив, то есть из набора значений позволяет получить одно. Это значение может быть произвольного типа. За счёт этой возможности, метод reduce становится мощным инструментом, позволяющим решить множество разных задач.</p>
      <pre>{'array.reduce(callback[, initialValue]);'}</pre>
      <p>Первым параметром метод принимает функцию, а вторым начальное значение аккумулятора (опционально). Аккумулятором называют результирующее значение.</p>
      <p>Теперь разберём параметры функции:</p>
      <pre>{'array.reduce(function (accumulator, currentValue, index, array) {});'}</pre>
      <p>Их аж четыре:</p>
      <ul>
        <li>accumulator — тот самый аккумулятор или промежуточное значение. Через этот параметр вы сможете получить предыдущий результат выполнения функции;</li>
        <li>currentValue — текущий элемент массива;</li>
        <li>index — порядковый номер текущего элемента;</li>
        <li>array — ссылка на массив.</li>
      </ul>
      <p>Пример: суммирование всех значений массива.</p>
      <p>Для наглядности опишем задачу так: есть корзина с товарами (массив), где каждый товар представлен объектом с несколькими ключами: title (название товара), quantity (количество) и price (цена). Наша задача заключается в подсчёте общей суммы товаров и в этом нам поможет метод reduce:</p>
      <pre>{`const goods = [
{
  title: 'Кукуруза',
  quantity: 3,
  price: 99
},
{
  title: 'Корм для кота',
  quantity: 2,
  price: 113
}
];

const sum = goods.reduce((accumulator, product) => {
return accumulator + (product.quantity * product.price);
}, 0);

console.log(sum); // 523`}
      </pre>
      <pre>{`const myAwesomeArray = [1, 2, 3, 4, 5]

myAwesomeArray.reduce((total, value) => total * value)
// 1 * 2 * 3 * 4 * 5
//-------> Output = 120`}
      </pre>

      <h3>Группировка массивов с <span className="hl-7">array.groupBy() and array.groupByToMap()</span></h3>
      <h4>array.groupBy()</h4>
      <p>Возвращает объект, в котором каждое свойство имеет ключ в виде имени категории и значение в виде массива с продуктами из соответствующей категории.</p>
      <p>array.groupBy(callback) принимает функцию обратного вызова, которая вызывается с тремя аргументами: текущим элементом массива, индексом и самим массивом. Обратный вызов должен возвращать строку: имя группы, в которую вы хотите добавить элемент.</p>
      <pre>{`const groupedObject = array.groupBy((item, index, array) => {
  // ...
  return groupNameAsString;
});

Есть такое:
const products = [
  { name: 'apples', category: 'fruits' },
  { name: 'oranges', category: 'fruits' },
  { name: 'potatoes', category: 'vegetables' }
];

Надо такое:
const groupByCategory = {
  'fruits': [
    { name: 'apples', category: 'fruits' },
    { name: 'oranges', category: 'fruits' },
  ],
  'vegetables': [
    { name: 'potatoes', category: 'vegetables' }
  ]
};

Можно reduce:
const groupByCategory = products.reduce((group, product) => {
  const { category } = product;
  group[category] = group[category] ?? [];
  group[category].push(product);
  return group;
}, {});

А можно groupBy:
const groupByCategory = products.groupBy(product => {
  return product.category;
});

Метод groupBy содержит меньше кода и более удобочитаем.
`}
      </pre>
      <h4>array.groupByToMap()</h4>
      <p>Иногда вы можете захотеть использовать карту (Map) вместо простого объекта. Преимущество Map в том, что он принимает любой тип данных в качестве ключа, а простой объект ограничен только строками и символами.</p>
      <pre>{`const groupByCategory = products.groupByToMap(product => {
  return product.category;
});
console.log(groupByCategory);
// Map([
//   ['fruits', [
//     { name: 'apples', category: 'fruits' },
//     { name: 'oranges', category: 'fruits' },
//   ]],
//   ['vegetables', [
//     { name: 'potatoes', category: 'vegetables' }
//   ]
// ])`}
      </pre>
      <p>Если вы хотите использовать обе функции сразу, используйте полифилл, предоставляемый библиотекой core-js.</p>

      <h3>Доступ к элементам по индексу <span className="hl-7">array.at(index)</span></h3>
      <p>Основным преимуществом нового метода является доступ к элементам с конца массива с использованием отрицательного индекса, что невозможно при использовании обычного синтаксиса квадратных скобок array[index].</p>
      <p>Если аргумент индекса является положительным целым числом &gt;= 0, метод возвращает элемент с этим индексом. Если аргумент индекса больше или равен длине массива, то, как и обычный метод доступа, метод возвращает значение undefined. Настоящая магия происходит, когда вы используете отрицательный индекс с методом array.at() — тогда доступ к элементу осуществляется с конца массива:</p>
      <pre>{`const fruits = ['orange', 'apple', 'banana', 'grape'];
const item = fruits.at(1);
item; // => 'apple'

const item = fruits.at(999);
item; // => undefined

const lastItem = fruits.at(-1);
lastItem; // => 'grape'`}
      </pre>

      <h2>Заполнить массив <span className="hl-5">fill</span></h2>
      <p>Этот метод заполняет все элементы массива одинаковым значением, от начального индекса (по умолчанию 0) до конечного индекса (по умолчанию array.length):</p>
      <pre>
        {`const greetings = new Array(3);
greetings.fill('Привет!');

greetings; // ['Привет!', 'Привет!', 'Привет!']


const myAwesomeArray = [1, 2, 3, 4, 5]

// The first argument (0) is the value
// The second argument (1) is the starting index
// The third argument (3) is the ending index
myAwesomeArray.fill(0, 1, 3)
//-------> Output : [1, 0, 0, 4, 5]`}
      </pre>
      <p>Сам по себе массив с одинаковыми значениями, как правило, ни за чем не нужен. Однако он часто используется как промежуточная ступень при генерации более сложных массивов. Допустим, нам необходимо создать массив, заполненный временными данными для удобства разработки. У нас есть функция generateElement, которая создаёт отдельный элемент. Всего нам требуется, скажем, пять элементов. Как можно достичь желаемого?</p>
      <p>Конечно, можно наполнить массив с помощью цикла for. Так делали раньше, до 2009 года, когда в стандарте ECMAScript 5 появились новые методы массивов. С тех пор подход с for считается неизящным, а программистам хочется все операции над массивами по возможности производить с помощью встроенных методов.</p>
      <pre>
        {'const elements = new Array(5).fill().map(() => generateElement());'}
      </pre>
      <p>Зачем здесь map? Проблема в том, что fill заполняет массив значением. Он не вызывает функцию заново для каждого нового элемента. Только для первого. Поэтому все пять элементов нашего массива будут случайно сгенерированными, но одинаковыми.</p>
      <p>А с map всё будет как надо, функция generateElement будет вызвана для каждого элемента массива, и результат будет каким-то таким:</p>
      <pre>{`const elements = new Array(5).fill().map(() => generateElement());

elements; // [{name: 'Кекс'}, {name: 'Том'}, {name: 'Саймон'}, {name: 'Гарфилд'}, {name: 'Пушистик'}]`}
      </pre>

      <h2>Сортировка массива <span className="hl-1">sort</span></h2>
      <p>Этот метод принимает функцию в качестве параметра. Он сортирует элементы массива и возвращает их.</p>
      <h3>Сортировка массива в алфавитном порядке</h3>
      <pre>{`//Алфавитная сортировка в возрастающем порядке:
var myarray=["Bob", "Bully", "Amy"]
myarray.sort() // Массив становится ["Amy", "Bob", "Bully"]

//Алфавитная сортировка в убывающем порядке:
var myarray=["Bob", "Bully", "Amy"]
myarray.sort().reverse() //Массив становится ["Bully", "Bob", "Amy"]

var myarray=[7, 40, 300]
myarray.sort() //Теперь он становится таким [300,40,7]


const myAwesomeArray = [5, 4, 3, 2, 1]

// Sort from smallest to largest
myAwesomeArray.sort((a, b) => a - b)
//-------> Output : [1, 2, 3, 4, 5]

// Sort from largest to smallest
myAwesomeArray.sort((a, b) => b - a)
//-------> Output : [5, 4, 3, 2, 1]`}
      </pre>
      <p>По дефолту array.sort() сортирует элементы в лексикографическом порядке.</p>

      <h3>Передаём функцию в array.sort()</h3>
      <p>Есть три возможных числа, которые отдадутся функцией: меньше нуля, ноль, больше нуля.</p>
      <p>В первом случае, когда меньше нуля, a отсортируется с индексом меньшими, чем b.</p>
      <p>При нуле: a и b будут рассматриваться как равные и сортировка производиться не будет.</p>
      <p>Больше нуля: Сортировка b будет меньшего индекса, чем a.</p>
      <p>То есть, для того, чтобы сортировка прошла по числам и в возрастающем порядке, функция-параметр должна быть такой:</p>
      <pre>{`function sortfunction(a, b){
  return (a — b)
}`}
      </pre>

      <h3>Сортируем массив в числовом порядке</h3>
      <pre>{`var myarray=[25, 8, 7, 41]
myarray.sort(function(a,b){
  return a — b
}) //Массив будет [7, 8, 25, 41]

var myarray=[25, 8, 7, 41]
myarray.sort(function(a,b){
  return b — a
}) //Массив становится [41, 25, 8, 7]`}
      </pre>

      <h3>Делаем случайный порядок у массива</h3>
      <pre>{`//Рандомный порядок в массиве:
var myarray=[25, 8, "George", "John"]
  myarray.sort(function(){
    return 0.5 — Math.random()
}) //Теперь элементы перемешаны`}
      </pre>

      <h3>Сортируем массив объектов</h3>
      <pre>{`var employees=[]
employees[0]={name: "George", age: 32, retiredate: "March 12, 2014"}
employees[1]={name: "Edward", age: 17, retiredate: "June 2, 2023"}
employees[2]={name: "Christine", age: 58, retiredate: "December 20, 2036"}
employees[3]={name: "Sarah", age: 62, retiredate: "April 30, 2020"}`}
      </pre>
      <pre>{`Сортировка по возрасту
employees.sort(function(a, b){
  return a.age-b.age
})

Сортировка по имени
employees.sort(function(a, b){
  var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
  if (nameA < nameB) //сортируем строки по возрастанию
    return -1
  if (nameA > nameB)
    return 1
  return 0 // Никакой сортировки
  })

Сортировка по дате
employees.sort(function(a, b){
  var dateA=new Date(a.retiredate), dateB=new Date(b.retiredate)
  return dateA-dateB //сортировка по возрастающей дате
  })`}
      </pre>

      <h3>Сделать массив из объекта <span className="hl-10">Object.keys(), Object.values(), Object.entries()</span></h3>
      <p>Метод Object.keys() возвращает массив, состоящий из имён свойств объекта (ключей).</p>
      <p>Метод Object.values() возвращает массив значений свойств переданного ему объекта.</p>
      <p>Метод Object.entries() возвращает, обработав переданный ему объект, массив, содержащий массивы, представляющие собой пары вида [ключ, значение], представляющие собой имена свойств и значения этих свойств.</p>
      <pre>{`const icecreamColors = {
  chocolate: 'brown',
  vanilla: 'white',
  strawberry: 'red',
}

const types = Object.keys(icecreamColors); // => ["chocolate", "vanilla", "strawberry"]
const colors = Object.values(icecreamColors); // => ['brown', 'white', 'red']
const etries = Object.values(icecreamColors); // => (3) [Array(2), Array(2), Array(2)]
0: (2) ['chocolate', 'brown']
1: (2) ['vanilla', 'white']
2: (2) ['strawberry', 'red']`}
      </pre>

      <h3>Оператор расширения и массивы <span className="hl-10">spread</span></h3>
      <p>Этот оператор полезен, например, при необходимости выполнения объединения нескольких массивов. Кроме того, его использование позволяет избавиться от необходимости использовать метод .splice() в том случае, если нужно удалить из массива какие-то элементы, так как он может быть скомбинирован с методом .slice(), что позволяет избежать изменения исходного массива.</p>
      <pre>{`const spreadableOne = [1, 2, 3, 4];
const spreadableTwo = [5, 6, 7, 8];

const combined = [...spreadableOne, ...spreadableTwo];
// массив combined будет выглядеть так: [1, 2, 3, 4, 5, 6, 7, 8]`}
      </pre>
      <p>Сформируем новый массив, представляющий собой исходный массив, из которого удалён элемент. При этом исходный массив меняться не должен.</p>
      <pre>{`const animals = ['squirrel', 'bear', 'deer', 'salmon', 'rat'];
const mammals = [...animals.slice(0,3), ...animals.slice(4)];
//массив mammals примет следующий вид: ['squirrel', 'bear', 'deer', 'rat']`}
      </pre>
    </section>
  );
}
export default Arrays;
