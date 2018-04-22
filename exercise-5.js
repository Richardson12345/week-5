function attack (damage) {
  var armorBlock = damage - 2;
  return armorBlock
  // Code disini
}

function damageCalculation (numberOfAttacks, damagePerAttack) {
 var attackDamage = attack(damagePerAttack);
 return attackDamage * numberOfAttacks
 
  
  
  // Code disini
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90