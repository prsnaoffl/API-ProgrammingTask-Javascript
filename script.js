let request=new XMLHttpRequest();
request.open("GET","https://restcountries.eu/rest/v2/all",true);
request.send();

request.onload=()=>{
    let data =JSON.parse(request.response);

    let asiapopulation=[];
    let countryname=[]; 
    let capital=[];
    let people=[];
    let asiapop=[];

    //! 1.Asia continent in countries using reduce fun:
    let country =data.filter(element =>{
        return element.region=="Asia";
    });

    country.filter((element)=>{
       asiapopulation.push(element.population);
    });
    console.log(country);  //all the countries 

    //! 2.population less than 2lacks using filter function
   let totalasiapopulation=asiapopulation.filter((previous,accumlater)=>{
       return(previous+accumlater);
   },200000);
   console.log("totalasiapopulation is: "+ totalasiapopulation )

   //! 3.country name,capiltal,population:
    data.forEach((element)=>{
        if(element.population<200000 && element.capital && element.capital){
        people.push(element.population);
        countryname.push(element.name);
        capital.push(element.capital);
        console.log("countryname is "+element.name+"population is"+element.population+" capital is "+element.capital)
        }
    });
      
    //! 4.print population using reduce function:
    let totpop=people.reduce((previous,accumlater)=>{
        return (previous+accumlater);
    });
    console.log("below 2lck people total is:"+totpop+" total country "+countryname.length)
    
 
    //! 5.Asia continent in countries using reduce fun:
    let countrie =data.filter(element =>{
        return element.region=="Asia";
    });

    countrie.reduce((element)=>{
       asiapop.push(element.population);
    });
    console.log(countrie);  //all the countries 
  
}