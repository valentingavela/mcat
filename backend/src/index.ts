import app from './App'
import {awsKeys} from './keyfile';
const port = process.env.PORT || 3000

console.log(awsKeys.AccessKey);

app.listen(port, (err) => {
    if (err) {
        return console.log(err)
    }

    return console.log(`server is listening on ${port}`)
})