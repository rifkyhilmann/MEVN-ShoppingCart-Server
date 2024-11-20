

module.exports = mongoose => {
    // Definisi schema
    const schema = new mongoose.Schema({
        code: String,
        name: String,
        price: Number,
        description: String,
        imageUrl: String,
        averageRating: Number,
    });

    // Menambahkan metode toJSON
    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id; // Mengubah _id menjadi id
        return object; // Mengembalikan objek yang telah dimodifikasi
    });

    // Membuat dan mengembalikan model
    return mongoose.model("products", schema);
};
