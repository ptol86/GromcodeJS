"use strict";

export const wallet = {
   transactions: [1, 232, 344, 12, 43, 12],
   getMax() {
      return Math.max.apply(null, this.transactions);

  },
  getMin() {
      return Math.min.apply(null, this.transactions);
  },
};