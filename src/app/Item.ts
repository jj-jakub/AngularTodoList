class Item {
    
    constructor(_id: String, text: String, isChecked: Boolean) {
        this._id = _id
        this.text = text;
        this.isChecked = isChecked
    }

    _id: String
    text: String
    isChecked: Boolean
}
export default Item