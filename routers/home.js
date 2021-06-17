const exprss = require('express');
const router = exprss.Router();


router.get('/', (req, res) => {
    res.send("Genres");
})

module.exports = router;