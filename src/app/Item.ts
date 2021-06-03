class Item {
    
    constructor(objectId: String, text: String, isChecked: Boolean) {
        this.objectId = objectId
        this.text = text;
        this.isChecked = isChecked
    }

    objectId: String
    text: String
    isChecked: Boolean
}
export default Item