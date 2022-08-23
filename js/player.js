
   function selectLi1(){
  //  let button  = document.querySelector('.btn-selected');
   // button.disabled = ('when 5 players added')
     // if(document.querySelector('btn-selected').value){
       // button.disabled = true;
      //}
      //else{
        //alert('only 5 players')
      //}

  
   
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
