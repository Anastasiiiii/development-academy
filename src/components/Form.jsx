import React, { useState } from "react";
import "../styles/Form.css";
import "../styles/Formulas.css";

const Form = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        number: "",
        city: "",
        trainingType: "offline",
        acomodation: "-"
    });

    const scriptURL = "https://script.google.com/macros/s/AKfycbxqfTEDZMU_gT_ubi9RDNCQFEFtJaNFBe-2Neegcggf_fIK-W2XiB_DNUs3KFu5Fn_6/exec"; 

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
            ...(name === "trainingType" && value === "online" ? { acomodation: "-" } : {})
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(scriptURL, {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData).toString(),
            });
    
            const result = await response.json();
    
            if (result.result === "duplicate") {
                alert("⚠ Ви вже зареєстровані!");
            } else if (result.result === "success") {
                alert("✅ Заявка успішно відправлена!");
                setFormData({ name: "", email: "", number: "", city: "", trainingType: "offline", acomodation: "-" });
            } else {
                alert("❌ Помилка при відправленні. Спробуйте ще раз.");
            }
        } catch (error) {
            alert("⚠ Помилка з'єднання: " + error.message);
        }
    };
    

    return (
        <div className="form-container" id="form-registration">
            <h1>Запишіться на навчання зараз</h1>
            <p>Якщо ви ще не є частиною нашої команди, але бажаєте приєднатися — перейдіть за <a href="#">посиланням</a> для подробиць.</p>
            <form onSubmit={handleSubmit} className="login-form">
                <label>ПІБ</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Введіть своє ПІБ" required />

                <label>Електронна Пошта</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Введіть свою електронну адресу" required />

                <label>Мобільний номер телефону</label>
                <input type="text" name="number" value={formData.number} onChange={handleChange} placeholder="Введіть свій номер телефону" required />

                <label>Місто</label>
                <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="Введіть своє місто" required />

                <label>Який тип навчання Ви обираєте?</label>
                <select name="trainingType" value={formData.trainingType} onChange={handleChange}>
                    <option value="offline">offline - Київ</option>
                    <option value="online">online</option>
                </select>

                {/* Поле "Вам потрібне житло?" з'являється лише якщо вибрано offline */}
                {formData.trainingType === "offline" && (
                    <>
                        <label>Вам потрібне житло?</label>
                        <select name="acomodation" value={formData.acomodation} onChange={handleChange}>
                            <option value="+">Так</option>
                            <option value="-">Ні</option>
                        </select>
                    </>
                )}

                <button type="submit">Відправити Заявку</button>
            </form>
        </div>
    );
};

export default Form;
 