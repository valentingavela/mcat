"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = require("./App");
const keyfile_1 = require("./keyfile");
const port = process.env.PORT || 3000;
console.log(keyfile_1.awsKeys.AccessKey);
App_1.default.listen(port, (err) => {
    if (err) {
        return console.log(err);
    }
    return console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=index.js.map