export default class Block extends EventTarget {
    constructor(block, ...options) {
      super(...options);
      this.block = block;
    }
  }