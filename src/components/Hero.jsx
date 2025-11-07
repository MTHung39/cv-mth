import './Hero.css';

export default function Hero() {
    return (
        <section className='hero'>
            <div className='hero-content'>
                <img src="./public/MTH.jpg" 
                alt="Profile"
                className='hero-avatar' />
                <h1>Xin chào,<br/> mình là <span className='highlight'>Mai Tấn Hưng</span></h1>
                <p className='subtitle'>Frontend Developer | IT Staff</p>
                <a href="#contact" className='btn'>Liên hệ với mình</a>
            </div>
        </section>
    );
}