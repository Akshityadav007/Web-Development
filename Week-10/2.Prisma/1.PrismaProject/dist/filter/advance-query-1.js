"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// try some where queries
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient({
    log: ['info', 'query']
});
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        let res = yield prisma.users.findMany({
            where: {
                email: {
                    endsWith: 'gmail.com',
                },
                todos: {
                    // Has atleast one todo completed
                    some: {
                        done: true,
                    },
                },
            },
            include: {
                todos: {
                    where: {
                        done: true,
                    },
                },
            },
        });
        console.log(res);
        // console.log(JSON.stringify(res));    // convert todos
    });
}
main()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Disconnecting..");
    yield prisma.$disconnect();
}))
    .catch((e) => __awaiter(void 0, void 0, void 0, function* () {
    console.error(e);
    yield prisma.$disconnect();
    process.exit(1);
}));
