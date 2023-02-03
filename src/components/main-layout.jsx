import Header from './header';
import Footer from './footer';
import ThemeProvider from './contexts/theme';

const MainLayout = ({ children }) => {
    return (
        <>
            <ThemeProvider>
                <div id='page-container'>
                    <Header />
                    <main>{children}</main>
                    <Footer />
                </div>
            </ThemeProvider>
        </>
    )
}

export default MainLayout;