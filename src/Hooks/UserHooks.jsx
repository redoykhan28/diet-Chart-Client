import { useEffect, useState } from "react"

const useUser = email => {

    const [isUser, setisUser] = useState(false);
    const [UserLoader, setUserLoader] = useState(true);


    useEffect(() => {

        fetch(`http://localhost:5000/user/users/${email}`)
            .then(res => res.json())
            .then(data => {

                console.log(data)
                setisUser(data.isUser);
                setUserLoader(false)
            })

    }, [email])
    return [isUser, UserLoader]
}

export default useUser