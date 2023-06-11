const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/donor", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

  
const formSchema = new mongoose.Schema({
  name: String,
  age: Number,
  dob: Date,
  phone:Number,
  email:String,
  donorPreference:String,
  medication : String,
  address:String
});


const Form = mongoose.model("Form", formSchema);


app.post("/api/submit", async (req, res) => {
  const { name, age, dob, phone ,email,donorPreference,medication,address } = req.body;

  try {
    const newForm = new Form({ name, age, dob, phone ,email,donorPreference,medication,address });
    await newForm.save();
    res.status(200).json({ message: "Form data saved successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));