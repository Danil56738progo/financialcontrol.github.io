<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Запись расходов и доходов</title>
    <link rel="stylesheet" href="my.css" />
  </head>
  <body>
    <div class="container">
      <h1>Запись расходов и доходов</h1>
      <form id="transactionForm">
        <label for="type">Тип операции:</label>
        <select id="type">
          <option value="income">Доход</option>
          <option value="expense">Расход</option></select
        ><br /><br />
        <label for="amount">Сумма (в злотых):</label>
        <input type="number" id="amount" required /><br /><br />
        <label for="category">Категория:</label>
        <select id="category">
          <option value="Продукты">Продукты</option>
          <option value="Дорога">Дорога</option>
          <option value="Развлечение">Развлечение</option>
          <option value="Здоровье">Здоровье</option>
          <option value="Пополнение телефона">Пополнение телефона</option>
          <option value="Семья">Семья</option>
          <option value="Спорт">Спорт</option>
          <option value="Подарки">Подарки</option>
          <option value="Дом">Дом</option>
          <option value="Образование">Образование</option>
          <option value="Другое">Другое</option></select
        ><br /><br />
        <button type="submit">Добавить</button>
      </form>
      <div id="transactions"></div>
      <div id="balance">
        Общий баланс: <span id="totalBalance">0</span> злотых
      </div>
    </div>

    <script src="my.js"></script>
  </body>
</html>
