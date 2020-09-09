const express = require('express');
const app = express();
const path = require('path')

app.use(express.json({ extended: false }));

app.use('/api/kanye', require('./routes/api/kanye'));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))