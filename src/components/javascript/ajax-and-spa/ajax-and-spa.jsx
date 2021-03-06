import React from 'react';

function AjaxAndSPA() {

  return (
    <section className="conspect">
      <h1>Ajax — Async, Callback &amp; Promise</h1>
      <p>Ajax (Asynchronous Javascript And XML) - это основа приложения Javascript. Он широко используется с SPA (одностраничным приложением). Он используется для связи с сервером.</p>
      <p>Он был создан в 2005 году, когда XML был основным форматом обмена данными между сервером и клиентом. В 2015 году JSON стал основным форматом обмена данными. AJAX используется для связи между клиентом и сервером</p>
      <p>Чтобы полностью понять ajax, нам необходимо понять <span className="hl-6">асинхронную природу javascript</span> и то, как работать с асинхронным программированием.</p>
      <p>Асинхронность в Javascript - это два действия, при которых одно действие запускает другое действие, которое будет завершено в будущем.</p>
      <p>Например, регистрация для события щелчка и ожидание щелчка пользователем и / или выполнение вызова сервера для получения некоторых данных. Это похоже на то, что нам нужно обработать что-то, чего у нас нет сразу, поэтому мы ждем, пока это завершится, и как только это будет сделано, мы его обрабатываем.</p>
      <p>Пример асинхронной операции:</p>
      <pre>{`Timer Example :

function showSessionExpire(){
  console.log("Your session expired");
}
setTimeout(showSessionExpire, 1000);
console.log("showSessionExpire will execute after 1000 ms");

Выведет:
VM18:5 showSessionExpire will execute after 1000 ms
undefined
VM18:2 Your session expired`}
      </pre>
      <pre>{`File Reader Example :

var reader = new FileReader();

reader.onload = function(e) {
  var text = reader.result;
}

reader.readAsText(file, encoding);`}
      </pre>

      <h2>Callback</h2>
      <p>Что такое обратный вызов: - Допустим, у нас есть функция F1, которая вызывает F2. F2 выполняет некоторую асинхронную операцию, такую как AJAX. F1 хотел бы узнать результат вызова ajax. Теперь F1 передаст другую функцию, скажем C1, в качестве дополнительного параметра для F2, который F2 вызовет после того, как полностью обработает запрос ajax.</p>
      <p>Подумайте об этом, как будто F1 получает услугу от F2, предоставляя детали услуги вместе с C1. Когда F2 завершает обслуживание, он информирует F1, вызывая C1 с некоторыми дополнительными данными.</p>
      <p>Зачем нам нужен callback: потому что мы не хотим дублировать код ajax каждый раз, когда нам нужно. Мы хотим создать общую функцию ajax, которая принимает данные ajax в качестве входных данных вместе со ссылкой на обратный вызов. После завершения вызова он вызывает обратный вызов, чтобы вызывающий мог продолжить работу с результатом вызова ajax.</p>
      <p>Мы можем использовать служебную функцию ajax в n местах, передав такие сведения о вызове ajax, как URL-адрес, метод и ссылку на обратный вызов. Обратные вызовы - отличный способ отделить основную логику ajax от остальной части приложения. Но, к сожалению, становится очень сложно обрабатывать обратный вызов, когда мы выполняем серию вызовов ajax, когда один вызов зависит от предыдущего вызова. Мы можем столкнуться с трудностями при поддержании нескольких ссылок обратного вызова и обработке нескольких состояний успеха и ошибок. Promise - лучший способ управлять несколькими вызовами ajax. Давайте теперь исследуем Promise.</p>

      <h2>Promise</h2>
      <p>Promise используется для решения проблем с множественными обратными вызовами и обеспечивает лучший способ управления успешными и ошибочными состояниями. Promise вначале выглядит немного сложным, но с ним очень просто и эффективно справиться. Обещание - это объект, который возвращается асинхронной функцией, такой как ajax. Объект обещания имеет три состояния:</p>
      <ul>
        <li>pending - выполнение асонхронной операции</li>
        <li>resovled - операция разрешена успешно</li>
        <li>rejected - операция отклонена</li>
      </ul>
      <p>Есть две части, использующие объект обещания. Внутри асинхронной функции (Часть 1) и где она вызывается (Часть 2).</p>
      <p>Часть 1 - Внутри функции Async,</p>
      <p>Объект обещания создан.</p>
      <p>Асинхронная функция возвращает объект обещания</p>
      <p>Если асинхронное выполнение выполнено успешно, объект обещания разрешается путем вызова его метода разрешения.</p>
      <p>Если async выполняется с ошибкой, объект обещания отклоняется путем вызова его отклоненного метода.</p>
      <p>Часть 2 - Внешняя функция Async</p>
      <p>Вызвать функцию и получить объект обещания</p>
      <p>Прикрепите обработчик успеха, обработчик ошибок к объекту обещания, используя метод then</p>
      <h2>Междоменный вызов</h2>
      <p>У AJAX есть ограничение, заключающееся в том, что по умолчанию он не может отправлять запросы AJAX на междоменный сервер.</p>
      <p>В приведенном выше примере мы используем API, предоставленный api.github.com, и jsfiddle для выполнения нашего кода пользовательского интерфейса. Здесь наш код javascript живет на сервере jsFiddle и пытается получить данные с сервера github. Это кросс-домен.</p>
      <p>По умолчанию AJAX не может выполнять перекрестный вызов домена, браузер отклоняет вызовы в другой домен. Есть два варианта совершения междоменного звонка.</p>
      <p>Использование CORS</p>
      <p>Использование JSONP</p>
      <p>Оба варианта требуют некоторых изменений сервера. Это невозможно сделать только с помощью javascript.</p>
      <p>CORS - это новый способ обработки запросов AJAX с перекрестным происхождением. github api включены CORS. Чтобы включить CORS, ответ должен содержать заголовок Access-Control-Allow-Origin со значением домена или * для работы всех. Github использует *</p>
      <p>JSONP также можно использовать, если CORS не может быть включен сервером или для старых браузеров. JSONP фактически использует тег скрипта для получения данных с сервера. Скрипт может быть получен из любого домена, поэтому в JSONP нам нужно создать скрипт с URL-адресом как src, а сервер должен заключить ответ в функцию обратного вызова. Ответ, отправленный сервером, на самом деле является кодом javascript, который содержит данные внутри функции-оболочки. В JSONP не выполняется вызов ajax.</p>
    </section>
  );
}
export default AjaxAndSPA;
