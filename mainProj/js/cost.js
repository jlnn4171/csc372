//calculates the total cost of service

function update() {

    var totalCost = 0;
    var totalCost2 = 0;

    //selects elements based on class and stores in list
    var choice = $('.choice');
    var costs = $('.cost');
  
    choice.each(function (i) {
    
      var curChoice = $(this).val().toLowerCase();
      var cost = parseInt(costs.eq(i).text()) || 0; 
      
      if (curChoice === 'yes'){
        totalCost += cost;
        $(this).css('border-color', 'bright pink'); 
      }
      
    });

    totalCost2 = totalCost * 1.07;
  
    
    //document.getElementById('totalCost').textContent = totalCost.toFixed(2);
    $("#totalCost").text(totalCost.toFixed(2));
    //document.getElementById('totalCost2').textContent = totalCost2.toFixed(2);
    $("#totalCost2").text(totalCost2.toFixed(2));
  }