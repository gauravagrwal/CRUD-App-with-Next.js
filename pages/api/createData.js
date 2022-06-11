const { Ref } = require("faunadb");
const faunadb = require("faunadb");
const secret = process.env.FAUNADB_SECRET_KEY;
const q = faunadb.query;
const client = new faunadb.Client({ secret });

module.exports = async (req, res) => {
    const input = req.body.data;
    try {
        const dbs = await client.query(
            q.Create(q.Collection("todos"), {
                data: {
                    task: input.newtodo,
                    done: false,
                },
            })
        );
        res.status(200).json(dbs.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
