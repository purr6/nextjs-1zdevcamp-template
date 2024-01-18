'use client'
import React, { useRef } from 'react'
import { signIn } from 'next-auth/react'

export default function KakaoLogin() {
    const handleSubmit = async () => {
        const result = await signIn("kakao", {
            redirect: true,
            callbackUrl: "/",
        });
    }

    return (
        <button onClick={handleSubmit}>카카오 로그인</button>
    )
}
