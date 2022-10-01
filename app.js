const input = document.querySelector("input");
const btn = document.querySelector(".click");
const links = document.querySelector(".result");
const copy_btn = document.querySelector(".copy_link");

const getApi = async () => {
  const link = input.value;
  const url = `https://api.shrtco.de/v2/shorten?url=${link}/very/long/link.html`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (!res.ok) {
      attention();
      throw new Error("something went wrong");
    }
    const {
      result: { short_link },
      result: { full_short_link },
    } = data;

    links.innerHTML = `
    <div class="linkler">
        <div class="right_link"><a target="_blank" href="${input.value}">${short_link}</a></div>
    <button onclick="myCopy()" class="copy_link">Copy</button>
       </div>
`;

    console.log(data);
    console.log(data.result);
    console.log(short_link);
  } catch (err) {
    console.log(err);
  }
};

btn.addEventListener("click", () => {

    if(input.value == ""){
        links.innerHTML = `
          <p>please add a link</p>`
          return
    }
  getApi();

});

const attention = () => {
  links.innerHTML = `
    <h1>we cannot reach the api</h1>
    `;
};

function myCopy() {
    let copytext = document.querySelector(".right_link a")
    let copy_btn = document.querySelector(".copy_link")
    navigator.clipboard.writeText(copytext.href);
    copy_btn.innerText = `Link Copied`;

}