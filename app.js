let btn=document.querySelector(".f");
btn.addEventListener("click",async ()=>{
    let fact=await getfacts();
    let p=document.getElementById("result");
    p.innerText=fact;
});
async function getfacts() {
    try{
        let res=await axios.get("https://catfact.ninja/fact");
        return res.data.fact;
    }catch(err){
        console.log(err);
        return "NO facts found! sorry";
    }
}
let btn2=document.querySelector(".j");
btn2.addEventListener("click",async ()=>{
    let joke=await getjokes();
    let p2=document.getElementById("result2");
    p2.innerText=joke;
});
async function getjokes() {
    try{
        let config={headers: {Accept: "application/json"}};
        let res=await axios.get("https://icanhazdadjoke.com/",config);
        return res.data.joke;
    }catch(err){
        console.log(err);
        return "No Jokes Found! sorry";
    }
}
