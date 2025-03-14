import { z } from "zod";

export const studentSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  registerNumber: z.string().min(1, "Register number is required"),
  phoneNumber: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
  department: z.string().min(2, "Department is required"),
  year: z.string().min(1, "Year is required"),
  email: z.string().email("Invalid email address"),
  accommodation: z.enum(["hosteller", "dayScholar"]),
  fasting: z.boolean().optional(),
  hasDisabilities: z.boolean().optional(),
  disabilityDetails: z.string().optional(),
  hostelName: z.string().optional(),
  roomNo: z.string().optional(),
  wardenName: z.string().optional(),
});

export const paymentSchema = z.object({
  upiId: z.string().min(1, "UPI ID is required"),
  transactionId: z.string().min(1, "Transaction ID is required"),
  paymentProof: z.instanceof(File, { message: "Payment proof is required" }),
});
