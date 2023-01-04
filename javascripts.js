let container = document.querySelector(".container");

const images = [
    {
        desc: "Funny cat",
        gif: "https://media.giphy.com/media/BzyTuYCmvSORqs1ABM/giphy.gif"
    },
    {
        desc: "Cat playing",
        gif: "https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif"
    },
    {
        desc: "Surprising cat",
        gif: "https://media.giphy.com/media/5i7umUqAOYYEw/giphy.gif"
    },
    {
        desc: "Developer cat",
        gif: "https://media.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.gif"
    },
    {
        desc: "Sleeping cat",
        gif: "https://media.giphy.com/media/DPiuat0EsqP3a/giphy.gif"
    }
  ];

const insertDom = (desc, gif) => {
return `<div>
            <h4>${desc}</h4>
            <img src="${gif}" />
        </div>`
}

images.map(elem => container.innerHTML += insertDom(elem.desc, elem.gif));

