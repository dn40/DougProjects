function test() {
        var results = "";
        var myArray = new Array();
        myArray[0] = "Man";
        myArray[1] = "Woman";
        myArray[2] = "Boy";
        myArray[3] = "Girl";
        myArray[4] = "John";
        myArray[5] = "Mary";
        myArray[6] = "Zehen";
        myArray[7] = "Jia";
        myArray[8] = "1"
        myArray[9] = "2";
        myArray[10] = "3";
        myArray[11] = "3"
        myArray[12] = "3";
        results = "<table>";
        for (var i = 0; i < myArray.length; i++) {	//###NOTICE THE CHANGE FROM i++ TO     i=i+2
            results += "<tr><td>" + myArray[i] + "</td>";
            results += "<td>" + myArray[i + 1] + "</td></tr>";
                if(i+1 < myArray.length){
                                results += "<td>" + myArray[i+1] + "</td></tr>";  
                } else{
                             results += "<td></td></tr>";   
                }
            }

        results += "<tr><td colspan=2></td></tr>";
        results += "<table><br /> <br />";

        // table isn't showing up this way. Need to find out how to fix this. Different kind of array then I'm used to.//
    }
