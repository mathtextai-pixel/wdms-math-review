/*
 * The list of reviews shown on the home page.
 *
 * To add a review:
 *   1. Create reviews/<id>.js (copy the shape of g6-topic3.js).
 *   2. Add one entry to `catalog` below.
 * That's it — the home page and the review page pick it up automatically.
 *
 * A review can also have a Jeopardy game: create games/<id>.js (copy the shape
 * of games/g6-topic3.js) and set `jeopardy: true` on its entry below.
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
      problems: 36,
      jeopardy: true
    },
    {
      id: 'g7-topic1',
      grade: 7,
      label: 'Topic 1',
      title: 'Topic 1 Test Review',
      subtitle: 'Integers and Rational Numbers',
      skills: ['Opposites and absolute value', 'Fractions as decimals', 'Add and subtract', 'Multiply and divide', 'Rates of change', 'Real-world problems'],
      problems: 36,
      jeopardy: true
    }
  ],

  reviews: {},

  registerReview: function (review) {
    this.reviews[review.id] = review;
  },

  games: {},

  registerGame: function (game) {
    this.games[game.id] = game;
  }
};
