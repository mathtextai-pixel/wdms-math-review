/*
 * The list of reviews shown on the home page.
 *
 * To add a review:
 *   1. Create reviews/<id>.js (copy the shape of g6-topic3.js).
 *   2. Add one entry to `catalog` below.
 * That's it — the home page and the review page pick it up automatically.
 */
window.WDMS = {
  catalog: [
    {
      id: 'g6-topic3',
      grade: 6,
      label: 'Topic 3',
      title: 'Topic 3 Test Review',
      subtitle: 'Numeric and Algebraic Expressions',
      skills: ['Exponents', 'GCF and LCM', 'Order of operations', 'Writing expressions', 'Evaluating expressions', 'Equivalent expressions'],
      problems: 36
    }
  ],

  reviews: {},

  registerReview: function (review) {
    this.reviews[review.id] = review;
  }
};
