"use client"
import { redirect } from "next/navigation"
import { useHotkeys } from "react-hotkeys-hook"

export default function Hotkeys() {
    useHotkeys('p', () => redirect("/intro"))

    return <></>
}