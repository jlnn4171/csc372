//calculates the total of the pastries being purhased. gives error if quantity is negative

function update() {

    var totalCost = 0;
    var totalQuantity = 0;
    var quantities = document.querySelectorAll('.quant');
    var costs = document.querySelectorAll('.cost');
  
    for (var i = 0; i < quantities.length; i++) {
    
      var quantity = parseInt(quantities[i].value) || 0; 
      var cost = parseFloat(costs[i].textContent) || 0; 
      
      if (quantity < 0){
          console.log("This value cannot be negative!");
        quantities[i].style.backgroundColor = 'red';
        continue; 
      }
      else if (quantity === 0){
          console.log("This value cannot be empty!");
        quantities[i].style.backgroundColor = 'red';
        continue; 
      }
      else { 
        totalCost += cost * quantity;
        totalQuantity += quantity;
      }
      
    }
  
    document.getElementById('totalCost').textContent = totalCost.toFixed(2);
    document.getElementById('quantTotal').textContent = totalQuantity;
  }
  