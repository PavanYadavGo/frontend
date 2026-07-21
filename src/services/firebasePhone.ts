import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  ConfirmationResult,
} from "firebase/auth";

import { auth } from "../firebase";

let confirmationResult: ConfirmationResult | null = null;

export function setupRecaptcha(containerId: string) {
  if ((window as any).recaptchaVerifier) {
    return (window as any).recaptchaVerifier;
  }

  const verifier = new RecaptchaVerifier(auth, containerId, {
    size: "normal",
  });

  (window as any).recaptchaVerifier = verifier;

  return verifier;
}

export async function sendOTP(
  phone: string,
  verifier: RecaptchaVerifier
) {
  confirmationResult = await signInWithPhoneNumber(
    auth,
    phone,
    verifier
  );
}

export async function verifyOTP(code: string) {
  if (!confirmationResult)
    throw new Error("OTP not sent");

  return confirmationResult.confirm(code);
}