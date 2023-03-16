const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors());
app.use(express.json());

app.get('/api/notes', (req,res) => {
    res.status(200).json({
        msg: 'todas las notas xd'
    })
})

app.use((req, res) => res.status(404).json({ msg: 'not found'}));

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Running at port ${PORT}`));