import { ref } from 'yup';
import { object, string} from 'yup';

let validations = object({
    email: string().email().required(),
    password:string().min(5).required(),
    passwordConfirm: string().oneOf([ref('password')]).required()
  });

export default validations