/*
 * Grade 7 · Topic 4 Mid-Topic Quiz Review — Analyze and Use Expressions (Lessons 4-1 to 4-5)
 *
 * The sections follow the question types on the Topic 4 Mid-Topic Assessment, in quiz order.
 * The problems come from Lessons 4-1 to 4-5 (not from the quiz itself).
 *
 * Text rules:  $...$ is math,  \$ is a dollar sign,  **bold**,  a blank line starts a new paragraph.
 */
(function () {
  var m = String.raw;

  WDMS.registerReview({
    id: 'g7-topic4-mid',
    grade: 7,
    assessment: 'quiz',
    title: 'Topic 4 Mid-Topic Quiz Review',
    subtitle: 'Write, Simplify, Expand, and Factor Expressions',

    sections: [
      { id: 's1', title: 'Variable terms and constant terms', lesson: '4-1', blurb: 'Name the parts of an expression.' },
      { id: 's2', title: 'Write expressions for real situations', lesson: '4-1', blurb: 'Turn a story into an expression.' },
      { id: 's3', title: 'Combine like terms', lesson: '4-3', blurb: 'Simplify expressions with one or two variables.' },
      { id: 's4', title: 'Choose the equivalent expression', lesson: '4-2 and 4-3', blurb: 'Watch the negative signs.' },
      { id: 's5', title: 'Expand expressions', lesson: '4-4', blurb: 'Use the Distributive Property.' },
      { id: 's6', title: 'Factor with the GCF', lesson: '4-5', blurb: 'Pull out the greatest common factor.' },
      { id: 's7', title: 'Check your factoring', lesson: '4-5', blurb: 'Expand to see if you get the original.' }
    ],

    problems: [
      /* ------------------------------------------------------------------ *
       * 1 · Variable terms and constant terms (Lesson 4-1)
       * ------------------------------------------------------------------ */
      {
        id: 's1-a', section: 's1', type: 'matrix',
        prompt: m`A tank holds 35 gallons of water and leaks $\frac{1}{4}$ gallon each minute. The water left after $m$ minutes is

$$35 - \frac{1}{4}m$$

The temperature $h$ hours after 1 P.M. is $73 - 1.5h$.

Is each term a variable term or a constant term?`,
        columns: ['Variable term', 'Constant term'],
        rows: [
          { label: m`$35$ in $35 - \frac{1}{4}m$`, correct: 1 },
          { label: m`$-\frac{1}{4}m$ in $35 - \frac{1}{4}m$`, correct: 0 },
          { label: m`$-1.5h$ in $73 - 1.5h$`, correct: 0 },
          { label: m`$73$ in $73 - 1.5h$`, correct: 1 }
        ],
        hints: [
          m`A **variable term** has a variable in it, so its value changes when the variable changes.`,
          m`A **constant term** is just a number. It stays the same no matter what.`
        ],
        steps: [
          m`$35$ is the starting amount. It never changes, so it is a constant term.`,
          m`$-\frac{1}{4}m$ depends on the minutes $m$, so it is a variable term.`,
          m`$-1.5h$ depends on the hours $h$, so it is a variable term.`,
          m`$73$ is the starting temperature. It never changes, so it is a constant term.`
        ]
      },
      {
        id: 's1-b', section: 's1', type: 'mc',
        prompt: m`Which sentence describes a **constant term** in an expression for a real-world situation?`,
        options: [
          'It changes in value whenever the value of the variable changes.',
          'It does not change in value.',
          'It is the number multiplied by the variable.',
          'It is always the first term of the expression.'
        ],
        correct: 1,
        hints: [
          m`“Constant” means staying the same.`,
          m`In $35 - \frac{1}{4}m$, the 35 is the constant term. Does it change when $m$ changes?`
        ],
        steps: [
          m`A constant term is a number with no variable.`,
          m`Changing the variable does not change it.`,
          m`The number multiplied by a variable is called the **coefficient**, not the constant term.`,
          m`**Answer:** It does not change in value.`
        ]
      },
      {
        id: 's1-c', section: 's1', type: 'mc',
        prompt: m`The temperature $h$ hours after 1 P.M. is given by $73 - 1.5h$. What is the coefficient of $h$?`,
        options: [m`$73$`, m`$1.5$`, m`$-1.5$`, m`$h$`],
        correct: 2,
        hints: [
          m`The coefficient is the number multiplied by the variable.`,
          m`Rewrite the subtraction as addition: $73 + (-1.5h)$.`
        ],
        steps: [
          m`$73 - 1.5h = 73 + (-1.5h)$`,
          m`The number multiplied by $h$ is $-1.5$.`,
          m`The negative sign belongs to the coefficient, because the temperature is going **down**.`,
          m`**Answer:** $-1.5$`
        ]
      },
      {
        id: 's1-d', section: 's1', type: 'number',
        prompt: m`The expression $-120 + 13m$ describes a submarine that started 120 feet below sea level and rises 13 feet per minute. What is its location after 6 minutes?`,
        answer: '-42', unit: 'feet',
        hints: [
          m`Substitute 6 for $m$.`,
          m`$-120 + 13(6)$. Multiply first.`
        ],
        steps: [
          m`Substitute: $-120 + 13(6)$`,
          m`Multiply: $13 \times 6 = 78$`,
          m`Add: $-120 + 78 = -42$`,
          m`**Answer:** $-42$ feet (42 feet below sea level)`
        ]
      },

      /* ------------------------------------------------------------------ *
       * 2 · Write expressions for real situations (Lesson 4-1)
       * ------------------------------------------------------------------ */
      {
        id: 's2-a', section: 's2', type: 'expr',
        prompt: m`A tank contains 35 gallons of water. It leaks at a rate of $\frac{1}{4}$ gallon per minute. Write an expression for the number of gallons left in the tank after $m$ minutes.`,
        answer: '35 - 0.25m',
        hints: [
          m`Start with what is in the tank: 35 gallons.`,
          m`Each minute it **loses** $\frac{1}{4}$ gallon, so subtract $\frac{1}{4}m$.`
        ],
        steps: [
          m`Starting amount: 35 gallons`,
          m`Water lost after $m$ minutes: $\frac{1}{4}m$`,
          m`**Answer:** $35 - \frac{1}{4}m$ (also $35 - 0.25m$)`
        ]
      },
      {
        id: 's2-b', section: 's2', type: 'expr',
        prompt: m`Leon has a container with 450 grams of tea leaves. Each morning he uses 3 grams to make a cup of tea. Write an expression for the grams of tea leaves left after $x$ days.`,
        answer: '450 - 3x',
        hints: [
          m`Start with 450 grams.`,
          m`He uses 3 grams each day, so after $x$ days he has used $3x$ grams.`
        ],
        steps: [
          m`Starting amount: 450 grams`,
          m`Used after $x$ days: $3x$ grams`,
          m`**Answer:** $450 - 3x$`
        ]
      },
      {
        id: 's2-c', section: 's2', type: 'expr',
        prompt: m`Joe buys $g$ gallons of gasoline for \$2.85 per gallon and $c$ cans of oil for \$3.15 per can. Write an expression for the total amount Joe spends.`,
        answer: '2.85g + 3.15c',
        hints: [
          m`Gasoline costs \$2.85 for **each** gallon: $2.85g$.`,
          m`Oil costs \$3.15 for **each** can: $3.15c$. Add the two costs.`
        ],
        steps: [
          m`Cost of gas: $2.85g$`,
          m`Cost of oil: $3.15c$`,
          m`**Answer:** $2.85g + 3.15c$`
        ]
      },
      {
        id: 's2-d', section: 's2', type: 'mc',
        prompt: m`An empty box weighs 0.2 kilogram. It holds $p$ plaques that weigh 1.3 kilograms each. Which expression gives the total weight of the box and plaques?`,
        options: [m`$1.3p + 0.2$`, m`$0.2p + 1.3$`, m`$0.2 - 1.3p$`, m`$1.5p$`],
        correct: 0,
        hints: [
          m`Each plaque weighs 1.3 kg, so $p$ plaques weigh $1.3p$.`,
          m`The box weighs 0.2 kg no matter how many plaques there are. That is the constant term.`
        ],
        steps: [
          m`Weight of the plaques: $1.3p$`,
          m`Weight of the box: $0.2$ (a constant term)`,
          m`Total: $1.3p + 0.2$`,
          m`$1.5p$ is wrong because the box's weight does not change with $p$.`
        ]
      },
      {
        id: 's2-e', section: 's2', type: 'expr',
        prompt: m`Sophie pays $m$ dollars to rent a car for the weekend. On the drive home she buys \$25 worth of gasoline. Her friend Melody pays for one-half of the car rental only. Write an expression for how much Sophie spent.`,
        answer: '0.5m + 25',
        hints: [
          m`Melody pays half the rental, so Sophie pays the other half: $\frac{1}{2}m$.`,
          m`Sophie also pays all of the gasoline.`
        ],
        steps: [
          m`Sophie's share of the rental: $m - \frac{1}{2}m = \frac{1}{2}m$`,
          m`Gasoline: \$25, paid only by Sophie`,
          m`**Answer:** $\frac{1}{2}m + 25$ (also $0.5m + 25$)`
        ]
      },

      /* ------------------------------------------------------------------ *
       * 3 · Combine like terms (Lesson 4-3)
       * ------------------------------------------------------------------ */
      {
        id: 's3-a', section: 's3', type: 'expr',
        prompt: m`Simplify the expression by combining like terms.

$$-4b + (-9k) - 6 - 3b + 12$$`,
        answer: '-7b - 9k + 6', rules: { maxTerms: 3, noParens: true },
        hints: [
          m`Group the $b$ terms, the $k$ terms, and the numbers.`,
          m`$-4b - 3b = -7b$. The $-9k$ has no other $k$ term to combine with.`
        ],
        steps: [
          m`Group like terms: $(-4b - 3b) + (-9k) + (-6 + 12)$`,
          m`$b$ terms: $-4b - 3b = -7b$`,
          m`Numbers: $-6 + 12 = 6$`,
          m`**Answer:** $-7b - 9k + 6$`
        ]
      },
      {
        id: 's3-b', section: 's3', type: 'expr',
        prompt: m`Simplify the expression by combining like terms.

$$-3.7 + 5g + 4k + 11.1 - 10g$$`,
        answer: '-5g + 4k + 7.4', rules: { maxTerms: 3, noParens: true },
        hints: [
          m`Combine the $g$ terms: $5g - 10g$.`,
          m`Combine the numbers: $-3.7 + 11.1$.`
        ],
        steps: [
          m`Group like terms: $(5g - 10g) + 4k + (-3.7 + 11.1)$`,
          m`$g$ terms: $5g - 10g = -5g$`,
          m`Numbers: $-3.7 + 11.1 = 7.4$`,
          m`**Answer:** $-5g + 4k + 7.4$`
        ]
      },
      {
        id: 's3-c', section: 's3', type: 'expr',
        prompt: m`Simplify the expression by combining like terms.

$$8h + (-7.3d) - 14 + 5d - 3.2h$$`,
        answer: '4.8h - 2.3d - 14', rules: { maxTerms: 3, noParens: true },
        hints: [
          m`Combine the $h$ terms: $8h - 3.2h$.`,
          m`Combine the $d$ terms: $-7.3d + 5d$.`
        ],
        steps: [
          m`$h$ terms: $8h - 3.2h = 4.8h$`,
          m`$d$ terms: $-7.3d + 5d = -2.3d$`,
          m`The $-14$ has nothing to combine with.`,
          m`**Answer:** $4.8h - 2.3d - 14$`
        ]
      },
      {
        id: 's3-d', section: 's3', type: 'expr',
        prompt: m`Simplify the expression by combining like terms.

$$2n + 5.5 - 0.9n - 8 + 4.5p$$`,
        answer: '1.1n + 4.5p - 2.5', rules: { maxTerms: 3, noParens: true },
        hints: [
          m`Combine the $n$ terms: $2n - 0.9n$.`,
          m`Combine the numbers: $5.5 - 8$.`
        ],
        steps: [
          m`$n$ terms: $2n - 0.9n = 1.1n$`,
          m`Numbers: $5.5 - 8 = -2.5$`,
          m`The $4.5p$ has nothing to combine with.`,
          m`**Answer:** $1.1n + 4.5p - 2.5$`
        ]
      },
      {
        id: 's3-e', section: 's3', type: 'expr',
        prompt: m`Simplify the expression by combining like terms.

$$4 - 2y + (-8y) + 6.2$$`,
        answer: '-10y + 10.2', rules: { maxTerms: 2, noParens: true },
        hints: [
          m`Combine the $y$ terms: $-2y + (-8y)$.`,
          m`Combine the numbers: $4 + 6.2$.`
        ],
        steps: [
          m`$y$ terms: $-2y + (-8y) = -10y$`,
          m`Numbers: $4 + 6.2 = 10.2$`,
          m`**Answer:** $-10y + 10.2$`
        ]
      },

      /* ------------------------------------------------------------------ *
       * 4 · Choose the equivalent expression (Lessons 4-2 and 4-3)
       * ------------------------------------------------------------------ */
      {
        id: 's4-a', section: 's4', type: 'mc',
        prompt: m`Which expression is equivalent to $-5v + (-2) + 1 + (-2v)$?`,
        options: [m`$-9v$`, m`$-4v$`, m`$-7v - 1$`, m`$-7v + 3$`],
        correct: 2,
        hints: [
          m`Combine the $v$ terms: $-5v + (-2v)$.`,
          m`Combine the numbers: $-2 + 1$.`
        ],
        steps: [
          m`$v$ terms: $-5v + (-2v) = -7v$`,
          m`Numbers: $-2 + 1 = -1$`,
          m`**Answer:** $-7v - 1$`
        ]
      },
      {
        id: 's4-b', section: 's4', type: 'mc',
        prompt: m`Which expression is equivalent to $\frac{2}{3}x + (-3) + (-2) - \frac{1}{3}x$?`,
        options: [m`$x + 5$`, m`$-\frac{1}{3}x - 5$`, m`$\frac{1}{3}x - 1$`, m`$\frac{1}{3}x - 5$`],
        correct: 3,
        hints: [
          m`Combine the $x$ terms: $\frac{2}{3}x - \frac{1}{3}x$.`,
          m`Combine the numbers: $-3 + (-2)$.`
        ],
        steps: [
          m`$x$ terms: $\frac{2}{3}x - \frac{1}{3}x = \frac{1}{3}x$`,
          m`Numbers: $-3 + (-2) = -5$`,
          m`**Answer:** $\frac{1}{3}x - 5$`
        ]
      },
      {
        id: 's4-c', section: 's4', type: 'mc',
        prompt: m`Which expression is equivalent to $t + 4 + 3 - 2t$?`,
        options: [m`$t + 7$`, m`$-t + 7$`, m`$6t$`, m`$10t$`],
        correct: 1,
        hints: [
          m`Remember $t$ means $1t$. Combine $1t - 2t$.`,
          m`Combine the numbers: $4 + 3$.`
        ],
        steps: [
          m`$t$ terms: $1t - 2t = -1t = -t$`,
          m`Numbers: $4 + 3 = 7$`,
          m`**Answer:** $-t + 7$`
        ]
      },
      {
        id: 's4-d', section: 's4', type: 'mc',
        prompt: m`Which expression is equivalent to $2.1 + (-3.7h) + 1.9h - 1.4$?`,
        options: [m`$3.5 - 5.6h$`, m`$4.9h$`, m`$0.7 + 1.8h$`, m`$0.7 - 1.8h$`],
        correct: 3,
        hints: [
          m`Combine the $h$ terms: $-3.7h + 1.9h$.`,
          m`Combine the numbers: $2.1 - 1.4$.`
        ],
        steps: [
          m`$h$ terms: $-3.7h + 1.9h = -1.8h$`,
          m`Numbers: $2.1 - 1.4 = 0.7$`,
          m`**Answer:** $0.7 - 1.8h$`
        ]
      },
      {
        id: 's4-e', section: 's4', type: 'multi',
        prompt: m`Select **all** the expressions equivalent to

$$-6z + (-5.5) + 3.5z + 5y - 2.5$$`,
        options: [m`$-8 + 5y + 2.5z$`, m`$-2.5z + 5y - 8$`, m`$-8 + 5y + (-2.5z)$`, m`$2.5y + (-2.5z) - 5.5$`, m`$5y - 8 - 2.5z$`],
        correct: [1, 2, 4],
        hints: [
          m`Simplify first: combine $-6z + 3.5z$ and $-5.5 - 2.5$.`,
          m`The simplified form is $-2.5z + 5y - 8$. The terms can be in any order.`
        ],
        steps: [
          m`$z$ terms: $-6z + 3.5z = -2.5z$`,
          m`Numbers: $-5.5 - 2.5 = -8$`,
          m`Simplified: $-2.5z + 5y - 8$`,
          m`$-8 + 5y + 2.5z$ has the wrong sign on $z$ ✗. $\;2.5y + (-2.5z) - 5.5$ changes the $y$ term ✗.`,
          m`**Answer:** $-2.5z + 5y - 8$, $\;-8 + 5y + (-2.5z)$, and $5y - 8 - 2.5z$`
        ]
      },

      /* ------------------------------------------------------------------ *
       * 5 · Expand expressions (Lesson 4-4)
       * ------------------------------------------------------------------ */
      {
        id: 's5-a', section: 's5', type: 'expr',
        prompt: m`Expand the expression.

$$3.6(t + 5)$$`,
        answer: '3.6t + 18', rules: { noParens: true },
        hints: [
          m`Multiply 3.6 by **each** term inside the parentheses.`,
          m`$3.6(t) + 3.6(5)$`
        ],
        steps: [
          m`$3.6(t) + 3.6(5)$`,
          m`$3.6 \times 5 = 18$`,
          m`**Answer:** $3.6t + 18$`
        ]
      },
      {
        id: 's5-b', section: 's5', type: 'expr',
        prompt: m`Expand the expression.

$$x(4 - 3.4y)$$`,
        answer: '4x - 3.4xy', rules: { noParens: true },
        hints: [
          m`Multiply $x$ by each term: $x(4)$ and $x(-3.4y)$.`,
          m`$x \cdot 4 = 4x$ and $x \cdot (-3.4y) = -3.4xy$.`
        ],
        steps: [
          m`$x(4) + x(-3.4y)$`,
          m`$= 4x + (-3.4xy)$`,
          m`**Answer:** $4x - 3.4xy$`
        ]
      },
      {
        id: 's5-c', section: 's5', type: 'expr',
        prompt: m`Expand and simplify the expression.

$$-2.5(-3 + 4n + 8)$$`,
        answer: '-10n - 12.5', rules: { noParens: true },
        hints: [
          m`Multiply $-2.5$ by each of the three terms. Watch the signs.`,
          m`$-2.5(-3) = 7.5$, $\;-2.5(4n) = -10n$, $\;-2.5(8) = -20$.`
        ],
        steps: [
          m`$-2.5(-3) + (-2.5)(4n) + (-2.5)(8)$`,
          m`$= 7.5 - 10n - 20$`,
          m`Combine the numbers: $7.5 - 20 = -12.5$`,
          m`**Answer:** $-10n - 12.5$`
        ]
      },
      {
        id: 's5-d', section: 's5', type: 'expr',
        prompt: m`Use the Distributive Property to write an expression equivalent to

$$0.4(-5 - 7y - 13.8)$$`,
        answer: '-2.8y - 7.52', rules: { noParens: true },
        hints: [
          m`Multiply 0.4 by each term: $0.4(-5)$, $\;0.4(-7y)$, $\;0.4(-13.8)$.`,
          m`Then combine the two number terms.`
        ],
        steps: [
          m`$0.4(-5) = -2$`,
          m`$0.4(-7y) = -2.8y$`,
          m`$0.4(-13.8) = -5.52$`,
          m`Combine the numbers: $-2 + (-5.52) = -7.52$`,
          m`**Answer:** $-2.8y - 7.52$`
        ]
      },
      {
        id: 's5-e', section: 's5', type: 'expr',
        prompt: m`A store has a 13%-off sale on bread. You buy 6 loaves. If $b$ is the original price of one loaf, the expression $6(b - 0.13b)$ gives your total cost.

Expand the expression.`,
        answer: '6b - 0.78b', rules: { noParens: true },
        hints: [
          m`Multiply 6 by each term: $6(b)$ and $6(-0.13b)$.`,
          m`$6 \times 0.13 = 0.78$`
        ],
        steps: [
          m`$6(b) - 6(0.13b)$`,
          m`$= 6b - 0.78b$`,
          m`$6b$ is the full price of 6 loaves and $0.78b$ is the total discount.`,
          m`**Answer:** $6b - 0.78b$, which simplifies to $5.22b$`
        ]
      },

      /* ------------------------------------------------------------------ *
       * 6 · Factor with the GCF (Lesson 4-5)
       * ------------------------------------------------------------------ */
      {
        id: 's6-a', section: 's6', type: 'expr',
        prompt: m`Use the GCF to factor the expression.

$$14x + 49$$`,
        answer: '7(2x + 7)', rules: { gcf: 7 },
        hints: [
          m`Find the greatest number that divides both 14 and 49.`,
          m`The GCF is 7. Divide each term by 7: $14x \div 7 = 2x$ and $49 \div 7 = 7$.`
        ],
        steps: [
          m`Factors of 14: 1, 2, **7**, 14. Factors of 49: 1, **7**, 49. The GCF is 7.`,
          m`$14x = 7(2x)$ and $49 = 7(7)$`,
          m`**Answer:** $7(2x + 7)$`
        ]
      },
      {
        id: 's6-b', section: 's6', type: 'expr',
        prompt: m`Use the GCF to write the factored form of the expression.

$$18x + 24y$$`,
        answer: '6(3x + 4y)', rules: { gcf: 6 },
        hints: [
          m`Find the GCF of 18 and 24.`,
          m`The GCF is 6. Divide each term by 6.`
        ],
        steps: [
          m`Factors of 18: 1, 2, 3, **6**, 9, 18. Factors of 24: 1, 2, 3, 4, **6**, 8, 12, 24. The GCF is 6.`,
          m`$18x = 6(3x)$ and $24y = 6(4y)$`,
          m`**Answer:** $6(3x + 4y)$`
        ]
      },
      {
        id: 's6-c', section: 's6', type: 'expr',
        prompt: m`Use the GCF to factor the expression.

$$12x + 18y + 26$$`,
        answer: '2(6x + 9y + 13)', rules: { gcf: 2 },
        hints: [
          m`Find a number that divides all **three** numbers: 12, 18, and 26.`,
          m`6 divides 12 and 18, but not 26. Try a smaller common factor.`
        ],
        steps: [
          m`12, 18, and 26 are all even, but 26 is not divisible by 3. The GCF is 2.`,
          m`$12x = 2(6x)$, $\;18y = 2(9y)$, $\;26 = 2(13)$`,
          m`**Answer:** $2(6x + 9y + 13)$`
        ]
      },
      {
        id: 's6-d', section: 's6', type: 'mc',
        prompt: m`Using the GCF, what is the factored form of $24v - 84$?`,
        options: [m`$3(8v - 28)$`, m`$6(4v - 14)$`, m`$12(2v - 7)$`, m`$24(v - 60)$`],
        correct: 2,
        hints: [
          m`All four choices except one are equivalent, but only one uses the **greatest** common factor.`,
          m`Find the GCF of 24 and 84.`
        ],
        steps: [
          m`Factors of 24: 1, 2, 3, 4, 6, 8, **12**, 24. The greatest one that also divides 84 is 12 ($84 = 12 \times 7$).`,
          m`$24v = 12(2v)$ and $84 = 12(7)$`,
          m`$3(8v - 28)$ and $6(4v - 14)$ are equivalent, but they do not use the GCF.`,
          m`**Answer:** $12(2v - 7)$`
        ]
      },
      {
        id: 's6-e', section: 's6', type: 'expr',
        prompt: m`Use the GCF to factor the expression.

$$-12x + 24 - 18y$$`,
        answer: '6(-2x + 4 - 3y)', rules: { gcf: 6 },
        hints: [
          m`Find the GCF of 12, 24, and 18.`,
          m`The GCF is 6. Divide each term by 6 and keep each term's sign.`
        ],
        steps: [
          m`Factors of 12: 1, 2, 3, 4, **6**, 12. 6 also divides 24 and 18, so the GCF is 6.`,
          m`$-12x = 6(-2x)$, $\;24 = 6(4)$, $\;-18y = 6(-3y)$`,
          m`**Answer:** $6(-2x + 4 - 3y)$`,
          m`You can also factor out $-6$: $-6(2x - 4 + 3y)$. Both are correct.`
        ]
      },

      /* ------------------------------------------------------------------ *
       * 7 · Check your factoring (Lesson 4-5)
       * ------------------------------------------------------------------ */
      {
        id: 's7-a', section: 's7', type: 'multi',
        prompt: m`Select **all** the expressions that are equivalent to $12 + 30y$.

Tip: expand each one to check.`,
        options: [m`$3(4 + 10y)$`, m`$4(3 + 10y)$`, m`$6(2 + 5y)$`, m`$2(6 + 30y)$`, m`$6(3 + 10y)$`],
        correct: [0, 2],
        hints: [
          m`Use the Distributive Property to expand each choice.`,
          m`$3(4 + 10y) = 12 + 30y$. Check the rest the same way.`
        ],
        steps: [
          m`$3(4 + 10y) = 12 + 30y$ ✓`,
          m`$4(3 + 10y) = 12 + 40y$ ✗`,
          m`$6(2 + 5y) = 12 + 30y$ ✓`,
          m`$2(6 + 30y) = 12 + 60y$ ✗`,
          m`$6(3 + 10y) = 18 + 60y$ ✗`,
          m`**Answer:** $3(4 + 10y)$ and $6(2 + 5y)$`
        ]
      },
      {
        id: 's7-b', section: 's7', type: 'mc',
        prompt: m`How can you use the Distributive Property to check that $5(3x - 4)$ is the factored form of $15x - 20$?`,
        options: [
          m`Expand $5(3x - 4)$. If you get $15x - 20$, the factoring is correct.`,
          m`Factor $15x - 20$ again. If you get the same answer twice, it is correct.`,
          m`Add $5 + 3x - 4$. If you get $15x - 20$, the factoring is correct.`,
          m`Divide $15x - 20$ by 20. If the answer has no remainder, it is correct.`
        ],
        correct: 0,
        hints: [
          m`Factoring and expanding are opposites. One undoes the other.`,
          m`What do you get when you multiply 5 by each term inside the parentheses?`
        ],
        steps: [
          m`Expanding undoes factoring.`,
          m`$5(3x - 4) = 5(3x) - 5(4) = 15x - 20$`,
          m`The expanded expression matches the original, so the factoring is correct.`
        ]
      },
      {
        id: 's7-c', section: 's7', type: 'mc',
        prompt: m`Tamara factored $21x + 56xy$ as $7(3x + 8xy)$. Is she correct?`,
        options: [
          m`Yes. 7 is the GCF of 21 and 56.`,
          m`No. Both terms also share $x$, so the GCF is $7x$: $\;7x(3 + 8y)$.`,
          m`No. The GCF is 14: $\;14(1.5x + 4xy)$.`,
          m`No. She should have written $7(3x + 8y)$.`
        ],
        correct: 1,
        hints: [
          m`Look at the variables too. What do $21x$ and $56xy$ have in common besides 7?`,
          m`Both terms have an $x$.`
        ],
        steps: [
          m`The numbers share 7, and both terms have $x$. So the GCF is $7x$.`,
          m`$21x = 7x(3)$ and $56xy = 7x(8y)$`,
          m`Factored form: $7x(3 + 8y)$`,
          m`Check: $7x(3) + 7x(8y) = 21x + 56xy$ ✓. Tamara's answer is equivalent but not fully factored.`
        ]
      },
      {
        id: 's7-d', section: 's7', type: 'mc',
        prompt: m`Your friend factors $15x - 20xy$ as $5x(3 - 4xy)$. What is the correct factored form?`,
        options: [m`$5x(3 - 4y)$`, m`$5(3x - 4y)$`, m`$5x(3 - 4xy)$`, m`$15x(1 - 20y)$`],
        correct: 0,
        hints: [
          m`Expand your friend's answer: $5x(3) - 5x(4xy)$. Does it match $15x - 20xy$?`,
          m`$5x \cdot 4xy = 20x^2y$, which has one $x$ too many.`
        ],
        steps: [
          m`The GCF of $15x$ and $20xy$ is $5x$.`,
          m`$15x = 5x(3)$ and $20xy = 5x(4y)$`,
          m`Factored form: $5x(3 - 4y)$`,
          m`Your friend forgot to remove the $x$ from the second term. Expanding $5x(3 - 4xy)$ gives $15x - 20x^2y$.`
        ]
      }
    ]
  });
})();
