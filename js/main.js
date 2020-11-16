// var i = 0;
// while (i < 10) {

// if (i==5) {
//     i++;
//     continue;
// }
 
//     document.write(`${i++}<br>`);
    
//     if (i==7){
//         break;
//     }
// }

// document.write(0);

// for (var i = 0, j = 10; i<10 && j>3; i++,j--) {
//     document.write(`${i} ${j}<br>`);
// }


//  for (var i=0; i<10; i++) {
//     for (var j=0; j<10; j++) {
//         document.write(`${i} ${j}<br>`);
//     } 
//  }
// var i = 0;
// do {
//     document.write(`${i++}<br>`);
// } while (i<10);

var a = [1, 2, NaN, 3, 'd', 4, 5, 'a', 'b', null];
// document.write(a[a.length - 1]);

// for (var i = 0; i< a.length; i++) {   //.length - длина масива
//     document.write(`${a[i]} <br>`);
// }

// a.forEach(
//     function(element) {
//         document.write(`${element} <br>`);
//         }
//     );
// a.forEach(
//     function(element) {
//         if (element != null && (!isNaN(element) || typeof element == 'string')){
//         document.write(`${element} <br>`);
//         }
//     }
//     );

// for (el in a) {
//     document.write(`${el} <br>`);
// }
// for (el of a) {
//     document.write(`${el} <br>`);
// }
// for (let index in a) {
//     document.write(`${index} ${a[index]} <br>`);
// }
for (let index in a) {
    document.write(`${index} ${a[index]} <br>`);
    }