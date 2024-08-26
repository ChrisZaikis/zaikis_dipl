const mongoose = require("mongoose");
const Category = require("../models/CategoryModel");

beforeAll(async () => {
  await mongoose.connect(
    "mongodb+srv://mongo_user:aVr6Gz2HRTHkJQKT@cluster0.x3opa.mongodb.net/mern_database?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
});

afterAll(async () => {
  await mongoose.connection.close();
});

afterEach(async () => {
  // Clean up the test data after each test
  await Category.deleteMany({ name: "test category" });
});

test("Should save category to database", async () => {
  const mockCategory = { name: "test category" };
  await Category.create(mockCategory);

  const insertedCategory = await Category.findOne({ name: "test category" });
  expect(insertedCategory.name).toEqual(mockCategory.name);
});

test("Should delete category", async () => {
  const mockCategory = { name: "test category" };
  await Category.create(mockCategory);

  await Category.deleteOne({ name: "test category" });

  const deletedCategory = await Category.findOne({ name: "test category" });
  expect(deletedCategory).toBeNull(); // Ensure the category is no longer in the database
});
