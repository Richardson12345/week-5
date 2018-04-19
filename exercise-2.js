function naikAngkot(arrPenumpang) {
    var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var tripCost = 2000
    var sumarry = []
    var location = {
        A: 1,
        B: 2,
        C: 3,
        D: 4,
        E: 5,
        F: 6
    }
  
    
    for(z = 0;z < arrPenumpang.length; z++){
      sumarry.push({
        penumpang: arrPenumpang[z][0],
        naikDari: arrPenumpang[z][1],
        tujuan: arrPenumpang[z][2]
      }
      )
    
   sumarry[z].bayar = (location[arrPenumpang[z][2]] - location[arrPenumpang[z][1]]) * tripCost  
  }return sumarry
    //your code here
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]