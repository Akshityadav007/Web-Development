export interface Env {
	
}
export default {
	async fetch(request, env, ctx){
		return Response.json({
			message: "Hi! This is my first deployed website on cloudflare."
		});
	},
} satisfies ExportedHandler<Env>;

// export interface Env {

// }

// export default {
// 	async fetch(request, env, ctx): Promise<Response> {
// 		console.log(request.body);
// 		console.log(request.headers);
// 		console.log(request.method);
// 		// console.log(request);

// 		if(request.method === "GET"){
// 			return Response.json({
// 				message: "you sent a get request"
// 			});
// 		}
// 		else {
// 			return Response.json({
// 				message: "you did not send a get request"
// 			})
// 		}
// 	}
// } satisfies ExportedHandler<Env>;