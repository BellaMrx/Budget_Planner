// switch between darkmode.css and lightmode.css <-- main-pages
// Select the button
const btn_main = document.querySelector(".main-btn-dark-light-mode");
// Select the stylesheet <link id="mode-link">
const theme_main = document.querySelector("#mode-link");

// Listen for a click on the button
btn_main.addEventListener("click", function() {
     // If the current URL contains "darkmode.css"
    if (theme_main.getAttribute("href") == "styles/darkmode.css") {
        // ... then switch it to "lightmode.css"
        theme_main.href = "styles/lightmode.css";
    // Otherwise...
    } else {
        // ... switch it to "darkmode.css"
        theme_main.href = "styles/darkmode.css";
    }
});

// change Icon <i>dark light mode</i> 
function changeIcon (iconID) {
    if (document.getElementById(iconID).className=="fa fa-sun") {
        //switch it to icon2
        document.getElementById(iconID).className = "fa fa-moon";
    } else {
        document.getElementById(iconID).className = "fa fa-sun";
    }
};

// Settings button collapsible
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// Income
// table input calculation
function calculateIncome() {
  var tableIncome = document.getElementById('table-income');
  var itemsIncome = tableIncome.getElementsByClassName('value-table');
  var sumIncome = 0;
  for(var i = 0; i < itemsIncome.length; i++)
  sumIncome += parseFloat(itemsIncome[i].value);
  var outputIncome = document.getElementById('sum-income');
  outputIncome.innerHTML = sumIncome;
    if(sumIncome != '0' && !Number(sumIncome)) {
      outputIncome.innerHTML = '0';
    } else {
      outputIncome.innerHTML = (Math.round(sumIncome * 100) / 100).toFixed(2);      
    }

    // no commas in input allowed
    var invalidChars = ",";
    tableIncome.addEventListener("keydown", function(e) {
      if (invalidChars.includes(e.key)) {
        e.preventDefault();
      }
    });

  // overview
  var incomeTotal = document.getElementById('incomeTotal');
  incomeTotal.innerHTML = sumIncome;
  incomeTotal.style.color = "#00ff33";
  if(sumIncome != '0' && !Number(sumIncome)) {
    incomeTotal.innerHTML = '0';
  } else {
    incomeTotal.innerHTML = (Math.round(sumIncome * 100) / 100).toFixed(2);   
  }
  // because diff()
  return sumIncome;
}

// delete and add new row in table
// add new row in table
function addRowIncome() {
  const rows = document.getElementById('row-income').rows
  const lastRow = rows[rows.length - 1]
  lastRow.after(lastRow.cloneNode(true))
  }

  // del new row in table
  function deleteRowIncome(row) {
    var i = row.parentNode.parentNode.rowIndex;
    document.getElementById('table-income').deleteRow(i);
  }

// Expenses
// table input calculation
function calculateExpenses() {
  var tableExpenses = document.getElementById('table-expenses');
  var itemsExpenses = tableExpenses.getElementsByClassName('value-table');
  var sumExpenses = 0;
  for(var i = 0; i < itemsExpenses.length; i++)
  sumExpenses += parseFloat(itemsExpenses[i].value);
  var outputExpenses = document.getElementById('sum-expenses');
  outputExpenses.innerHTML = sumExpenses;
  if(sumExpenses != '0' && !Number(sumExpenses)) {
    outputExpenses.innerHTML = '0';
  } else {
    outputExpenses.innerHTML = (Math.round(sumExpenses * 100) / 100).toFixed(2);   
  }

    // no commas in input allowed
    var invalidChars = ",";
    tableExpenses.addEventListener("keydown", function(e) {
      if (invalidChars.includes(e.key)) {
        e.preventDefault();
      }
    });

  // overview
  var expensesTotal = document.getElementById('expensesTotal');
  expensesTotal.innerHTML = sumExpenses;
  expensesTotal.style.color = "red";
  if(sumExpenses != '0' && !Number(sumExpenses)) {
    expensesTotal.innerHTML = '0';
  } else {
    expensesTotal.innerHTML = (Math.round(sumExpenses * 100) / 100).toFixed(2);    
  }
  // because diff()
  return sumExpenses;
}

// delete and add new row in table
// add new row in table
function addRowExpenses() {
  const rows = document.getElementById('row-expenses').rows
  const lastRow = rows[rows.length - 1]
  lastRow.after(lastRow.cloneNode(true))
  }

  // del new row in table
  function deleteRowExpenses(row) {
    var i = row.parentNode.parentNode.rowIndex;
    document.getElementById('table-expenses').deleteRow(i);
  }

// Overview difference
  function diff() {
    var difference = document.getElementById('difference');
    var result = calculateIncome() - calculateExpenses();
    difference.innerHTML = result; 
    
    var overview = document.getElementById('overviewResultMessage');

    if(result >= 0  && result <= 199) {
      difference.innerHTML = "+" + result;
      difference.style.color = "green";
      overview.innerHTML = "Phew luck had";
    } else if(result > 199) {
      difference.innerHTML = "+" + result;
      difference.style.color = "green";
      overview.innerHTML = "Good work";
    }  else if(result < 0) {
      difference.style.color = "red";
      overview.innerHTML = "Ouch";
    }

    if(result != '0' && !Number(result)) {
      difference.innerHTML = '0';
    } else {
      difference.innerHTML = (Math.round(result * 100) / 100).toFixed(2);  
    }
  }

