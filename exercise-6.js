function meleeRangedGrouping (str) {
    //your code here
    
    if(str === ''){
      return [];
    }
    var splitString = str.split('-');
    var splitHero = splitString.toString().split(',');
    splitString.pop();
    var heroAtributes = {};
    var groupedArray = [[],[]]
    for(z = 0; z < splitHero.length; z++){
     if(z === 0 || z % 2 === 0){
       heroAtributes[splitHero[z]] = splitHero[z+1];
       if(heroAtributes[splitHero[z]] === 'Ranged'){
         groupedArray[0].push(splitHero[z])
       }else{groupedArray[1].push(splitHero[z])}
     } 
      
    }return groupedArray
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // []