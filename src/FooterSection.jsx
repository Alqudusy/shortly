const FirstDiv = () => {
    return (
        <div className="logo-div">
            <h2>Shortly</h2>
        </div>
    )
}
const SecontDiv = () => {
    return (
        <div className="footer-links">
            <table>
                <tr>
                    <th>Features</th>
                </tr>
                <tr>
                    <td>Link Shortening</td>
                </tr>
                <tr>
                    <td>Branded Links</td>
                </tr>
                <tr>
                    <td>Analytics</td>
                </tr>
            </table>
            <table>
                <tr>
                    <th>Resources</th>
                </tr>
                <tr>
                    <td>Blog</td>
                </tr>
                <tr>
                    <td>Developers</td>
                </tr>
                <tr>
                    <td>Support</td>
                </tr>
            </table>
            <table>
                <tr>
                    <th>Company</th>
                </tr>
                <tr>
                    <td>About</td>
                </tr>
                <tr>
                    <td>Our Team</td>
                </tr>
                <tr>
                    <td>Careers</td>
                </tr>
                <tr>
                    <td>Contact</td>
                </tr>
            </table>
        </div>
    );
}

const ThirdDiv = () => {
    return (
        <div className="social">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-pinterest"></i>
            <i className="fab fa-twitter"></i>
        </div>
    );
}


const FooterSection = () => {
    return (
        <div className="footer-container">
            <FirstDiv />
            <SecontDiv />
            <ThirdDiv />
        </div>
    );
}

export default FooterSection;