# Frontend of paytm

# Step 1 - Add routing to the react app
Import react-router-dom into your project and add the following routes - 
1. /signup - The signup page
2. /signin - The signin page
3. /dashboard - Balances and see other users on the platform.
4. /send - Send money to other users
5. / - Landing page. (added by me).

--------------------------------------------------------------------------------------------------

# Step 2 - Create and hook up signup page
If the user signup is successful, take the user to /dashboard, else show them error message.

--------------------------------------------------------------------------------------------------

# Step 3 - Create signin page
If the signin is successful, take the user to /dashboard.

--------------------------------------------------------------------------------------------------

# Step 4 - Create dashboard
Show the user their balance, and a list of users that exist in the database.
Clicking on Send money should open a model that lets the user send money.

# Step 5 - Auth components
Full Signup component

You can break down the app into a bunch of components. The code only contains the styles of the component, not any onclick functionality.

- Components:

1. Heading
2. SubHeading
3. Appbar
4. Balance
5. BottomWarning
6. Button
7. InputBox
8. Users