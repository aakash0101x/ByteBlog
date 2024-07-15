import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Container from './container/Container'
import LoaderComponent from './LoaderComponent'

export default function Protected({ children, authentication = true }) {

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        if (authentication && authStatus !== authentication) {
            navigate("/login")
        } else if (!authentication && authStatus !== authentication) {
            navigate("/")
        }
        setLoader(false)
    }, [authStatus, navigate, authentication])

    return loader ? ((
        <div className="w-full py-8 mt-4 text-center">
            <Container>
                    <div className="p-2 w-full te">
                        <h1 className="text-2xl text-center my-10 font-bold hover:text-gray-500">
                            Loading...
                        </h1>
                        <div className="w-32 my-6 mx-auto"><LoaderComponent /></div>
                    </div>
            </Container>
        </div>
    )) : <>{children}</>
}
