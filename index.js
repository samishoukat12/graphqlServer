const express = require('express');
const PORT = process.env.PORT || 8080;
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
        schema: schema,
        graphiql: true,
    })
)



// app.get("/", async (req, res) => {
//     const data = await studentsCollection;
//     res.send(data);
// });

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});