import { dataSource } from "../app-data-source";
import jsonwebtoken from "jsonwebtoken";
import { User } from "../entity/user.entity";
import bcrypt from "bcryptjs";

const UserRepository = dataSource.getRepository(User);

export async function signUp(name: string, email: string, password: string) {
  console.log("name", name, "email", email, "pass", password);
  const existingUser = await UserRepository.findOneBy({ email });
  if (existingUser) {
    throw new Error("User already exists. Pleas log in.");
  }

  const passwordHash = await bcrypt.hash(password, 10);

  const newUser = new User();
  newUser.name = name;
  newUser.email = email;
  newUser.password = passwordHash;
  newUser.token = "";
  newUser.tasks = [];

  const createdUser = await UserRepository.create(newUser);

  const token = jsonwebtoken.sign(
    { email: createdUser.email },
    "supersecretjwtsecret",
    { expiresIn: "2h" }
  );

  createdUser.token = token;

  await UserRepository.save(createdUser);

  return createdUser;
}

export async function loginUser(email: string, password: string) {
  const existingUser: User | null = await UserRepository.findOneBy({ email });
  if (!existingUser) {
    throw new Error(
      "No user with this email exists. Please create an account."
    );
  }

  const validPassword = await bcrypt.compare(password, existingUser.password);

  if (!validPassword) {
    throw new Error("Invalid password.");
  }

  const payload = { email: existingUser.email };
  const token = jsonwebtoken.sign(payload, process.env.jwt_secret!, {
    expiresIn: "2h",
  });

  existingUser.token = token;

  await UserRepository.save(existingUser);

  return existingUser;
}
