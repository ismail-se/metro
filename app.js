const main = document.querySelector("main");
let secOrder = 0;
let selected;

const addSection = () => {
  const newSec = `
  <section style="order: ${++secOrder}" class="section bg-gray-200 flex flex-col flex-wrap p-4 my-2 " data-order="${secOrder}" id="sec${secOrder}">
    <div class="flex flex-row-reverse gap-2 px-4 items-center w-full">
        <button class="btn btn-primary my-4 btn-block" onclick="changeOrder(this.parentNode)">SUBMIT</button> 
        <input type="number" class="orderNo p-2 border" placeholder="Order">
        <button class="btn btn-primary my-4 btn-block" onclick="delSection(this.parentNode.parentNode)">DELETE SECTION</button>  
        <button
        type="button"
        class="btn btn-primary my-4 btn-block"
        data-bs-toggle="modal"
        data-bs-target="#addTemplateModal"
        onclick="changeSelected(this.parentNode)"
        >
            ADD TEMPLATE
        </button> 
        
    </div>
    <div class="data"></div>
  </section>`;
  main.innerHTML = newSec + main.innerHTML;
};

const delSection = (node) => {
  node.remove();
};

const changeOrder = (node) => {
  const input = node.querySelector(".orderNo");
  if (input.value !== "") {
    const sec = node.parentNode;
    sec.style.order = input.value;
    sec.dataset.order = input.value;
  }
};

const changeSelected = (node) => {
  console.log(node);
  console.log(node.parentNode.dataset.order);
  selected = node.parentNode.id;
};

const addSlider = () => {
  const carousal = `
    <div class="flex justify-center items-center pb-2 gap-2">
      <div class="flex-1 relative">
        <button class="bg-white w-8 h-8 absolute top-4 left-4 z-10 rounded-full flex justify-center items-center">
          <img src="/imgs/close.svg" style="width: 1rem" />
        </button>
        <button class="bg-white w-8 h-8 absolute top-4 left-14 z-10 rounded-full flex justify-center items-center" data-bs-toggle="modal" data-bs-target="#sortModal">
          <img src="/imgs/sort.svg" style="width: 1rem" />
        </button>
        <img src="imgs/carousal/1181136599.jpg" alt="" class="rounded-2xl" />
      </div>
      <div class="flex-1 relative">
        <button class="bg-white w-8 h-8 absolute top-4 left-4 z-10 rounded-full flex justify-center items-center">
          <img src="/imgs/close.svg" style="width: 1rem" />
        </button>
        <button class="bg-white w-8 h-8 absolute top-4 left-14 z-10 rounded-full flex justify-center items-center" data-bs-toggle="modal" data-bs-target="#sortModal">>
          <img src="/imgs/sort.svg" style="width: 1rem" />
        </button>
        <img src="imgs/carousal/520592131.jpg" alt="" class="rounded-2xl" />
      </div>
      <div class="flex-1 relative">
        <button class="bg-white w-8 h-8 absolute top-4 left-4 z-10 rounded-full flex justify-center items-center">
          <img src="/imgs/close.svg" style="width: 1rem" />
        </button>
        <button class="bg-white w-8 h-8 absolute top-4 left-14 z-10 rounded-full flex justify-center items-center" data-bs-toggle="modal" data-bs-target="#sortModal">>
          <img src="/imgs/sort.svg" style="width: 1rem" />
        </button>
        <img src="imgs/carousal/817814347.jpg" alt="" class="rounded-2xl" />
      </div>
      <div class="flex-1 relative">
        <button class="bg-white w-8 h-8 absolute top-4 left-4 z-10 rounded-full flex justify-center items-center">
          <img src="/imgs/close.svg" style="width: 1rem" />
        </button>
        <button class="bg-white w-8 h-8 absolute top-4 left-14 z-10 rounded-full flex justify-center items-center" data-bs-toggle="modal" data-bs-target="#sortModal">>
          <img src="/imgs/sort.svg" style="width: 1rem" />
        </button>
        <img src="imgs/carousal/1181136599.jpg" alt="" class="rounded-2xl" />
      </div>
    </div>

    <div
          id="carouselExampleControls"
          class="carousel slide relative"
          data-bs-ride="carousel"
        >
        <button class="bg-white w-8 h-8 absolute top-4 left-4 z-10 rounded-full flex justify-center items-center">
            <img src="/imgs/draw.svg" style="width: 1rem" />
        </button>
          <div class="carousel-inner rounded-2xl">
            <div class="carousel-item active">
              <img
                src="imgs/carousal/1181136599.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="imgs/carousal/520592131.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="imgs/carousal/817814347.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
    `;

  const selSec = document.querySelector(`#${selected}`);

  const data = selSec.querySelector(`.data`);
  data.innerHTML += carousal;
};

const addCategories = () => {
  const catInput = document.querySelector("#categoryNo");
  let catInner = ``;
  if (catInput.value !== "") {
    for (let i = 0; i < +catInput.value; i++) {
      catInner += `
      <div
      class="
        item
        bg-gray-300
        rounded-2xl
        flex flex-1 flex-col
        justify-center
        items-center
        relative
      "
      style="min-width: 15rem"
    >
    <img src="/imgs/washing-machine-20600.png" alt="" />
    <p class="text-lg font-semibold">Blenders and Mixers</p>
    <button class="bg-white w-8 h-8 absolute top-4 left-4 z-10 rounded-full flex justify-center items-center" data-bs-toggle="modal" data-bs-target="#uploadImage">
            <img src="/imgs/draw.svg" style="width: 1rem" />
        </button>
    </div>`;
    }
    const categories = `
  <div class="mt-4">
  <div class="heading">
    <h2 class="font-bold text-4xl">Categories</h2>
  </div>
  <div class="items flex gap-4 mt-4 flex-wrap">
     ${catInner}
  </div>
</div>
    `;
    const selSec = document.querySelector(`#${selected}`);
    const data = selSec.querySelector(`.data`);
    data.innerHTML += categories;
  }
};

const addSpecialCat = () => {
  const speInput = document.querySelector(`#specialCategoryNo`);
  let catInner = ``;
  if (speInput.value !== "") {
    for (let i = 0; i < +speInput.value; i++) {
      catInner += `
      <div class="flex flex-1 flex-col justify-center items-center gap-2 relative">
        <button class="bg-white w-8 h-8 absolute top-4 left-4 z-10 rounded-full flex        justify-center items-center">
            <img src="/imgs/draw.svg" style="width: 1rem" />
        </button>
        <img src="imgs/2020072049.png" alt="" class="w-full" />
        <p>Whats New</p>
      </div>`;
    }
    const categories = `
    <div class="mt-6 flex gap-8 p-4">
        ${catInner}
      </div>
    `;
    const selSec = document.querySelector(`#${selected}`);
    const data = selSec.querySelector(`.data`);
    data.innerHTML += categories;
  }
};

const addBanner = () => {
  const banner = `
    <div class="rounded-xl bg-blue-400 w-full h-full my-8 relative">
        <button class="bg-white w-8 h-8 absolute top-4 left-4 z-10 rounded-full flex        justify-center items-center">
            <img src="/imgs/draw.svg" style="width: 1rem" />
        </button>
         <img src="/imgs/cover.jpg" alt="" class="rounded-xl w-full">
      </div>
    `;
  const selSec = document.querySelector(`#${selected}`);
  const data = selSec.querySelector(`.data`);
  data.innerHTML += banner;
};

const addFeatured = () => {
  const feaInput = document.querySelector(`#featuredNo`);
  let catInner = ``;
  if (feaInput.value !== "") {
    for (let i = 0; i < +feaInput.value; i++) {
      catInner += `
      <div class="border border-2 rounded-lg md:rounded-xl flex-1 flex justify-center bg-white items-center relative">
            <button class="bg-white w-8 h-8 absolute top-4 left-4 z-10 rounded-full flex justify-center items-center">
                <img src="/imgs/draw.svg" style="width: 1rem" />
            </button>
            <img src="/imgs/philips.jpg" alt="" class="rounded-xl">
          </div>`;
    }
    const featured = `
    <div>
        <div class="heading">
          <h2 class="font-bold text-4xl">Featured Brands</h2>
        </div>
        <div class="flex gap-2 md:gap-4 flex-wrap mt-4">
          ${catInner}
        </div>
      </div>
    `;
    const selSec = document.querySelector(`#${selected}`);
    const data = selSec.querySelector(`.data`);
    data.innerHTML += featured;
  }
};

const addMostSold = () => {
  const soldInput = document.querySelector(`#mostSoldNo`);
  let catInner = ``;
  if (soldInput.value !== "") {
    for (let i = 0; i < +soldInput.value; i++) {
      catInner += `
        <div class="card rounded-xl flex-1 relative" style="min-width: 15rem">
        <button class="bg-white w-8 h-8 absolute top-4 left-4 z-10 rounded-full flex justify-center items-center">
                <img src="/imgs/draw.svg" style="width: 1rem" />
            </button>
            <img src="imgs/blue.png" class="card-img-top rounded-xl" alt="...">
            <div class="card-body">
              <p class="card-text text-lg font-semibold">TVs and Entertainment</p>
            </div>
          </div>`;
    }
    const featured = `
      <div class="mt-4">
        <div class="heading">
          <h2 class="font-bold text-4xl">Most Sold Items</h2>
        </div>
        <div class="items flex gap-4 mt-4 flex-wrap">    
          ${catInner}
        </div>
      </div>
      `;
    const selSec = document.querySelector(`#${selected}`);
    const data = selSec.querySelector(`.data`);
    data.innerHTML += featured;
  }
};

const addCategories2 = () => {
  const featured = `
  <div class="flex flex-wrap gap-4 flex-col md:flex-row">
      <div class="flex-1 relative">
        <button class="bg-white w-8 h-8 absolute top-4 left-4 z-10 rounded-full flex justify-center items-center">
            <img src="/imgs/draw.svg" style="width: 1rem" />
        </button>
        <img src="imgs/blue2.png" alt="" class="w-full md:h-full" />
      </div>
      <div class="flex-1 flex flex-col gap-4">
        <div class="flex gap-4">
          <div class="relative">
            <button class="bg-white w-8 h-8 absolute top-4 left-4 z-10 rounded-full flex justify-center items-center">
                <img src="/imgs/draw.svg" style="width: 1rem" />
            </button>
            <img src="imgs/blue2.png" alt="" class="object-contain" />
          </div>
          <div class="relative">
            <button class="bg-white w-8 h-8 absolute top-4 left-4 z-10 rounded-full flex justify-center items-center">
                <img src="/imgs/draw.svg" style="width: 1rem" />
            </button>
            <img src="imgs/blue2.png" alt="" class="object-contain" />
          </div>
        </div>
        <div class="flex gap-4">
          <div class="relative">
            <button class="bg-white w-8 h-8 absolute top-4 left-4 z-10 rounded-full flex justify-center items-center">
                <img src="/imgs/draw.svg" style="width: 1rem" />
            </button> 
            <img src="imgs/blue2.png" alt="" class="object-contain" />
          </div>
          <div class="relative">
            <button class="bg-white w-8 h-8 absolute top-4 left-4 z-10 rounded-full flex justify-center items-center">
                <img src="/imgs/draw.svg" style="width: 1rem" />
            </button>
            <img src="imgs/blue2.png" alt="" class="object-contain" />
          </div>
        </div>
      </div>
    </div>    
  `;
  const selSec = document.querySelector(`#${selected}`);
  const data = selSec.querySelector(`.data`);
  data.innerHTML += featured;
};
