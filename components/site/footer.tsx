// components/Footer.tsx
export default function Footer() {
    return (
        <footer className="mt-20 mb-6 text-center text-xs">
            <a
                href={`mailto:johnny@example.com?subject=Hello%20Johnny%20—%20Re:%20Portfolio&body=Hi%20Johnny,%0D%0A%0D%0AQuick%20intro...`}
                className=""
            >© {new Date().getFullYear()} Johnny Hall</a>
        </footer>
    );
}
