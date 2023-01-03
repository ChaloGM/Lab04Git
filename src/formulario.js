import {useState} from 'react'

export function Lab4(){
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [msg, setMsg] = useState("")
    const [surprise, setSurprise] = useState("")

    function showResult()
    {
        setSurprise("1")
    }

    function handleChange(event){
        setName(event.target.value)
    }

    function handleChange_1(event){
        setSurname(event.target.value)
    }

    function handleChange_2(event){
        setEmail(event.target.value)
    }

    function handleChange_3(event){
        setPhone(event.target.value)
    }

    function handleChange_4(event){
        setMsg(event.target.value)
    }

    function resetForm(){
        setName("");
        setSurname("");
        setEmail("");
        setPhone("");
        setMsg("");

    }

    return(
        <form id='formu' className='form'>
            <p>Fill the form</p>
            <p>Name: <input type="text" onChange={handleChange}/></p>
            <p>{name? `Hi ${name}`:`Please fill your name`}</p>

            <p>surname: <input type="text" onChange={handleChange_1}/></p>
            <p>{surname? `Hi ${surname}`:`Please fill your surname`}</p>

            <p>email: <input type="email" onChange={handleChange_2}/></p>
            <p>{email? `Your email is: ${email}`:`Please fill your email`}</p>

            <p>Phone: <input type="number" onChange={handleChange_3}/></p>
            <p>{phone? `Your phone is: ${phone}`:`Please fill your phone`}</p>

            <p>Message:<input type="text" onChange={handleChange_4}/></p>
            <p>{msg? `Your msg is: ${msg}`:`Please fill your msg`}</p>
            
            <button onClick={showResult} className="button-52"> submit </button>
            <button onClick={resetForm} className="button-52"> reset </button>

            <p>submit and surprise</p>
            <p>{surprise? `Hi ${name} ${surname}, nobody know your mail or phone (${email}, ${phone}), just:${msg}` : ` `}</p>

        </form>
    )
    
}