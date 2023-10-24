// 전역 CSS 파일은 _app.js 내부에서만 호출 가능
import '../styles/global.css';

const App = ({ Component, pageProps }) => {
    return <Component {...pageProps} />;
}
export default App;