"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";

export async function updateGuest(formData) {
  const session = await auth();
  if (!session) throw new Error("you must be logged in");

  const nationaID = formData.get("nationalID");
  const [nationality, countryFlag] = formData.get("nationality").split("%");

  const regex = /^[a-zA-Z0-9]{6,12}$/;

  // Example function to validate a national ID
  function isValidNationalID(nationalID) {
    return regex.test(nationalID);
  }

  if (!isValidNationalID(nationaID))
    throw new Error("please provide a valid national ID");

  const updateData = { nationality, countryFlag, nationaID };

  const { data, error } = await supabase
    .from("guests")
    .update(updateData)
    .eq("id", session.user.guestid);
  // .select()
  // .single();

  console.log(data);

  if (error) throw new Error("Guest could not be updated");

  revalidatePath("/account/profile");
}

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
