var x = 1;

while (x <= 20/* your stop condition goes here */) 
{
  if ((x%3 === 0) && (x%5 === 0)) // check divisibility 
  { 
      console.log ("JuliaJames");
      
  } // print Julia, James, or JuliaJames
  else if (x % 5 ===0)
    { 
        console.log ("James");
        
    }
  else if (x % 3 === 0) 
    {
        console.log("Julia");
        
    }
  else
    {
        console.log(x);
        
    }
    x = x+1;// increment x
}

