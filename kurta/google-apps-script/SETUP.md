# Backend setup: Google Sheets + Apps Script

This gives your site a real backend for login, signup, forgot password,
profile, saved addresses, wishlist, and order history — all stored in a
Google Sheet, with zero servers to pay for or maintain.

## 1. Create the spreadsheet

1. Go to [sheets.google.com](https://sheets.google.com) and create a new blank spreadsheet.
2. Name it something like **Kurta Studio Database**.

## 2. Add the Apps Script code

1. In the spreadsheet, click **Extensions → Apps Script**.
2. Delete any boilerplate code in `Code.gs`.
3. Copy the entire contents of [`Code.gs`](./Code.gs) from this folder and paste it in.
4. Click the **Save** icon (or Ctrl+S).

## 3. Run setup once

1. In the Apps Script toolbar, pick **setup** from the function dropdown (next to "Debug").
2. Click **Run**.
3. The first time, Google will ask you to authorize the script — click through
   **Review permissions → (your account) → Advanced → Go to (project name) → Allow**.
   This is required so the script can read/write the sheet and send email.
4. You should see an "Setup complete" alert, and 7 new tabs will appear in your
   spreadsheet: `Users`, `Sessions`, `ResetCodes`, `Addresses`, `Orders`, `Wishlist`,
   `Reviews`.

## 4. Add the order-status and review-approval triggers

Changing an order's status (e.g. typing "Shipped" or "Cancelled" over
"Pending" in the `Orders` sheet) emails the customer, and marking an order
"Delivered" also sends a "please review your order" email. Ticking a
review's `approved` checkbox in the `Reviews` sheet emails that customer
too. These need their own triggers because Apps Script won't let a plain
automatic `onEdit` send email — only an **installable** trigger you approve
once. **Both** of the following are required — without them, the sheet
edits themselves work fine, but no email goes out.

1. In the Apps Script editor, click the **clock icon (Triggers)** in the left sidebar.
2. Click **+ Add Trigger** (bottom right).
3. Set:
   - **Function to run:** `onOrdersSheetEdit`
   - **Event source:** From spreadsheet
   - **Event type:** On edit
4. Click **Save**, authorize if asked.
5. Click **+ Add Trigger** again and repeat for the second one:
   - **Function to run:** `onReviewsSheetEdit`
   - **Event source:** From spreadsheet
   - **Event type:** On edit
6. Click **Save**.

Now, in the `Orders` tab, editing any row's `status` cell (e.g. changing
`Pending` → `Shipped` → `Delivered` → `Cancelled`) automatically emails that
customer — whether you type the value, pick it from a dropdown, paste it
into several rows, or drag-fill a column. And in the `Reviews` tab, ticking
a row's `approved` checkbox emails that reviewer that their review is live.

## 6. Deploy as a web app

1. Click **Deploy → New deployment**.
2. Click the gear icon next to "Select type" and choose **Web app**.
3. Set:
   - **Execute as:** Me (your account)
   - **Who has access:** Anyone
4. Click **Deploy**, authorize again if asked, then **copy the Web app URL**
   (looks like `https://script.google.com/macros/s/AKfycb.../exec`).

## 7. Connect the frontend

1. In the project root (`d:\Maaz-kurta\kurta`), create a file named `.env`
   (copy `.env.example` if you like).
2. Set:
   ```
   VITE_APPS_SCRIPT_URL=https://script.google.com/macros/s/AKfycb.../exec
   ```
   using the URL you copied above.
3. Restart the dev server (`npm run dev`) so Vite picks up the new env variable.

## 8. Test it

1. Open the site, go to **Account**, and create a test account.
2. Check the `Users` tab in your Google Sheet — a new row should appear.
3. Try "Forgot password" with that email — you should get an email with a
   6-digit code (sent from the Google account you deployed with).
4. Add an address, add something to your wishlist (you'll get a "still
   available" email), and place an order (you'll get an order-confirmation
   email) — each should show up in the matching sheet tab. Removing that
   item from your wishlist sends a "removed" email too.
5. In the `Orders` sheet, change that order's `status` cell to `Shipped`,
   then `Delivered`, then `Cancelled` — each change emails the customer, and
   `Delivered` additionally sends a "please review" email plus unlocks the
   **Write a review** button on that item in My Account > Orders.
6. Submit a review from the site — you get a "review received" email, and it
   lands in the `Reviews` tab with `approved` unchecked. Tick the checkbox
   yourself — the reviewer gets a "your review is live" email, and the
   review now shows publicly on the product page.
7. Delete that review from My Account > Reviews — you get a "review removed"
   email.

## Updating the backend later

Whenever you edit `Code.gs` again, edits alone do **not** go live — Apps
Script web apps are versioned. To publish a change:

1. **Deploy → Manage deployments**.
2. Click the pencil (edit) icon on the existing deployment.
3. Under **Version**, choose **New version**.
4. Click **Deploy**.

This keeps the same URL, so you don't need to update `.env` again.

**After pulling a `Code.gs` update, re-run `setup()` once too** — it's safe
to run repeatedly (it only creates what's missing) and some fixes, like the
phone/postal-code text formatting below, only take effect once it's re-run.

## Troubleshooting: an email isn't sending

Work through these in order — in practice it's almost always #1 or #2:

1. **You edited `Code.gs` but didn't deploy a new version.** Pasting updated
   code into the Apps Script editor does not update the live web app — see
   "Updating the backend later" above. Deploy a new version, then retest.
2. **A trigger is missing.** Order confirmation and the wishlist "saved"
   email send directly from the API call, so they don't need a trigger. But
   order status/cancellation, the "please review" nudge, and review-approval
   emails only fire through the two installable triggers in step 4 — check
   **Triggers** in the left sidebar and confirm both `onOrdersSheetEdit` and
   `onReviewsSheetEdit` are listed with **On edit** as the event type.
3. **Check the Executions log.** Click the **clock-with-arrow icon
   (Executions)** in the left sidebar — it lists every run, including
   trigger-fired ones, with any error. This is the fastest way to see
   exactly why a specific send failed.
4. **Check the spam folder** of the account you're testing with — cold
   MailApp sends from a new Apps Script project sometimes land there at
   first.
5. **You're out of send quota for the day** — see the limit below.

## Notes & limits

- **Phone numbers & postal codes:** `setup()` pins these columns to "Plain
  text" format so Sheets doesn't quietly convert a value like `03001234567`
  into the number `3001234567` (dropping the leading zero). This only
  protects rows written *after* the format is applied — if you tested the
  API before this fix, open the sheet and re-enter any affected phone/postal
  values (or just delete those test rows).

- **Reviews are private until approved:** a customer can only review a
  product from an order that's marked `Delivered`, and it won't show on the
  product page until you tick its `approved` checkbox in the `Reviews` sheet.
- **Email quota:** every email (password reset, order confirmation, order
  status/cancellation, delivery review-request, wishlist added/removed,
  review submitted/approved/deleted) is sent via `MailApp`, which uses your
  Google account's own send quota (~100/day on a free Gmail
  account, ~1,500/day on Google Workspace). Fine for a small store, but a
  busy launch day could add up — worth watching if you're on a free account.
- **Passwords** are never stored in plain text — they're hashed with a
  per-user random salt (SHA-256) before being written to the sheet.
- **Sessions** last 30 days; a user is signed out automatically after that
  (they'll need to log in again — nothing breaks, no code changes needed).
- Everything lives in the one spreadsheet, so you can always open it to see
  users, orders, wishlists, and addresses directly.
