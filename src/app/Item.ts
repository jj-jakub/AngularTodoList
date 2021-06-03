class Item {
    
    constructor(_id: String, text: String, done: Boolean) {
        this._id = _id
        this.text = text;
        this.done = done
    }

    _id: String
    text: String
    done: Boolean
}
export default Item