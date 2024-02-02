import Patient from "../model/patientModule";

export const pasientLoging = async (req, res) => {
  try {
    const { username, email, number } = req.body;
    const existingUser = await Patient.findOne({
      $or: [{ email }, { username }],
    });

    if (existingUser) {
      res.status(400).json("User alredy exist");
    }

    const newUser = new Patient({
      name,
      email,
      username,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(200).json({
        username:newUser.name,
        email:newUser.email,
        number:newUser.number
    })
  } catch (error) {
    console.log("error",error)
  }
};
