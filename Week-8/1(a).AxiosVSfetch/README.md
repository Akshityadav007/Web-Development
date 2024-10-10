# Axios vs Fetch
- These are two popular ways to hit a backend and get a response.

 ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| **Feature**                       | **Fetch**                                                                      | **Axios**                                                                 |
|-----------------------------------|--------------------------------------------------------------------------------|---------------------------------------------------------------------------|
| **Type**                          | Native JavaScript API                                                          | Third-party library                                                       |
| **Support**                       | Supported in modern browsers                                                   | Requires installation (e.g., `npm install axios`)                         |
| **Response Type**                 | Returns a **Promise** that resolves to a `Response` object                     | Returns a **Promise** that resolves to the actual data                    |
| **Default Behavior**              | Does not throw an error for HTTP errors (e.g., 404, 500); must handle manually | Throws an error if the response status is outside the 2xx range           |
| **Automatic JSON Parsing**        | Requires manual parsing using `response.json()`                                | Automatically parses JSON responses                                       |
| **Timeout Handling**              | No built-in timeout support                                                    | Supports request timeouts with a `timeout` option                         |
| **Request Cancellation**          | No built-in cancellation, but possible using `AbortController`                 | Supports request cancellation using `CancelToken`                         |
| **Request/Response Interceptors** | Not available                                                                  | Supports interceptors for modifying requests/responses                    |
| **Error Handling**                | Requires manual handling of errors such as network failure, status code issues | More intuitive error handling with useful `error` objects                 |
| **Data Transformation**           | Data needs to be transformed manually (e.g., JSON.stringify for request body)  | Automatically transforms data (JSON by default)                           |
| **Progress Monitoring**           | Not natively supported                                                         | Supports monitoring upload/download progress                              |
| **Browser Support**               | Supported in all modern browsers, but not in older browsers like IE            | Supported in both modern and older browsers with polyfills                |
 ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------




**Axios ref**: https://axios-http.com/docs/intro