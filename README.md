# Bank Mobile App (Bank EC)

A mobile banking application for personal finance management, peer transfers, Platinum Card controls, and category budgeting. Built strictly with **pure JavaScript & JSX (`.js`, `.jsx`)**, React Native 0.88, Expo SDK 58, and Expo Router, based on the 27 Figma artboards from `bank-mobile-app-template-gokul`.

---

## Screen Architecture & Features

1. **Onboarding & Auth Flow**:
   - `Splash & Walkthrough (`src/app/index.jsx`): Bank EC branding, feature carousel.
   - `Sign In (`src/app/login.jsx`): Email & password sign-in.
   - `Sign Up (`src/app/signup.jsx`): Registration form.
   - `Phone Registration (`src/app/phone-register.jsx`): Custom numeric keypad for phone entry.
   - `Verify OTP (`src/app/verify-otp.jsx`): 4-digit code entry (`7 5 1 8`).
   - `Account Created (`src/app/account-created.jsx`): Celebration screen.
   - `Set PIN (`src/app/set-pin.jsx`): 4-digit security PIN setup (`1 2 3 4`).
   - `Touch ID (`src/app/touch-id.jsx`): Biometric authorization prompt.

2. **Main Dashboard (`src/app/(tabs)/index.jsx`)**:
   - Total Available Balance: `$7,425`.
   - Spent: `$1,460` | Earned: `$2,730`.
   - Complete Verification banner ("7 of 10 completed" - 75%).
   - Dining alert card ("You spent $2,732 on dining out this month").
   - Quick action shortcuts to Transfer, Top Up, My QR, and Finance Score.
   - Recent transaction feed with category badges.

3. **My Cards & Accounts (`src/app/(tabs)/cards.jsx` & `src/app/card-details.jsx`)**:
   - Platinum MasterCard visual card representation with balance `$273.58`.
   - BankWest Checking account (`$295.90`) and PayPal integration.
   - Top Up, PIN change, and Card Lock controls.
   - Online payment and ATM cash withdrawal switches.

4. **Budget & Category Details (`src/app/(tabs)/budget.jsx` & `src/app/budget-details.jsx`)**:
   - Spent this month overview with June vs July chart comparison (`$172`, `$157`, `$181`).
   - Category budget tracking: Lunch & Dinner (`$450` of `$900`, `$52/day`), Car Fuel (`$200`), Medical Allowances (`$330`), House Rent (`$180`).
   - Monthly budget configuration via custom keypad (`$1,000`).

5. **Transfer & Receipts (`src/app/(tabs)/transfer.jsx` & `src/app/receipt.jsx`)**:
   - Peer transfer flow with recent contacts (Hailey Sanders, Zayn Michel, Thomson Gary).
   - Transfer receipt: `#D79004321786`, amount `$46.09`, transfer fee `$0.00`.
   - Share and download receipt actions.

6. **QR Code Payments (`src/app/qr-scan.jsx`)**:
   - Personal QR Code display for Hailey Sanders / Adam Wise.
   - Live camera viewfinder simulator for scanning merchant and peer QR codes.

7. **Finance Score & Analytics (`src/app/saving-score.jsx`)**:
   - Finance Score: `72` ("It can be better!").
   - Tailored advice on dining expenditure and credit card annual fee reductions.

---

## Verification & Architecture

- **Strictly Pure JS/JSX**: Zero TypeScript (`.ts`/`.tsx`).
- **Expo Router 58**: Nested file-based routing with tab and stack navigation.
- **AST Validated**: Babel AST parser verified with 0 syntax or import errors.

<!-- run-locally:start -->

## ▶️ Run locally

```bash
npm install
npx expo start
```

Then press `i` for the iOS simulator, `a` for Android, or `w` for the web, or scan the QR code with Expo Go.

<!-- run-locally:end -->

---

<!-- design-credits:start -->

## 🎨 Design Credits

This app is based on the free **Mobile Bank App UI Kit** design by **Gokul**, downloaded from Sketch App Sources. All visual design credit goes to the designer. It follows the design's screens, user flows and content; visual details (exact spacing, fonts, some colours and illustrations) are approximated and may differ from the original.

| | |
|---|---|
| Designer | [Gokul](https://www.sketchappsources.com/contributor/gokul) |
| Original design | Mobile Bank App UI Kit |
| Downloaded from | [Sketch App Sources](https://www.sketchappsources.com/free-source/4877-mobile-bank-app-ui-kit-sketch-freebie-resource.html) |
| Original file | `bank-mobile-app-template-gokul` |
| License / usage | Not stated on the source page. Free download; credit the designer (Sketch App Sources Terms) and confirm with them before commercial use. |

**Attribution:**

> UI design: "Mobile Bank App UI Kit" by Gokul (https://www.sketchappsources.com/contributor/gokul), downloaded from Sketch App Sources (https://www.sketchappsources.com/free-source/4877-mobile-bank-app-ui-kit-sketch-freebie-resource.html).

The original design source files are not included in this repository; get them from the links above. This app's **code** is released under the [MIT License](./LICENSE); the visual design remains the designer's (see [NOTICE](./NOTICE)).

Photos, brand logos and avatars inside the design may belong to third parties and are not covered by the designer's permission.

<!-- design-credits:end -->
