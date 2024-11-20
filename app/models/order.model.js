

module.exports = mongoose => {
    // Definisi schema
    const schema = new mongoose.Schema({
        user_id: Number,
        cart_items: [String],
    });

    // Menambahkan metode toJSON
    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id; // Mengubah _id menjadi id
        return object; // Mengembalikan objek yang telah dimodifikasi
    });

    // Membuat dan mengembalikan model
    return mongoose.model("orders", schema);
};
