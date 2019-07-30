module.exports = {
    getCards:async(req,res)=>{
        const db = req.app.get('db')
        const cards = await db.get_cards()
        res.send(cards)
    }
}