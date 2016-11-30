function ultimateOptimizer(mat, max){
  // #loop while there is a negative value at the last row
  while(hasNegative(mat[mat.length-1])){
    // #get pivot column by getting column with the biggest magnitude in the last row
    var tempColIndex = getMostNegative(mat[mat.length-1]);
    // alert(tempColIndex);
    // #get pivot row by comparing test ratios
    var tempRowIndex = getPivotElementIndex(mat, tempColIndex);
    // alert(tempRowIndex);

    // #normalize pivot row
    // mat[tempRowIndex,] <- (mat[tempRowIndex,]/mat[tempRowIndex,tempColIndex])
    alert("hehe " + tempRowIndex + " " + tempColIndex + " " + mat[tempRowIndex][tempColIndex]);
    var normalizer = mat[tempRowIndex][tempColIndex];
    for(i = 0 ; i < mat[tempRowIndex].length ; i++){
      mat[tempRowIndex][i] = mat[tempRowIndex][i] / normalizer;
    }

    alert("normalized row is " + mat[tempRowIndex]);

    // #eliminate values in the same column except pivot row where it will be 1
    for(i = 0; i < mat.length; i++){
      if(i != tempRowIndex){
        if(mat[i][tempColIndex]!=0){
          var tempArray = new Array(mat[0].length);
          for(j = 0 ; j < mat[0].length ; j++) tempArray[j] = mat[i][tempColIndex] * mat[tempRowIndex][j];
          for(j = 0 ; j < mat[0].length ; j++) mat[i][j] = mat[i][j] - tempArray[j];
        }
      }
    }//close for
    alert(mat);
    // break;
  }//close while
  // alert("haller " + mat[0][0]);
}


function hasNegative(arr){
  for(i = 0 ; i < arr.length ; i++){
    if(arr[i] < 0) return true;
  }
  return false;
}

function getMostNegative(arr){
  var tempMin = 0;
  var tempMinIndex = 0;
  for(i = 0 ; i < arr.length ; i++){
    if(arr[i] < tempMin){
      tempMin = arr[i];
      tempMinIndex = i;
    }
  }
  return tempMinIndex;
}

function getPivotElementIndex(mat, colIndex){
  tempIndex = -1;
  tempMin = 0;

  for(i = 0 ; i < (mat.length-1) ; i++){
    if(mat[0][colIndex] == 0) continue;
    if((mat[i][mat[0].length-1] / mat[i][colIndex]) <= 0) continue;

    if(tempIndex == -1 || (mat[i][mat[0].length-1] / mat[i][colIndex]) < tempMin){
      tempMin = mat[i][mat[0].length-1] / mat[i][colIndex];
      tempIndex = i;
    }
  }
  return tempIndex;
}


function dietOptimizer(){
  alert("diet optimizer invoked");
  var items = [
    ["Frozen Broccoli", 0.16, 10, 73.8, 0, 0.8, 68.2, 13.6, 8.5, 8, 5867.4, 160.2, 159, 2.3],
    ["Carrots, Raw", 0.07, 0.5, 23.7, 0, 0.1, 19.2, 5.6, 1.6, 0.6, 15471, 5.1, 14.9, 0.3],
    ["Celery, Raw", 0.04, 1, 6.4, 0, 0.1, 34.8, 1.5, 0.7, 0.3, 53.6, 2.8, 16, 0.2],
    ["Frozen Corn", 0.18, 0.5, 72.2, 0, 0.6, 2.5, 17.1, 2, 2.5, 106.6, 5.2, 3.3, 0.3],
    ["Lettuce, Iceberg, Raw", 0.02, 1, 2.6, 0, 0, 1.8, 0.4, 0.3, 0.2, 66, 0.8, 3.8, 0.1],
    ["Peppers, Sweet, Raw", 0.53, 1, 20, 0, 0.1, 1.5, 4.8, 1.3, 0.7, 467.7, 66.1, 6.7, 0.3],
    ["Potatoes, Baked", 0.06, 0.5, 171.5, 0, 0.2, 15.2, 39.9, 3.2, 3.7, 0, 15.6, 22.7, 4.3],
    ["Tofu", 0.31, 0.25, 88.2, 0, 5.5, 8.1, 2.2, 1.4, 9.4, 98.6, 0.1, 121.8, 6.2],
    ["Roast Chicken", 0.84, 1, 277.4, 129.9, 10.8, 125.6, 0, 0, 42.2, 77.4, 0, 21.9, 1.8],
    ["Spaghetti W/ Sauce", 0.78, 1.5, 358.2, 0, 12.3, 1237.1, 58.3, 11.6, 8.2, 3055.2, 27.9, 80.2, 20.3],
    ["Tomato, Red, Ripe, Raw", 0.27, 1, 25.8, 0, 0.4, 11.1, 5.7, 1.4, 1, 766.3, 23.5, 6.2, 0.6],
    ["Apple, Raw, W/ Skin", 0.24, 1, 81.4, 0, 0.5, 0, 21, 3.7, 0.3, 73.1, 7.9, 9.7, 0.2],
    ["Banana", 0.15, 1, 104.9, 0, 0.5, 1.1, 26.7, 2.7, 1.2, 92.3, 10.4, 6.8, 0.4],
    ["Grapes", 0.32, 10, 15.1, 0, 0.1, 0.5, 4.1, 0.2, 0.2, 24, 1, 3.4, 0.1],
    ["Kiwifruit, Raw, Fresh", 0.49, 1, 46.4, 0, 0.3, 3.8, 11.3, 2.6, 0.8, 133, 74.5, 19.8, 0.3],
    //15
    ["Oranges", 0.15, 1, 61.6, 0, 0.2, 0, 15.4, 3.1, 1.2, 268.6, 69.7, 52.4, 0.1],
    ["Bagels", 0.16, 1, 78, 0, 0.5, 151.4, 15.1, 0.6, 3, 0, 0, 21, 1],
    ["Wheat Bread", 0.05, 1, 65, 0, 1, 134.5, 12.4, 1.3, 2.2, 0, 0, 10.8, 0.7],
    ["White Bread", 0.06, 1, 65, 0, 1, 132.5, 11.8, 1.1, 2.3, 0, 0, 26.2, 0.8],
    ["Oatmeal Cookies", 0.09, 1, 81, 0 , 3.3, 68.9, 12.4, 0.6, 1.1, 2.9, 0.1, 6.7, 0.5],
    ["Apple Pie", 0.16, 1, 67.2, 0, 3.1, 75.4, 9.6, 0.5, 0.5, 35.2, 0.9, 3.1, 0.1],
    ["Chocolate Chip Cookies", 0.03, 1, 78.1, 5.1, 4.5, 57.8, 9.3, 0,  0.9, 101.8, 0, 6.2, 0.4],
    ["Butter, Regular", 0.05, 1 , 35.8, 10.9, 4.1, 41.3, 0, 0, 0, 152.9, 0, 1.2, 0],
    ["Cheddar Cheese", 0.25, 1, 112.7, 29.4, 9.3, 173.7, 0.4, 0, 7, 296.5, 0, 202, 0.2],
    ["3.3% Fat, Whole Milk", 0.16, 1, 149.9, 33.2, 8.1, 119.6, 11.4, 0, 8, 307.4, 2.3, 291.3, 0.1],
    ["2% Lowfat Milk", 0.23, 1, 131.2, 18.3, 4.7, 121.8, 11.7, 0, 8.1, 500.2, 2.3, 296.7, 0.1],
    ["Skim Milk", 0.13, 1, 85.5, 4.4, 0.4, 126.2, 11.9, 0, 8.4, 499.8, 2.4, 302.3, 0.1],
    ["Poached Eggs", 0.08, 1, 74.5, 211.5, 5, 140, 0.6, 0, 6.2, 316, 0, 24.5, 0.7],
    ["Scrambled Eggs", 0.11, 1, 99.6, 211.2, 7.3, 168, 1.3, 0, 6.7, 409.2, 0.1, 42.6, 0.7],
    ["Balogna, Turkey", 0.15, 1, 56.4, 28.1, 4.3, 248.9, 0.3, 0, 3.9, 0, 0 , 23.8, 0.4],
    ["Frankfurter, Beef", 0.27, 1, 141.8, 27.4, 12.8, 461.7, 0.8, 0, 5.4, 0, 10.8, 9, 0.6],
    ["Ham, Sliced, Extralean", 0.33, 1, 37.1, 13.3, 1.4, 405.1, 0.3, 0, 5.5, 0, 7.4, 2, 0.2],
    ["Kielbasa, Prk", 0.15, 1, 80.6, 17.4, 7.1, 279.8, 0.6, 0, 3.4, 0, 5.5, 11.4, 0.4,],
    ["Cap'N Crunch", 0.31, 1, 119.6, 0, 2.6, 213.3, 23, 0.5, 1.4, 40.6, 0, 4.8, 7.5],
    //16-19
    ["Cheerios", 0.28, 1, 111, 0, 1.8, 307.6, 19.6, 2, 4.3, 1252.2, 15.1, 48.6, 4.5],
    ["Corn Flks, Kellogg'S", 0.28, 1, 110.5, 0, 0.1, 290.5, 24.5, 0.7, 2.3, 1252.2, 15.1, 0.9, 1.8],
    ["Raisin Brn, Kellg'S", 0.34, 1.3, 115.1, 0, 0.7, 204.4, 27.9, 4, 4, 1250.2, 0 , 12.9, 16.8],
    ["Rice Krispies", 0.32, 1, 112.2, 0, 0.2, 340.8, 24.8, 0.4, 1.9, 1252.2, 15.1, 4, 1.8],
    ["Special K", 0.38, 1, 110.8, 0, 0.1, 265.5, 21.3, 0.7, 5.6, 1252.2, 15.1, 8.2, 4.5],
    ["Oatmeal", 0.82, 1, 145.1, 0, 2.3, 2.3, 25.3, 4, 6.1, 37.4, 0, 18.7, 1.6],
    ["Malt-O-Meal, Choc", 0.52, 1, 607.2, 0, 1.5, 16.5, 128.2, 0, 17.3, 0, 0, 23.1, 47.2],
    ["Pizza W/ Pepperoni", 0.44, 1, 181, 14.2, 7, 267, 19.9, 0, 10.1, 281.9, 1.6, 64.6, 0.9],
    ["Taco", 0.59, 1, 369.4, 56.4, 20.6, 802, 26.7, 0, 20.7, 855, 2.2, 220.6, 2.4],
    ["Hamburger W/ Toppings", 0.83, 1, 275, 42.8, 10.2, 563.9, 32.7, 0, 13.6, 126.3, 2.6, 51.4, 2.5],
    ["Hotdog, Plain", 0.31, 1, 242.1, 44.1, 14.5, 670.3, 18, 0, 10.4, 0, 0.1, 23.5, 2.3],
    ["Couscous", 0.39, 0.5, 100.8, 0, 0.1, 4.5, 20.9, 1.3, 3.4, 0, 0, 7.2, 0.3],
    ["White Rice",0.08, 0.5, 102.7, 0, 0.2, 0.8, 22.3, 0.3, 2.1, 0, 0, 7.9, 0.9],

    ["Macaroni, Ckd", 0.17, 0.5, 98.7, 0, 0.5, 0.7, 19.8, 0.9, 3.3, 0, 0, 4.9, 1],
    ["Peanut Butter", 0.07, 2, 188.5, 0, 16, 155.5, 6.9, 2.1, 7.7, 0, 0, 13.1, 0.6],
    ["Pork", 0.81, 4, 710.8, 105.1, 72.2, 38.4, 0, 0, 13.8, 14.7, 0, 59.9, 0.4],
    ["Sardines in Oil", 0.45, 2, 49.9, 34.1, 2.7, 121.2, 0, 0, 5.9, 53.8, 0, 91.7, 0.7],
    ["White Tuna in Water", 0.69, 3, 115.6, 35.7, 2.1, 333.2, 0, 0, 22.7, 68, 0, 3.4, 0.5],
    ["Popcorn, Airpopped", 0.04, 1, 108.3, 0, 1.2, 1.1, 22.1, 4.3, 3.4, 55.6, 0, 2.8, 0.8],
    ["Potato Chip, Bbqflvr", 0.22, 1, 139.2, 0, 9.2, 212.6, 15, 1.2, 2.2, 61.5, 9.6, 14.2, 0.5],
    ["Pretzels", 0.12, 1, 108, 0, 1, 486.2, 22.5, 0.9, 2.6, 0, 0, 10.2, 1.2],
    ["Tortilla Chip", 0.19, 1, 142, 0, 7.4, 149.7, 17.8, 1.8, 2, 55.6, 0, 43.7, 0.4],
    ["Chicknoodl Soup", 0.39, 1, 150.1, 12.3, 4.6, 1862.2, 18.7, 1.5, 7.9, 1308.7, 0, 27.1, 1.5],
    ["Splt Pea&Hamsoup", 0.67, 1, 184.8, 7.2, 4, 964.8, 26.8, 4.1, 11.1, 4872, 7, 33.6, 2.1],
    ["Vegetbeef Soup", 0.71, 1, 158.1, 10, 3.8, 1915.1, 20.4, 4, 11.2, 3785.1, 4.8, 32.6, 2.2],
    ["Neweng Clamchwd", 0.75, 1, 175.7, 10, 5, 1864.9, 21.8, 1.5, 10.9, 20.1, 4.8, 82.8, 2.8],
    ["Tomato Soup", 0.39, 1, 170.7, 0, 3.8, 1744.4, 33.2, 1, 4.1, 1393, 133, 27.6, 3.5],
    ["New E Clamchwd, W/ Mlk", 0.99,  1, 163.7, 22.3, 6.6, 992, 16.6, 1.5, 9.5, 163.7, 3.5, 186, 1.5],
    ["Crm Mshrm Soup, W/ Mlk", 0.65, 1, 203.4, 19.8, 13.6, 1076.3, 15, 0.5, 6.1, 153.8, 2.2, 178.6, 0.6],
    ["Beanbacn Soup, W/ Watr",0.67, 1, 172, 2.5, 5.9, 951.3, 22.8, 8.6, 7.9, 888, 1.5, 81, 2]
  ];//close item

  var checkedValues = $('input:checkbox:checked').map(function() {
    return this.value;
  }).get();
  // alert(checkedValues);

  for(iterator = 0, i = 0 ; i < items.length ; i+=1){
    if(items[i][0] == checkedValues[iterator]){
      // alert("i found " + items[i][0]);
      iterator++;
    }
  }
  var charot = [
    [7,11,1,0,0,0,0,77],
    [10,8,0,1,0,0,0,80],
    [1,0,0,0,1,0,0,9],
    [0,1,0,0,0,1,0,6],
    [-150,-175,0,0,0,0,1,0]
  ];


  ultimateOptimizer(charot);
}//close dietOptimizer
