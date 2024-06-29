import { FormData, FormErrors } from "../components/AuthForm";


export const validateForm = (formData: FormData, type: string) => {
  const errors: FormErrors = {};
  if (type === "signup") {
    if (!formData.username.trim()) {
      //เช็คว่ามีการพิพม์ลง form มั้ย
      errors.username = "Please enter a valid username.";
    }
  }

  //เช็คว่ามีการกรอกข้อมูลลงใน form มั้ย
  if (!formData.email.trim()) {
    errors.email = "Please enter a valid email or phone number.";
    // เช็คว่ากรอกอีเมลถูกรูปแบบมั้ย
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = "Please enter a valid email.";
  }

  if (!formData.password.trim()) {
    errors.password = "Please enter a password.";
  } else if (type === "signup" && formData.password.length < 6) {
    errors.password = "Your password must contain between 6 and 60 characters.";
  }

  return errors;
};
