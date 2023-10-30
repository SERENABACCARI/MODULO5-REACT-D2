

export default function MyFooter({ color = "red" }) {
    return (
        <footer style={{ color }}>
            <div className="social">
                <ul>
                    <li>
                        <a href="https://www.Facebook.com">Facebook</a>
                    </li>
                    <li>
                        <a href="https://www.istagram.com">Instagram</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
