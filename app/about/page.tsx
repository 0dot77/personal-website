import Title from "../components/Title";

const About = () => {
    return (
        <main className="w-full h-screen overflow-hidden" style={{backgroundColor: '#1F1F1F ', color: '#F5F5F5'}}>
            <div className='m-3'>
                <Title text="About" color="#FFEE58" />
            </div>
            <div className='animate-clip-up'>
                <div className='m-3 w-auto'>
                    <p>0dot77, XR Developer</p>
                    <p>Based in Seoul, Korea</p>
                </div>
                <div className='m-3'>
                    <h2 className='text-lg'>Works</h2>
                    <div>
                        <p>2024 - </p>
                        <p>Korea National University of Arts, Part-time Lecturer</p>
                    </div>
                    <div className='mt-3'>
                        <p>2023 - </p>
                        <p>VOMLab, Art Engineer</p>
                    </div>
                </div>
                <div className='m-3'>
                    <h2 className='text-lg'>Education</h2>
                    <div>
                        <p>2023 - </p>
                        <p>Korea National University of Arts, Department of Film and Media</p>
                    </div>
                    <div className='mt-3'>
                        <p>2017 - 2022</p>
                        <p>Korea National University of Arts, Department of Korean Traditional Arts Theory</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default About;
