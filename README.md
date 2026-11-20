# WDMS Math Review

Test and quiz reviews for West Deptford Middle School math (grades 6 and 7).

Students pick a review, solve one problem at a time, and check each answer
right away. Every problem has hints and worked steps. Each review can also have
a Jeopardy game for class or solo play. Nothing a student types is sent anywhere.

The site is plain HTML, CSS and JavaScript with no build step, hosted on
GitHub Pages.

## How it is organized

| Path | What it is |
|---|---|
| `index.html` | Home page: grade tabs and the list of reviews |
| `review.html` | Runs one review (`review.html?id=g6-topic3`) |
| `jeopardy.html` | Runs one Jeopardy game (`jeopardy.html?id=g6-topic3`) |
| `games/<id>.js` | One file per Jeopardy game: categories, questions and answers |
| `teacher.html` | Teacher page: the direct link for every review, with copy buttons |
| `<id>/index.html` | The direct link for one review, for example `/g6-topic3/` |
| `<id>-jeopardy/index.html` | The direct link for one game, for example `/g6-topic3-jeopardy/` |
| `reviews/manifest.js` | The list of reviews shown on the home page |
| `reviews/<id>.js` | One file per review: its skills, problems, answers, hints and steps |
| `assets/js/mathcheck.js` | Reads typed math and checks answers by value |
| `assets/js/review.js` | The review screens (overview, problems, results) |
| `assets/js/jeopardy.js` | The Jeopardy game (setup, board, questions, scoring) |
| `assets/css/style.css` | All styling |
| `assets/img/` | Images used by problems, saved with the site |
| `assets/vendor/katex/` | KaTeX, which draws the math |
| `tests/run.js` | Automated checks |

## Adding a review

1. Copy `reviews/g6-topic3.js` to a new file, for example `reviews/g7-topic2.js`,
   and change the `id`, `grade`, titles, `sections` and `problems`.
2. Add one entry for it to `catalog` in `reviews/manifest.js`.
3. Copy the `g6-topic3/` folder to a folder named after the new `id` and change
   the id and title inside its `index.html`. This is the review's direct link,
   and the teacher page lists it automatically.
4. Run the checks (below). They confirm that every problem is well formed and
   that each answer key is accepted by the checker.

## Adding a Jeopardy game

1. Copy `games/g6-topic3.js` to `games/<id>.js`, using the same `id` as the
   review it goes with, and write new categories and questions. Every tile
   needs at least two questions so the board can change from game to game,
   and every question needs `steps`: a short explanation shown when the
   teacher taps "How to solve it".
2. Set `jeopardy: true` on that review's entry in `reviews/manifest.js`.
3. Copy the `g6-topic3-jeopardy/` folder to `<id>-jeopardy/` and change the id
   and title inside its `index.html`.
4. Run the checks.

The game in progress is saved in the browser on that one computer
(`localStorage`), so a refresh does not lose the score. Nothing is sent anywhere.

### Problem types

| `type` | Student does | Answer fields |
|---|---|---|
| `number` | Types a number (decimal, fraction or mixed number) | `answer`, optional `prefix` (such as `$`) and `unit` |
| `expr` | Types an algebraic expression; any equivalent form is accepted | `answer`, optional `rules: { maxTerms, noParens }` when a specific form is required |
| `factor` | Types a prime factorization | `target`, `answer` |
| `mc` | Picks one choice | `options`, `correct` (index) |
| `multi` | Selects all that apply | `options`, `correct` (list of indexes) |
| `matrix` | Picks one choice in each row | `columns`, `rows: [{ label, correct }]` |
| `parts` | Answers Part A, Part B, ... | `parts: [{ label, prompt, type, ... }]` |

Any problem can also have a `table` (`caption`, `headers`, `rows`) or an
`image` (`src`, `alt`). Save images in `assets/img/`.

### Writing text

- `$...$` is math, and `$$...$$` puts math on its own line.
- `\$` is a dollar sign.
- `**bold**` makes bold text.
- A blank line starts a new paragraph.

## Checks

```bash
node tests/run.js
```

## Viewing it on your own computer

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>.
