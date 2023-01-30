import Header from './header';
import Footer from './footer';
import ThemeProvider from './contexts/theme';

const MainLayout = ({ children }) => {
    return (
        <>
            <ThemeProvider>
                <Header />
                <main>{children}</main>
                <Footer />
            </ThemeProvider>
        </>
    )
}

export default MainLayout;