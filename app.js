let defId = "";
let count = 0;

const addSection = () => {
  const main = document.querySelector("#main");

  const id = `id${++count}`;

  const addNewSection = `
    <section class="w-full bg-gray-200 flex flex-wrap" id="${id}">
        <button
            type="button"
            class="btn btn-primary m-4 btn-block"
            data-bs-toggle="modal"
            data-bs-target="#addTemplateModal"
            onclick="addDf(this.parentElement.id)"
        >
            ADD TEMPLATE
        </button>
    </section>`;

  main.innerHTML = addNewSection + main.innerHTML;
};

const addSpecialCategoriesSec = () => {
  const col = document.querySelector("#specialCategoryNo").value;
  let newDiv = "";
  for (let i = 0; i < col; i++) {
    newDiv += `
    <div class="w-20 h-20 bg-red-400 m-2">
        sldk
    </div>
  `;
  }
  const newSec = document.querySelector(`#${defId}`);
  newSec.innerHTML = newDiv;
};

const addDf = (a) => {
  defId = a;
  console.log(defId);
};
