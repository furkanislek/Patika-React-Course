import {useState} from 'react'

function InputExample() {

    const [form,setForm] = useState({name:"",surName:""});

    const onChanceInput = (e) => {
        console.log(e.target.name);
        setForm({...form, [e.target.name]: e.target.value})
    };

  return (
    <div>

        Name <br/>
        <input name="name" value={form.name} onChange={onChanceInput} />
        <br/>
        <br/>
        Surname <br/>
        <input name="surName" value={form.surName} onChange={onChanceInput}/>
        <br/>
        <br/>
        {form.name} {form.surName}

    </div>
  );
}

export default InputExample;