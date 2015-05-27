// made mistakes with the array variable. It has to be the same throughout the entire function///
var array = [10,12,15,3,5,22,2];
// I needed help with the largest starting at zero. I wanted to start with largest and compare each against it. Way harder//
var largest= 0;

for (i=0; i<=largest;i++){
    if (array[i]>largest) {
// Had to get the logic straight with the for loop. The loop runs through the array finding the largest then you reset the var to = array[i]
        var largest=array[i];
    }
}




console.log(largest);
