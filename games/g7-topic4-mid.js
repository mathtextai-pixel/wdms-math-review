/*
 * Grade 7 · Topic 4 Mid-Topic Jeopardy — Write, Simplify, Expand, and Factor Expressions
 *
 * Six categories, five point values, and TWO questions for every tile.
 * Each new game picks one of the two, so the board changes from game to game.
 * These questions are new: none come from the quiz, the tests, or the study review.
 *
 *   q      the question
 *   a      the answer shown on screen
 *   steps  a short, step-by-step explanation (shown when "How to solve it" is tapped)
 *   key    the answer in plain form, used only by the checks
 *
 * Text rules:  $...$ is math,  \$ is a dollar sign,  **bold**.
 */
(function () {
  var m = String.raw;

  WDMS.registerGame({
    id: 'g7-topic4-mid',
    grade: 7,
    title: 'Topic 4 Mid-Topic Jeopardy',
    subtitle: 'Write, Simplify, Expand, and Factor Expressions',
    values: [100, 200, 300, 400, 500],

    categories: [
      /* ------------------------------------------------------------------ */
      {
        name: 'Parts of Expressions',
        tiles: [
          [
            {
              q: m`How many terms are in $7x - 3y + 12$?`, a: m`$3$ terms`, key: '3',
              steps: [
                m`Terms are separated by $+$ and $-$ signs.`,
                m`The terms are $7x$, $\;-3y$, and $12$.`,
                m`That is 3 terms.`
              ]
            },
            {
              q: m`What is the constant term in $4.5m - 9$?`, a: m`$-9$`, key: '-9',
              steps: [
                m`The constant term is the term with no variable.`,
                m`$4.5m - 9 = 4.5m + (-9)$`,
                m`The constant term is $-9$.`
              ]
            }
          ],
          [
            {
              q: m`What is the coefficient of $n$ in $6 - 2.5n$?`, a: m`$-2.5$`, key: '-2.5',
              steps: [
                m`The coefficient is the number multiplied by the variable.`,
                m`$6 - 2.5n = 6 + (-2.5n)$`,
                m`The coefficient of $n$ is $-2.5$.`
              ]
            },
            {
              q: m`What is the coefficient of $x$ in $\dfrac{x}{4} + 10$?`, a: m`$\frac{1}{4}$`, key: '1/4',
              steps: [
                m`$\frac{x}{4}$ means $x$ divided by 4.`,
                m`Dividing by 4 is the same as multiplying by $\frac{1}{4}$: $\frac{x}{4} = \frac{1}{4}x$`,
                m`The coefficient of $x$ is $\frac{1}{4}$.`
              ]
            }
          ],
          [
            {
              q: m`Evaluate $3a - 2b$ for $a = 4$ and $b = -5$.`, a: m`$22$`, key: '22',
              steps: [
                m`Substitute: $3(4) - 2(-5)$`,
                m`Multiply: $12 - (-10)$`,
                m`Subtracting $-10$ is adding 10: $12 + 10 = 22$`
              ]
            },
            {
              q: m`Evaluate $\frac{1}{2}p + 6$ for $p = -10$.`, a: m`$1$`, key: '1',
              steps: [
                m`Substitute: $\frac{1}{2}(-10) + 6$`,
                m`Multiply: $\frac{1}{2} \times (-10) = -5$`,
                m`Add: $-5 + 6 = 1$`
              ]
            }
          ],
          [
            {
              q: m`Evaluate $2.5x - 4.2$ for $x = 3$.`, a: m`$3.3$`, key: '3.3',
              steps: [
                m`Substitute: $2.5(3) - 4.2$`,
                m`Multiply: $2.5 \times 3 = 7.5$`,
                m`Subtract: $7.5 - 4.2 = 3.3$`
              ]
            },
            {
              q: m`Evaluate $-3m + 7n$ for $m = -2$ and $n = 1.5$.`, a: m`$16.5$`, key: '16.5',
              steps: [
                m`Substitute: $-3(-2) + 7(1.5)$`,
                m`Multiply: $-3 \times (-2) = 6$ and $7 \times 1.5 = 10.5$`,
                m`Add: $6 + 10.5 = 16.5$`
              ]
            }
          ],
          [
            {
              q: m`A water jug has 9 liters, and $9 - 0.5d$ gives the liters left after $d$ days. How many liters are left after 14 days?`, a: m`$2$ liters`, key: '2',
              steps: [
                m`9 is the constant term (the starting amount). $-0.5d$ is the variable term.`,
                m`Substitute: $9 - 0.5(14)$`,
                m`$0.5 \times 14 = 7$, so $9 - 7 = 2$ liters`
              ]
            },
            {
              q: m`Evaluate $\frac{2}{3}k - 5$ for $k = 12$.`, a: m`$3$`, key: '3',
              steps: [
                m`Substitute: $\frac{2}{3}(12) - 5$`,
                m`Multiply: $\frac{2}{3} \times 12 = 8$`,
                m`Subtract: $8 - 5 = 3$`
              ]
            }
          ]
        ]
      },

      /* ------------------------------------------------------------------ */
      {
        name: 'Write Expressions',
        tiles: [
          [
            {
              q: m`Write an expression: **5 less than a number $n$**`, a: m`$n - 5$`, key: 'n - 5',
              steps: [
                m`“Less than” means subtract.`,
                m`Start with $n$ and take away 5.`,
                m`$n - 5$ (not $5 - n$)`
              ]
            },
            {
              q: m`Write an expression: **the product of $-3$ and a number $y$**`, a: m`$-3y$`, key: '-3y',
              steps: [
                m`“Product” means multiply.`,
                m`$-3 \times y$`,
                m`Write the number in front of the variable: $-3y$`
              ]
            }
          ],
          [
            {
              q: m`A pizza costs \$12 plus \$1.50 for each topping. Write an expression for the cost with $t$ toppings.`, a: m`$12 + 1.5t$`, key: '12 + 1.5t',
              steps: [
                m`The \$12 is paid once: a constant term.`,
                m`Each topping costs \$1.50, so $t$ toppings cost $1.5t$.`,
                m`$12 + 1.5t$`
              ]
            },
            {
              q: m`A plant is 8 cm tall and grows 0.6 cm each week. Write an expression for its height after $w$ weeks.`, a: m`$8 + 0.6w$`, key: '8 + 0.6w',
              steps: [
                m`The starting height, 8 cm, is a constant term.`,
                m`It grows 0.6 cm each week, so in $w$ weeks it grows $0.6w$.`,
                m`$8 + 0.6w$`
              ]
            }
          ],
          [
            {
              q: m`A phone has 64 GB of free space. Each video uses 0.75 GB. Write an expression for the free space after $v$ videos.`, a: m`$64 - 0.75v$`, key: '64 - 0.75v',
              steps: [
                m`Start with 64 GB.`,
                m`Each video **uses** 0.75 GB, so $v$ videos use $0.75v$.`,
                m`Subtract: $64 - 0.75v$`
              ]
            },
            {
              q: m`Lena earns \$11 per hour plus \$20 in tips each shift. Write an expression for her pay for one shift of $h$ hours.`, a: m`$11h + 20$`, key: '11h + 20',
              steps: [
                m`\$11 for each hour: $11h$`,
                m`\$20 in tips once per shift: a constant term.`,
                m`$11h + 20$`
              ]
            }
          ],
          [
            {
              q: m`Notebooks cost \$2.40 each and pens cost \$0.85 each. Write an expression for the cost of $n$ notebooks and $p$ pens.`, a: m`$2.4n + 0.85p$`, key: '2.4n + 0.85p',
              steps: [
                m`Notebooks: $2.40n$`,
                m`Pens: $0.85p$`,
                m`Add the two costs: $2.4n + 0.85p$`
              ]
            },
            {
              q: m`Movie tickets cost \$9.50 each. You also buy one \$6 popcorn and one \$4 drink. Write a simplified expression for the total cost of $t$ tickets.`, a: m`$9.5t + 10$`, key: '9.5t + 10',
              steps: [
                m`Tickets: $9.5t$`,
                m`Popcorn and drink are each bought once: $6 + 4$`,
                m`Combine the constant terms: $9.5t + 6 + 4 = 9.5t + 10$`
              ]
            }
          ],
          [
            {
              q: m`A gym charges a \$25 sign-up fee plus \$18 per month. A locker costs \$5 more each month. Write a simplified expression for the cost of $m$ months with a locker.`, a: m`$23m + 25$`, key: '23m + 25',
              steps: [
                m`Monthly charges: $18m + 5m$`,
                m`Combine the like terms: $18m + 5m = 23m$`,
                m`Add the one-time fee: $23m + 25$`
              ]
            },
            {
              q: m`Three friends split the cost $c$ of a pizza equally. Ava also buys a \$2.50 drink. Write an expression for how much Ava spends.`, a: m`$\frac{1}{3}c + 2.5$`, key: 'c/3 + 2.5',
              steps: [
                m`Ava pays one-third of the pizza: $\frac{1}{3}c$, or $\frac{c}{3}$.`,
                m`She also pays for her own drink: \$2.50.`,
                m`$\frac{1}{3}c + 2.5$`
              ]
            }
          ]
        ]
      },

      /* ------------------------------------------------------------------ */
      {
        name: 'Combine Like Terms',
        tiles: [
          [
            {
              q: m`Simplify $9x - 4x + 2$.`, a: m`$5x + 2$`, key: '5x + 2',
              steps: [
                m`$9x$ and $-4x$ are like terms.`,
                m`$9x - 4x = 5x$`,
                m`The 2 has nothing to combine with: $5x + 2$`
              ]
            },
            {
              q: m`Simplify $-3y + 8y$.`, a: m`$5y$`, key: '5y',
              steps: [
                m`Both terms have $y$, so they are like terms.`,
                m`Add the coefficients: $-3 + 8 = 5$`,
                m`$5y$`
              ]
            }
          ],
          [
            {
              q: m`Simplify $6a + 3b - 2a$.`, a: m`$4a + 3b$`, key: '4a + 3b',
              steps: [
                m`The like terms are $6a$ and $-2a$.`,
                m`$6a - 2a = 4a$`,
                m`$3b$ has no like term: $4a + 3b$`
              ]
            },
            {
              q: m`Simplify $7 - 2k + 5 + 6k$.`, a: m`$4k + 12$`, key: '4k + 12',
              steps: [
                m`Group like terms: $(-2k + 6k) + (7 + 5)$`,
                m`$-2k + 6k = 4k$ and $7 + 5 = 12$`,
                m`$4k + 12$`
              ]
            }
          ],
          [
            {
              q: m`Simplify $2.4m - 5 + 1.6m + 9$.`, a: m`$4m + 4$`, key: '4m + 4',
              steps: [
                m`Group like terms: $(2.4m + 1.6m) + (-5 + 9)$`,
                m`$2.4m + 1.6m = 4m$`,
                m`$-5 + 9 = 4$, so the answer is $4m + 4$`
              ]
            },
            {
              q: m`Simplify $-8p + 3q + 5p - 7q$.`, a: m`$-3p - 4q$`, key: '-3p - 4q',
              steps: [
                m`$p$ terms: $-8p + 5p = -3p$`,
                m`$q$ terms: $3q - 7q = -4q$`,
                m`$-3p - 4q$`
              ]
            }
          ],
          [
            {
              q: m`Simplify $\frac{1}{2}x + 3 - \frac{3}{4}x + 1$.`, a: m`$-\frac{1}{4}x + 4$`, key: '-1/4x + 4',
              steps: [
                m`Use a common denominator: $\frac{1}{2}x = \frac{2}{4}x$`,
                m`$x$ terms: $\frac{2}{4}x - \frac{3}{4}x = -\frac{1}{4}x$`,
                m`Numbers: $3 + 1 = 4$, so the answer is $-\frac{1}{4}x + 4$`
              ]
            },
            {
              q: m`Simplify $4.5c - 2.3d - 6.1c + d$.`, a: m`$-1.6c - 1.3d$`, key: '-1.6c - 1.3d',
              steps: [
                m`$c$ terms: $4.5c - 6.1c = -1.6c$`,
                m`$d$ terms: $-2.3d + 1d = -1.3d$`,
                m`$-1.6c - 1.3d$`
              ]
            }
          ],
          [
            {
              q: m`Simplify $-6 + \frac{2}{3}w - 1.5 + \frac{1}{3}w - w$.`, a: m`$-7.5$`, key: '-7.5',
              steps: [
                m`$w$ terms: $\frac{2}{3}w + \frac{1}{3}w - 1w = 1w - 1w = 0$`,
                m`The $w$ terms cancel out completely!`,
                m`Numbers: $-6 - 1.5 = -7.5$`
              ]
            },
            {
              q: m`Simplify $3.2a - 4b + 1.8 - 0.7a + 4b - 5$.`, a: m`$2.5a - 3.2$`, key: '2.5a - 3.2',
              steps: [
                m`$a$ terms: $3.2a - 0.7a = 2.5a$`,
                m`$b$ terms: $-4b + 4b = 0$, so they cancel.`,
                m`Numbers: $1.8 - 5 = -3.2$, so the answer is $2.5a - 3.2$`
              ]
            }
          ]
        ]
      },

      /* ------------------------------------------------------------------ */
      {
        name: 'Expand',
        tiles: [
          [
            {
              q: m`Expand $4(x + 6)$.`, a: m`$4x + 24$`, key: '4x + 24',
              steps: [
                m`Multiply 4 by each term inside.`,
                m`$4(x) + 4(6)$`,
                m`$4x + 24$`
              ]
            },
            {
              q: m`Expand $5(2y - 3)$.`, a: m`$10y - 15$`, key: '10y - 15',
              steps: [
                m`Multiply 5 by each term inside. Keep the minus sign.`,
                m`$5(2y) - 5(3)$`,
                m`$10y - 15$`
              ]
            }
          ],
          [
            {
              q: m`Expand $-3(n + 4)$.`, a: m`$-3n - 12$`, key: '-3n - 12',
              steps: [
                m`Multiply $-3$ by each term inside.`,
                m`$-3(n) + (-3)(4)$`,
                m`$-3n - 12$`
              ]
            },
            {
              q: m`Expand $-2(5 - k)$.`, a: m`$-10 + 2k$`, key: '-10 + 2k',
              steps: [
                m`Multiply $-2$ by each term inside.`,
                m`$-2(5) + (-2)(-k)$`,
                m`A negative times a negative is positive: $-10 + 2k$`
              ]
            }
          ],
          [
            {
              q: m`Expand $0.5(8a - 6)$.`, a: m`$4a - 3$`, key: '4a - 3',
              steps: [
                m`$0.5(8a) - 0.5(6)$`,
                m`$0.5 \times 8 = 4$ and $0.5 \times 6 = 3$`,
                m`$4a - 3$`
              ]
            },
            {
              q: m`Expand $\frac{1}{3}(9x + 12)$.`, a: m`$3x + 4$`, key: '3x + 4',
              steps: [
                m`$\frac{1}{3}(9x) + \frac{1}{3}(12)$`,
                m`$\frac{1}{3}$ of 9 is 3, and $\frac{1}{3}$ of 12 is 4.`,
                m`$3x + 4$`
              ]
            }
          ],
          [
            {
              q: m`Expand $y(7 - 2x)$.`, a: m`$7y - 2xy$`, key: '7y - 2xy',
              steps: [
                m`Multiply $y$ by each term inside.`,
                m`$y(7) - y(2x)$`,
                m`$7y - 2xy$`
              ]
            },
            {
              q: m`Expand $-1.5(4m - 2n + 6)$.`, a: m`$-6m + 3n - 9$`, key: '-6m + 3n - 9',
              steps: [
                m`$-1.5(4m) = -6m$`,
                m`$-1.5(-2n) = 3n$ (negative times negative)`,
                m`$-1.5(6) = -9$, so the answer is $-6m + 3n - 9$`
              ]
            }
          ],
          [
            {
              q: m`Expand $-\frac{2}{5}(10p - 15 + 5q)$.`, a: m`$-4p + 6 - 2q$`, key: '-4p + 6 - 2q',
              steps: [
                m`$-\frac{2}{5}(10p) = -4p$`,
                m`$-\frac{2}{5}(-15) = 6$ (negative times negative)`,
                m`$-\frac{2}{5}(5q) = -2q$, so the answer is $-4p + 6 - 2q$`
              ]
            },
            {
              q: m`Expand and simplify $3(2x + 5) - 4x$.`, a: m`$2x + 15$`, key: '2x + 15',
              steps: [
                m`Expand: $3(2x) + 3(5) = 6x + 15$`,
                m`Now the expression is $6x + 15 - 4x$.`,
                m`Combine like terms: $6x - 4x = 2x$, so the answer is $2x + 15$`
              ]
            }
          ]
        ]
      },

      /* ------------------------------------------------------------------ */
      {
        name: 'Factor',
        tiles: [
          [
            {
              q: m`Use the GCF to factor $6x + 18$.`, a: m`$6(x + 3)$`, key: '6(x + 3)',
              steps: [
                m`The GCF of 6 and 18 is 6.`,
                m`$6x = 6(x)$ and $18 = 6(3)$`,
                m`$6(x + 3)$`
              ]
            },
            {
              q: m`Use the GCF to factor $10y - 25$.`, a: m`$5(2y - 5)$`, key: '5(2y - 5)',
              steps: [
                m`The GCF of 10 and 25 is 5.`,
                m`$10y = 5(2y)$ and $25 = 5(5)$`,
                m`$5(2y - 5)$`
              ]
            }
          ],
          [
            {
              q: m`Use the GCF to factor $21m + 35$.`, a: m`$7(3m + 5)$`, key: '7(3m + 5)',
              steps: [
                m`Factors of 21: 1, 3, **7**, 21. Factors of 35: 1, 5, **7**, 35. The GCF is 7.`,
                m`$21m = 7(3m)$ and $35 = 7(5)$`,
                m`$7(3m + 5)$`
              ]
            },
            {
              q: m`Use the GCF to factor $16a - 40$.`, a: m`$8(2a - 5)$`, key: '8(2a - 5)',
              steps: [
                m`Factors of 16: 1, 2, 4, **8**, 16. 8 also divides 40, so the GCF is 8.`,
                m`$16a = 8(2a)$ and $40 = 8(5)$`,
                m`$8(2a - 5)$`
              ]
            }
          ],
          [
            {
              q: m`Use the GCF to factor $9x + 27y - 18$.`, a: m`$9(x + 3y - 2)$`, key: '9(x + 3y - 2)',
              steps: [
                m`9 divides 9, 27, and 18, so the GCF is 9.`,
                m`$9x = 9(x)$, $\;27y = 9(3y)$, $\;18 = 9(2)$`,
                m`$9(x + 3y - 2)$`
              ]
            },
            {
              q: m`Use the GCF to factor $20p - 30q + 50$.`, a: m`$10(2p - 3q + 5)$`, key: '10(2p - 3q + 5)',
              steps: [
                m`10 divides 20, 30, and 50, so the GCF is 10.`,
                m`$20p = 10(2p)$, $\;30q = 10(3q)$, $\;50 = 10(5)$`,
                m`$10(2p - 3q + 5)$`
              ]
            }
          ],
          [
            {
              q: m`Factor $-8x - 20$ using a **negative** common factor.`, a: m`$-4(2x + 5)$`, key: '-4(2x + 5)',
              steps: [
                m`The GCF of 8 and 20 is 4. Use $-4$ so the terms inside are positive.`,
                m`$-8x = -4(2x)$ and $-20 = -4(5)$`,
                m`$-4(2x + 5)$`
              ]
            },
            {
              q: m`Factor $-15k + 45$ using a **negative** common factor.`, a: m`$-15(k - 3)$`, key: '-15(k - 3)',
              steps: [
                m`The GCF of 15 and 45 is 15. Use $-15$.`,
                m`$-15k = -15(k)$ and $45 = -15(-3)$`,
                m`$-15(k - 3)$. Check: $-15(k) - 15(-3) = -15k + 45$ ✓`
              ]
            }
          ],
          [
            {
              q: m`Factor $12xy + 18x$ completely.`, a: m`$6x(2y + 3)$`, key: '6x(2y + 3)',
              steps: [
                m`The numbers share 6, and **both** terms have $x$. The GCF is $6x$.`,
                m`$12xy = 6x(2y)$ and $18x = 6x(3)$`,
                m`$6x(2y + 3)$`
              ]
            },
            {
              q: m`A rectangle has an area of $(32w + 48)$ square feet. Its width is 16 feet. Write an expression for its length.`, a: m`$(2w + 3)$ feet`, key: '2w + 3',
              steps: [
                m`Area = width × length, so factor out the width, 16.`,
                m`$32w + 48 = 16(2w) + 16(3) = 16(2w + 3)$`,
                m`The length is $2w + 3$ feet.`
              ]
            }
          ]
        ]
      },

      /* ------------------------------------------------------------------ */
      {
        name: 'Equivalent Expressions',
        tiles: [
          [
            {
              q: m`Is $3(x + 4)$ equivalent to $3x + 4$? If not, what is it equivalent to?`, a: m`No, it is $3x + 12$`, key: '3x + 12',
              steps: [
                m`Expand: $3(x) + 3(4)$`,
                m`$= 3x + 12$`,
                m`$3x + 4$ forgets to multiply the 4 by 3, so it is not equivalent.`
              ]
            },
            {
              q: m`Use the Commutative Property to write an expression equivalent to $7 + 2n$.`, a: m`$2n + 7$`, key: '2n + 7',
              steps: [
                m`The Commutative Property says you can add in any order.`,
                m`$7 + 2n = 2n + 7$`
              ]
            }
          ],
          [
            {
              q: m`Which is equivalent to $8 - 3x$: $\;3x - 8$ or $-3x + 8$?`, a: m`$-3x + 8$`, key: '-3x + 8',
              steps: [
                m`Rewrite the subtraction as adding a negative: $8 + (-3x)$`,
                m`Use the Commutative Property: $-3x + 8$`,
                m`$3x - 8$ has both signs flipped, so it is not equivalent.`
              ]
            },
            {
              q: m`What number makes the expressions equivalent? $$5(2y - \square) = 10y - 35$$`, a: m`$7$`, key: '7',
              steps: [
                m`Expand the left side: $10y - 5(\square)$`,
                m`So $5 \times \square = 35$.`,
                m`$\square = 7$`
              ]
            }
          ],
          [
            {
              q: m`What term goes in the box? $$6x + 15 = 3(\square + 5)$$`, a: m`$2x$`, key: '2x',
              steps: [
                m`Expand the right side: $3(\square) + 15$`,
                m`So $3 \times \square = 6x$.`,
                m`$\square = 2x$`
              ]
            },
            {
              q: m`Simplify $4(2a - 1) + 3$. Is it equivalent to $8a - 1$?`, a: m`Yes, $8a - 1$`, key: '8a - 1',
              steps: [
                m`Expand: $4(2a) - 4(1) + 3 = 8a - 4 + 3$`,
                m`Combine the numbers: $-4 + 3 = -1$`,
                m`$8a - 1$, so yes, they are equivalent.`
              ]
            }
          ],
          [
            {
              q: m`Simplify $-\frac{1}{2}(4x - 6) + x$.`, a: m`$-x + 3$`, key: '-x + 3',
              steps: [
                m`Expand: $-\frac{1}{2}(4x) - \frac{1}{2}(-6) = -2x + 3$`,
                m`Now the expression is $-2x + 3 + x$.`,
                m`Combine like terms: $-2x + x = -x$, so the answer is $-x + 3$`
              ]
            },
            {
              q: m`The expression $4x - 3 + 2x$ simplifies to $6x - 3$. Check: what is the value of **both** expressions when $x = 1.5$?`, a: m`$6$`, key: '6',
              steps: [
                m`Original: $4(1.5) - 3 + 2(1.5) = 6 - 3 + 3 = 6$`,
                m`Simplified: $6(1.5) - 3 = 9 - 3 = 6$`,
                m`Both equal 6. Equivalent expressions always have the same value.`
              ]
            }
          ],
          [
            {
              q: m`What expression goes in the parentheses? $$18x - 12 = 6(\quad?\quad)$$`, a: m`$3x - 2$`, key: '3x - 2',
              steps: [
                m`Divide each term by 6.`,
                m`$18x \div 6 = 3x$ and $12 \div 6 = 2$`,
                m`$18x - 12 = 6(3x - 2)$. Check: $6(3x) - 6(2) = 18x - 12$ ✓`
              ]
            },
            {
              q: m`The perimeter of a square is $20x + 12$. Write an equivalent expression that shows the perimeter as 4 times the side length.`, a: m`$4(5x + 3)$`, key: '4(5x + 3)',
              steps: [
                m`A square has 4 equal sides, so factor out 4.`,
                m`$20x = 4(5x)$ and $12 = 4(3)$`,
                m`$4(5x + 3)$, so each side is $5x + 3$.`
              ]
            }
          ]
        ]
      }
    ],

    finals: [
      {
        category: 'Write and Evaluate Expressions',
        q: m`A school club sells shirts for \$12 each and hats for \$8 each. It spent \$150 on supplies. Write an expression for the club's profit from $s$ shirts and $h$ hats. Then find the profit for 20 shirts and 15 hats.`,
        a: m`$12s + 8h - 150$; profit is \$210`,
        key: '210',
        steps: [
          m`Money in: $12s + 8h$. Money out: \$150, once.`,
          m`Profit: $12s + 8h - 150$`,
          m`Substitute: $12(20) + 8(15) - 150 = 240 + 120 - 150$`,
          m`$= 210$, so the profit is \$210.`
        ]
      },
      {
        category: 'Expand Expressions',
        q: m`The sales tax on a \$50 game console and $n$ games that cost \$12.50 each is $0.08(50 + 12.5n)$. Expand the expression.`,
        a: m`$4 + n$`,
        key: '4 + n',
        steps: [
          m`Multiply 0.08 by each term: $0.08(50) + 0.08(12.5n)$`,
          m`$0.08 \times 50 = 4$`,
          m`$0.08 \times 12.5 = 1$, so $0.08(12.5n) = 1n = n$`,
          m`$4 + n$: \$4 of tax on the console and \$1 for each game.`
        ]
      },
      {
        category: 'Factor Expressions',
        q: m`Use the GCF to factor $36a - 54b + 90$.`,
        a: m`$18(2a - 3b + 5)$`,
        key: '18(2a - 3b + 5)',
        steps: [
          m`Factors of 36: 1, 2, 3, 4, 6, 9, 12, **18**, 36. 18 also divides 54 and 90.`,
          m`$36a = 18(2a)$, $\;54b = 18(3b)$, $\;90 = 18(5)$`,
          m`$18(2a - 3b + 5)$. Check: $18(2a) - 18(3b) + 18(5) = 36a - 54b + 90$ ✓`
        ]
      }
    ]
  });
})();
