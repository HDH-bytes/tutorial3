let even_predicate = function (value)
{
    /* check whether the value is even 
     (a number is even when the remainder of its division by 2 is equal to 0)
     return true if the value is even or false when the value is odd 
   */
  if (value % 2 == 0){
    return true;
  } else {
    return false;
  }
};

let odd_predicate = function (value)
{
    /*
    check whether the value is odd 
     return true if the value is odd or false when the value is even
    */ 
   if (value % 2 != 0){
    return true;
   } else {
    return false;
   }
};

let undefined_predicate = function (value)
{
    /* 
        check and return a boolean value to indicate 
        whether the given value is undefined
         (be careful with the implicit coercion) 
    */
   if (value === undefined){
    return true;
   } else {
    return false;
   }
};

let null_predicate = function (value)
{
    /* 
        check and return a boolean value to indicate 
        whether the given value is null
         (be careful with the implicit coercion) 
    */
   if (value === null){
    return true;
   } else {
    return false;
   }
};


//We're defining a function that takes predicate function to 'callback' 
// and a value to check using the given predicate
let check = function (predicate,value)
{
    return predicate(value);
};

//DO NOT CHANGE ORDER OF OUTPUT
console.log(check(even_predicate, 9));
console.log(check(odd_predicate, 9));
console.log(check(even_predicate, 8));
console.log(check(odd_predicate, 8));
let x;
console.log(check(undefined_predicate, x));
console.log(check(null_predicate, x));
