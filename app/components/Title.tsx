'use client'

const Title = ({ text, color }: { text: string, color: string }) => {
    return (
        <h1 className="text-4xl font-bold text-white animate-clip-up" style={{color: color}}>
            {text}
        </h1>
    );
}

export default Title;