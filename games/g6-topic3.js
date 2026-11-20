/*
 * Grade 6 · Topic 3 Jeopardy — Numeric and Algebraic Expressions
 *
 * Six categories, five point values, and TWO questions for every tile.
 * Each new game picks one of the two, so the board changes from game to game.
 * These questions are new: none come from the tests or from the study review.
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
    id: 'g6-topic3',
    grade: 6,
    title: 'Topic 3 Jeopardy',
    subtitle: 'Numeric and Algebraic Expressions',
    values: [100, 200, 300, 400, 500],

    categories: [
      /* ------------------------------------------------------------------ */
      {
        name: 'Exponents',
        tiles: [
          [
            {
              q: m`Evaluate $2^4$.`, a: m`$16$`, key: '16',
              steps: [
                m`The exponent tells how many times to use the base as a factor.`,
                m`$2^4 = 2 \times 2 \times 2 \times 2$`,
                m`Multiply from left to right: $2 \times 2 = 4$, $\;4 \times 2 = 8$, $\;8 \times 2 = 16$`
              ]
            },
            {
              q: m`Evaluate $3^3$.`, a: m`$27$`, key: '27',
              steps: [
                m`The exponent tells how many times to use the base as a factor.`,
                m`$3^3 = 3 \times 3 \times 3$`,
                m`Multiply from left to right: $3 \times 3 = 9$, $\;9 \times 3 = 27$`
              ]
            }
          ],
          [
            {
              q: m`Write as a power: $7 \times 7 \times 7 \times 7 \times 7$`, a: m`$7^5$`, key: '7^5',
              steps: [
                m`The same factor, 7, is multiplied over and over. That factor is the **base**.`,
                m`Count the factors: there are five 7s. That count is the **exponent**.`,
                m`Base 7, exponent 5: $7^5$`
              ]
            },
            {
              q: m`Write as a power: $8 \times 8 \times 8 \times 8 \times 8 \times 8$`, a: m`$8^6$`, key: '8^6',
              steps: [
                m`The same factor, 8, is multiplied over and over. That factor is the **base**.`,
                m`Count the factors: there are six 8s. That count is the **exponent**.`,
                m`Base 8, exponent 6: $8^6$`
              ]
            }
          ],
          [
            {
              q: m`Evaluate $25^0 + 2^3$.`, a: m`$9$`, key: '9',
              steps: [
                m`Any nonzero number to the zero power equals 1, so $25^0 = 1$.`,
                m`$2^3 = 2 \times 2 \times 2 = 8$`,
                m`Add: $1 + 8 = 9$`
              ]
            },
            {
              q: m`Evaluate $9^0 + 3^2$.`, a: m`$10$`, key: '10',
              steps: [
                m`Any nonzero number to the zero power equals 1, so $9^0 = 1$.`,
                m`$3^2 = 3 \times 3 = 9$`,
                m`Add: $1 + 9 = 10$`
              ]
            }
          ],
          [
            {
              q: m`Evaluate $0.5^3$.`, a: m`$0.125$`, key: '0.125',
              steps: [
                m`$0.5^3 = 0.5 \times 0.5 \times 0.5$`,
                m`$0.5 \times 0.5 = 0.25$`,
                m`$0.25 \times 0.5 = 0.125$`
              ]
            },
            {
              q: m`Evaluate $\left(\frac{2}{3}\right)^3$.`, a: m`$\frac{8}{27}$`, key: '8/27',
              steps: [
                m`$\left(\frac{2}{3}\right)^3 = \frac{2}{3} \times \frac{2}{3} \times \frac{2}{3}$`,
                m`Multiply the numerators: $2 \times 2 \times 2 = 8$`,
                m`Multiply the denominators: $3 \times 3 \times 3 = 27$`,
                m`So the value is $\frac{8}{27}$.`
              ]
            }
          ],
          [
            {
              q: m`Which is greater, $3^5$ or $5^3$? By how much?`, a: m`$3^5$ is greater, by $118$`, key: '118',
              steps: [
                m`$3^5 = 3 \times 3 \times 3 \times 3 \times 3 = 243$`,
                m`$5^3 = 5 \times 5 \times 5 = 125$`,
                m`$243 > 125$, so $3^5$ is greater.`,
                m`Subtract to find how much greater: $243 - 125 = 118$`
              ]
            },
            {
              q: m`Which is greater, $2^6$ or $6^2$? By how much?`, a: m`$2^6$ is greater, by $28$`, key: '28',
              steps: [
                m`$2^6 = 2 \times 2 \times 2 \times 2 \times 2 \times 2 = 64$`,
                m`$6^2 = 6 \times 6 = 36$`,
                m`$64 > 36$, so $2^6$ is greater.`,
                m`Subtract to find how much greater: $64 - 36 = 28$`
              ]
            }
          ]
        ]
      },

      /* ------------------------------------------------------------------ */
      {
        name: 'GCF and LCM',
        tiles: [
          [
            {
              q: m`What is the GCF of 10 and 15?`, a: m`$5$`, key: '5',
              steps: [
                m`List the factors of each number.`,
                m`Factors of 10: 1, 2, **5**, 10`,
                m`Factors of 15: 1, 3, **5**, 15`,
                m`The greatest factor they share is 5.`
              ]
            },
            {
              q: m`What is the GCF of 14 and 21?`, a: m`$7$`, key: '7',
              steps: [
                m`List the factors of each number.`,
                m`Factors of 14: 1, 2, **7**, 14`,
                m`Factors of 21: 1, 3, **7**, 21`,
                m`The greatest factor they share is 7.`
              ]
            }
          ],
          [
            {
              q: m`What is the LCM of 4 and 6?`, a: m`$12$`, key: '12',
              steps: [
                m`List multiples of each number until you find one they share.`,
                m`Multiples of 4: 4, 8, **12**, 16 …`,
                m`Multiples of 6: 6, **12**, 18 …`,
                m`The least multiple they share is 12.`
              ]
            },
            {
              q: m`What is the LCM of 6 and 9?`, a: m`$18$`, key: '18',
              steps: [
                m`List multiples of each number until you find one they share.`,
                m`Multiples of 6: 6, 12, **18**, 24 …`,
                m`Multiples of 9: 9, **18**, 27 …`,
                m`The least multiple they share is 18.`
              ]
            }
          ],
          [
            {
              q: m`What is the GCF of 36 and 48?`, a: m`$12$`, key: '12',
              steps: [
                m`List the factors of each number.`,
                m`Factors of 36: 1, 2, 3, 4, 6, 9, **12**, 18, 36`,
                m`Factors of 48: 1, 2, 3, 4, 6, 8, **12**, 16, 24, 48`,
                m`The greatest factor they share is 12.`
              ]
            },
            {
              q: m`What is the GCF of 28 and 42?`, a: m`$14$`, key: '14',
              steps: [
                m`List the factors of each number.`,
                m`Factors of 28: 1, 2, 4, 7, **14**, 28`,
                m`Factors of 42: 1, 2, 3, 6, 7, **14**, 21, 42`,
                m`The greatest factor they share is 14.`
              ]
            }
          ],
          [
            {
              q: m`What is the LCM of 9 and 12?`, a: m`$36$`, key: '36',
              steps: [
                m`List multiples of each number until you find one they share.`,
                m`Multiples of 9: 9, 18, 27, **36**, 45 …`,
                m`Multiples of 12: 12, 24, **36**, 48 …`,
                m`The least multiple they share is 36.`
              ]
            },
            {
              q: m`What is the LCM of 6 and 15?`, a: m`$30$`, key: '30',
              steps: [
                m`List multiples of each number until you find one they share.`,
                m`Multiples of 6: 6, 12, 18, 24, **30** …`,
                m`Multiples of 15: 15, **30**, 45 …`,
                m`The least multiple they share is 30.`
              ]
            }
          ],
          [
            {
              q: m`Hot dogs come in packs of 10. Buns come in packs of 8. What is the least number of hot dogs you can buy so that you have exactly the same number of buns?`,
              a: m`$40$ hot dogs`, key: '40',
              steps: [
                m`The number must be a multiple of 10 **and** a multiple of 8. The least one is the LCM.`,
                m`Multiples of 10: 10, 20, 30, **40** …`,
                m`Multiples of 8: 8, 16, 24, 32, **40** …`,
                m`The LCM is 40. That is 4 packs of hot dogs and 5 packs of buns.`
              ]
            },
            {
              q: m`A florist has 24 roses and 36 tulips. She wants to make identical bouquets and use every flower. What is the greatest number of bouquets she can make?`,
              a: m`$12$ bouquets`, key: '12',
              steps: [
                m`The number of bouquets must divide both 24 and 36 evenly. The greatest one is the GCF.`,
                m`Factors of 24: 1, 2, 3, 4, 6, 8, **12**, 24`,
                m`Factors of 36: 1, 2, 3, 4, 6, 9, **12**, 18, 36`,
                m`The GCF is 12. Each bouquet gets $24 \div 12 = 2$ roses and $36 \div 12 = 3$ tulips.`
              ]
            }
          ]
        ]
      },

      /* ------------------------------------------------------------------ */
      {
        name: 'Order of Operations',
        tiles: [
          [
            {
              q: m`Evaluate $6 + 4 \times 3$.`, a: m`$18$`, key: '18',
              steps: [
                m`Multiply before you add: $4 \times 3 = 12$`,
                m`Then add: $6 + 12 = 18$`
              ]
            },
            {
              q: m`Evaluate $20 - 12 \div 4$.`, a: m`$17$`, key: '17',
              steps: [
                m`Divide before you subtract: $12 \div 4 = 3$`,
                m`Then subtract: $20 - 3 = 17$`
              ]
            }
          ],
          [
            {
              q: m`Evaluate $(9 - 4) \times 6 + 2$.`, a: m`$32$`, key: '32',
              steps: [
                m`Parentheses first: $9 - 4 = 5$`,
                m`Multiply: $5 \times 6 = 30$`,
                m`Add: $30 + 2 = 32$`
              ]
            },
            {
              q: m`Evaluate $3 \times (7 + 5) - 10$.`, a: m`$26$`, key: '26',
              steps: [
                m`Parentheses first: $7 + 5 = 12$`,
                m`Multiply: $3 \times 12 = 36$`,
                m`Subtract: $36 - 10 = 26$`
              ]
            }
          ],
          [
            {
              q: m`Evaluate $5^2 - 3 \times 4$.`, a: m`$13$`, key: '13',
              steps: [
                m`Exponents first: $5^2 = 25$`,
                m`Multiply: $3 \times 4 = 12$`,
                m`Subtract: $25 - 12 = 13$`
              ]
            },
            {
              q: m`Evaluate $2^3 + 18 \div 6$.`, a: m`$11$`, key: '11',
              steps: [
                m`Exponents first: $2^3 = 8$`,
                m`Divide: $18 \div 6 = 3$`,
                m`Add: $8 + 3 = 11$`
              ]
            }
          ],
          [
            {
              q: m`Evaluate $[(14 - 6) \times 2] + 3^2$.`, a: m`$25$`, key: '25',
              steps: [
                m`Innermost parentheses: $14 - 6 = 8$`,
                m`Finish the brackets: $8 \times 2 = 16$`,
                m`Exponent: $3^2 = 9$`,
                m`Add: $16 + 9 = 25$`
              ]
            },
            {
              q: m`Evaluate $40 \div [(2 + 3) \times 2] + 4^2$.`, a: m`$20$`, key: '20',
              steps: [
                m`Innermost parentheses: $2 + 3 = 5$`,
                m`Finish the brackets: $5 \times 2 = 10$`,
                m`Exponent: $4^2 = 16$`,
                m`Divide, then add: $40 \div 10 = 4$, then $4 + 16 = 20$`
              ]
            }
          ],
          [
            {
              q: m`Evaluate $7.5 + 2^3 \times (10 - 6.5)$.`, a: m`$35.5$`, key: '35.5',
              steps: [
                m`Parentheses first: $10 - 6.5 = 3.5$`,
                m`Exponent: $2^3 = 8$`,
                m`Multiply: $8 \times 3.5 = 28$`,
                m`Add: $7.5 + 28 = 35.5$`
              ]
            },
            {
              q: m`Evaluate $(4.2 + 1.8)^2 \div 4 - 2.5$.`, a: m`$6.5$`, key: '6.5',
              steps: [
                m`Parentheses first: $4.2 + 1.8 = 6$`,
                m`Exponent: $6^2 = 36$`,
                m`Divide: $36 \div 4 = 9$`,
                m`Subtract: $9 - 2.5 = 6.5$`
              ]
            }
          ]
        ]
      },

      /* ------------------------------------------------------------------ */
      {
        name: 'Writing Expressions',
        tiles: [
          [
            {
              q: m`Write an algebraic expression: **8 more than a number $n$**`, a: m`$n + 8$`, key: 'n + 8',
              steps: [
                m`“More than” means add.`,
                m`Start with the number $n$ and add 8: $n + 8$`,
                m`Addition can go in either order, so $8 + n$ is also correct.`
              ]
            },
            {
              q: m`Write an algebraic expression: **a number $k$ decreased by 6**`, a: m`$k - 6$`, key: 'k - 6',
              steps: [
                m`“Decreased by” means subtract.`,
                m`Start with the number $k$ and take away 6: $k - 6$`,
                m`Order matters when you subtract: $6 - k$ is not the same.`
              ]
            }
          ],
          [
            {
              q: m`Write an algebraic expression: **the product of 4 and a number $x$, increased by 9**`, a: m`$4x + 9$`, key: '4x + 9',
              steps: [
                m`“The product of 4 and $x$” means multiply: $4x$`,
                m`“Increased by 9” means add 9.`,
                m`$4x + 9$`
              ]
            },
            {
              q: m`Write an algebraic expression: **7 less than twice a number $y$**`, a: m`$2y - 7$`, key: '2y - 7',
              steps: [
                m`“Twice a number $y$” means $2y$.`,
                m`“7 less than” means subtract 7 **from** $2y$.`,
                m`$2y - 7$ (not $7 - 2y$)`
              ]
            }
          ],
          [
            {
              q: m`How many terms does this expression have? $$6a + \frac{b}{2} - 4$$`, a: m`$3$ terms`, key: '3',
              steps: [
                m`Terms are the parts separated by $+$ and $-$ signs.`,
                m`The terms are $6a$, $\;\frac{b}{2}$, and $4$.`,
                m`Count them: 3 terms.`
              ]
            },
            {
              q: m`What is the coefficient of $y$ in this expression? $$9x + 5y - 2$$`, a: m`$5$`, key: '5',
              steps: [
                m`A coefficient is the number multiplied by a variable.`,
                m`Find the term with $y$: it is $5y$.`,
                m`The number multiplied by $y$ is 5.`
              ]
            }
          ],
          [
            {
              q: m`Movie tickets cost \$9 each, plus a one-time \$3 service fee. Write an expression for the total cost of $t$ tickets.`, a: m`$9t + 3$`, key: '9t + 3',
              steps: [
                m`Each ticket costs \$9, so $t$ tickets cost $9t$.`,
                m`The \$3 fee is paid only once, so add 3.`,
                m`$9t + 3$`
              ]
            },
            {
              q: m`A gym charges a \$20 sign-up fee plus \$15 per month. Write an expression for the total cost after $m$ months.`, a: m`$15m + 20$`, key: '15m + 20',
              steps: [
                m`Each month costs \$15, so $m$ months cost $15m$.`,
                m`The \$20 sign-up fee is paid only once, so add 20.`,
                m`$15m + 20$`
              ]
            }
          ],
          [
            {
              q: m`Pencils cost \$0.50 each and notebooks cost \$2 each. Write an expression for the cost of $p$ pencils and $n$ notebooks.`, a: m`$0.50p + 2n$`, key: '0.50p + 2n',
              steps: [
                m`$p$ pencils at \$0.50 each cost $0.50p$.`,
                m`$n$ notebooks at \$2 each cost $2n$.`,
                m`Add the two costs: $0.50p + 2n$`
              ]
            },
            {
              q: m`Leo sells cookies for \$3 each and brownies for \$4 each. Write an expression for the money he makes selling $c$ cookies and $b$ brownies.`, a: m`$3c + 4b$`, key: '3c + 4b',
              steps: [
                m`$c$ cookies at \$3 each bring in $3c$.`,
                m`$b$ brownies at \$4 each bring in $4b$.`,
                m`Add the two amounts: $3c + 4b$`
              ]
            }
          ]
        ]
      },

      /* ------------------------------------------------------------------ */
      {
        name: 'Evaluating Expressions',
        tiles: [
          [
            {
              q: m`Evaluate $5x$ for $x = 7$.`, a: m`$35$`, key: '35',
              steps: [
                m`Replace $x$ with 7: $5(7)$`,
                m`Multiply: $5 \times 7 = 35$`
              ]
            },
            {
              q: m`Evaluate $n + 14$ for $n = 9$.`, a: m`$23$`, key: '23',
              steps: [
                m`Replace $n$ with 9: $9 + 14$`,
                m`Add: $9 + 14 = 23$`
              ]
            }
          ],
          [
            {
              q: m`Evaluate $3a + 4$ for $a = 6$.`, a: m`$22$`, key: '22',
              steps: [
                m`Replace $a$ with 6: $3(6) + 4$`,
                m`Multiply first: $3 \times 6 = 18$`,
                m`Add: $18 + 4 = 22$`
              ]
            },
            {
              q: m`Evaluate $50 - 4k$ for $k = 8$.`, a: m`$18$`, key: '18',
              steps: [
                m`Replace $k$ with 8: $50 - 4(8)$`,
                m`Multiply first: $4 \times 8 = 32$`,
                m`Subtract: $50 - 32 = 18$`
              ]
            }
          ],
          [
            {
              q: m`Evaluate $x^2 + 5$ for $x = 6$.`, a: m`$41$`, key: '41',
              steps: [
                m`Replace $x$ with 6: $6^2 + 5$`,
                m`Exponent first: $6^2 = 36$`,
                m`Add: $36 + 5 = 41$`
              ]
            },
            {
              q: m`Evaluate $2y^2$ for $y = 5$.`, a: m`$50$`, key: '50',
              steps: [
                m`Replace $y$ with 5: $2(5)^2$`,
                m`Exponent first: $5^2 = 25$. The exponent belongs only to $y$, not to the 2.`,
                m`Multiply: $2 \times 25 = 50$`
              ]
            }
          ],
          [
            {
              q: m`Evaluate $2.5m + 4$ for $m = 6$.`, a: m`$19$`, key: '19',
              steps: [
                m`Replace $m$ with 6: $2.5(6) + 4$`,
                m`Multiply first: $2.5 \times 6 = 15$`,
                m`Add: $15 + 4 = 19$`
              ]
            },
            {
              q: m`Evaluate $10 - 1.5t$ for $t = 4$.`, a: m`$4$`, key: '4',
              steps: [
                m`Replace $t$ with 4: $10 - 1.5(4)$`,
                m`Multiply first: $1.5 \times 4 = 6$`,
                m`Subtract: $10 - 6 = 4$`
              ]
            }
          ],
          [
            {
              q: m`Evaluate $3a + 2b$ for $a = 1.5$ and $b = 4.2$.`, a: m`$12.9$`, key: '12.9',
              steps: [
                m`Replace each variable: $3(1.5) + 2(4.2)$`,
                m`Multiply: $3 \times 1.5 = 4.5$ and $2 \times 4.2 = 8.4$`,
                m`Add: $4.5 + 8.4 = 12.9$`
              ]
            },
            {
              q: m`Evaluate $a^2 + b \div 2$ for $a = 4$ and $b = 7$.`, a: m`$19.5$`, key: '19.5',
              steps: [
                m`Replace each variable: $4^2 + 7 \div 2$`,
                m`Exponent first: $4^2 = 16$`,
                m`Divide: $7 \div 2 = 3.5$`,
                m`Add: $16 + 3.5 = 19.5$`
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
              q: m`Simplify $5x + 3x$.`, a: m`$8x$`, key: '8x',
              steps: [
                m`$5x$ and $3x$ are like terms: they have the same variable.`,
                m`Add the coefficients: $5 + 3 = 8$`,
                m`$8x$`
              ]
            },
            {
              q: m`Simplify $9y - 4y$.`, a: m`$5y$`, key: '5y',
              steps: [
                m`$9y$ and $4y$ are like terms: they have the same variable.`,
                m`Subtract the coefficients: $9 - 4 = 5$`,
                m`$5y$`
              ]
            }
          ],
          [
            {
              q: m`Use the Distributive Property to rewrite $3(x + 5)$ without parentheses.`, a: m`$3x + 15$`, key: '3x + 15',
              steps: [
                m`Multiply 3 by **each** term inside the parentheses.`,
                m`$3(x) + 3(5)$`,
                m`$3x + 15$`
              ]
            },
            {
              q: m`Use the Distributive Property to rewrite $6(y - 2)$ without parentheses.`, a: m`$6y - 12$`, key: '6y - 12',
              steps: [
                m`Multiply 6 by **each** term inside the parentheses. Keep the minus sign.`,
                m`$6(y) - 6(2)$`,
                m`$6y - 12$`
              ]
            }
          ],
          [
            {
              q: m`Simplify $4x + 7 + 2x - 3$.`, a: m`$6x + 4$`, key: '6x + 4',
              steps: [
                m`Group the like terms: $(4x + 2x) + (7 - 3)$`,
                m`Combine the $x$ terms: $4x + 2x = 6x$`,
                m`Combine the numbers: $7 - 3 = 4$`,
                m`$6x + 4$`
              ]
            },
            {
              q: m`Simplify $8 + 5n - 2 + n$.`, a: m`$6n + 6$`, key: '6n + 6',
              steps: [
                m`Group the like terms: $(5n + n) + (8 - 2)$`,
                m`Remember $n$ means $1n$: $5n + 1n = 6n$`,
                m`Combine the numbers: $8 - 2 = 6$`,
                m`$6n + 6$`
              ]
            }
          ],
          [
            {
              q: m`Use the GCF to write $12x + 18$ as a product.`, a: m`$6(2x + 3)$`, key: '6(2x + 3)',
              steps: [
                m`Find the GCF of 12 and 18. Factors of 12: 1, 2, 3, 4, **6**, 12. Factors of 18: 1, 2, 3, **6**, 9, 18. The GCF is 6.`,
                m`Write each term with 6 as a factor: $12x = 6(2x)$ and $18 = 6(3)$`,
                m`Pull out the 6: $6(2x + 3)$`,
                m`Check by distributing: $6(2x) + 6(3) = 12x + 18$ ✓`
              ]
            },
            {
              q: m`Use the GCF to write $20y - 15$ as a product.`, a: m`$5(4y - 3)$`, key: '5(4y - 3)',
              steps: [
                m`Find the GCF of 20 and 15. Factors of 20: 1, 2, 4, **5**, 10, 20. Factors of 15: 1, 3, **5**, 15. The GCF is 5.`,
                m`Write each term with 5 as a factor: $20y = 5(4y)$ and $15 = 5(3)$`,
                m`Pull out the 5: $5(4y - 3)$`,
                m`Check by distributing: $5(4y) - 5(3) = 20y - 15$ ✓`
              ]
            }
          ],
          [
            {
              q: m`Simplify $2(3x + 4) + 5x$.`, a: m`$11x + 8$`, key: '11x + 8',
              steps: [
                m`Distribute the 2: $2(3x) + 2(4) = 6x + 8$`,
                m`Now the expression is $6x + 8 + 5x$`,
                m`Combine like terms: $6x + 5x = 11x$`,
                m`$11x + 8$`
              ]
            },
            {
              q: m`Simplify $4(2n + 1) - 3n + 6$.`, a: m`$5n + 10$`, key: '5n + 10',
              steps: [
                m`Distribute the 4: $4(2n) + 4(1) = 8n + 4$`,
                m`Now the expression is $8n + 4 - 3n + 6$`,
                m`Combine like terms: $8n - 3n = 5n$ and $4 + 6 = 10$`,
                m`$5n + 10$`
              ]
            }
          ]
        ]
      }
    ],

    finals: [
      {
        category: 'Writing and Evaluating Expressions',
        q: m`A bike shop rents bikes for \$8 per hour, plus a one-time \$5 helmet fee. Write an expression for the cost of renting a bike for $h$ hours. Then find the cost for 4.5 hours.`,
        a: m`$8h + 5$, and the cost is \$41`,
        key: '41',
        steps: [
          m`\$8 for each of $h$ hours is $8h$. The helmet fee is paid once, so add 5: $8h + 5$`,
          m`Replace $h$ with 4.5: $8(4.5) + 5$`,
          m`Multiply: $8 \times 4.5 = 36$`,
          m`Add: $36 + 5 = 41$. The cost is \$41.`
        ]
      },
      {
        category: 'GCF and LCM',
        q: m`Two lighthouses flash at the same moment. One flashes every 12 seconds and the other flashes every 18 seconds. How many seconds will pass before they flash at the same moment again?`,
        a: m`$36$ seconds`,
        key: '36',
        steps: [
          m`They flash together at a time that is a multiple of 12 **and** of 18. The first one is the LCM.`,
          m`Multiples of 12: 12, 24, **36**, 48 …`,
          m`Multiples of 18: 18, **36**, 54 …`,
          m`The LCM is 36, so they flash together again after 36 seconds.`
        ]
      },
      {
        category: 'Order of Operations',
        q: m`Evaluate. $$3^3 - [2 \times (10 - 4.5)] + 6 \div 0.5$$`,
        a: m`$28$`,
        key: '28',
        steps: [
          m`Innermost parentheses: $10 - 4.5 = 5.5$`,
          m`Finish the brackets: $2 \times 5.5 = 11$`,
          m`Exponent: $3^3 = 27$`,
          m`Divide: $6 \div 0.5 = 12$`,
          m`Add and subtract from left to right: $27 - 11 + 12 = 28$`
        ]
      }
    ]
  });
})();
