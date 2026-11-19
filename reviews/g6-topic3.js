/*
 * Grade 6 · Topic 3 Test Review — Numeric and Algebraic Expressions
 *
 * The sections follow the question types on the Topic 3 test, in test order.
 * The problems come from Lessons 3-1 to 3-7 (not from the test itself).
 *
 * Text rules:  $...$ is math,  \$ is a dollar sign,  **bold**,  a blank line starts a new paragraph.
 */
(function () {
  var m = String.raw;

  WDMS.registerReview({
    id: 'g6-topic3',
    grade: 6,
    title: 'Topic 3 Test Review',
    subtitle: 'Numeric and Algebraic Expressions',

    sections: [
      { id: 's1', title: 'Combine like terms', lesson: '3-7', blurb: 'Write an expression with the fewest terms.' },
      { id: 's2', title: 'Match words to expressions', lesson: '3-4', blurb: 'Turn a phrase into algebra.' },
      { id: 's3', title: 'Find the value', lesson: '3-5', blurb: 'Substitute, then pick the expressions that match.' },
      { id: 's4', title: 'Compare powers', lesson: '3-1', blurb: 'Same digits, different values.' },
      { id: 's5', title: 'Write expressions for real situations', lesson: '3-4', blurb: 'Build an expression from a story.' },
      { id: 's6', title: 'Greatest common factor', lesson: '3-2', blurb: 'Find the GCF and use it.' },
      { id: 's7', title: 'Write and evaluate', lesson: '3-5', blurb: 'Write the expression, then find its value.' },
      { id: 's8', title: 'Distributive Property', lesson: '3-6', blurb: 'Rewrite expressions that have parentheses.' },
      { id: 's9', title: 'Evaluate expressions', lesson: '3-5', blurb: 'Substitute decimals and fractions.' },
      { id: 's10', title: 'Least common multiple', lesson: '3-2', blurb: 'When do two patterns line up?' },
      { id: 's11', title: 'Spot equivalent expressions', lesson: '3-6 and 3-7', blurb: 'Different look, same value.' },
      { id: 's12', title: 'Exponents, prime factors, and order of operations', lesson: '3-1 to 3-3', blurb: 'Skills from the first half of the topic.' }
    ],

    problems: [
      /* ------------------------------------------------------------------ *
       * 1 · Combine like terms (Lesson 3-7)
       * ------------------------------------------------------------------ */
      {
        id: 's1-a', section: 's1', type: 'expr',
        prompt: m`Write an equivalent expression with the fewest number of terms.

$$3 + 3y - 1 + y$$`,
        answer: '4y + 2', rules: { maxTerms: 2, noParens: true },
        hints: [
          m`Like terms have the same variable part. Here $3y$ and $y$ are like terms, and so are $3$ and $1$.`,
          m`Remember that $y$ means $1y$. So $3y + y = 4y$. Now combine $3 - 1$.`
        ],
        steps: [
          m`Group the like terms: $(3y + y) + (3 - 1)$`,
          m`Combine the $y$ terms: $3y + 1y = 4y$`,
          m`Combine the numbers: $3 - 1 = 2$`,
          m`**Answer:** $4y + 2$`
        ]
      },
      {
        id: 's1-b', section: 's1', type: 'expr',
        prompt: m`Write an equivalent expression with the fewest number of terms.

$$3.2x + 6.5 - 2.4x - 4.4$$`,
        answer: '0.8x + 2.1', rules: { maxTerms: 2, noParens: true },
        hints: [
          m`Put the $x$ terms together and the plain numbers together.`,
          m`$3.2x - 2.4x = 0.8x$. Now find $6.5 - 4.4$.`
        ],
        steps: [
          m`Group the like terms: $(3.2x - 2.4x) + (6.5 - 4.4)$`,
          m`Combine the $x$ terms: $3.2x - 2.4x = 0.8x$`,
          m`Combine the numbers: $6.5 - 4.4 = 2.1$`,
          m`**Answer:** $0.8x + 2.1$`
        ]
      },
      {
        id: 's1-c', section: 's1', type: 'expr',
        prompt: m`Vanna earns money mowing and raking $x$ lawns each weekend. This expression shows how much she makes this summer.

$$2.5(20.50x + 5.50x - 10)$$

Write an equivalent expression with the fewest number of terms and no parentheses.`,
        answer: '65x - 25', rules: { maxTerms: 2, noParens: true },
        hints: [
          m`Start inside the parentheses. Combine the like terms $20.50x + 5.50x$.`,
          m`Now you have $2.5(26x - 10)$. Multiply $2.5$ by **both** terms inside.`
        ],
        steps: [
          m`Combine like terms inside the parentheses: $20.50x + 5.50x = 26x$`,
          m`Now the expression is $2.5(26x - 10)$`,
          m`Use the Distributive Property: $2.5(26x) - 2.5(10)$`,
          m`Multiply: $2.5 \times 26 = 65$ and $2.5 \times 10 = 25$`,
          m`**Answer:** $65x - 25$`
        ]
      },

      /* ------------------------------------------------------------------ *
       * 2 · Match words to expressions (Lesson 3-4)
       * ------------------------------------------------------------------ */
      {
        id: 's2-a', section: 's2', type: 'multi',
        prompt: m`Select **all** the algebraic expressions that could represent this phrase:

**“nine more than the product of five and the number of tires $t$”**`,
        options: [m`$9 + 5t$`, m`$5 \cdot t + 9$`, m`$(9 + 5)t$`, m`$(5 \times t) + 9$`, m`$5 + 9t$`],
        correct: [0, 1, 3],
        hints: [
          m`“The product of five and $t$” means $5 \times t$, which can be written $5t$.`,
          m`“Nine more than” means add 9 to that product. There is more than one way to write it.`
        ],
        steps: [
          m`The product of five and the number of tires is $5t$.`,
          m`Nine more than that product is $5t + 9$.`,
          m`$9 + 5t$, $5 \cdot t + 9$, and $(5 \times t) + 9$ all mean $5t + 9$.`,
          m`$(9 + 5)t$ is $14t$, and $5 + 9t$ multiplies the 9 by $t$ instead of the 5. Those two do not match.`,
          m`**Answer:** $9 + 5t$, $\;5 \cdot t + 9$, and $(5 \times t) + 9$`
        ]
      },
      {
        id: 's2-b', section: 's2', type: 'multi',
        prompt: m`Select **all** of the phrases that could be represented by the algebraic expression

$$\frac{w}{4} - 4$$`,
        options: [
          m`four less than the quotient of a number $w$ and four`,
          m`the difference between a number $w$ and 4`,
          m`four less than $w$ divided by 4`,
          m`four less than a number $w$`,
          m`the quotient of four and a number $w$`
        ],
        correct: [0, 2],
        hints: [
          m`The fraction bar means divide. $\frac{w}{4}$ is “$w$ divided by 4,” also called the quotient of $w$ and 4.`,
          m`The $- 4$ means “four less than.” Look for phrases that have **both** parts: a quotient, then four less.`
        ],
        steps: [
          m`$\frac{w}{4}$ is the quotient of $w$ and 4, or $w$ divided by 4.`,
          m`Subtracting 4 means “four less than” that quotient.`,
          m`“The difference between $w$ and 4” and “four less than a number $w$” are both $w - 4$. No division.`,
          m`“The quotient of four and a number $w$” is $\frac{4}{w}$. No subtraction, and the division is flipped.`,
          m`**Answer:** the first and third phrases`
        ]
      },
      {
        id: 's2-c', section: 's2', type: 'mc',
        prompt: m`Which algebraic expression represents this phrase?

**“four more than the product of 3 and the number of cats $c$”**`,
        options: [m`$4 + 3c$`, m`$(4 + 3)c$`, m`$3 + 4c$`, m`$4 \times 3 \times c$`],
        correct: 0,
        hints: [
          m`Find the product first: 3 times the number of cats is $3c$.`,
          m`“Four more than” means add 4 to the product.`
        ],
        steps: [
          m`The product of 3 and the number of cats is $3c$.`,
          m`Four more than that is $3c + 4$, which is the same as $4 + 3c$.`,
          m`**Answer:** $4 + 3c$`
        ]
      },

      /* ------------------------------------------------------------------ *
       * 3 · Find the value (Lesson 3-5)
       * ------------------------------------------------------------------ */
      {
        id: 's3-a', section: 's3', type: 'multi',
        prompt: m`Select **all** the expressions that have a value of **180** when $b = 4$.`,
        options: [
          m`$87b - 179 + 957 \div 87$`,
          m`$\dfrac{33b}{12}$`,
          m`$b^2 + 120$`,
          m`$51b - 24$`,
          m`$11b + 187 - 2{,}756 \div 13$`
        ],
        correct: [0, 3],
        hints: [
          m`Replace every $b$ with 4. Then use the order of operations: multiply and divide before you add and subtract.`,
          m`Try the first one: $87(4) = 348$ and $957 \div 87 = 11$. So it is $348 - 179 + 11$.`
        ],
        steps: [
          m`$87(4) - 179 + 957 \div 87 = 348 - 179 + 11 = 180$ ✓`,
          m`$\dfrac{33(4)}{12} = \dfrac{132}{12} = 11$ ✗`,
          m`$4^2 + 120 = 16 + 120 = 136$ ✗`,
          m`$51(4) - 24 = 204 - 24 = 180$ ✓`,
          m`$11(4) + 187 - 2{,}756 \div 13 = 44 + 187 - 212 = 19$ ✗`,
          m`**Answer:** $87b - 179 + 957 \div 87$ and $51b - 24$`
        ]
      },
      {
        id: 's3-b', section: 's3', type: 'multi',
        prompt: m`Select **all** the expressions that have a value of **27** when $x = 3$.`,
        options: [m`$9x$`, m`$x^3$`, m`$3x + 9$`, m`$x^2 + 18$`, m`$30 - x \div 3$`],
        correct: [0, 1, 3],
        hints: [
          m`Replace $x$ with 3 in each expression and work out its value.`,
          m`Be careful with exponents: $x^3$ means $3 \times 3 \times 3$, not $3 \times 3$.`
        ],
        steps: [
          m`$9(3) = 27$ ✓`,
          m`$3^3 = 3 \times 3 \times 3 = 27$ ✓`,
          m`$3(3) + 9 = 9 + 9 = 18$ ✗`,
          m`$3^2 + 18 = 9 + 18 = 27$ ✓`,
          m`$30 - 3 \div 3 = 30 - 1 = 29$ ✗ (divide before you subtract)`,
          m`**Answer:** $9x$, $\;x^3$, and $x^2 + 18$`
        ]
      },
      {
        id: 's3-c', section: 's3', type: 'mc',
        prompt: m`An equation is shown.

$$5x + (x \div 3) = 38.4$$

Which value of $x$ makes the equation true?`,
        options: [m`$x = 5.1$`, m`$x = 5.2$`, m`$x = 6.1$`, m`$x = 7.2$`],
        correct: 3,
        hints: [
          m`Test each choice. Substitute it for $x$ on the left side and see if you get 38.4.`,
          m`$5x$ needs to be close to 38.4, so $x$ must be a little more than 7.`
        ],
        steps: [
          m`Try $x = 7.2$: $\;5(7.2) + (7.2 \div 3)$`,
          m`$5(7.2) = 36$ and $7.2 \div 3 = 2.4$`,
          m`$36 + 2.4 = 38.4$ ✓`,
          m`**Answer:** $x = 7.2$`
        ]
      },

      /* ------------------------------------------------------------------ *
       * 4 · Compare powers (Lesson 3-1)
       * ------------------------------------------------------------------ */
      {
        id: 's4-a', section: 's4', type: 'parts',
        prompt: m`The same digits are used for the expressions $2^5$ and $5^2$. Compare their values.`,
        parts: [
          { label: 'A', prompt: m`What is the value of $2^5$?`, type: 'number', answer: '32' },
          { label: 'B', prompt: m`What is the value of $5^2$?`, type: 'number', answer: '25' },
          { label: 'C', prompt: m`Which expression has the greater value?`, type: 'mc', options: [m`$2^5$`, m`$5^2$`, m`They are equal`], correct: 0 }
        ],
        hints: [
          m`The exponent tells how many times the base is used as a factor.`,
          m`$2^5 = 2 \times 2 \times 2 \times 2 \times 2$ and $5^2 = 5 \times 5$.`
        ],
        steps: [
          m`$2^5 = 2 \times 2 \times 2 \times 2 \times 2 = 32$`,
          m`$5^2 = 5 \times 5 = 25$`,
          m`$32 > 25$, so $2^5$ is greater.`,
          m`**Answer:** A) 32 $\;$ B) 25 $\;$ C) $2^5$`
        ]
      },
      {
        id: 's4-b', section: 's4', type: 'parts',
        prompt: m`Julia calculated a sheet of foil as $1.9 \times 10^5$ units thick. Thom calculated the foil as 183,000 units thick.`,
        parts: [
          { label: 'A', prompt: m`Evaluate Julia's expression, $1.9 \times 10^5$.`, type: 'number', answer: '190000' },
          { label: 'B', prompt: m`Whose calculation represents the greater thickness?`, type: 'mc', options: ['Julia', 'Thom', 'They are the same'], correct: 0 }
        ],
        hints: [
          m`$10^5 = 10 \times 10 \times 10 \times 10 \times 10 = 100{,}000$`,
          m`Multiply $1.9 \times 100{,}000$. Then compare your answer with 183,000.`
        ],
        steps: [
          m`$10^5 = 100{,}000$`,
          m`$1.9 \times 100{,}000 = 190{,}000$`,
          m`$190{,}000 > 183{,}000$, so Julia's calculation is greater.`,
          m`**Answer:** A) 190,000 $\;$ B) Julia`
        ]
      },
      {
        id: 's4-c', section: 's4', type: 'mc',
        prompt: m`Which expression is **NOT** equal to 729?`,
        options: [m`$3 \times 3 \times 3 \times 3 \times 3 \times 3$`, m`$6^3$`, m`$9 \times 9 \times 9$`, m`$3^6$`],
        correct: 1,
        hints: [
          m`$3^6$ means six 3s multiplied together. $6^3$ means three 6s multiplied together. They are not the same.`,
          m`Work out $6 \times 6 \times 6$.`
        ],
        steps: [
          m`$3 \times 3 \times 3 \times 3 \times 3 \times 3 = 729$, and that is what $3^6$ means.`,
          m`$9 \times 9 \times 9 = 81 \times 9 = 729$`,
          m`$6^3 = 6 \times 6 \times 6 = 216$`,
          m`**Answer:** $6^3$`
        ]
      },

      /* ------------------------------------------------------------------ *
       * 5 · Write expressions for real situations (Lesson 3-4)
       * ------------------------------------------------------------------ */
      {
        id: 's5-a', section: 's5', type: 'expr',
        prompt: m`Yuri walked $p$ poodles and $b$ bulldogs on Monday. He walked the same number of poodles and bulldogs each day Tuesday through Friday as he did on Monday.

Write an algebraic expression for the total number of dogs walked in this 5-day period.`,
        answer: '5(p + b)',
        hints: [
          m`How many dogs does Yuri walk in **one** day? Use both variables.`,
          m`He walks $p + b$ dogs each day, for 5 days.`
        ],
        steps: [
          m`Dogs walked in one day: $p + b$`,
          m`He does this for 5 days, so multiply by 5.`,
          m`**Answer:** $5(p + b)$, which is the same as $5p + 5b$`
        ]
      },
      {
        id: 's5-b', section: 's5', type: 'mc',
        prompt: m`After a hike, a group of $s$ students shares 5 boxes of granola bars equally. Each box has 8 granola bars.

Which algebraic expression represents how many granola bars each student can have?`,
        options: [m`$(5 \times 8) \div s$`, m`$5 \times (8 \div s)$`, m`$s \times (5 + 8)$`, m`$(s + 5) \times 8$`],
        correct: 0,
        hints: [
          m`First find the total number of granola bars in 5 boxes.`,
          m`“Shares equally” means divide the total by the number of students.`
        ],
        steps: [
          m`Total granola bars: 5 boxes of 8 is $5 \times 8$.`,
          m`Sharing equally among $s$ students means dividing by $s$.`,
          m`**Answer:** $(5 \times 8) \div s$`
        ]
      },
      {
        id: 's5-c', section: 's5', type: 'expr',
        prompt: m`Yolanda is planning a party that will use all three rooms. She will rent every room, with its sound system, for $t$ hours. The sound system fee is paid one time, not per hour.

Write an expression for the total amount Yolanda will pay.`,
        table: {
          headers: ['Room', 'Rental fee (per hour)', 'Sound system fee'],
          rows: [['Room 1', m`\$25`, m`\$15`], ['Room 2', m`\$20`, m`\$10`], ['Room 3', m`\$50`, 'No charge']]
        },
        answer: '95t + 25',
        hints: [
          m`Each room costs its hourly fee times $t$ hours. Room 1 costs $25t$ for the room.`,
          m`Add the three hourly costs, then add the sound system fees: $25t + 20t + 50t + 15 + 10$.`
        ],
        steps: [
          m`Room 1: $25t + 15$`,
          m`Room 2: $20t + 10$`,
          m`Room 3: $50t$`,
          m`Total: $25t + 15 + 20t + 10 + 50t$`,
          m`Combine like terms: $25t + 20t + 50t = 95t$ and $15 + 10 = 25$`,
          m`**Answer:** $95t + 25$ (any equivalent expression is correct)`
        ]
      },

      /* ------------------------------------------------------------------ *
       * 6 · Greatest common factor (Lesson 3-2)
       * ------------------------------------------------------------------ */
      {
        id: 's6-a', section: 's6', type: 'matrix',
        prompt: m`Select the GCF for each pair of numbers.`,
        columns: ['1', '4', '7', '11'],
        rows: [
          { label: '8, 52', correct: 1 },
          { label: '21, 49', correct: 2 },
          { label: '22, 55', correct: 3 },
          { label: '32, 81', correct: 0 }
        ],
        hints: [
          m`The GCF is the greatest number that divides **both** numbers with no remainder.`,
          m`List the factors of the smaller number, then find the largest one that also divides the bigger number. For 21: the factors are 1, 3, 7, 21.`
        ],
        steps: [
          m`**8, 52:** $8 = 2 \times 2 \times 2$ and $52 = 2 \times 2 \times 13$. They share $2 \times 2$, so the GCF is 4.`,
          m`**21, 49:** $21 = 3 \times 7$ and $49 = 7 \times 7$. The GCF is 7.`,
          m`**22, 55:** $22 = 2 \times 11$ and $55 = 5 \times 11$. The GCF is 11.`,
          m`**32, 81:** $32 = 2 \times 2 \times 2 \times 2 \times 2$ and $81 = 3 \times 3 \times 3 \times 3$. They share no prime factors, so the GCF is 1.`,
          m`**Answer:** 4, 7, 11, and 1`
        ]
      },
      {
        id: 's6-b', section: 's6', type: 'number',
        prompt: m`You have 50 blueberry scones and 75 cranberry scones. You want to make as many identical bags as possible. Each bag should have an equal number of blueberry scones and an equal number of cranberry scones.

What is the greatest number of bags you can fill?`,
        answer: '25', unit: 'bags',
        hints: [
          m`The number of bags must divide **both** 50 and 75 evenly. You want the greatest number that does.`,
          m`Find the GCF of 50 and 75. $50 = 2 \times 5 \times 5$ and $75 = 3 \times 5 \times 5$.`
        ],
        steps: [
          m`The greatest number of identical bags is the GCF of 50 and 75.`,
          m`$50 = 2 \times 5 \times 5$`,
          m`$75 = 3 \times 5 \times 5$`,
          m`They share $5 \times 5 = 25$.`,
          m`**Answer:** 25 bags (each has 2 blueberry and 3 cranberry scones)`
        ]
      },
      {
        id: 's6-c', section: 's6', type: 'mc',
        prompt: m`Choose the expression that uses the GCF and the Distributive Property to find $66 + 24 + 78$.`,
        options: [m`$2(33 + 12 + 39)$`, m`$3(22 + 8 + 26)$`, m`$6(11 + 4 + 13)$`, m`$8(7 + 3 + 9)$`],
        correct: 2,
        hints: [
          m`Find the GCF of 66, 24, and 78. That number goes in front of the parentheses.`,
          m`2 and 3 are both common factors, but is there a greater one? Try $2 \times 3$.`
        ],
        steps: [
          m`$66 = 6 \times 11$, $\;24 = 6 \times 4$, $\;78 = 6 \times 13$`,
          m`6 is the greatest factor all three share, so the GCF is 6.`,
          m`$66 + 24 + 78 = 6(11 + 4 + 13)$`,
          m`**Answer:** $6(11 + 4 + 13)$`
        ]
      },

      /* ------------------------------------------------------------------ *
       * 7 · Write and evaluate (Lesson 3-5)
       * ------------------------------------------------------------------ */
      {
        id: 's7-a', section: 's7', type: 'parts',
        prompt: m`Ms. White wants to rent a **small car** for a week. It will cost the weekly fee plus \$0.30 per mile driven.`,
        table: {
          caption: 'ABC Car Rentals: Rates',
          headers: ['Vehicle', 'Week', 'Day'],
          rows: [
            ['Small car', m`\$250`, m`\$100`],
            ['Medium car', m`\$290`, m`\$110`],
            ['Luxury car', m`\$325`, m`\$120`],
            ['Small van', m`\$350`, m`\$150`],
            ['Large van', m`\$390`, m`\$170`]
          ]
        },
        parts: [
          { label: 'A', prompt: m`Let $m$ be the number of miles Ms. White drives during the week. Write an expression that shows the amount she will pay for the car.`, type: 'expr', answer: '250 + 0.30m' },
          { label: 'B', prompt: m`Evaluate your expression to find how much Ms. White will pay if she drives 100 miles.`, type: 'number', answer: '280', prefix: '$' }
        ],
        hints: [
          m`The weekly fee for a small car is paid once. The mileage cost is \$0.30 for **each** mile, so it is $0.30m$.`,
          m`For Part B, replace $m$ with 100 and multiply before you add.`
        ],
        steps: [
          m`Weekly fee for a small car: \$250`,
          m`Cost for $m$ miles: $0.30m$`,
          m`**Part A:** $250 + 0.30m$`,
          m`Substitute $m = 100$: $\;250 + 0.30(100) = 250 + 30 = 280$`,
          m`**Part B:** \$280`
        ]
      },
      {
        id: 's7-b', section: 's7', type: 'parts',
        prompt: m`Tamara is making a **medium-length** necklace. She needs a chain, a pendant, and $b$ beads that cost \$0.25 each.`,
        table: {
          headers: ['Necklace length', 'Cost of chain', 'Cost of pendant'],
          rows: [['Long', m`\$2.25`, m`\$4.50`], ['Medium', m`\$1.80`, m`\$3.72`], ['Short', m`\$1.15`, m`\$2.39`]]
        },
        parts: [
          { label: 'A', prompt: m`Write an expression that shows how much the necklace will cost.`, type: 'expr', answer: '1.80 + 3.72 + 0.25b' },
          { label: 'B', prompt: m`Find the total cost of the necklace if Tamara uses 30 beads.`, type: 'number', answer: '13.02', prefix: '$' }
        ],
        hints: [
          m`Use the **Medium** row. Add the chain and the pendant, then add \$0.25 for each bead.`,
          m`The beads cost $0.25b$. For Part B, $0.25 \times 30 = 7.50$.`
        ],
        steps: [
          m`Medium chain: \$1.80. Medium pendant: \$3.72. Beads: $0.25b$`,
          m`**Part A:** $1.80 + 3.72 + 0.25b$, which is the same as $5.52 + 0.25b$`,
          m`Substitute $b = 30$: $\;5.52 + 0.25(30) = 5.52 + 7.50 = 13.02$`,
          m`**Part B:** \$13.02`
        ]
      },
      {
        id: 's7-c', section: 's7', type: 'parts',
        prompt: m`Mr. Black rents a luxury car for one week and a few extra days, $d$. The expression $325 + 120d$ shows how much he will pay.

He rents the car for **11 days** in all.`,
        parts: [
          { label: 'A', prompt: m`What is the value of $d$?`, type: 'number', answer: '4' },
          { label: 'B', prompt: m`Evaluate $325 + 120d$ to find how much Mr. Black will pay.`, type: 'number', answer: '805', prefix: '$' }
        ],
        hints: [
          m`One week is 7 days. The \$325 already covers that week, so $d$ is only the **extra** days.`,
          m`$d = 11 - 7 = 4$. Now find $325 + 120(4)$.`
        ],
        steps: [
          m`One week is 7 days, so the extra days are $d = 11 - 7 = 4$.`,
          m`**Part A:** $d = 4$`,
          m`Substitute: $325 + 120(4) = 325 + 480 = 805$`,
          m`**Part B:** \$805`
        ]
      },

      /* ------------------------------------------------------------------ *
       * 8 · Distributive Property (Lesson 3-6)
       * ------------------------------------------------------------------ */
      {
        id: 's8-a', section: 's8', type: 'multi',
        prompt: m`Select **each** expression that is equivalent to $5(n + 4)$.`,
        options: [m`$5n + 4$`, m`$5n + 20$`, m`$15 + 5n + 5$`, m`$5(n + 3) + 5$`, m`$5n + 54$`],
        correct: [1, 2, 3],
        hints: [
          m`Use the Distributive Property first: multiply 5 by $n$ **and** by 4.`,
          m`$5(n + 4) = 5n + 20$. Now simplify each choice and see which ones also equal $5n + 20$.`
        ],
        steps: [
          m`$5(n + 4) = 5(n) + 5(4) = 5n + 20$`,
          m`$5n + 4$ ✗ (the 4 was not multiplied by 5)`,
          m`$5n + 20$ ✓`,
          m`$15 + 5n + 5 = 5n + 20$ ✓`,
          m`$5(n + 3) + 5 = 5n + 15 + 5 = 5n + 20$ ✓`,
          m`$5n + 54$ ✗`,
          m`**Answer:** $5n + 20$, $\;15 + 5n + 5$, and $5(n + 3) + 5$`
        ]
      },
      {
        id: 's8-b', section: 's8', type: 'expr',
        prompt: m`A college golf team with 14 members is planning an awards banquet. To find the total cost of the meals, the team uses the expression $5(g + 14)$, where $g$ is the number of guests.

A team member says an equivalent expression is $5g + 14$. That is **not** correct.

Use the Distributive Property to write the correct equivalent expression without parentheses.`,
        answer: '5g + 70', rules: { noParens: true },
        hints: [
          m`The 5 must be multiplied by **every** term inside the parentheses.`,
          m`$5(g + 14) = 5(g) + 5(14)$. What is $5 \times 14$?`
        ],
        steps: [
          m`Distribute the 5 to both terms: $5(g) + 5(14)$`,
          m`$5 \times 14 = 70$`,
          m`The team member forgot to multiply 14 by 5.`,
          m`**Answer:** $5g + 70$`
        ]
      },
      {
        id: 's8-c', section: 's8', type: 'expr',
        prompt: m`Use the Distributive Property to write an expression that is equivalent to

$$4(y - 3)$$

Write your answer without parentheses.`,
        answer: '4y - 12', rules: { noParens: true },
        hints: [
          m`Multiply 4 by each term inside the parentheses. Keep the subtraction sign.`,
          m`$4(y) - 4(3)$`
        ],
        steps: [
          m`Distribute the 4: $4(y) - 4(3)$`,
          m`Multiply: $4y - 12$`,
          m`**Answer:** $4y - 12$`
        ]
      },

      /* ------------------------------------------------------------------ *
       * 9 · Evaluate expressions (Lesson 3-5)
       * ------------------------------------------------------------------ */
      {
        id: 's9-a', section: 's9', type: 'number',
        prompt: m`Evaluate the expression $x^2 + 3x$ for $x = 1.7$.`,
        answer: '7.99',
        hints: [
          m`Replace both $x$'s with 1.7. $x^2$ means $1.7 \times 1.7$.`,
          m`$1.7 \times 1.7 = 2.89$ and $3 \times 1.7 = 5.1$. Now add.`
        ],
        steps: [
          m`Substitute: $(1.7)^2 + 3(1.7)$`,
          m`$(1.7)^2 = 1.7 \times 1.7 = 2.89$`,
          m`$3(1.7) = 5.1$`,
          m`$2.89 + 5.1 = 7.99$`,
          m`**Answer:** 7.99`
        ]
      },
      {
        id: 's9-b', section: 's9', type: 'number',
        prompt: m`Evaluate $x^2 + 2y \div w + 3z$ for $w = 2$, $x = 5$, $y = 8$, and $z = 3$.`,
        answer: '42',
        hints: [
          m`Substitute all four values first: $5^2 + 2(8) \div 2 + 3(3)$.`,
          m`Order of operations: exponents first, then multiply and divide from left to right, then add.`
        ],
        steps: [
          m`Substitute: $5^2 + 2(8) \div 2 + 3(3)$`,
          m`Exponent: $25 + 2(8) \div 2 + 3(3)$`,
          m`Multiply and divide from left to right: $2(8) = 16$, then $16 \div 2 = 8$, and $3(3) = 9$`,
          m`Add: $25 + 8 + 9 = 42$`,
          m`**Answer:** 42`
        ]
      },
      {
        id: 's9-c', section: 's9', type: 'number',
        prompt: m`Evaluate the expression for $y = 1\frac{1}{2}$.

$$\frac{3}{4} + 4y \div 3$$

Type a fraction with a slash, like 5/8, or type a decimal.`,
        answer: '11/4',
        hints: [
          m`Work out $4y$ first: $4 \times 1\frac{1}{2} = 6$.`,
          m`Then $6 \div 3 = 2$. Finally add $\frac{3}{4} + 2$.`
        ],
        steps: [
          m`Substitute: $\frac{3}{4} + 4\left(1\frac{1}{2}\right) \div 3$`,
          m`Multiply: $4 \times 1\frac{1}{2} = 6$`,
          m`Divide: $6 \div 3 = 2$`,
          m`Add: $\frac{3}{4} + 2 = 2\frac{3}{4}$`,
          m`**Answer:** $2\frac{3}{4}$, which is also $\frac{11}{4}$ or 2.75`
        ]
      },

      /* ------------------------------------------------------------------ *
       * 10 · Least common multiple (Lesson 3-2)
       * ------------------------------------------------------------------ */
      {
        id: 's10-a', section: 's10', type: 'number',
        prompt: m`Rami has swimming lessons every 3 days and guitar lessons every 8 days. He has both lessons on the first day of the month.

In how many days will Rami have both lessons on the same day again?`,
        answer: '24', unit: 'days',
        hints: [
          m`You need a number of days that is a multiple of **both** 3 and 8. Find the smallest one.`,
          m`List multiples of 8: 8, 16, 24, 32 … Which is the first one that is also a multiple of 3?`
        ],
        steps: [
          m`Find the LCM of 3 and 8.`,
          m`Multiples of 8: 8, 16, **24**, 32 …`,
          m`Multiples of 3: 3, 6, 9, 12, 15, 18, 21, **24** …`,
          m`The least common multiple is 24.`,
          m`**Answer:** 24 days`
        ]
      },
      {
        id: 's10-b', section: 's10', type: 'number',
        prompt: m`People are waiting in line for a theater premiere. Every 5th person in line will receive a free theater ticket. Every 6th person will receive a gift card for \$40.

Which person is the first to receive **both** prizes? Type the person's number in line.`,
        answer: '30',
        hints: [
          m`The person's place in line must be a multiple of 5 **and** a multiple of 6.`,
          m`Multiples of 6: 6, 12, 18, 24, 30 … Which is the first one that is also a multiple of 5?`
        ],
        steps: [
          m`Find the LCM of 5 and 6.`,
          m`Multiples of 5: 5, 10, 15, 20, 25, **30** …`,
          m`Multiples of 6: 6, 12, 18, 24, **30** …`,
          m`**Answer:** the 30th person`
        ]
      },
      {
        id: 's10-c', section: 's10', type: 'parts',
        prompt: m`Ava goes to the library every 3 days and to swim practice every 9 days. This month she goes to the library on the 3rd day of the month and to swim practice on the 9th day of the month.

Ava says the first day she will do both is the 27th, because the LCM of 3 and 9 is 27.`,
        parts: [
          { label: 'A', prompt: m`Does Ava's reasoning make sense?`, type: 'mc', options: [m`Yes. The LCM of 3 and 9 is 27.`, m`No. 27 is a common multiple of 3 and 9, but it is not the **least** common multiple.`, m`No. 3 and 9 have no common multiples.`], correct: 1 },
          { label: 'B', prompt: m`On which day of the month will Ava first do both?`, type: 'number', answer: '9' }
        ],
        hints: [
          m`Multiplying the two numbers always gives a common multiple, but it is not always the **least** one.`,
          m`List Ava's library days: 3, 6, 9, 12 … Is one of them also a swim day?`
        ],
        steps: [
          m`Library days: 3, 6, **9**, 12, 15 …`,
          m`Swim practice days: **9**, 18, 27 …`,
          m`9 is a multiple of both 3 and 9, so the LCM of 3 and 9 is 9, not 27.`,
          m`**Answer:** A) No, 27 is not the least common multiple. $\;$ B) the 9th`
        ]
      },

      /* ------------------------------------------------------------------ *
       * 11 · Spot equivalent expressions (Lessons 3-6 and 3-7)
       * ------------------------------------------------------------------ */
      {
        id: 's11-a', section: 's11', type: 'multi',
        prompt: m`Select **all** the expressions that are equivalent to $18x - 6$.`,
        options: [m`$16.4x - 6 + 1.6x$`, m`$2(9x - 3)$`, m`$3(9x - 2)$`, m`$12x - 6 - 6x$`, m`$6(3x - 1)$`],
        correct: [0, 1, 4],
        hints: [
          m`Simplify each choice. Combine like terms, or use the Distributive Property.`,
          m`For example, $2(9x - 3) = 2(9x) - 2(3) = 18x - 6$. Check the others the same way.`
        ],
        steps: [
          m`$16.4x - 6 + 1.6x = 18x - 6$ ✓`,
          m`$2(9x - 3) = 18x - 6$ ✓`,
          m`$3(9x - 2) = 27x - 6$ ✗`,
          m`$12x - 6 - 6x = 6x - 6$ ✗`,
          m`$6(3x - 1) = 18x - 6$ ✓`,
          m`**Answer:** $16.4x - 6 + 1.6x$, $\;2(9x - 3)$, and $6(3x - 1)$`
        ]
      },
      {
        id: 's11-b', section: 's11', type: 'multi',
        prompt: m`Select **all** expressions that are equivalent to $8x + 3 + 5x - 2x$.`,
        options: [m`$13x + 3 - 2x$`, m`$11x + 3x$`, m`$11 + 3x$`, m`$14x$`, m`$11x + 3$`],
        correct: [0, 4],
        hints: [
          m`Combine the $x$ terms: $8x + 5x - 2x$. The 3 has no $x$, so it stays separate.`,
          m`The simplified expression is $11x + 3$. Which choices equal that?`
        ],
        steps: [
          m`Combine like terms: $8x + 5x - 2x = 11x$, so the expression is $11x + 3$.`,
          m`$13x + 3 - 2x = 11x + 3$ ✓`,
          m`$11x + 3x = 14x$ ✗`,
          m`$11 + 3x$ ✗ (the 11 and the 3 are switched)`,
          m`$14x$ ✗ (you cannot combine $11x$ and $3$)`,
          m`$11x + 3$ ✓`,
          m`**Answer:** $13x + 3 - 2x$ and $11x + 3$`
        ]
      },
      {
        id: 's11-c', section: 's11', type: 'matrix',
        prompt: m`Tell whether each expression is equivalent to

$$2x + 7 + 6x - x$$`,
        columns: ['Equivalent', 'Not equivalent'],
        rows: [
          { label: m`$2x + 13$`, correct: 1 },
          { label: m`$7 + 7x$`, correct: 0 },
          { label: m`$14x$`, correct: 1 },
          { label: m`$7x + 7$`, correct: 0 }
        ],
        hints: [
          m`Simplify first. Combine $2x + 6x - x$. Remember $x$ means $1x$.`,
          m`The simplified expression is $7x + 7$. The order of the terms does not matter when you add.`
        ],
        steps: [
          m`Combine like terms: $2x + 6x - 1x = 7x$, so the expression is $7x + 7$.`,
          m`$2x + 13$ is not equivalent.`,
          m`$7 + 7x$ is equivalent (same terms, different order).`,
          m`$14x$ is not equivalent (you cannot combine $7x$ and $7$).`,
          m`$7x + 7$ is equivalent.`
        ]
      },

      /* ------------------------------------------------------------------ *
       * 12 · Exponents, prime factors, order of operations (Lessons 3-1 to 3-3)
       * ------------------------------------------------------------------ */
      {
        id: 's12-a', section: 's12', type: 'multi',
        prompt: m`Select **all** the expressions that are equal to 1,024.`,
        options: [m`$4 \times 4 \times 4 \times 4 \times 4$`, m`$5 \times 5 \times 5 \times 5$`, m`$4^5$`, m`$5^4$`, m`$2^{10}$`],
        correct: [0, 2, 4],
        hints: [
          m`$4^5$ means five 4s multiplied together. $5^4$ means four 5s multiplied together.`,
          m`$4 \times 4 = 16$, $\;16 \times 4 = 64$, $\;64 \times 4 = 256$, $\;256 \times 4 = \,?$`
        ],
        steps: [
          m`$4 \times 4 \times 4 \times 4 \times 4 = 1{,}024$ ✓ and that is what $4^5$ means ✓`,
          m`$5 \times 5 \times 5 \times 5 = 625$ ✗ and that is what $5^4$ means ✗`,
          m`$2^{10} = 2^5 \times 2^5 = 32 \times 32 = 1{,}024$ ✓`,
          m`**Answer:** $4 \times 4 \times 4 \times 4 \times 4$, $\;4^5$, and $2^{10}$`
        ]
      },
      {
        id: 's12-b', section: 's12', type: 'factor',
        prompt: m`Write the prime factorization of 84.

Type it as a product, like 2 x 3 x 5. You can use exponents, like 2^2.`,
        target: 84, answer: '2 × 2 × 3 × 7',
        hints: [
          m`Start a factor tree. 84 is even, so begin with $84 = 2 \times 42$.`,
          m`Keep going until every factor is prime: $42 = 2 \times 21$ and $21 = 3 \times 7$.`
        ],
        steps: [
          m`$84 = 2 \times 42$`,
          m`$42 = 2 \times 21$`,
          m`$21 = 3 \times 7$`,
          m`2, 3, and 7 are all prime, so stop.`,
          m`**Answer:** $2 \times 2 \times 3 \times 7$, which can also be written $2^2 \times 3 \times 7$`
        ]
      },
      {
        id: 's12-c', section: 's12', type: 'number',
        prompt: m`Evaluate the expression.

$$4^3 + [(96 \div 8) \times 5] - 4^2$$`,
        answer: '108',
        hints: [
          m`Start with the innermost grouping symbols: $(96 \div 8)$.`,
          m`After the brackets are done, evaluate the powers $4^3$ and $4^2$. Then add and subtract from left to right.`
        ],
        steps: [
          m`Parentheses: $96 \div 8 = 12$`,
          m`Brackets: $12 \times 5 = 60$`,
          m`Exponents: $4^3 = 64$ and $4^2 = 16$`,
          m`Add and subtract from left to right: $64 + 60 - 16 = 108$`,
          m`**Answer:** 108`
        ]
      },
      {
        id: 's12-d', section: 's12', type: 'number',
        prompt: m`Cory bought a bat, a glove, and 3 baseballs. He used a coupon for $\frac{1}{2}$ off the price of the bat and the glove.

Write and evaluate a numerical expression to find the total cost. Type the total.`,
        table: {
          headers: ['Item', 'Price'],
          rows: [['Bat', m`\$69`], ['Glove', m`\$75`], ['Baseball', m`\$5.50 each`]]
        },
        answer: '88.50', prefix: '$',
        hints: [
          m`The coupon takes half off the bat and glove **together**: $\frac{1}{2} \times (69 + 75)$.`,
          m`Three baseballs cost $3 \times 5.50$. Add that to the bat and glove cost.`
        ],
        steps: [
          m`Expression: $\frac{1}{2} \times (69 + 75) + 3 \times 5.50$`,
          m`Parentheses: $69 + 75 = 144$`,
          m`Multiply: $\frac{1}{2} \times 144 = 72$ and $3 \times 5.50 = 16.50$`,
          m`Add: $72 + 16.50 = 88.50$`,
          m`**Answer:** \$88.50`
        ]
      }
    ]
  });
})();
