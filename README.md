# WDMS Math Review

Test and quiz reviews for West Deptford Middle School math (grades 6 and 7).

Students pick a review, solve one problem at a time, and check each answer
right away. Every problem has hints and worked steps. Nothing a student types
is saved or sent anywhere.

The site is plain HTML, CSS and JavaScript with no build step, hosted on
GitHub Pages.

## How it is organized

| Path | What it is |
|---|---|
| `index.html` | Home page: grade tabs and the list of reviews |
| `review.html` | Runs one review (`review.html?id=g6-topic3`) |
| `teacher.html` | Teacher page: the direct link for every review, with copy buttons |
| `<id>/index.html` | The direct link for one review, for example `/g6-topic3/` |
| `reviews/manifest.js` | The list of reviews shown on the home page |
| `reviews/<id>.js` | One file per review: its skills, problems, answers, hints and steps |
| `assets/js/mathcheck.js` | Reads typed math and checks answers by value |
| `assets/js/review.js` | The review screens (overview, problems, results) |
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
