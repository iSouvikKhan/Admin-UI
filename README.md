# Admin UI

A React admin dashboard for viewing and managing a list of users. It loads member data from a public JSON endpoint and lets you search, paginate, edit, and delete users in the browser.

## Features

- Loads users from `https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json` on startup
- Search by name, email, or role (case-insensitive)
- Pagination with 10 users per page, including first / previous / next / last controls
- Edit a user's name, email, and role on a separate `/edit` page
- Delete a single user with the trash icon
- Select rows (or all rows on the current page) with checkboxes and delete them with "Delete Selected"

All changes are kept in memory only. Nothing is written back to the data source, so edits and deletions are lost when the page is reloaded.

## Tech Stack

- React 18
- React Router 6
- Create React App (`react-scripts` 5)
- Font Awesome icons (loaded via a kit script in `public/index.html`)
- Plain CSS

## Project Structure

```
Admin-UI/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── index.js            # Entry point, wraps App in BrowserRouter
│   ├── index.css           # Global styles
│   ├── App.js              # Data fetching, state, search, pagination, routes
│   └── Components/
│       ├── Home.js         # Main page: search bar, user table, delete button, pagination
│       ├── SearchBar.js    # Search input
│       ├── Users.js        # User table with header and select-all checkbox
│       ├── User.js         # Single user row with edit and delete actions
│       ├── Delete.js       # "Delete Selected" button
│       ├── Pagination.js   # Page navigation controls
│       └── Edit.js         # Edit form for a selected user
└── package.json
```

## Prerequisites

- Node.js and npm
- An internet connection (user data and icons are loaded from remote URLs)

## Installation

```bash
git clone https://github.com/iSouvikKhan/Admin-UI.git
cd Admin-UI
npm install
```

## Running

Start the development server:

```bash
npm start
```

Then open http://localhost:3000 in your browser.

Create a production build in the `build/` folder:

```bash
npm run build
```

## Usage

1. Type in the search box to filter users by name, email, or role.
2. Use the page buttons at the bottom to move between pages.
3. Click the edit icon on a row to open the edit form, change the fields, and click **Save** to return to the list.
4. Click the trash icon to delete one user, or tick several checkboxes and click **Delete Selected**.
