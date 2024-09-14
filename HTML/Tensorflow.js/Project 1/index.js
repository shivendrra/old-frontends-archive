function setup(){
    let data = tf.tensor([1,2.6,3,4,56,623,45,12,46,23,56,23,12,45,67], [5,3], 'int32');
    data.print();

    const values =[];
    for(let i=0; i<30; i++){
        values[i] = random(0, 100);
    }
    const shape = [5, 3, 2];
    const dataf = tf.tensor3d(values, shape, 'int32');
    dataf.print();
}


// let test = document.getElementsByTagName('p');
// console.log(test)
// (function (para){ 
//     var array = [];
//     let start = 0;
//     console.log('hello0');
//     while(start < para.length){
//         new_word = para[start].toString().split(" ");
//         console.log(new_word[start]);
//         start++;
//         console.log('hello1');
//     }
//     for(let i =0; i<para.length; i++){
//         var words = para[i].toString().split(' ');
//         console.log(words.toString());
//         console,log('hello2');
//     }
// })(test);
