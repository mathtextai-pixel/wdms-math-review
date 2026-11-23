/*
 * Grade 7 · Topic 1 Test Review — Integers and Rational Numbers
 *
 * The sections follow the question types on the Topic 1 test, in test order.
 * The problems come from Lessons 1-1 to 1-10 (not from the test itself).
 *
 * Text rules:  $...$ is math,  \$ is a dollar sign,  **bold**,  a blank line starts a new paragraph.
 */
(function () {
  var m = String.raw;

  WDMS.registerReview({
    id: 'g7-topic1',
    grade: 7,
    title: 'Topic 1 Test Review',
    subtitle: 'Integers and Rational Numbers',

    sections: [
      { id: 's1', title: 'Opposites and additive inverses', lesson: '1-1', blurb: 'Opposite quantities combine to make 0.' },
      { id: 's2', title: 'Write fractions as decimals', lesson: '1-2', blurb: 'Divide to find the decimal form.' },
      { id: 's3', title: 'Rates of change', lesson: '1-9 and 1-10', blurb: 'Find the change for one unit of time.' },
      { id: 's4', title: 'The sign of a sum', lesson: '1-3', blurb: 'Decide if a sum is positive or negative.' },
      { id: 's5', title: 'Money over time', lesson: '1-10', blurb: 'Multi-step problems with deposits and charges.' },
      { id: 's6', title: 'Track the changes', lesson: '1-3 to 1-5', blurb: 'Add and subtract to find where you end up.' },
      { id: 's7', title: 'Distance with absolute value', lesson: '1-4 and 1-5', blurb: 'Which expressions give the distance?' },
      { id: 's8', title: 'Divide integers', lesson: '1-8', blurb: 'Share a loss or find an average change.' },
      { id: 's9', title: 'Divide rational numbers', lesson: '1-9', blurb: 'How long, or how many times?' },
      { id: 's10', title: 'Multiply rational numbers', lesson: '1-6 and 1-7', blurb: 'A rate times an amount of time.' },
      { id: 's11', title: 'Above and below zero', lesson: '1-4 and 1-5', blurb: 'Distance between a positive and a negative.' },
      { id: 's12', title: 'Terminating and repeating decimals', lesson: '1-2', blurb: 'Which decimals are rational?' }
    ],

    problems: [
      /* ------------------------------------------------------------------ *
       * 1 · Opposites and additive inverses (Lesson 1-1)
       * ------------------------------------------------------------------ */
      {
        id: 's1-a', section: 's1', type: 'parts',
        prompt: m`Marcus dives from the surface of the ocean to a reef 18 meters below sea level.`,
        parts: [
          { label: 'A', prompt: m`What integer represents Marcus's location relative to the surface?`, type: 'number', answer: '-18' },
          { label: 'B', prompt: m`How many meters does Marcus have to go up to return to the surface?`, type: 'number', answer: '18', unit: 'meters' }
        ],
        hints: [
          m`Sea level is 0. Below sea level is negative.`,
          m`To get back to 0 from $-18$, he needs the opposite of $-18$.`
        ],
        steps: [
          m`18 meters below sea level is $-18$.`,
          m`The opposite of $-18$ is $18$, because $-18 + 18 = 0$.`,
          m`**Answer:** A) $-18$ $\;$ B) 18 meters`
        ]
      },
      {
        id: 's1-b', section: 's1', type: 'multi',
        prompt: m`Which situations can be represented by an integer that, when combined with $-9$, makes 0? Select **all** that apply.`,
        options: ['You walk down 9 flights of stairs.', 'You climb up 9 flights of stairs.', m`The temperature drops 9°F.`, m`You spend \$9 on a book.`, m`You earn \$9 from your job.`],
        correct: [1, 4],
        hints: [
          m`An integer that combines with $-9$ to make 0 is its opposite: $+9$.`,
          m`Look for situations that go **up** or **gain** 9.`
        ],
        steps: [
          m`$-9 + 9 = 0$, so you need situations that represent $+9$.`,
          m`Walking down, a temperature drop, and spending money are all negative.`,
          m`Climbing up 9 flights is $+9$. Earning \$9 is $+9$.`,
          m`**Answer:** climb up 9 flights, and earn \$9`
        ]
      },
      {
        id: 's1-c', section: 's1', type: 'parts',
        prompt: m`Shaniqua has \$45 in her wallet. She spends \$4 on snacks and \$8 on a movie ticket.`,
        parts: [
          { label: 'A', prompt: m`What integer represents the change in the amount of money in her wallet?`, type: 'number', answer: '-12' },
          { label: 'B', prompt: m`How much money does she have left?`, type: 'number', answer: '33', prefix: '$' }
        ],
        hints: [
          m`Spending money is a negative change. Add the two changes: $-4 + (-8)$.`,
          m`Then add the change to the \$45 she started with.`
        ],
        steps: [
          m`Change: $-4 + (-8) = -12$`,
          m`Money left: $45 + (-12) = 33$`,
          m`**Answer:** A) $-12$ $\;$ B) \$33`
        ]
      },

      /* ------------------------------------------------------------------ *
       * 2 · Write fractions as decimals (Lesson 1-2)
       * ------------------------------------------------------------------ */
      {
        id: 's2-a', section: 's2', type: 'mc',
        prompt: m`What is the decimal equivalent of $\dfrac{3}{11}$?`,
        options: [m`$0.27$`, m`$0.\overline{27}$`, m`$0.2\overline{7}$`, m`$0.\overline{3}$`],
        correct: 1,
        hints: [
          m`Divide the numerator by the denominator: $3 \div 11$.`,
          m`$3 \div 11 = 0.272727\ldots$ Which digits repeat?`
        ],
        steps: [
          m`Divide: $3 \div 11 = 0.272727\ldots$`,
          m`The two digits **27** repeat over and over.`,
          m`Put a bar over both repeating digits: $0.\overline{27}$`,
          m`**Answer:** $0.\overline{27}$`
        ]
      },
      {
        id: 's2-b', section: 's2', type: 'number',
        prompt: m`The directions on a seed packet say to plant the seeds $1\frac{7}{8}$ inches apart. What is the decimal equivalent of this mixed number?`,
        answer: '1.875', unit: 'inches',
        hints: [
          m`The whole number stays the same. Change only $\frac{7}{8}$ to a decimal.`,
          m`$7 \div 8 = 0.875$`
        ],
        steps: [
          m`Divide the fraction part: $7 \div 8 = 0.875$`,
          m`Add the whole number: $1 + 0.875 = 1.875$`,
          m`**Answer:** 1.875 inches`
        ]
      },
      {
        id: 's2-c', section: 's2', type: 'mc',
        prompt: m`Rochelle needs to pack a picture frame that measures $7\frac{6}{11}$ inches on each side. Will it fit into a box that measures 7.52 inches on each side?`,
        options: [
          m`Yes, because $7\frac{6}{11} = 7.\overline{45}$, which is less than 7.52.`,
          m`Yes, because $7\frac{6}{11} = 7.\overline{54}$, which is less than 7.52.`,
          m`No, because $7\frac{6}{11} = 7.\overline{54}$, which is greater than 7.52.`,
          m`No, because $7\frac{6}{11} = 7.6$, which is greater than 7.52.`
        ],
        correct: 2,
        hints: [
          m`Change $\frac{6}{11}$ to a decimal: $6 \div 11$.`,
          m`$6 \div 11 = 0.545454\ldots$ Now compare $7.5454\ldots$ with $7.52$.`
        ],
        steps: [
          m`$6 \div 11 = 0.545454\ldots = 0.\overline{54}$`,
          m`So $7\frac{6}{11} = 7.\overline{54} = 7.5454\ldots$`,
          m`Compare the hundredths: $7.54\ldots > 7.52$`,
          m`The frame is bigger than the box, so it will **not** fit.`
        ]
      },

      /* ------------------------------------------------------------------ *
       * 3 · Rates of change (Lessons 1-9 and 1-10)
       * ------------------------------------------------------------------ */
      {
        id: 's3-a', section: 's3', type: 'parts',
        prompt: m`The temperature of a cup of coffee changed by $-54$°F over $22\frac{1}{2}$ minutes.`,
        parts: [
          { label: 'A', prompt: m`What was the change in temperature each minute?`, type: 'number', answer: '-2.4', unit: '°F' },
          { label: 'B', prompt: m`If it keeps changing at this rate, what will the change in temperature be after 10 minutes?`, type: 'number', answer: '-24', unit: '°F' }
        ],
        hints: [
          m`To find the change for **one** minute, divide the total change by the number of minutes.`,
          m`$-54 \div 22.5$. A negative divided by a positive is negative.`
        ],
        steps: [
          m`Change each minute: $-54 \div 22\frac{1}{2} = -54 \div 22.5 = -2.4$`,
          m`After 10 minutes: $-2.4 \times 10 = -24$`,
          m`**Answer:** A) $-2.4$°F per minute $\;$ B) $-24$°F`
        ]
      },
      {
        id: 's3-b', section: 's3', type: 'parts',
        prompt: m`Water drains from a rain barrel at a constant rate. The volume changes by $-3\frac{3}{5}$ gallons in 6 minutes.`,
        parts: [
          { label: 'A', prompt: m`What is the change in the volume of water each minute?`, type: 'number', answer: '-0.6', unit: 'gallons' },
          { label: 'B', prompt: m`What will the change in volume be after 15 minutes?`, type: 'number', answer: '-9', unit: 'gallons' }
        ],
        hints: [
          m`Divide the total change by 6 minutes. Write $-3\frac{3}{5}$ as $-3.6$ first.`,
          m`$-3.6 \div 6 = -0.6$. For Part B, multiply that rate by 15.`
        ],
        steps: [
          m`$-3\frac{3}{5} = -3.6$`,
          m`Change each minute: $-3.6 \div 6 = -0.6$`,
          m`After 15 minutes: $-0.6 \times 15 = -9$`,
          m`**Answer:** A) $-0.6$ gallon per minute (also $-\frac{3}{5}$) $\;$ B) $-9$ gallons`
        ]
      },
      {
        id: 's3-c', section: 's3', type: 'number',
        prompt: m`Kareem heats a beaker of water to a boil. The water temperature then decreases from 100°C to 19°C in $5\frac{2}{5}$ minutes. What was the average change in temperature each minute?`,
        answer: '-15', unit: '°C',
        hints: [
          m`First find the total change: $19 - 100$.`,
          m`Then divide the total change by $5\frac{2}{5}$, or $5.4$.`
        ],
        steps: [
          m`Total change: $19 - 100 = -81$`,
          m`$5\frac{2}{5} = 5.4$`,
          m`Change each minute: $-81 \div 5.4 = -15$`,
          m`**Answer:** $-15$°C per minute`
        ]
      },

      /* ------------------------------------------------------------------ *
       * 4 · The sign of a sum (Lesson 1-3)
       * ------------------------------------------------------------------ */
      {
        id: 's4-a', section: 's4', type: 'multi',
        prompt: m`Select **all** the expressions that have a positive value.`,
        options: [m`$-5 + (-2)$`, m`$5 + (-2)$`, m`$-3 + 4$`, m`$0 + (-3)$`, m`$-2 - (-4)$`],
        correct: [1, 2, 4],
        hints: [
          m`When the signs are different, the sum has the sign of the number with the greater absolute value.`,
          m`Subtracting $-4$ is the same as adding $4$.`
        ],
        steps: [
          m`$-5 + (-2) = -7$ ✗`,
          m`$5 + (-2) = 3$ ✓`,
          m`$-3 + 4 = 1$ ✓`,
          m`$0 + (-3) = -3$ ✗`,
          m`$-2 - (-4) = -2 + 4 = 2$ ✓`,
          m`**Answer:** $5 + (-2)$, $\;-3 + 4$, and $-2 - (-4)$`
        ]
      },
      {
        id: 's4-b', section: 's4', type: 'mc',
        prompt: m`If $a < 0$, $b > 0$, and $|a| > |b|$, which statement about $a + b$ is true?`,
        options: [m`$a + b > 0$`, m`$a + b < 0$`, m`$a + b = 0$`, m`$|a + b| > |a|$`],
        correct: 1,
        hints: [
          m`$a$ is negative and $b$ is positive. Which one is farther from 0?`,
          m`The sum takes the sign of the number with the greater absolute value.`
        ],
        steps: [
          m`$a$ is negative, $b$ is positive, and $a$ is farther from 0.`,
          m`So the sum has the same sign as $a$: negative.`,
          m`Try numbers: $a = -7$, $b = 3$ gives $-7 + 3 = -4$, which is less than 0.`,
          m`**Answer:** $a + b < 0$`
        ]
      },
      {
        id: 's4-c', section: 's4', type: 'number',
        prompt: m`A submarine is traveling 200 meters below the surface of the ocean. It increases its depth by 45 meters. What integer represents its new location relative to the surface?`,
        answer: '-245', unit: 'meters',
        hints: [
          m`Below the surface is negative. Going **deeper** is also a negative change.`,
          m`Add two negatives: $-200 + (-45)$.`
        ],
        steps: [
          m`Starting location: $-200$`,
          m`Increasing the depth by 45 is a change of $-45$.`,
          m`$-200 + (-45) = -245$`,
          m`**Answer:** $-245$ meters (245 meters below the surface)`
        ]
      },

      /* ------------------------------------------------------------------ *
       * 5 · Money over time (Lesson 1-10)
       * ------------------------------------------------------------------ */
      {
        id: 's5-a', section: 's5', type: 'number',
        prompt: m`Kara had a savings account balance of \$153 on Monday. On Tuesday, she made six withdrawals of \$15.72 each and one deposit of \$235.15. What was her balance after these transactions?`,
        answer: '293.83', prefix: '$',
        hints: [
          m`Six withdrawals of \$15.72 is a change of $6 \times (-15.72)$.`,
          m`$6 \times (-15.72) = -94.32$. Now add that and the deposit to \$153.`
        ],
        steps: [
          m`Withdrawals: $6 \times (-15.72) = -94.32$`,
          m`Balance: $153 + (-94.32) + 235.15$`,
          m`$153 - 94.32 = 58.68$, then $58.68 + 235.15 = 293.83$`,
          m`**Answer:** \$293.83`
        ]
      },
      {
        id: 's5-b', section: 's5', type: 'number',
        prompt: m`Brianna's yearly bonus is \$155, but \$2.50 is taken away for each customer complaint about her. What is her bonus if there are 12 complaints in the year?`,
        answer: '125', prefix: '$',
        hints: [
          m`Each complaint is a change of $-2.50$. Multiply by 12.`,
          m`$12 \times (-2.50) = -30$. Add that to \$155.`
        ],
        steps: [
          m`Change from complaints: $12 \times (-2.50) = -30$`,
          m`Bonus: $155 + (-30) = 125$`,
          m`**Answer:** \$125`
        ]
      },
      {
        id: 's5-c', section: 's5', type: 'number',
        prompt: m`At the beginning of the month, Kimberly had \$65.78. She received three payments of \$32.50 from babysitting. She paid each of her 2 sisters \$8.75 for helping. How much money does she have now?`,
        answer: '145.78', prefix: '$',
        hints: [
          m`Payments in are positive: $3 \times 32.50$. Payments out are negative: $2 \times (-8.75)$.`,
          m`$3 \times 32.50 = 97.50$ and $2 \times (-8.75) = -17.50$.`
        ],
        steps: [
          m`Money in: $3 \times 32.50 = 97.50$`,
          m`Money out: $2 \times (-8.75) = -17.50$`,
          m`Total: $65.78 + 97.50 + (-17.50) = 145.78$`,
          m`**Answer:** \$145.78`
        ]
      },

      /* ------------------------------------------------------------------ *
       * 6 · Track the changes (Lessons 1-3 to 1-5)
       * ------------------------------------------------------------------ */
      {
        id: 's6-a', section: 's6', type: 'number',
        prompt: m`Joaquin recorded a temperature of 62°F in the morning. The temperature increased $6\frac{1}{2}$°F in the afternoon, then decreased 8.7°F in the evening. What was the evening temperature?`,
        answer: '59.8', unit: '°F',
        hints: [
          m`An increase is positive and a decrease is negative: $62 + 6.5 + (-8.7)$.`,
          m`Work from left to right: $62 + 6.5 = 68.5$.`
        ],
        steps: [
          m`$6\frac{1}{2} = 6.5$`,
          m`$62 + 6.5 = 68.5$`,
          m`$68.5 + (-8.7) = 59.8$`,
          m`**Answer:** 59.8°F`
        ]
      },
      {
        id: 's6-b', section: 's6', type: 'parts',
        prompt: m`Ashley's math average decreased 12 points to 78. Then she completed an extra credit assignment that raised her average by 5 points.`,
        parts: [
          { label: 'A', prompt: m`What was her starting average?`, type: 'number', answer: '90' },
          { label: 'B', prompt: m`What was her final average?`, type: 'number', answer: '83' },
          { label: 'C', prompt: m`What was the total change in her average?`, type: 'number', answer: '-7' }
        ],
        hints: [
          m`Work backward for Part A: 78 is 12 points **less** than the start.`,
          m`The total change is $-12 + 5$.`
        ],
        steps: [
          m`Starting average: $78 + 12 = 90$`,
          m`Final average: $78 + 5 = 83$`,
          m`Total change: $-12 + 5 = -7$ (check: $90 - 7 = 83$)`,
          m`**Answer:** A) 90 $\;$ B) 83 $\;$ C) $-7$`
        ]
      },
      {
        id: 's6-c', section: 's6', type: 'number',
        prompt: m`A scuba diver is 15 feet below the water's surface. She swims up at 0.5 foot per second for 4 seconds, then stops. Then she swims up for 3 more seconds at 0.4 foot per second. What number represents her new location relative to the surface?`,
        answer: '-11.8', unit: 'feet',
        hints: [
          m`She starts at $-15$. Swimming up is a positive change.`,
          m`Up: $0.5 \times 4 = 2$ and $0.4 \times 3 = 1.2$.`
        ],
        steps: [
          m`Start: $-15$`,
          m`First climb: $0.5 \times 4 = 2$`,
          m`Second climb: $0.4 \times 3 = 1.2$`,
          m`$-15 + 2 + 1.2 = -11.8$`,
          m`**Answer:** $-11.8$ feet (11.8 feet below the surface)`
        ]
      },

      /* ------------------------------------------------------------------ *
       * 7 · Distance with absolute value (Lessons 1-4 and 1-5)
       * ------------------------------------------------------------------ */
      {
        id: 's7-a', section: 's7', type: 'multi',
        prompt: m`Mischa dives from a platform 5 meters above the water. Her dive takes her 2.1 meters below the surface.

Select **all** the expressions that represent the distance, in meters, that Mischa dives.`,
        options: [m`$|5 - (-2.1)|$`, m`$|-2.1 - 5|$`, m`$|5 + (-2.1)|$`, m`$|-2.1 + 5|$`, m`$5 + 2.1$`],
        correct: [0, 1, 4],
        hints: [
          m`The platform is at $5$ and the bottom of the dive is at $-2.1$.`,
          m`Distance is the absolute value of the **difference**: $|5 - (-2.1)|$. The order of subtraction does not matter.`
        ],
        steps: [
          m`The distance between 5 and $-2.1$ is $7.1$ meters.`,
          m`$|5 - (-2.1)| = |7.1| = 7.1$ ✓`,
          m`$|-2.1 - 5| = |-7.1| = 7.1$ ✓`,
          m`$|5 + (-2.1)| = 2.9$ ✗ and $|-2.1 + 5| = 2.9$ ✗`,
          m`$5 + 2.1 = 7.1$ ✓`,
          m`**Answer:** $|5 - (-2.1)|$, $\;|-2.1 - 5|$, and $5 + 2.1$`
        ]
      },
      {
        id: 's7-b', section: 's7', type: 'number',
        prompt: m`Two divers are swimming below sea level. One diver is at $-25.5$ feet. The other is at $-40.75$ feet. How much farther below sea level is the deeper diver?`,
        answer: '15.25', unit: 'feet',
        hints: [
          m`Find the distance between the two locations: $|-40.75 - (-25.5)|$.`,
          m`$-40.75 - (-25.5) = -40.75 + 25.5$`
        ],
        steps: [
          m`$|-40.75 - (-25.5)| = |-40.75 + 25.5|$`,
          m`$= |-15.25| = 15.25$`,
          m`**Answer:** 15.25 feet`
        ]
      },
      {
        id: 's7-c', section: 's7', type: 'number',
        prompt: m`The top of a fishing pole is $8\frac{1}{2}$ feet above the water. A fish is $4\frac{1}{2}$ feet below the surface. What is the distance between the top of the pole and the fish?`,
        answer: '13', unit: 'feet',
        hints: [
          m`The top of the pole is at $8\frac{1}{2}$ and the fish is at $-4\frac{1}{2}$.`,
          m`$\left|8\frac{1}{2} - \left(-4\frac{1}{2}\right)\right| = 8\frac{1}{2} + 4\frac{1}{2}$`
        ],
        steps: [
          m`Distance $= \left|8\frac{1}{2} - \left(-4\frac{1}{2}\right)\right|$`,
          m`$= \left|8\frac{1}{2} + 4\frac{1}{2}\right| = |13| = 13$`,
          m`**Answer:** 13 feet`
        ]
      },

      /* ------------------------------------------------------------------ *
       * 8 · Divide integers (Lesson 1-8)
       * ------------------------------------------------------------------ */
      {
        id: 's8-a', section: 's8', type: 'parts',
        prompt: m`A company loses \$780 because of a shipping delay. The 6 owners must share the loss equally.`,
        parts: [
          { label: 'A', prompt: m`Which expression shows the change in profit for each owner?`, type: 'mc', options: [m`$-780 \div 6$`, m`$-780 \div (-6)$`, m`$780 \div 6$`, m`$6 \div (-780)$`], correct: 0 },
          { label: 'B', prompt: m`What is the change in profit for each owner?`, type: 'number', answer: '-130' }
        ],
        hints: [
          m`A loss is negative: $-780$. It is split among 6 owners.`,
          m`A negative divided by a positive is negative.`
        ],
        steps: [
          m`The loss is $-780$, shared by 6 owners: $-780 \div 6$.`,
          m`$780 \div 6 = 130$, and the signs are different, so the quotient is negative.`,
          m`**Answer:** A) $-780 \div 6$ $\;$ B) $-130$, a loss of \$130 each`
        ]
      },
      {
        id: 's8-b', section: 's8', type: 'multi',
        prompt: m`Which of the following are equivalent to $-7$? Select **all** that apply.`,
        options: [m`$\dfrac{-49}{-7}$`, m`$\dfrac{0}{-7}$`, m`$\dfrac{49}{-7}$`, m`$\dfrac{-21}{3}$`, m`$\dfrac{21}{3}$`],
        correct: [2, 3],
        hints: [
          m`Same signs give a positive quotient. Different signs give a negative quotient.`,
          m`Zero divided by any nonzero number is 0.`
        ],
        steps: [
          m`$\frac{-49}{-7} = 7$ ✗ (same signs, positive)`,
          m`$\frac{0}{-7} = 0$ ✗`,
          m`$\frac{49}{-7} = -7$ ✓`,
          m`$\frac{-21}{3} = -7$ ✓`,
          m`$\frac{21}{3} = 7$ ✗`,
          m`**Answer:** $\frac{49}{-7}$ and $\frac{-21}{3}$`
        ]
      },
      {
        id: 's8-c', section: 's8', type: 'number',
        prompt: m`Ana is a scuba diver. She completed 5 dives for a total depth of 230 feet below the surface. What integer represents the average depth of her dives relative to the surface?`,
        answer: '-46', unit: 'feet',
        hints: [
          m`Below the surface is negative, so the total is $-230$.`,
          m`Average: divide the total by the number of dives, $-230 \div 5$.`
        ],
        steps: [
          m`Total depth: $-230$`,
          m`Average: $-230 \div 5 = -46$`,
          m`**Answer:** $-46$ feet (46 feet below the surface)`
        ]
      },

      /* ------------------------------------------------------------------ *
       * 9 · Divide rational numbers (Lesson 1-9)
       * ------------------------------------------------------------------ */
      {
        id: 's9-a', section: 's9', type: 'number',
        prompt: m`A submarine descends at a rate of 2.6 kilometers per hour. The ocean floor is 6.24 kilometers below sea level. How many hours will it take the submarine to reach the ocean floor?`,
        answer: '2.4', unit: 'hours',
        hints: [
          m`Divide the total distance by the distance it travels each hour.`,
          m`$-6.24 \div (-2.6)$. Same signs give a positive answer.`
        ],
        steps: [
          m`Location of the floor: $-6.24$. Change each hour: $-2.6$.`,
          m`$-6.24 \div (-2.6) = 2.4$`,
          m`Check: $2.6 \times 2.4 = 6.24$ ✓`,
          m`**Answer:** 2.4 hours`
        ]
      },
      {
        id: 's9-b', section: 's9', type: 'number',
        prompt: m`An object travels at a steady speed of $8\frac{2}{3}$ miles per hour. How many hours will it take to travel $5\frac{1}{5}$ miles?

Type a fraction with a slash, like 3/4, or type a decimal.`,
        answer: '3/5', unit: 'hours',
        hints: [
          m`Time = distance ÷ speed: $5\frac{1}{5} \div 8\frac{2}{3}$.`,
          m`Rewrite as improper fractions: $\frac{26}{5} \div \frac{26}{3}$. Then multiply by the reciprocal.`
        ],
        steps: [
          m`$5\frac{1}{5} = \frac{26}{5}$ and $8\frac{2}{3} = \frac{26}{3}$`,
          m`$\frac{26}{5} \div \frac{26}{3} = \frac{26}{5} \times \frac{3}{26}$`,
          m`$= \frac{3}{5}$`,
          m`**Answer:** $\frac{3}{5}$ hour (0.6 hour, or 36 minutes)`
        ]
      },
      {
        id: 's9-c', section: 's9', type: 'number',
        prompt: m`A tanker truck fills an empty reservoir at a rate of $12\frac{1}{2}$ gallons per minute. The reservoir now has 35 gallons. How many minutes has the tanker been filling it?`,
        answer: '2.8', unit: 'minutes',
        hints: [
          m`Divide the total gallons by the gallons per minute.`,
          m`$35 \div 12.5$`
        ],
        steps: [
          m`$12\frac{1}{2} = 12.5$`,
          m`$35 \div 12.5 = 2.8$`,
          m`Check: $12.5 \times 2.8 = 35$ ✓`,
          m`**Answer:** 2.8 minutes`
        ]
      },

      /* ------------------------------------------------------------------ *
       * 10 · Multiply rational numbers (Lessons 1-6 and 1-7)
       * ------------------------------------------------------------------ */
      {
        id: 's10-a', section: 's10', type: 'number',
        prompt: m`An airplane descends at a rate of 2,700 feet per minute. What will its change in elevation be after $3\frac{1}{2}$ minutes?`,
        answer: '-9450', unit: 'feet',
        hints: [
          m`Descending is a negative rate: $-2{,}700$ feet per minute.`,
          m`Multiply the rate by the time: $-2{,}700 \times 3.5$.`
        ],
        steps: [
          m`Rate: $-2{,}700$ feet per minute. Time: $3\frac{1}{2} = 3.5$ minutes.`,
          m`$-2{,}700 \times 3.5 = -9{,}450$`,
          m`**Answer:** $-9{,}450$ feet`
        ]
      },
      {
        id: 's10-b', section: 's10', type: 'number',
        prompt: m`Jenny has \$2.40 taken from her allowance each time she forgets a chore. She forgets three times this month. What rational number represents the change in her allowance?`,
        answer: '-7.20',
        hints: [
          m`Each forgotten chore is a change of $-2.40$.`,
          m`Multiply: $3 \times (-2.40)$.`
        ],
        steps: [
          m`$3 \times (-2.40) = -7.20$`,
          m`A positive times a negative is negative.`,
          m`**Answer:** $-7.20$ (a loss of \$7.20)`
        ]
      },
      {
        id: 's10-c', section: 's10', type: 'parts',
        prompt: m`The temperature drops 1.3°F for every thousand feet an airplane climbs. The temperature on the ground is $-2.8$°F.`,
        parts: [
          { label: 'A', prompt: m`What is the change in temperature after the plane climbs 10,000 feet?`, type: 'number', answer: '-13', unit: '°F' },
          { label: 'B', prompt: m`What will the temperature be at 10,000 feet?`, type: 'number', answer: '-15.8', unit: '°F' }
        ],
        hints: [
          m`10,000 feet is 10 thousands of feet. Multiply $10 \times (-1.3)$.`,
          m`Then add that change to the ground temperature, $-2.8$.`
        ],
        steps: [
          m`Change: $10 \times (-1.3) = -13$`,
          m`Temperature: $-2.8 + (-13) = -15.8$`,
          m`**Answer:** A) $-13$°F $\;$ B) $-15.8$°F`
        ]
      },

      /* ------------------------------------------------------------------ *
       * 11 · Above and below zero (Lessons 1-4 and 1-5)
       * ------------------------------------------------------------------ */
      {
        id: 's11-a', section: 's11', type: 'number',
        prompt: m`At its highest point, a county is 5,762 feet above sea level. At its lowest point, it is 9 feet below sea level. What is the difference between the two elevations?`,
        answer: '5771', unit: 'feet',
        hints: [
          m`The elevations are $5{,}762$ and $-9$.`,
          m`$5{,}762 - (-9) = 5{,}762 + 9$`
        ],
        steps: [
          m`$5{,}762 - (-9) = 5{,}762 + 9 = 5{,}771$`,
          m`**Answer:** 5,771 feet`
        ]
      },
      {
        id: 's11-b', section: 's11', type: 'number',
        prompt: m`A dolphin is swimming 18 feet below the surface of the ocean. A helicopter is hovering 75.5 feet above the water, directly over the dolphin. What is the distance between the dolphin and the helicopter?`,
        answer: '93.5', unit: 'feet',
        hints: [
          m`The helicopter is at $75.5$ and the dolphin is at $-18$.`,
          m`$|75.5 - (-18)| = 75.5 + 18$`
        ],
        steps: [
          m`$|75.5 - (-18)| = |75.5 + 18| = 93.5$`,
          m`**Answer:** 93.5 feet`
        ]
      },
      {
        id: 's11-c', section: 's11', type: 'number',
        prompt: m`A weather balloon rises from 18 feet below sea level to $19\frac{1}{2}$ feet above sea level. What distance did the balloon rise?`,
        answer: '37.5', unit: 'feet',
        hints: [
          m`The balloon goes from $-18$ to $19\frac{1}{2}$.`,
          m`$\left|19\frac{1}{2} - (-18)\right| = 19\frac{1}{2} + 18$`
        ],
        steps: [
          m`$\left|19\frac{1}{2} - (-18)\right| = 19\frac{1}{2} + 18 = 37\frac{1}{2}$`,
          m`**Answer:** $37\frac{1}{2}$ feet (37.5 feet)`
        ]
      },

      /* ------------------------------------------------------------------ *
       * 12 · Terminating and repeating decimals (Lesson 1-2)
       * ------------------------------------------------------------------ */
      {
        id: 's12-a', section: 's12', type: 'matrix',
        prompt: m`Does the decimal form of each rational number terminate or repeat?`,
        columns: ['Terminates', 'Repeats'],
        rows: [
          { label: m`$\dfrac{7}{20}$`, correct: 0 },
          { label: m`$\dfrac{1}{18}$`, correct: 1 },
          { label: m`$-\dfrac{23}{20}$`, correct: 0 },
          { label: m`$\dfrac{2}{3}$`, correct: 1 }
        ],
        hints: [
          m`Divide the numerator by the denominator. If the division ends, the decimal terminates.`,
          m`If a digit or group of digits keeps coming back, the decimal repeats.`
        ],
        steps: [
          m`$\frac{7}{20} = 0.35$ terminates.`,
          m`$\frac{1}{18} = 0.0555\ldots = 0.0\overline{5}$ repeats.`,
          m`$-\frac{23}{20} = -1.15$ terminates.`,
          m`$\frac{2}{3} = 0.666\ldots = 0.\overline{6}$ repeats.`
        ]
      },
      {
        id: 's12-b', section: 's12', type: 'mc',
        prompt: m`Which number is **not** a rational number?`,
        options: [
          m`$-6.382$`,
          m`$1.5\overline{81}$`,
          m`$0.43524982\ldots$ (the digits never end and never repeat)`,
          m`$-\dfrac{5}{18}$`
        ],
        correct: 2,
        hints: [
          m`A rational number can be written as a fraction. Its decimal either **terminates** or **repeats**.`,
          m`Which decimal does neither?`
        ],
        steps: [
          m`$-6.382$ terminates, so it is rational.`,
          m`$1.5\overline{81}$ repeats, so it is rational.`,
          m`$-\frac{5}{18}$ is a fraction of integers, so it is rational.`,
          m`$0.43524982\ldots$ never ends and never repeats, so it is **not** rational.`
        ]
      },
      {
        id: 's12-c', section: 's12', type: 'multi',
        prompt: m`Select **all** the true statements about $-\dfrac{4}{5}$ and $-\dfrac{5}{6}$.`,
        options: [
          m`$-\frac{4}{5}$ can be written as a repeating decimal.`,
          m`$-\frac{5}{6}$ can be written as a repeating decimal.`,
          m`Both fractions can be written as repeating decimals.`,
          'The digit that repeats is 3.',
          'The digit that repeats is 8.'
        ],
        correct: [1, 3],
        hints: [
          m`Divide: $4 \div 5$ and $5 \div 6$.`,
          m`$4 \div 5 = 0.8$ ends. $5 \div 6 = 0.8333\ldots$`
        ],
        steps: [
          m`$-\frac{4}{5} = -0.8$, which terminates.`,
          m`$-\frac{5}{6} = -0.8333\ldots = -0.8\overline{3}$, which repeats.`,
          m`Only $-\frac{5}{6}$ repeats, and the repeating digit is 3 (the 8 does not repeat).`,
          m`**Answer:** the second and fourth statements`
        ]
      }
    ]
  });
})();
