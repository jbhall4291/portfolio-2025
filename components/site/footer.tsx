// components/Footer.tsx
export default function Footer() {
    return (
        <footer className="mt-20 mb-6 text-center text-xs">
            <a
                href={`mailto:hello@johnnyhall.dev?subject=Hello%20Johnny!`}
                className=""
            >© {new Date().getFullYear()} Johnny Hall</a>
        </footer>
    );
}
