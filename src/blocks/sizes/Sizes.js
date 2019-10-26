import Block from "../Block";

export default class Size extends Block {
  constructor(block) {
    super(block);
    this.block
      .querySelectorAll(".sizes__item [type=radio]")
      .forEach(element =>
        element.addEventListener("change", evt =>
          this.dispatchEvent(new CustomEvent("size", { detail: { size: evt.target.dataset.size } }))
        )
      );
  }

  getCurrentSize() {
    return this.block.querySelector(".sizes__item [type=radio]:checked").dataset.size;
  }
}