document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("transactionForm");
  const transactionsList = document.getElementById("transactions");
  const totalBalanceDisplay = document.getElementById("totalBalance");
  let totalBalance = 0;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const type = document.getElementById("type").value;
    const amount = parseFloat(document.getElementById("amount").value);
    const category = document.getElementById("category").value;

    if (isNaN(amount)) {
      alert("Пожалуйста, введите корректное число для суммы.");
      return;
    }

    const transaction = {
      type: type,
      amount: amount,
      category: category,
    };

    saveTransaction(transaction);
    updateBalance();
    displayTransactions();
    form.reset();
  });

  function saveTransaction(transaction) {
    let transactions = JSON.parse(localStorage.getItem("transactions")) || [];
    transactions.push(transaction);
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }

  function displayTransactions() {
    transactionsList.innerHTML = "";

    let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

    transactions.forEach(function (transaction, index) {
      const transactionElement = document.createElement("div");
      transactionElement.classList.add("transaction");
      transactionElement.innerHTML = `<strong>${
        transaction.type === "income" ? "Доход" : "Расход"
      }</strong>: ${transaction.amount} злотых (${transaction.category})`;
      transactionsList.appendChild(transactionElement);
    });
  }

  function updateBalance() {
    let transactions = JSON.parse(localStorage.getItem("transactions")) || [];
    totalBalance = transactions.reduce((acc, curr) => {
      return curr.type === "income" ? acc + curr.amount : acc - curr.amount;
    }, 0);
    totalBalanceDisplay.textContent = totalBalance;
  }

  displayTransactions();
  updateBalance();
});
