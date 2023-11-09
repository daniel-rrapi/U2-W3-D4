const row = document.getElementById("row");
const loadImages = function () {
  fetch("https://api.pexels.com/v1/search?query=ice", {
    headers: {
      Authorization: "gLVkBVVgfaV9NjXugpzURHIQQGyiIIoW6OwYbZsQOsLMWrWRvKMZn6Up"
    }
  })
    .then((resp) => resp.json())
    .then((pageObj) => {
      pageObj.photos.forEach((element) => {
        const col = document.createElement("div");
        col.className = "col-12 col-md-4 col-lg-3";
        col.innerHTML = `
            
            <div class="card mb-4 shadow-sm">
            <img src="${element.src.medium}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Lorem Ipsum</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <div
                  class="d-flex justify-content-between align-items-center"
                >
                  <div class="btn-group">
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      View
                    </button>
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      Edit
                    </button>
                  </div>
                  <small class="text-muted">9 mins</small>
                </div>
              </div>
            </div>
          
            `;
        row.appendChild(col);
      });
    });
};
