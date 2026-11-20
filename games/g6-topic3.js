/*
 * Grade 6 · Topic 3 Jeopardy — Numeric and Algebraic Expressions
 *
 * Six categories, five point values, and TWO questions for every tile.
 * Each new game picks one of the two, so the board changes from game to game.
 * These questions are new: none come from the tests or from the study review.
 *
 *   q    the question          a    the answer shown on screen
 *   how  a short explanation   key  the answer in plain form, used only by the checks
 *
 * Text rules:  $...$ is math,  \$ is a dollar sign,  **bold**.
 */
(function () {
  var m = String.raw;

  WDMS.registerGame({
    id: 'g6-topic3',
    grade: 6,
    title: 'Topic 3 Jeopardy',
    subtitle: 'Numeric and Algebraic Expressions',
    values: [100, 200, 300, 400, 500],

    categories: [
      {
        name: 'Exponents',
        tiles: [
          [
            { q: m`Evaluate $2^4$.`, a: m`$16$`, how: m`$2 \times 2 \times 2 \times 2 = 16$`, key: '16' },
            { q: m`Evaluate $3^3$.`, a: m`$27$`, how: m`$3 \times 3 \times 3 = 27$`, key: '27' }
          ],
          [
            { q: m`Write as a power: $7 \times 7 \times 7 \times 7 \times 7$`, a: m`$7^5$`, how: m`7 is used as a factor 5 times.`, key: '7^5' },
            { q: m`Write as a power: $8 \times 8 \times 8 \times 8 \times 8 \times 8$`, a: m`$8^6$`, how: m`8 is used as a factor 6 times.`, key: '8^6' }
          ],
          [
            { q: m`Evaluate $25^0 + 2^3$.`, a: m`$9$`, how: m`Any nonzero number to the zero power is 1. $1 + 8 = 9$`, key: '9' },
            { q: m`Evaluate $9^0 + 3^2$.`, a: m`$10$`, how: m`Any nonzero number to the zero power is 1. $1 + 9 = 10$`, key: '10' }
          ],
          [
            { q: m`Evaluate $0.5^3$.`, a: m`$0.125$`, how: m`$0.5 \times 0.5 = 0.25$, then $0.25 \times 0.5 = 0.125$`, key: '0.125' },
            { q: m`Evaluate $\left(\frac{2}{3}\right)^3$.`, a: m`$\frac{8}{27}$`, how: m`$\frac{2}{3} \times \frac{2}{3} \times \frac{2}{3} = \frac{8}{27}$`, key: '8/27' }
          ],
          [
            { q: m`Which is greater, $3^5$ or $5^3$? By how much?`, a: m`$3^5$ is greater, by $118$`, how: m`$3^5 = 243$ and $5^3 = 125$. $243 - 125 = 118$`, key: '118' },
            { q: m`Which is greater, $2^6$ or $6^2$? By how much?`, a: m`$2^6$ is greater, by $28$`, how: m`$2^6 = 64$ and $6^2 = 36$. $64 - 36 = 28$`, key: '28' }
          ]
        ]
      },
      {
        name: 'GCF and LCM',
        tiles: [
          [
            { q: m`What is the GCF of 10 and 15?`, a: m`$5$`, how: m`Factors of 10: 1, 2, 5, 10. Factors of 15: 1, 3, 5, 15.`, key: '5' },
            { q: m`What is the GCF of 14 and 21?`, a: m`$7$`, how: m`Factors of 14: 1, 2, 7, 14. Factors of 21: 1, 3, 7, 21.`, key: '7' }
          ],
          [
            { q: m`What is the LCM of 4 and 6?`, a: m`$12$`, how: m`Multiples of 6: 6, 12 … and 12 is also a multiple of 4.`, key: '12' },
            { q: m`What is the LCM of 6 and 9?`, a: m`$18$`, how: m`Multiples of 9: 9, 18 … and 18 is also a multiple of 6.`, key: '18' }
          ],
          [
            { q: m`What is the GCF of 36 and 48?`, a: m`$12$`, how: m`12 divides both: $36 = 12 \times 3$ and $48 = 12 \times 4$. No greater number does.`, key: '12' },
            { q: m`What is the GCF of 28 and 42?`, a: m`$14$`, how: m`14 divides both: $28 = 14 \times 2$ and $42 = 14 \times 3$. No greater number does.`, key: '14' }
          ],
          [
            { q: m`What is the LCM of 9 and 12?`, a: m`$36$`, how: m`Multiples of 12: 12, 24, 36 … and 36 is the first that is also a multiple of 9.`, key: '36' },
            { q: m`What is the LCM of 6 and 15?`, a: m`$30$`, how: m`Multiples of 15: 15, 30 … and 30 is the first that is also a multiple of 6.`, key: '30' }
          ],
          [
            { q: m`Hot dogs come in packs of 10. Buns come in packs of 8. What is the least number of hot dogs you can buy so that you have exactly the same number of buns?`, a: m`$40$ hot dogs`, how: m`The LCM of 10 and 8 is 40. That is 4 packs of hot dogs and 5 packs of buns.`, key: '40' },
            { q: m`A florist has 24 roses and 36 tulips. She wants to make identical bouquets and use every flower. What is the greatest number of bouquets she can make?`, a: m`$12$ bouquets`, how: m`The GCF of 24 and 36 is 12. Each bouquet has 2 roses and 3 tulips.`, key: '12' }
          ]
        ]
      },
      {
        name: 'Order of Operations',
        tiles: [
          [
            { q: m`Evaluate $6 + 4 \times 3$.`, a: m`$18$`, how: m`Multiply first: $4 \times 3 = 12$. Then $6 + 12 = 18$`, key: '18' },
            { q: m`Evaluate $20 - 12 \div 4$.`, a: m`$17$`, how: m`Divide first: $12 \div 4 = 3$. Then $20 - 3 = 17$`, key: '17' }
          ],
          [
            { q: m`Evaluate $(9 - 4) \times 6 + 2$.`, a: m`$32$`, how: m`$5 \times 6 + 2 = 30 + 2 = 32$`, key: '32' },
            { q: m`Evaluate $3 \times (7 + 5) - 10$.`, a: m`$26$`, how: m`$3 \times 12 - 10 = 36 - 10 = 26$`, key: '26' }
          ],
          [
            { q: m`Evaluate $5^2 - 3 \times 4$.`, a: m`$13$`, how: m`$25 - 12 = 13$`, key: '13' },
            { q: m`Evaluate $2^3 + 18 \div 6$.`, a: m`$11$`, how: m`$8 + 3 = 11$`, key: '11' }
          ],
          [
            { q: m`Evaluate $[(14 - 6) \times 2] + 3^2$.`, a: m`$25$`, how: m`$[8 \times 2] + 9 = 16 + 9 = 25$`, key: '25' },
            { q: m`Evaluate $40 \div [(2 + 3) \times 2] + 4^2$.`, a: m`$20$`, how: m`$40 \div 10 + 16 = 4 + 16 = 20$`, key: '20' }
          ],
          [
            { q: m`Evaluate $7.5 + 2^3 \times (10 - 6.5)$.`, a: m`$35.5$`, how: m`$7.5 + 8 \times 3.5 = 7.5 + 28 = 35.5$`, key: '35.5' },
            { q: m`Evaluate $(4.2 + 1.8)^2 \div 4 - 2.5$.`, a: m`$6.5$`, how: m`$6^2 \div 4 - 2.5 = 36 \div 4 - 2.5 = 9 - 2.5 = 6.5$`, key: '6.5' }
          ]
        ]
      },
      {
        name: 'Writing Expressions',
        tiles: [
          [
            { q: m`Write an algebraic expression: **8 more than a number $n$**`, a: m`$n + 8$`, how: m`“More than” means add.`, key: 'n + 8' },
            { q: m`Write an algebraic expression: **a number $k$ decreased by 6**`, a: m`$k - 6$`, how: m`“Decreased by” means subtract.`, key: 'k - 6' }
          ],
          [
            { q: m`Write an algebraic expression: **the product of 4 and a number $x$, increased by 9**`, a: m`$4x + 9$`, how: m`The product is $4x$. Then add 9.`, key: '4x + 9' },
            { q: m`Write an algebraic expression: **7 less than twice a number $y$**`, a: m`$2y - 7$`, how: m`Twice $y$ is $2y$. “7 less than” means subtract 7 from it.`, key: '2y - 7' }
          ],
          [
            { q: m`How many terms does this expression have? $$6a + \frac{b}{2} - 4$$`, a: m`$3$ terms`, how: m`Terms are separated by plus and minus signs: $6a$, $\frac{b}{2}$, and $4$.`, key: '3' },
            { q: m`What is the coefficient of $y$ in this expression? $$9x + 5y - 2$$`, a: m`$5$`, how: m`A coefficient is the number multiplied by a variable.`, key: '5' }
          ],
          [
            { q: m`Movie tickets cost \$9 each, plus a one-time \$3 service fee. Write an expression for the total cost of $t$ tickets.`, a: m`$9t + 3$`, how: m`\$9 for each of $t$ tickets is $9t$. The fee is added once.`, key: '9t + 3' },
            { q: m`A gym charges a \$20 sign-up fee plus \$15 per month. Write an expression for the total cost after $m$ months.`, a: m`$15m + 20$`, how: m`\$15 for each of $m$ months is $15m$. The sign-up fee is added once.`, key: '15m + 20' }
          ],
          [
            { q: m`Pencils cost \$0.50 each and notebooks cost \$2 each. Write an expression for the cost of $p$ pencils and $n$ notebooks.`, a: m`$0.50p + 2n$`, how: m`Pencils cost $0.50p$ and notebooks cost $2n$. Add them.`, key: '0.50p + 2n' },
            { q: m`Leo sells cookies for \$3 each and brownies for \$4 each. Write an expression for the money he makes selling $c$ cookies and $b$ brownies.`, a: m`$3c + 4b$`, how: m`Cookies bring in $3c$ and brownies bring in $4b$. Add them.`, key: '3c + 4b' }
          ]
        ]
      },
      {
        name: 'Evaluating Expressions',
        tiles: [
          [
            { q: m`Evaluate $5x$ for $x = 7$.`, a: m`$35$`, how: m`$5 \times 7 = 35$`, key: '35' },
            { q: m`Evaluate $n + 14$ for $n = 9$.`, a: m`$23$`, how: m`$9 + 14 = 23$`, key: '23' }
          ],
          [
            { q: m`Evaluate $3a + 4$ for $a = 6$.`, a: m`$22$`, how: m`$3(6) + 4 = 18 + 4 = 22$`, key: '22' },
            { q: m`Evaluate $50 - 4k$ for $k = 8$.`, a: m`$18$`, how: m`$50 - 4(8) = 50 - 32 = 18$`, key: '18' }
          ],
          [
            { q: m`Evaluate $x^2 + 5$ for $x = 6$.`, a: m`$41$`, how: m`$6^2 + 5 = 36 + 5 = 41$`, key: '41' },
            { q: m`Evaluate $2y^2$ for $y = 5$.`, a: m`$50$`, how: m`Exponent first: $5^2 = 25$. Then $2 \times 25 = 50$`, key: '50' }
          ],
          [
            { q: m`Evaluate $2.5m + 4$ for $m = 6$.`, a: m`$19$`, how: m`$2.5(6) + 4 = 15 + 4 = 19$`, key: '19' },
            { q: m`Evaluate $10 - 1.5t$ for $t = 4$.`, a: m`$4$`, how: m`$10 - 1.5(4) = 10 - 6 = 4$`, key: '4' }
          ],
          [
            { q: m`Evaluate $3a + 2b$ for $a = 1.5$ and $b = 4.2$.`, a: m`$12.9$`, how: m`$3(1.5) + 2(4.2) = 4.5 + 8.4 = 12.9$`, key: '12.9' },
            { q: m`Evaluate $a^2 + b \div 2$ for $a = 4$ and $b = 7$.`, a: m`$19.5$`, how: m`$4^2 + 7 \div 2 = 16 + 3.5 = 19.5$`, key: '19.5' }
          ]
        ]
      },
      {
        name: 'Equivalent Expressions',
        tiles: [
          [
            { q: m`Simplify $5x + 3x$.`, a: m`$8x$`, how: m`Like terms: add the coefficients. $5 + 3 = 8$`, key: '8x' },
            { q: m`Simplify $9y - 4y$.`, a: m`$5y$`, how: m`Like terms: subtract the coefficients. $9 - 4 = 5$`, key: '5y' }
          ],
          [
            { q: m`Use the Distributive Property to rewrite $3(x + 5)$ without parentheses.`, a: m`$3x + 15$`, how: m`$3(x) + 3(5) = 3x + 15$`, key: '3x + 15' },
            { q: m`Use the Distributive Property to rewrite $6(y - 2)$ without parentheses.`, a: m`$6y - 12$`, how: m`$6(y) - 6(2) = 6y - 12$`, key: '6y - 12' }
          ],
          [
            { q: m`Simplify $4x + 7 + 2x - 3$.`, a: m`$6x + 4$`, how: m`$4x + 2x = 6x$ and $7 - 3 = 4$`, key: '6x + 4' },
            { q: m`Simplify $8 + 5n - 2 + n$.`, a: m`$6n + 6$`, how: m`$5n + n = 6n$ and $8 - 2 = 6$`, key: '6n + 6' }
          ],
          [
            { q: m`Use the GCF to write $12x + 18$ as a product.`, a: m`$6(2x + 3)$`, how: m`The GCF of 12 and 18 is 6. $12x = 6(2x)$ and $18 = 6(3)$`, key: '6(2x + 3)' },
            { q: m`Use the GCF to write $20y - 15$ as a product.`, a: m`$5(4y - 3)$`, how: m`The GCF of 20 and 15 is 5. $20y = 5(4y)$ and $15 = 5(3)$`, key: '5(4y - 3)' }
          ],
          [
            { q: m`Simplify $2(3x + 4) + 5x$.`, a: m`$11x + 8$`, how: m`Distribute: $6x + 8 + 5x$. Combine like terms: $11x + 8$`, key: '11x + 8' },
            { q: m`Simplify $4(2n + 1) - 3n + 6$.`, a: m`$5n + 10$`, how: m`Distribute: $8n + 4 - 3n + 6$. Combine like terms: $5n + 10$`, key: '5n + 10' }
          ]
        ]
      }
    ],

    finals: [
      {
        category: 'Writing and Evaluating Expressions',
        q: m`A bike shop rents bikes for \$8 per hour, plus a one-time \$5 helmet fee. Write an expression for the cost of renting a bike for $h$ hours. Then find the cost for 4.5 hours.`,
        a: m`$8h + 5$, and the cost is \$41`,
        how: m`$8(4.5) + 5 = 36 + 5 = 41$`,
        key: '41'
      },
      {
        category: 'GCF and LCM',
        q: m`Two lighthouses flash at the same moment. One flashes every 12 seconds and the other flashes every 18 seconds. How many seconds will pass before they flash at the same moment again?`,
        a: m`$36$ seconds`,
        how: m`The LCM of 12 and 18 is 36. Multiples of 18: 18, 36 … and 36 is also a multiple of 12.`,
        key: '36'
      },
      {
        category: 'Order of Operations',
        q: m`Evaluate. $$3^3 - [2 \times (10 - 4.5)] + 6 \div 0.5$$`,
        a: m`$28$`,
        how: m`$27 - [2 \times 5.5] + 12 = 27 - 11 + 12 = 28$`,
        key: '28'
      }
    ]
  });
})();
