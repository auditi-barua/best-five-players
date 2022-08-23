//selection
   function selectLi1(){
    const node =document.getElementById('li1');
    node.append(document.createTextNode('Kylin Mbappe'));
    document.querySelector('ul').append(node);    
   }
   function selectLi2(){
    const node = document.getElementById('li2');
    node.append(document.createTextNode('Neymar'));
    document.querySelector('ul').append(node);
    
   }
   function selectLi3(){
    const node = document.getElementById('li3');
    node.append(document.createTextNode('Lionel Messi'));
    document.querySelector('ul').append(node);
   }
   function selectLi4(){
    const node = document.getElementById('li4');
    node.append(document.createTextNode('Hal Robson'));
    document.querySelector('ul').append(node);
   }
   function selectLi5(){
    const node = document.getElementById('li5');
    node.append(document.createTextNode('Javier Pastore'));
    document.querySelector('ul').append(node);
   }

//calculatlion

document.getElementById('btn_calculate').addEventListener('click', function(){
  const PerPlayerCost = parseInt(document.getElementById('player_cost').value);
  const expenses_cost = document.getElementById('expenses_cost');
  const perPlayer_cost_total = PerPlayerCost*5;
  if(isNaN(PerPlayerCost)){
    alert("enter a number")
  }
  expenses_cost.innerText= perPlayer_cost_total;
});

document.getElementById('btn_calculate_total').addEventListener('click',function(){
  const PerPlayerCost = parseInt(document.getElementById('player_cost').value);
  const expenses_cost = document.getElementById('expenses_cost');
  const perPlayer_cost_total = PerPlayerCost*5;
  expenses_cost.innerText = perPlayer_cost_total;
  const manager_cost = parseInt(document.getElementById('manager_cost').value);
  const coach_cost = parseInt(document.getElementById('coach_cost').value);
  const total_cost = document.getElementById('total_cost');
  const total_cost_calculate = perPlayer_cost_total + manager_cost + coach_cost;
  
  total_cost.innerText = total_cost_calculate ;
  
  
});



