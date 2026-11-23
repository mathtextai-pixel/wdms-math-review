/*
 * Grade 7 · Topic 1 Jeopardy — Integers and Rational Numbers
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
    id: 'g7-topic1',
    grade: 7,
    title: 'Topic 1 Jeopardy',
    subtitle: 'Integers and Rational Numbers',
    values: [100, 200, 300, 400, 500],

    categories: [
      /* ------------------------------------------------------------------ */
      {
        name: 'Opposites and Absolute Value',
        tiles: [
          [
            {
              q: m`What is the opposite of $-23$?`, a: m`$23$`, key: '23',
              steps: [
                m`Opposites are the same distance from 0, on opposite sides.`,
                m`$-23$ is 23 units left of 0, so its opposite is 23 units right of 0.`,
                m`Check: $-23 + 23 = 0$`
              ]
            },
            {
              q: m`What is $|-31|$?`, a: m`$31$`, key: '31',
              steps: [
                m`Absolute value is the distance from 0.`,
                m`$-31$ is 31 units from 0.`,
                m`Distance is never negative, so $|-31| = 31$.`
              ]
            }
          ],
          [
            {
              q: m`A hiker climbs 350 feet up a hill. What integer represents her trip straight back down to where she started?`, a: m`$-350$`, key: '-350',
              steps: [
                m`Going up 350 feet is $+350$.`,
                m`Coming back down the same distance is the opposite: $-350$.`,
                m`Check: $350 + (-350) = 0$, so she is back where she started.`
              ]
            },
            {
              q: m`A video game player loses 75 points. What integer must she add to get back to her starting score?`, a: m`$75$`, key: '75',
              steps: [
                m`Losing 75 points is $-75$.`,
                m`To get back to the start, add the opposite: $+75$.`,
                m`Check: $-75 + 75 = 0$`
              ]
            }
          ],
          [
            {
              q: m`Evaluate $|-8| + |5|$.`, a: m`$13$`, key: '13',
              steps: [
                m`$|-8| = 8$ and $|5| = 5$`,
                m`Add: $8 + 5 = 13$`
              ]
            },
            {
              q: m`Evaluate $|-12| - |-4|$.`, a: m`$8$`, key: '8',
              steps: [
                m`$|-12| = 12$ and $|-4| = 4$`,
                m`Subtract: $12 - 4 = 8$`
              ]
            }
          ],
          [
            {
              q: m`What is the additive inverse of $-4.75$?`, a: m`$4.75$`, key: '4.75',
              steps: [
                m`The additive inverse is the number you add to get 0.`,
                m`$-4.75 + 4.75 = 0$`,
                m`So the additive inverse is $4.75$.`
              ]
            },
            {
              q: m`What is the additive inverse of $2\frac{3}{8}$?`, a: m`$-2\frac{3}{8}$`, key: '-19/8',
              steps: [
                m`The additive inverse is the number you add to get 0.`,
                m`$2\frac{3}{8} + \left(-2\frac{3}{8}\right) = 0$`,
                m`So the additive inverse is $-2\frac{3}{8}$.`
              ]
            }
          ],
          [
            {
              q: m`$x$ and $y$ are additive inverses. $|x| = 27$ and $x < 0$. What is $y$?`, a: m`$27$`, key: '27',
              steps: [
                m`$|x| = 27$ and $x$ is negative, so $x = -27$.`,
                m`Additive inverses add to 0: $-27 + y = 0$`,
                m`So $y = 27$.`
              ]
            },
            {
              q: m`Evaluate $-|-15| + |9 - 20|$.`, a: m`$-4$`, key: '-4',
              steps: [
                m`$|-15| = 15$, so $-|-15| = -15$. The minus sign outside stays.`,
                m`$9 - 20 = -11$, and $|-11| = 11$`,
                m`Add: $-15 + 11 = -4$`
              ]
            }
          ]
        ]
      },

      /* ------------------------------------------------------------------ */
      {
        name: 'Fractions as Decimals',
        tiles: [
          [
            {
              q: m`Write $\frac{3}{4}$ as a decimal.`, a: m`$0.75$`, key: '0.75',
              steps: [
                m`Divide the numerator by the denominator: $3 \div 4$.`,
                m`$3 \div 4 = 0.75$`,
                m`The division ends, so the decimal terminates.`
              ]
            },
            {
              q: m`Write $\frac{2}{5}$ as a decimal.`, a: m`$0.4$`, key: '0.4',
              steps: [
                m`Divide the numerator by the denominator: $2 \div 5$.`,
                m`$2 \div 5 = 0.4$`,
                m`The division ends, so the decimal terminates.`
              ]
            }
          ],
          [
            {
              q: m`Write $\frac{5}{9}$ as a decimal.`, a: m`$0.\overline{5}$`, key: '5/9',
              steps: [
                m`Divide: $5 \div 9 = 0.5555\ldots$`,
                m`The digit 5 repeats forever.`,
                m`Put a bar over the repeating digit: $0.\overline{5}$`
              ]
            },
            {
              q: m`Write $\frac{7}{8}$ as a decimal.`, a: m`$0.875$`, key: '0.875',
              steps: [
                m`Divide: $7 \div 8$`,
                m`$7 \div 8 = 0.875$`,
                m`The division ends, so the decimal terminates.`
              ]
            }
          ],
          [
            {
              q: m`Write $4\frac{3}{20}$ as a decimal.`, a: m`$4.15$`, key: '4.15',
              steps: [
                m`Keep the whole number, 4. Change only $\frac{3}{20}$.`,
                m`$3 \div 20 = 0.15$`,
                m`$4 + 0.15 = 4.15$`
              ]
            },
            {
              q: m`Write $-\frac{11}{25}$ as a decimal.`, a: m`$-0.44$`, key: '-0.44',
              steps: [
                m`Divide: $11 \div 25 = 0.44$`,
                m`The fraction is negative, so the decimal is negative too.`,
                m`$-\frac{11}{25} = -0.44$`
              ]
            }
          ],
          [
            {
              q: m`Write $\frac{7}{12}$ as a decimal.`, a: m`$0.58\overline{3}$`, key: '7/12',
              steps: [
                m`Divide: $7 \div 12 = 0.58333\ldots$`,
                m`The 5 and the 8 do not repeat. Only the 3 repeats.`,
                m`Put the bar over the 3 only: $0.58\overline{3}$`
              ]
            },
            {
              q: m`Write $\frac{5}{11}$ as a decimal.`, a: m`$0.\overline{45}$`, key: '5/11',
              steps: [
                m`Divide: $5 \div 11 = 0.454545\ldots$`,
                m`The two digits **45** repeat as a group.`,
                m`Put the bar over both digits: $0.\overline{45}$`
              ]
            }
          ],
          [
            {
              q: m`Write $\frac{2}{7}$ as a decimal. Which digits repeat?`, a: m`$0.\overline{285714}$`, key: '2/7',
              steps: [
                m`Divide: $2 \div 7 = 0.285714285714\ldots$`,
                m`After six digits, the remainder repeats, so the digits start over.`,
                m`The group **285714** repeats: $0.\overline{285714}$`
              ]
            },
            {
              q: m`Write $\frac{13}{40}$ as a decimal. Does it terminate or repeat?`, a: m`$0.325$, terminates`, key: '0.325',
              steps: [
                m`Divide: $13 \div 40$`,
                m`$13 \div 40 = 0.325$`,
                m`The division ends with no remainder, so the decimal terminates.`
              ]
            }
          ]
        ]
      },

      /* ------------------------------------------------------------------ */
      {
        name: 'Add and Subtract',
        tiles: [
          [
            {
              q: m`Find $-8 + 13$.`, a: m`$5$`, key: '5',
              steps: [
                m`The signs are different, so subtract the absolute values: $13 - 8 = 5$`,
                m`$13$ has the greater absolute value, so the sum is positive.`,
                m`$-8 + 13 = 5$`
              ]
            },
            {
              q: m`Find $-6 + (-9)$.`, a: m`$-15$`, key: '-15',
              steps: [
                m`The signs are the same, so add the absolute values: $6 + 9 = 15$`,
                m`Both numbers are negative, so the sum is negative.`,
                m`$-6 + (-9) = -15$`
              ]
            }
          ],
          [
            {
              q: m`Find $7 - 15$.`, a: m`$-8$`, key: '-8',
              steps: [
                m`Subtracting 15 is the same as adding $-15$: $7 + (-15)$`,
                m`Different signs: $15 - 7 = 8$`,
                m`$-15$ has the greater absolute value, so the answer is $-8$.`
              ]
            },
            {
              q: m`Find $-4 - (-11)$.`, a: m`$7$`, key: '7',
              steps: [
                m`Subtracting $-11$ is the same as adding $11$: $-4 + 11$`,
                m`Different signs: $11 - 4 = 7$`,
                m`$11$ has the greater absolute value, so the answer is $7$.`
              ]
            }
          ],
          [
            {
              q: m`Find $-3.6 + 1.9$.`, a: m`$-1.7$`, key: '-1.7',
              steps: [
                m`Different signs: subtract the absolute values. $3.6 - 1.9 = 1.7$`,
                m`$-3.6$ has the greater absolute value, so the sum is negative.`,
                m`$-3.6 + 1.9 = -1.7$`
              ]
            },
            {
              q: m`Find $2.5 - 6.8$.`, a: m`$-4.3$`, key: '-4.3',
              steps: [
                m`Rewrite as addition: $2.5 + (-6.8)$`,
                m`Different signs: $6.8 - 2.5 = 4.3$`,
                m`$-6.8$ has the greater absolute value, so the answer is $-4.3$.`
              ]
            }
          ],
          [
            {
              q: m`Find $-\frac{1}{4} - \frac{5}{8}$.`, a: m`$-\frac{7}{8}$`, key: '-7/8',
              steps: [
                m`Use a common denominator: $-\frac{1}{4} = -\frac{2}{8}$`,
                m`Rewrite as addition: $-\frac{2}{8} + \left(-\frac{5}{8}\right)$`,
                m`Same signs: add and keep the negative sign. $-\frac{7}{8}$`
              ]
            },
            {
              q: m`Find $2\frac{1}{3} + \left(-4\frac{1}{2}\right)$.`, a: m`$-2\frac{1}{6}$`, key: '-13/6',
              steps: [
                m`Use a common denominator: $2\frac{2}{6} + \left(-4\frac{3}{6}\right)$`,
                m`Different signs: $4\frac{3}{6} - 2\frac{2}{6} = 2\frac{1}{6}$`,
                m`$-4\frac{1}{2}$ has the greater absolute value, so the answer is $-2\frac{1}{6}$.`
              ]
            }
          ],
          [
            {
              q: m`Find $-12.5 - (-4.25) + 3.75$.`, a: m`$-4.5$`, key: '-4.5',
              steps: [
                m`Subtracting $-4.25$ is adding $4.25$: $-12.5 + 4.25 + 3.75$`,
                m`Add the positives first: $4.25 + 3.75 = 8$`,
                m`$-12.5 + 8 = -4.5$`
              ]
            },
            {
              q: m`Find $-3\frac{1}{4} + 5\frac{1}{2} - \left(-1\frac{3}{4}\right)$.`, a: m`$4$`, key: '4',
              steps: [
                m`Subtracting $-1\frac{3}{4}$ is adding $1\frac{3}{4}$: $-3\frac{1}{4} + 5\frac{1}{2} + 1\frac{3}{4}$`,
                m`Add the positives: $5\frac{1}{2} + 1\frac{3}{4} = 7\frac{1}{4}$`,
                m`$-3\frac{1}{4} + 7\frac{1}{4} = 4$`
              ]
            }
          ]
        ]
      },

      /* ------------------------------------------------------------------ */
      {
        name: 'Multiply',
        tiles: [
          [
            {
              q: m`Find $-7 \times 6$.`, a: m`$-42$`, key: '-42',
              steps: [
                m`$7 \times 6 = 42$`,
                m`The signs are different, so the product is negative.`,
                m`$-7 \times 6 = -42$`
              ]
            },
            {
              q: m`Find $-9 \times (-4)$.`, a: m`$36$`, key: '36',
              steps: [
                m`$9 \times 4 = 36$`,
                m`The signs are the same, so the product is positive.`,
                m`$-9 \times (-4) = 36$`
              ]
            }
          ],
          [
            {
              q: m`Find $-3 \times (-2) \times (-5)$.`, a: m`$-30$`, key: '-30',
              steps: [
                m`Multiply two at a time: $-3 \times (-2) = 6$`,
                m`Then $6 \times (-5) = -30$`,
                m`Shortcut: three negative factors give a negative product.`
              ]
            },
            {
              q: m`Find $4 \times (-5) \times (-2)$.`, a: m`$40$`, key: '40',
              steps: [
                m`Multiply two at a time: $4 \times (-5) = -20$`,
                m`Then $-20 \times (-2) = 40$`,
                m`Shortcut: two negative factors give a positive product.`
              ]
            }
          ],
          [
            {
              q: m`Find $-0.4 \times 2.5$.`, a: m`$-1$`, key: '-1',
              steps: [
                m`$0.4 \times 2.5 = 1$`,
                m`The signs are different, so the product is negative.`,
                m`$-0.4 \times 2.5 = -1$`
              ]
            },
            {
              q: m`Find $-1.2 \times (-0.3)$.`, a: m`$0.36$`, key: '0.36',
              steps: [
                m`$12 \times 3 = 36$. There are two decimal places in all, so $1.2 \times 0.3 = 0.36$.`,
                m`The signs are the same, so the product is positive.`,
                m`$-1.2 \times (-0.3) = 0.36$`
              ]
            }
          ],
          [
            {
              q: m`Find $-\frac{2}{3} \times \frac{9}{10}$.`, a: m`$-\frac{3}{5}$`, key: '-3/5',
              steps: [
                m`Multiply numerators and denominators: $\frac{2 \times 9}{3 \times 10} = \frac{18}{30}$`,
                m`Simplify: $\frac{18}{30} = \frac{3}{5}$`,
                m`The signs are different, so the product is $-\frac{3}{5}$.`
              ]
            },
            {
              q: m`Find $-\frac{3}{4} \times \left(-\frac{8}{9}\right)$.`, a: m`$\frac{2}{3}$`, key: '2/3',
              steps: [
                m`Multiply numerators and denominators: $\frac{3 \times 8}{4 \times 9} = \frac{24}{36}$`,
                m`Simplify: $\frac{24}{36} = \frac{2}{3}$`,
                m`The signs are the same, so the product is positive: $\frac{2}{3}$`
              ]
            }
          ],
          [
            {
              q: m`Find $-1\frac{1}{2} \times 2\frac{2}{3}$.`, a: m`$-4$`, key: '-4',
              steps: [
                m`Write improper fractions: $-\frac{3}{2} \times \frac{8}{3}$`,
                m`Multiply: $\frac{3 \times 8}{2 \times 3} = \frac{24}{6} = 4$`,
                m`The signs are different, so the product is $-4$.`
              ]
            },
            {
              q: m`Find $-2\frac{1}{4} \times \left(-1\frac{1}{3}\right)$.`, a: m`$3$`, key: '3',
              steps: [
                m`Write improper fractions: $-\frac{9}{4} \times \left(-\frac{4}{3}\right)$`,
                m`Multiply: $\frac{9 \times 4}{4 \times 3} = \frac{36}{12} = 3$`,
                m`The signs are the same, so the product is positive: $3$`
              ]
            }
          ]
        ]
      },

      /* ------------------------------------------------------------------ */
      {
        name: 'Divide',
        tiles: [
          [
            {
              q: m`Find $-56 \div 8$.`, a: m`$-7$`, key: '-7',
              steps: [
                m`$56 \div 8 = 7$`,
                m`The signs are different, so the quotient is negative.`,
                m`$-56 \div 8 = -7$`
              ]
            },
            {
              q: m`Find $-45 \div (-9)$.`, a: m`$5$`, key: '5',
              steps: [
                m`$45 \div 9 = 5$`,
                m`The signs are the same, so the quotient is positive.`,
                m`$-45 \div (-9) = 5$`
              ]
            }
          ],
          [
            {
              q: m`Find $72 \div (-6)$.`, a: m`$-12$`, key: '-12',
              steps: [
                m`$72 \div 6 = 12$`,
                m`The signs are different, so the quotient is negative.`,
                m`$72 \div (-6) = -12$`
              ]
            },
            {
              q: m`Find $-100 \div (-4)$.`, a: m`$25$`, key: '25',
              steps: [
                m`$100 \div 4 = 25$`,
                m`The signs are the same, so the quotient is positive.`,
                m`$-100 \div (-4) = 25$`
              ]
            }
          ],
          [
            {
              q: m`Find $-4.8 \div 1.2$.`, a: m`$-4$`, key: '-4',
              steps: [
                m`$4.8 \div 1.2$ is the same as $48 \div 12 = 4$`,
                m`The signs are different, so the quotient is negative.`,
                m`$-4.8 \div 1.2 = -4$`
              ]
            },
            {
              q: m`Find $-2.7 \div (-0.9)$.`, a: m`$3$`, key: '3',
              steps: [
                m`$2.7 \div 0.9$ is the same as $27 \div 9 = 3$`,
                m`The signs are the same, so the quotient is positive.`,
                m`$-2.7 \div (-0.9) = 3$`
              ]
            }
          ],
          [
            {
              q: m`Find $-\frac{3}{4} \div \frac{3}{8}$.`, a: m`$-2$`, key: '-2',
              steps: [
                m`Multiply by the reciprocal: $-\frac{3}{4} \times \frac{8}{3}$`,
                m`$\frac{3 \times 8}{4 \times 3} = \frac{24}{12} = 2$`,
                m`The signs are different, so the quotient is $-2$.`
              ]
            },
            {
              q: m`Find $\frac{5}{6} \div \left(-\frac{2}{3}\right)$.`, a: m`$-1\frac{1}{4}$`, key: '-5/4',
              steps: [
                m`Multiply by the reciprocal: $\frac{5}{6} \times \left(-\frac{3}{2}\right)$`,
                m`$\frac{5 \times 3}{6 \times 2} = \frac{15}{12} = \frac{5}{4}$`,
                m`The signs are different, so the quotient is $-\frac{5}{4} = -1\frac{1}{4}$.`
              ]
            }
          ],
          [
            {
              q: m`Find $-2\frac{1}{2} \div \left(-\frac{5}{6}\right)$.`, a: m`$3$`, key: '3',
              steps: [
                m`Write an improper fraction: $-\frac{5}{2} \div \left(-\frac{5}{6}\right)$`,
                m`Multiply by the reciprocal: $-\frac{5}{2} \times \left(-\frac{6}{5}\right) = \frac{30}{10} = 3$`,
                m`The signs are the same, so the quotient is positive: $3$`
              ]
            },
            {
              q: m`Simplify the complex fraction. $$\frac{-\frac{3}{5}}{1\frac{1}{5}}$$`, a: m`$-\frac{1}{2}$`, key: '-1/2',
              steps: [
                m`A complex fraction means divide: $-\frac{3}{5} \div 1\frac{1}{5} = -\frac{3}{5} \div \frac{6}{5}$`,
                m`Multiply by the reciprocal: $-\frac{3}{5} \times \frac{5}{6} = -\frac{15}{30}$`,
                m`Simplify: $-\frac{15}{30} = -\frac{1}{2}$`
              ]
            }
          ]
        ]
      },

      /* ------------------------------------------------------------------ */
      {
        name: 'Real-World Problems',
        tiles: [
          [
            {
              q: m`The temperature is 5°F. It drops 12°F overnight. What is the new temperature?`, a: m`$-7$°F`, key: '-7',
              steps: [
                m`A drop is a negative change: $5 + (-12)$`,
                m`Different signs: $12 - 5 = 7$`,
                m`$-12$ has the greater absolute value, so the temperature is $-7$°F.`
              ]
            },
            {
              q: m`A diver is 20 feet below the surface. She rises 8 feet. What number represents her new location?`, a: m`$-12$ feet`, key: '-12',
              steps: [
                m`Below the surface is negative: start at $-20$.`,
                m`Rising is a positive change: $-20 + 8$`,
                m`$-20 + 8 = -12$, or 12 feet below the surface.`
              ]
            }
          ],
          [
            {
              q: m`A stock loses \$3 in value each day for 7 days. What is the total change in its value?`, a: m`$-\$21$`, key: '-21',
              steps: [
                m`Each day is a change of $-3$.`,
                m`7 days: $7 \times (-3) = -21$`,
                m`The stock lost \$21 in value.`
              ]
            },
            {
              q: m`A football team loses 4 yards on each of 3 plays. What is the total change in yards?`, a: m`$-12$ yards`, key: '-12',
              steps: [
                m`Each play is a change of $-4$.`,
                m`3 plays: $3 \times (-4) = -12$`,
                m`The team lost 12 yards in all.`
              ]
            }
          ],
          [
            {
              q: m`A mountain peak is 1,250 meters above sea level. A point in an ocean trench is 430 meters below sea level. What is the distance between them?`, a: m`$1{,}680$ meters`, key: '1680',
              steps: [
                m`The locations are $1{,}250$ and $-430$.`,
                m`Distance: $|1{,}250 - (-430)| = 1{,}250 + 430$`,
                m`$= 1{,}680$ meters`
              ]
            },
            {
              q: m`The lowest point in a valley is 282 feet below sea level. A nearby peak is 11,049 feet above sea level. What is the difference in elevation?`, a: m`$11{,}331$ feet`, key: '11331',
              steps: [
                m`The elevations are $11{,}049$ and $-282$.`,
                m`$11{,}049 - (-282) = 11{,}049 + 282$`,
                m`$= 11{,}331$ feet`
              ]
            }
          ],
          [
            {
              q: m`Mia has \$120 in her account. She pays \$14.50 each week for 4 weeks. How much is left in her account?`, a: m`$\$62$`, key: '62',
              steps: [
                m`Each payment is $-14.50$. Four of them: $4 \times (-14.50) = -58$`,
                m`$120 + (-58) = 62$`,
                m`She has \$62 left.`
              ]
            },
            {
              q: m`A pool's water level drops $\frac{3}{4}$ inch each day. What is the change in the water level after 6 days?`, a: m`$-4\frac{1}{2}$ inches`, key: '-9/2',
              steps: [
                m`Each day is a change of $-\frac{3}{4}$.`,
                m`6 days: $6 \times \left(-\frac{3}{4}\right) = -\frac{18}{4}$`,
                m`Simplify: $-\frac{18}{4} = -4\frac{1}{2}$ inches`
              ]
            }
          ],
          [
            {
              q: m`In a trivia game, each correct answer earns 2.5 points and each wrong answer is worth $-1.5$ points. A team gets 14 correct and 8 wrong. What is its score?`, a: m`$23$ points`, key: '23',
              steps: [
                m`Correct answers: $14 \times 2.5 = 35$`,
                m`Wrong answers: $8 \times (-1.5) = -12$`,
                m`Score: $35 + (-12) = 23$ points`
              ]
            },
            {
              q: m`At 6 P.M. the temperature is 4.5°F. It drops 1.25°F each hour for 6 hours. What is the temperature at midnight?`, a: m`$-3$°F`, key: '-3',
              steps: [
                m`Total change: $6 \times (-1.25) = -7.5$`,
                m`New temperature: $4.5 + (-7.5)$`,
                m`$= -3$°F`
              ]
            }
          ]
        ]
      }
    ],

    finals: [
      {
        category: 'Real-World Problems',
        q: m`A hot-air balloon is at 2,400 feet. It descends 150 feet per minute for 6 minutes, then rises 275 feet. What is its elevation now?`,
        a: m`$1{,}775$ feet`,
        key: '1775',
        steps: [
          m`Change while descending: $6 \times (-150) = -900$`,
          m`After descending: $2{,}400 + (-900) = 1{,}500$`,
          m`After rising: $1{,}500 + 275 = 1{,}775$ feet`
        ]
      },
      {
        category: 'Divide Rational Numbers',
        q: m`A tank holds 37.5 gallons of water. It leaks at a steady rate of $2\frac{1}{2}$ gallons per hour. How many hours until the tank is empty?`,
        a: m`$15$ hours`,
        key: '15',
        steps: [
          m`The tank must lose all $37.5$ gallons, a change of $-37.5$.`,
          m`Each hour the change is $-2\frac{1}{2} = -2.5$.`,
          m`Hours: $-37.5 \div (-2.5) = 15$`,
          m`Check: $15 \times 2.5 = 37.5$ ✓`
        ]
      },
      {
        category: 'Rational Number Operations',
        q: m`Evaluate. $$\left(-2\frac{1}{4} + 0.75\right) \div (-0.3)$$`,
        a: m`$5$`,
        key: '5',
        steps: [
          m`Parentheses first. Write $-2\frac{1}{4}$ as $-2.25$: $-2.25 + 0.75 = -1.5$`,
          m`Divide: $-1.5 \div (-0.3)$`,
          m`$1.5 \div 0.3 = 5$, and the signs are the same, so the answer is $5$.`
        ]
      }
    ]
  });
})();
