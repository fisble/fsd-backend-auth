import bcrypt from "bcrypt";
import { getDB } from "../db.js";

const USERS_COLLECTION = "users";

// Create a new user
export async function createUser({ name, email, password, role }) {
  const db = getDB();

  // Check if user already exists
  const existingUser = await db
    .collection(USERS_COLLECTION)
    .findOne({ email });

  if (existingUser) {
    throw new Error("User already exists");
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = {
    name,
    email,
    password: hashedPassword,
    role, // REQUESTER | AGENT | ADMIN
    createdAt: new Date()
  };

  const result = await db.collection(USERS_COLLECTION).insertOne(user);
  return result;
}

// Find user by email (used later for login)
export async function findUserByEmail(email) {
  const db = getDB();
  return db.collection(USERS_COLLECTION).findOne({ email });
}
