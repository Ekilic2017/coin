import * as yup from  "yup";
const regex ="^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()-_=+{};:',.<>?/\\|~`]).{5,}$";
export const schema=yup.object().shape({
email:yup
.string()
.email("Lütfen geçerli bir mail giriniz..")
.required("Zorunlu Alan"),
age:yup
.number("Lütfen bir sayı giriniz..")
.max(100,"100 yaşından küçük olmalısınız")
.min(18,"18 yaşında büyük olmalısınız")
.integer(),
password:
yup.string()
.min(5,"Şifre minimum 5 karakterden oluşmalıdır.")
.matches(regex,"Şifreniz yeterince güçlü değil")
.required("Zorunlu Alan"),
confirm_password:
yup.string()
.oneOf([yup.ref("password")],"Şifre Eşleşmiyor")
.required("Zorunlu Alan"),
});