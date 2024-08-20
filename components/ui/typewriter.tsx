import React from 'react';
import Typewriter from 'typewriter-effect';

export function TypingAnimation({ strings, className }: { strings: string | string[]; className?: string; }) {
    return <div className={className}>
        <Typewriter options={{ loop: true, strings: strings, delay: 20, autoStart: true, deleteSpeed: 1 }} />
    </div>

}