'use client'
import React, { useRef } from 'react'
import { signIn } from 'next-auth/react'
import { Button } from '@/components/ui/button';

export default function KakaoLogin() {
    const handleSubmit = async () => {
        const result = await signIn("kakao", {
            redirect: true,
            callbackUrl: "/",
        });
    }

    return (
        <Button onClick={handleSubmit}>카카오 로그인</Button>
    )
}
