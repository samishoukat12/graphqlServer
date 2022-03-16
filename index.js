const express = require('express');
const Port = 5000;
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const bodyParser = require('body-parser');
const schema = require('./Schema');
const studentsCollection = require('./components/students/StudentModal');
const app = express();
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.use('/graphql',
    graphqlHTTP({
        schema:schema,
        graphiql: true,
    })
)



// app.get("/", async (req, res) => {
//     const data = await studentsCollection;
//     res.send(data);
// });

app.listen(Port, () => {
    console.log('Server is running on ' + Port);
})