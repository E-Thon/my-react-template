import { useState } from "react";
import { Form, redirect } from "react-router"
import { z } from "zod/v4";


const contactSchema = z.object({
    name: z.string().min(1, "Name is required"), // "" besked er for optional fejlmeddelelese
    email: z.email().optional(), // optional = ikke et krav, kan hoppes over
    textarea: z.string().min(10, "Message is too short"),
})

export default function Contact() {
    const [errors, setErrors] = useState({})

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target); //alle data tages ud af formularen
        const data = Object.fromEntries(formData.entries());
        console.log("Form Submitted", data);


        const result = contactSchema.safeParse(data)

        if (!result.success) {
            const errors = z.treeifyError(result.error)
            setErrors(errors.properties)
        } else {
            setErrors({}); // clearer fejlmeddeleleser efter submit
        }


        // her: fetch... method post:
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(result.data)
        })

        redirect("/") // evt til takkeside eller kvitteringsside (nu index)

    }
    return (
        <>
            <h1>Contact</h1>
            <Form method="post" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" placeholder="Name" />
                    <p>{errors && errors?.name?.errors[0]}</p>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" placeholder="Email" />
                    <p>{errors && errors?.email?.errors[0]}</p>
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" id="message" placeholder="Message"></textarea>
                    <p>{errors && errors?.message?.errors[0]}</p>
                </div>
                <button type="submit">Submit</button>
            </Form>
        </>

    )
}


