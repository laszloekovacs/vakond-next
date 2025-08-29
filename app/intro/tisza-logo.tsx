"use client"
import { animated, useSpring } from "@react-spring/web"

export default function TiszaLogo() {

    const springs = useSpring({
        from: { x: 0, opacity: 0 }, to: { x: 100, opacity: 1 },
        delay: 2,
        config: {
            duration: 2000
        }
    })

    return (
        <div className="grid h-screen content-center">
            <animated.div style={{
                ...springs
            }}>

                <div className=".logo">
                    <p>Tisza</p>
                </div>
            </animated.div>
        </div>
    )
}