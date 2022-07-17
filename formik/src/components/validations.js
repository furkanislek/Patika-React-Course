import { ref } from 'yup';
import { object, string} from 'yup';

let validations = object({
    email: string().email("Geçerli Bir Email Girin").required("Zorunlu ALan"),
    password:string().min(5, "Paralonız En Az 5 Karekter Olmalıdır").required("Zorunlu ALan"),
    passwordConfirm: string().oneOf([ref('password')], "Parolalar Eşleşmiyor").required("Zorunlu ALan")
  });

export default validations