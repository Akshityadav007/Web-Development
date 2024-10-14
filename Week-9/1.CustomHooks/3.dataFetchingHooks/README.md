# Data fetching hooks
- Data fetching hooks can be used to encapsulate all the logic to fetch the data from your backend.
- We can use these for other purposes like showing loading..

# Auto refreshing hooks
- What if you want to keep polling the backend every n seconds? n needs to be passed in as an input to the hook.
- This is done in case of social media apps to update feeds or chat messages.
- Web sockets are a more popular way to do this (but let us not go there yet).


# SWR
- We just now made a close implementation to 'useSWR' hook which is used to fetch data from backend.
**ref** - https://swr.vercel.app/
