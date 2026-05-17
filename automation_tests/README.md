# Automation Testing - QA Internship Assignment

## Overview

This folder contains Playwright automation testing scripts created for:

- BeGenuin
- Carlist.my

Automation testing was performed as part of the QA Internship Assignment.

---

# Tools Used

- Playwright
- Node.js
- JavaScript

---

# Folder Structure

automation_tests/

├── tests/

│ ├── begenuin/

│ └── carlist/

│

├── playwright-report/

│ └── index.html

│

├── test-results/

│ └── execution screenshots and logs

│

├── playwright.config.js

├── package.json

├── package-lock.json

├── .gitignore

└── README.md

---

# Test Scenarios Automated

## BeGenuin
- Homepage validation
- Login navigation
- Get App button validation
- Creator badge validation
- API validation

## Carlist.my
- Homepage validation
- Search functionality validation
- Navigation validation
- Login navigation

---

# Installation & Setup

## Install Dependencies

```bash
npm install
Install Playwright Browsers
npx playwright install
Running Automation Tests
Run All Tests
npx playwright test
Run BeGenuin Tests Only
npx playwright test tests/begenuin
Run Carlist Tests Only
npx playwright test tests/carlist
HTML Automation Report

After test execution, Playwright automatically generates an HTML report inside:

playwright-report/index.html
Open HTML Report

Run:

npx playwright show-report

OR manually open:

playwright-report/index.html

in browser.

Test Results

Execution results, logs, and screenshots are available inside:

test-results/

This folder contains:

Failed test screenshots
Execution logs
Trace information
Notes
Some UI elements required dynamic waits due to asynchronous rendering behavior.
Automation failures were analyzed as part of the QA process.

