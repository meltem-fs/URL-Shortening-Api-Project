const input = document.querySelector("input")
const btn = document.querySelector("click")
const links = document.querySelector("result")
const par = document.querySelector("p")
let short;

const getApi = async () => {
    const link = input.value;
const url = `https://api.shrtco.de/v2/shorten?url=${link}/very/long/link.html
`;
try{
    const res = await fetch(url);
     if (!res.ok) {
       throw new Error("something went wrong");
     }

const data = await res.json()
console.log(data);
const {
  result: { short_link },
  result: { full_short_link }
} = data;
console.log(data.result);
let short = `${short_link}`
console.log(short);

  par.innerHTML = `
  <div class="linkler">
        <div class="left_link">${input.value}</div>
        <div href="result.full_short_link" class="right_link">${short}</div>
        <button class="copy_link">Copy</button>
    </div>
`;
}

catch(err){
    console.log(err);
}
}

btn.addEventListener("click",()=> {
    getApi()
})

