function meleeRangedGrouping (str) {
    //your code here
    
    if(str === ''){
      return [];
    }
    var splitString = str.split('-');
    var splitHero = splitString.toString().split(',');
    splitString.pop();
    var groupedArray = [[],[]]
    for(z = 0; z < splitHero.length; z++){
     if(z % 2 !== 0){
       if(splitHero[z] === 'Ranged'){
         groupedArray[0].push(splitHero[z-1])
       }else{groupedArray[1].push(splitHero[z-1])}
     } 
    }return groupedArray
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []