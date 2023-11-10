const container = document.querySelector(".container")
const pexelsId = new URLSearchParams(window.location.search).get("pexelsId")
console.log(pexelsId)

window.onload = () => {
    fetch("https://api.pexels.com/v1/photos/" + pexelsId, {
        headers: {
            Authorization: "gLVkBVVgfaV9NjXugpzURHIQQGyiIIoW6OwYbZsQOsLMWrWRvKMZn6Up"
        }
    })
    .then(resp => resp.json())
    .then(photoObj => {
        const {photographer, photographer_url, src: {large}} = photoObj
        container.innerHTML = `
            <h1>${photographer}</h1>
            <img src="${large}" style="display:block;">
            <a href="${photographer_url}">Visit Photographer's Profile</a>
        `
    })

}