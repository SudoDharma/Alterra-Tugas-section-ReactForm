import { useState } from "react"

import styles from "./style.module.css"

const Form = ({data, setData}) => {
    const [inputs, setInputs] = useState({
        nama: "",
        email: "",
        noHP: "",
        latar: "",
        kelas: "",
        harapan: ""
    })

    const[foto, setFoto] = useState(null)


    const onchange = (e) => {
        const newInputs = {...inputs}
        newInputs[e.target.name] = e.target.value

        setInputs(newInputs)
    }

    const handleUpload = (e) => {
        const uploaded = e.target.files[0]
        setFoto(URL.createObjectURL(uploaded))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setData({
            nama: inputs.nama,
            email: inputs.email,
            noHP: inputs.noHP,
            latar: inputs.latar,
            kelas: inputs.kelas,
            harapan: inputs.harapan
        })

        alert("Data pendaftar \"" + inputs.nama + "\" berhasil diterima" );
        
        alert("Data yang masuk yaitu:\nNama: " + inputs.nama + "\nEmail: " + inputs.email + "\nNomor Handphone: " + inputs.noHP + "\nLatar pendidikan: " + inputs.latar + "\nKelas coding: " + inputs.kelas + "\nHarapan : " + inputs.harapan);

        setInputs({
            nama: "",
            email: "",
            noHP: "",
            latar: "",
            kelas: "",
            harapan: ""
        })

        setFoto(null)
        e.target["file"].value = "";
    }

    const handleReset = (e) => {
        e.preventDefault()
        setInputs({
            nama: "",
            email: "",
            noHP: "",
            latar: "",
            kelas: "",
            harapan: ""
        })

        setFoto(null)
        e.target["file"].value = "";
    }

    return(
        <form className={styles.form_container} onSubmit={handleSubmit} onReset={handleReset}>
                <h1>Pendaftaran Peserta Coding Bootcamp</h1>

                <label>Nama Lengkap:</label>
                <div className={styles.input_container}>
                    <input type="text" value={inputs.nama} name="nama" onChange={(e) => onchange(e)} pattern="[A-Za-z]{0,}" title="Hanya gunakan huruf" required />
                </div>

                <label>Email:</label>
                <div className={styles.input_container}>
                    <input type="email" value={inputs.email} name="email" onChange={(e) => onchange(e)} required />
                </div>

                <label>Nomor handphone:</label>
                <div className={styles.input_container}>
                    <input type="text" value={inputs.noHP} name="noHP" onChange={(e) => onchange(e)} pattern="[0-9]{9,14}" title="Hanya gunakan angka, panjang 9-14 karakter" required />
                </div>

                <label>Latar belakang pendidikan:</label>
                <div className={styles.latar}>
                    <label>
                        <input type="radio" name="latar" value="IT" checked={inputs.latar === "IT"} onChange={(e) => onchange(e)} required /> IT
                    </label>
                    <label>
                        <input type="radio" name="latar" value="Non IT" checked={inputs.latar === "Non IT"} onChange={(e) => onchange(e)} required /> Non IT
                    </label>
                </div>

                <label>Kelas Coding yang dipilih:</label>
                <div>
                    <select className={styles.input_container} value={inputs.kelas} name="kelas" onChange={(e) => onchange(e)}  required>
                        <option value="" disabled>Silahkan pilih opsi berikut</option>
                        <option value="Coding Backend with Golang">Coding Backend with Golang</option>
                        <option value="Coding Frontend with ReactJS">Coding Frontend with ReactJS</option>
                        <option value="Fullstack Developer">Fullstack Developer</option>
                    </select>
                </div>

                <label>Foto surat kesungguhan:</label>
                {foto !== null && <img src={foto}/>}
                <input type="file" name="file" onChange={(e) => handleUpload(e)} accept="image/*" required />

                <label>Harapan untuk Coding Bootcamp ini:</label>
                <div className={styles.input_container}>
                    <textarea rows={5} value={inputs.harapan} name="harapan" onChange={(e) => onchange(e)}></textarea>
                </div>

                <div className={styles.button}>
                    <input className={styles.btnSubmit} type="submit" />
                    <input className={styles.btnReset} type="reset" />
                </div>
            </form>
    )
}

export default Form