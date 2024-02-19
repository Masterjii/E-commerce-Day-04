
**The MERN Stack Challenge: Build an App in Just 10 Days 🪴**

**Day 04: Implementing Flash Messages and Locals**

I'm Balram Kusharam, and I'm on a mission to build a full-fledged MERN stack application in just 10 days! Follow along as I document my journey, share valuable learnings, and showcase the power of the MERN stack for rapid application development.

**Key Objectives:**

- Enhance user experience by providing real-time feedback through flash messages.
- Streamline flash message access and usage across all views using locals.
- Implement secure session management with `express-session`.
- Leverage `connect-flash` for effective flash message handling.

**Completed Tasks:**

1. **Set up `express-session` and `connect-flash`:**
   - Installed the required `express-session` and `connect-flash` npm packages.
   - Configured `express-session` middleware with secure session management settings.
   - Initialized `connect-flash` middleware, ensuring it's placed after `express-session`.

2. **Established Locals for Flash Messages:**
   - Created a custom middleware to pass flash messages to global locals (`success` and `error`).
   - This middleware makes flash messages readily accessible in all views.

3. **Demystifying Flash Messages with `connect-flash`:**
   - Utilized `connect-flash` to manage temporary flash messages within the session.
   - These messages automatically clear after display, providing a seamless user experience.

4. **Overcoming `connect-flash`'s Drawback:**
   - Addressed the limitation of manually retrieving flash messages in each template.
   - Implemented a locals-based solution for global access, eliminating repetitive retrieval.

5. **Crafting Flash Messages View:**
   - Created a `flash.ejs` view file to display success and error flash messages.

6. **Integration into Routes:**
   - Incorporated flash messages into route functionalities for user feedback.
   - Added success messages for various actions in `review.js` and `product.js`:
     - `review.js`: "Review Added Successfully" on successful review addition.
     - `product.js`:
       - "Product Added Successfully" on product addition.
       - "Product Edit Successful" on product update.
       - "Product Deleted Successfully" on product deletion.

**Benefits of Flash Messages and Locals:**

- Improved user experience through real-time feedback on actions.
- Enhanced user awareness of successful and unsuccessful interactions.
- Smoother user journey with intuitive feedback mechanisms.
- Global accessibility of flash messages across all views.

**Connect with Me:**

Let's connect and exchange ideas on LinkedIn! Visit [https://www.linkedin.com/in/balram-kusharam/](https://www.linkedin.com/in/balram-kusharam/) to join the discussion.

**Stay Updated:**

Keep track of my progress and learn more about MERN stack development by following this repository. I'll be sharing regular updates and insights throughout the 10-day challenge!

**Remember, this is just the beginning! I'm excited to continue building and learning, and I welcome your feedback and contributions along the way.**
