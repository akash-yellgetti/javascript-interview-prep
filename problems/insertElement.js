// program to insert an item at a specific index into an array

function insertElement() {
    let array = [1, 2, 3, 4];

    // index to add to
    let index = 2;

    // element that you want to add
    let element = 8;
  
    for (let i = array.length; i > index; i--) {
        console.log(array[i])
        //shift the elements that are greater than index
        array[i] = array[i-1];
    }

    // insert element at given index
    // array[index] = element;

    console.log(array);
}

insertElement();