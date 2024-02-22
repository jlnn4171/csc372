//calculates the total cost of service

function update() {

    var totalCost = 0;
    var totalCost2 = 0;

    //selects elements based on class and stores in list
    var choice = document.querySelectorAll('.choice');
    var costs = document.querySelectorAll('.cost');
  
    for (var i = 0; i < choice.length; i++) {
    
      var curChoice = choice[i].value; 
      curChoice.toLowerCase();
      var cost = parseInt(costs[i].textContent) || 0; 
      
      if (curChoice === 'yes'){
        totalCost += cost;
        choice[i].style.borderColor = 'bright pink';
        continue; 
      }
      
    }

    totalCost2 = totalCost * 1.07;
  
    document.getElementById('totalCost').textContent = totalCost.toFixed(2);
    document.getElementById('totalCost2').textContent = totalCost2.toFixed(2);
  }