import './About.css';

export default function About() {
    return (
        <section className='about' id='about' data-aos='fade-up'>
            <h2>Giới thiệu bản thân</h2>
            <div className='about-content'>
                <p>
                    Xin chào! mình là <strong>Mai Tấn Hưng</strong> - một <b>Frontend Developer</b> luôn muốn
                    học hỏi công nghệ mới để mang lại trải nghiệm người dùng tốt nhất.
                </p>
                <p>
                    <b>Mục tiêu nghề nghiệp :</b>
                    Trở thành một lập trình viên ReactJS chuyên nghiệp, có khả năng 
                    phát triển những ứng dụng web chất lượng cao và
                    gốp phần vào các dự án thực tế có ý nghĩa.
                </p>
                <p>Ngoài ra, mình còn thích tìm hiểu về UI/UX, thiết kế tối giản và tối ưu hiệu năng web.
                    Và sẽ học hỏi thêm về NodeJS để có thể phát triển thành Developer Full stack về sau này.
                </p>
            </div>
        </section>
    );
}