import React from 'react';

function HowToWebsitePublication() {

  return (
    <section className="conspect">
      <h1>Как опубликовать сайт в интернете</h1>
      <h2>Что такое доменное имя?</h2>
      <p><b>Доменное имя</b> — это тот адрес, который вводят в браузер, чтобы попасть на сайт. Например, у Академии доменное имя — htmlacademy.ru. Такой уникальный адрес есть у каждого сайта в интернете и пишется он в сторону «укрупнения»(в отличие от почтового).</p>
      <p>Разберём доменное имя mycoolsite.spb.ru:</p>
      <ul>
        <li>mycoolsite — уникальный «дом» сайта</li>
        <li>spb — региональный домен Санкт-Петербурга</li>
        <li>ru — региональный домен России</li>
      </ul>
      <p>То есть вы создаёте свой собственный «дом» сайта с названием mycoolsite внутри домена spb, который, в свою очередь, находится внутри домена ru.</p>
      <p>Преимущество интернет-адресов перед почтовыми в том, что их не обязательно привязывать к реальным странам и городам мира. К примеру, есть домены — com, biz, org, net, online и другие, не относящиеся к географическим регионам.</p>
      <p>Вы также можете разместить ваш сайт в иностранной доменной зоне, такой как eu, asia или amsterdam, даже если сам сайт физически находится на вашем домашнем компьютере.</p>
      <p>В базовом виде доменное имя состоит из двух частей — «названия» сайта и домена:</p>
      <p>htmlacademy.ru: htmlacademy — название сайта, ru — домен</p>
      <p>Есть много новых классных доменов, которые относительно недавно появились, например, .software, .technology или .engineer, и много имён в них ещё свободно. Во вторых, вы можете проявить фантазию и придумать какое-нибудь имя, до которого ещё никто в мире не додумался.</p>
      <p>Проверить доступность доменного имени – <a href="https://timeweb.com/ru/" target="_blank" rel="noopener noreferrer">timeweb</a>.</p>

      <h2>Платный и бесплатный хостинг, плюсы и минусы</h2>
      <p>Как вы знаете, доменное имя сайта — это его адрес в интернете. Но от одного адреса толку мало, нужно, чтобы там, куда этот адрес ведёт, что-то находилось. Иначе говоря, нужно «привязать» доменное имя к конкретному компьютеру.</p>
      <p>Это может быть и ваш собственный компьютер, но в таком случае придётся постоянно держать его включённым и подсоединенным к интернету. Как только компьютер выключится или связь прервётся, доступ к сайту пропадёт. И эту проблему решает хостинг.</p>
      <p>Хостинг — это услуга по размещению сайта на специальном компьютере (его ещё называют сервером), который почти никогда не выключается и всегда доступен онлайн. Большинство сайтов в интернете расположены на таких серверах.</p>

      <h3>Бесплатный хостинг</h3>
      <p>Хостинг — это не всегда дорого, он даже может быть бесплатным. Многие компании предоставляют бесплатный хостинг для небольших сайтов. Но нужно быть осторожным, иногда такой хостинг имеет ограничения (например, по количеству посетителей в месяц), а иногда компании, предоставляющие хостинг, добавляют на сайты свою рекламу.</p>
      <p>GitHub Pages позволяет размещать несложные сайты всем желающим, дает целый гигабайт дискового пространства, почти не ограничивает активность на сайте и, что приятно, не добавляет никаких баннеров на ваши страницы. Чтобы разместить там свой сайт, вы должны зарегистрироваться на GitHub и создать репозиторий. Если вы незнакомы с системой контроля версий git, такой вариант хостинга может показаться слишком сложным. К тому же GitHub Pages позволяет размещать только статические сайты.</p>

      <h3>Платный хостинг</h3>
      <p>Платный хостинг предоставляет больше возможностей. А ещё им проще пользоваться благодаря панели управления и круглосуточной техподдержке. Если ваш сайт состоит не только из статических страничек, но ещё отправляет запросы на сервер или в базу данных, то за хостинг придётся заплатить. Внимательно изучите тарифы и выберите, какой лучше всего подойдёт для вашего сайта.</p>

      <h3>Как опубликовать сайт в интернете бесплатно</h3>
      <p>Итак, у нас есть заготовка сайта-портфолио, которую нужно опубликовать в интернете. Для этой задачи используем платформу GitHub. Это популярная платформа для разработчиков, которая позволяет бесплатно опубликовать простой сайт.</p>
      <p>Для начала зарегистрируемся на Гитхабе. А дальше нам нужно создать хранилище, где будет лежать код сайта. Нажимаем ссылку New repository. Далее нужно выбрать название для хранилища, например my-site, и указать тип репозитория (у нас будет публичный).</p>
      <p>Обязательно устанавливаем галочку Initialize this repository with a README, а после нажимаем кнопку Create repository. Нажмём кнопку Upload files. Перетащим файлы в появившееся поле для загрузки. По правилам, каждое изменение в репозитории мы должны сопроводить кратким описанием, что делает это изменение, например, «загружает файлы сайта». Добавим описание и нажмём кнопку Commit changes.</p>
      <p>Готово! Сайт-портфолио залит на Гитхаб. Остаётся настроить его, чтобы сайт можно было открыть в браузере. Для этого нужно перейти в настройки репозитория Settings, пролистать настройки вниз до раздела GitHub Pages и в выпадающем списке выбрать ветку master. Изменения сохраняются автоматически.</p>
      <p>Давайте теперь попробуем открыть сайт в браузере. Он будет доступен по адресу: [ваш логин].github.io/[название репозитория]. Если вы захотите доработать сайт и опубликовать изменения, действовать вам нужно так. Сначала вы вносите изменения. Давайте для примера отредактируем текст на главной странице. Теперь вам нужно заново загрузить эту страницу на Гитхаб, добавив краткое описание, что делает изменение, например, «меняет текст на главной странице». Снова нажимаем Commit changes. Через несколько секунд изменения появятся на сайте.</p>

      <h3>Как опубликовать сайт на платном хостинге</h3>
      <p>В этой инструкции мы разберём, как разместить сайт на платном хостинге. Для примера мы возьмём Timeweb — популярный российский хостинг. Он подходит для сайтов компаний и персональных страниц, а также блогов, форумов и галерей.</p>
      <p>Для начала нужно выбрать тариф, на котором будет размещаться наш будущий сайт-портфолио. Далее нужно нажать на кнопку «Создать сайт». Произойдёт переход на страницу со списком сайтов. В появившемся интерфейсе видно папку public_html. В эту папку нам и нужно загрузить файлы сайта-портфолио (index.html, style.css и остальные). Перейдём в эту папку двойным кликом. Мы попали внутрь папки и видим там временные файлы, которые нужно удалить. Выделяем файлы, заходим в пункт меню «Файл» и там нажимаем пункт «Удалить». Теперь папка пустая, и нам можно загрузить туда файлы нашего сайта. Для этого достаточно выбрать файлы в папке на вашем компьютере и перетащить их в папку в браузере (там даже есть специальная подсказка «Директория пуста. Чтобы добавить файлы, перетащите их в это окно»).</p>

      <h2>Как привязать доменное имя к сайту</h2>
      <h3>Платный хостинг</h3>
      <p>Чтобы привязать домен к сайту на платном хостинге, нужно совершить два клика. Хостинг-пройвайдер сделает всю остальную работу в фоне самостоятельно. Вам же остаётся только выбрать в интерфейсе, к какому сайту привязать какой домен.</p>

      <h3>Бесплатный хостинг GitHub Pages</h3>
      <p>Чтобы привязать зарегистрированное доменное имя к бесплатному хостингу GitHub Pages, придётся повозиться подольше. Сначала нужно создать в корне своего репозитория CNAME-файл с настройками домена.</p>
      <p>Чтобы создать этот файл, зайдите в настройки репозитория. В блоке настроек GitHub Pages найдите поле Сustom domain. Введите зарегистрированное вами доменное имя и нажмите кнопку Save.</p>
      <p>Если вы всё сделали правильно, то в корне репозитория появится файл CNAME. Постарайтесь не удалить его по ошибке, когда будете работать с файлами вашего сайта. Теперь Гитхаб знает о домене, однако этого недостаточно — нужно изменить информацию о DNS-записях самого домена. Для этого необходимо перейти на сайт доменного регистратора, где домен был куплен. Интерфейс работы с DNS-записями разный у каждого регистратора, но суть примерно одинакова.</p>
      <p>Зайдите на сайт, на котором покупали домен, и перейдите в Настройки DNS. Нам нужно настроить A-запись домена. Для этого нужно в панели управления DNS-записями, найти (или добавить) A-запись и указать IP-адреса Гитхаба в качестве её значения. Подходящие IP-адреса можно найти в памятке Гитхаба по настройке А-записей у DNS-провайдера. Информация о новом адресе сайта распространится по интернету примерно за 24 часа. Наберитесь терпения.</p>
    </section>

  );
}
export default HowToWebsitePublication;
