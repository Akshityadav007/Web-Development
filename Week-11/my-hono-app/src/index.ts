import { Hono, Next } from 'hono'
import { Context } from 'hono/jsx'

const app = new Hono()

async function authMiddleware(c: any, next: any){
  if(c.req.header("Authorization")){
    // Do validation
    await next()
  }
  else{
    return c.text("You dont have access.");
  }
}

// app.use(authMiddleware)   // this (app.use) will run authorization for every route.


// instead we should pass authMiddleware to only those functions where we need authentication
// fetch => json
app.get('/', authMiddleware, async (c) => {
  const body = await c.req.parseBody();
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));

  return c.json({msg: "as"})
})


app.post('/', async (c) => {
  const body = await c.req.json();
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));

  return c.text('Hello Hono!')
})


app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export default app



