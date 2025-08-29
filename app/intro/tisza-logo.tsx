"use client"
import { animated, useSpring } from "@react-spring/web"
import { redirect } from "next/navigation"

export default function TiszaLogo() {

    const text = useSpring({
        from: { x: 50, opacity: 0 }, to: { x: 0, opacity: 1 },
        delay: 2,
        config: {
            duration: 1600
        }
    })

    const logo = useSpring({
        from: {
            opacity: 0,
            filter: "brightness(0%)"
        },
        to: {
            opacity: 1,
            filter: "brightness(100%)"
        },
        delay: 2000,
        config: {
            duration: 600,
        },
        onResolve: () => {
            setTimeout(() => {
                console.log("done")
                redirect("/")
            }, 3000)
        }
    })

    return (
        <div className="grid h-screen place-content-center">
            <animated.div style={logo}>
                <img src="/img/tisza-logo.jpg" className="w-[256px] mx-auto" />
            </animated.div>

            <animated.div style={text}>
                <p>Tisza&trade; Információs Technológiai Csoport</p>
            </animated.div>
        </div>
    )
}