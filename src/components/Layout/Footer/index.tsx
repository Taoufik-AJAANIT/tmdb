import Image from "next/image";
import BigLogo from "../../../../public/pictures/big-logo.svg";


function Footer() {
    return (
        <footer className="footer bg-primary text-base-content px-20 py-10">
            <aside>
                <Image src={BigLogo} alt={'Logo'}/>
            </aside>
            <nav>
                <h6 className="footer-title text-lg">Get Involved</h6>
                <a className="link link-hover">Contribution Bible</a>
                <a className="link link-hover">Add New Movie</a>
                <a className="link link-hover">Add New TV Show</a>
            </nav>
            <nav>
                <h6 className="footer-title text-lg">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
            </nav>
            <nav>
                <h6 className="footer-title text-lg">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
}

export default Footer;
