import { dataSource } from "../app-data-source";
import jsonwebtoken from "jsonwebtoken";
import { User } from "../entity/User.entity";
import bcrypt from "bcryptjs";
import { NotFoundError } from "../errors/NotFoundError";

const UserRepository = dataSource.getRepository(User);

export async function signUp(name: string, email: string, password: string) {
  console.log("name", name, "email", email, "pass", password);
  const existingUser = await UserRepository.findOneBy({ email });
  if (existingUser) {
    return "User already exists. Pleas log in.";
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
    process.env.jwt_secret!,
    { expiresIn: "2h" }
  );

  createdUser.token = token;

  await UserRepository.save(createdUser);

  return createdUser;
}

export async function loginUser(email: string, password: string) {
  const existingUser: User | null = await UserRepository.findOneBy({ email });
  if (!existingUser) {
    return "No user with this email exists. Please create an account.";
  }

  const validPassword = await bcrypt.compare(password, existingUser.password);

  if (!validPassword) {
    return "Invalid password.";
  }

  const payload = { email: existingUser.email };
  const token = jsonwebtoken.sign(payload, process.env.jwt_secret!, {
    expiresIn: "2h",
  });

  existingUser.token = token;

  await UserRepository.save(existingUser);

  return existingUser;
}
