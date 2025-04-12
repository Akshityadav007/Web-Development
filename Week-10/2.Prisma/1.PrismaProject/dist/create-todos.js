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
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// const prisma = new PrismaClient({log: ['info', 'query', 'error']})       use this if you need logging, keep adding the parameter according to the level of logging you need
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield prisma.todos.create({
            data: {
                title: "Do daily DSA question.",
                description: "Complete atleast 1 leetcode question.",
                user: {
                    connect: {
                        id: 1
                    }
                }
            }
        });
    });
}
main()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Todo created.");
    console.log("disconnecting.. ");
    yield prisma.$disconnect();
}))
    .catch((e) => __awaiter(void 0, void 0, void 0, function* () {
    console.error(e);
    yield prisma.$disconnect();
    process.exit(1);
}));
