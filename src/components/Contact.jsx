import './Contact.css';

export default function Contact() {
    return (
        <section className='contact' id='contact'>
            <h2>Liên hệ với mình</h2>
            <p>Nếu bạn quan tâm đến dự án của mình hoặc muốn hợp tác, hãy gửi tin nhắn nhé !</p>

            <form action="https://formspree.io/f/mzzknkoz"
            method='POST' className='contact-form'>
                <input type="text" name='name' placeholder='Họ và tên' required/>
                <input type="email" name='email' placeholder='Email của bạn' required />
                <textarea name="message" placeholder='Lời nhắn...' required></textarea>
                <button type='submit'>Gửi tin nhắn</button>
            </form>

            <div className='social-icon'>
                <a href="https://github.com/MTHung39" target='_blank' rel='noreferrer'>
                <i className='fa-brands fa-github'></i></a>
                <a href="mailto:maitanhung39@gmail.com">
                    <i className='fa-solid fa-envelope'></i>
                </a>
            </div>
        </section>
    );
}