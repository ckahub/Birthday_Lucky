const dateOfBirth=document.querySelector("#date_Of_Birth");
const luckyNumber=document.querySelector("#lucky_Number");
const btn_check=document.querySelector("#btn");
const outputBox=document.querySelector("#output_Box");


btn_check.addEventListener("click",check)

function sumAndLuckyNumber(sum,lNumber)
{
    

   if(sum%lNumber===0)
   {
       outputBox.innerText="your bday is lucky!";
   }
   else
   {
       outputBox.innerText="your bday is not lucky!!";
   }
   
}


function check()
{
    const bdayDate=dateOfBirth.value;
    const lNumber=luckyNumber.value;
    
    const sum=calculateSum(bdayDate);
    if(sum && bdayDate ){
        sumAndLuckyNumber(sum,lNumber)
        
    }
    else{
        outputBox.innerText="Please enter both the fields";
    }
   
   
}

function calculateSum(dob)
{
    dob=dob.replaceAll("-","");

    let sum=0;
    for(let i=0;i<dob.length;i++)
    {
        sum=sum+Number(dob.charAt(i));
    }
    return sum;
    
}