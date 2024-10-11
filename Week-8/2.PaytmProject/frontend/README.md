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

--------------------------------------------------------------------------------------------------

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

--------------------------------------------------------------------------------------------------

# Step 6 - Connect frontend to backend
To send request to the backend we are using 'Axios' here instead of fetch (built-in method).
Hence run 'npm install axios'.

After hitting the backend, on signup we will get 'token', which we need to save in 'local storage', to maintain being 'signed in'.

Although there are many ways to store it, we are using 'local storage' for this purpose.
We don't need to install anything, simply use - localStorage.setItem("name_of_item", response.data.item_to_be_stored);
**ref**: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage


--------------------------------------------------------------------------------------------------

# Step 7 - Navigation
- To move from one page to another page on click of a button, we need to use 'useNavigate()' hook provided by 'react-router-dom'.
- To get access to query parameters, 'react-router-dom' provides the facility, just google it.
- We can get the axios post request code from postman.
 
**ref**:https://medium.com/@bobjunior542/using-usenavigate-in-react-router-6-a-complete-guide-46f51403f430
**ref**:https://reactrouter.com/en/main/hooks/use-navigate

**ref**:https://ultimatecourses.com/blog/query-strings-search-params-react-router
**ref**:https://reactrouter.com/en/main/hooks/use-search-params