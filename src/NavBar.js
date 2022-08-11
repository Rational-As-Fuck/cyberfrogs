import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Discord, Twitter } from 'react-bootstrap-icons';
import walletButton from './assets/images/select_wallet.png';

function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Best Buds</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features">Staking</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link eventKey={2} href="https://discord.gg/looksrarestudio" target="_blank">
                  <Discord size={36} />
                </Nav.Link>
                <Nav.Link eventKey={2} href="https://twitter.com/BestBudsNFTs" target="_blank">
                  <Twitter size={36} />
                </Nav.Link>
                <Nav.Link eventKey={2} href="https://magiceden.io/marketplace/best_buds" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="12.775 10.839 79.05 47.477" width="36" height="36" fill="currentColor"><path d="M 68.785 22.926 L 73.415 28.366 C 73.945 28.977 74.415 29.48 74.605 29.765 C 75.99 31.141 76.766 33.001 76.765 34.939 C 76.635 37.226 75.145 38.783 73.765 40.448 L 70.525 44.252 L 68.835 46.223 C 68.775 46.291 68.735 46.375 68.723 46.465 C 68.71 46.555 68.724 46.646 68.764 46.728 C 68.803 46.809 68.866 46.878 68.944 46.925 C 69.023 46.972 69.113 46.995 69.205 46.992 L 86.095 46.992 C 88.675 46.992 91.925 49.16 91.735 52.452 C 91.73 53.948 91.124 55.381 90.051 56.439 C 88.978 57.497 87.523 58.093 86.005 58.099 L 59.555 58.099 C 57.815 58.099 53.135 58.286 51.825 54.295 C 51.547 53.461 51.508 52.567 51.715 51.713 C 52.096 50.45 52.698 49.262 53.495 48.204 C 54.825 46.233 56.265 44.262 57.685 42.35 C 59.515 39.847 61.395 37.423 63.245 34.87 C 63.311 34.787 63.347 34.685 63.347 34.58 C 63.347 34.474 63.311 34.372 63.245 34.289 L 56.525 26.405 C 56.481 26.348 56.425 26.301 56.36 26.269 C 56.295 26.237 56.223 26.221 56.15 26.221 C 56.077 26.221 56.006 26.237 55.941 26.269 C 55.876 26.301 55.819 26.348 55.775 26.405 C 53.975 28.8 46.095 39.404 44.415 41.552 C 42.735 43.7 38.595 43.819 36.305 41.552 L 25.795 31.155 C 25.728 31.089 25.642 31.043 25.549 31.025 C 25.456 31.007 25.359 31.016 25.271 31.052 C 25.183 31.088 25.108 31.149 25.056 31.227 C 25.003 31.305 24.975 31.396 24.975 31.49 L 24.975 51.486 C 25 52.905 24.574 54.296 23.756 55.464 C 22.938 56.632 21.77 57.519 20.415 58 C 19.549 58.297 18.624 58.386 17.717 58.259 C 16.809 58.132 15.946 57.793 15.198 57.27 C 14.451 56.747 13.841 56.056 13.419 55.254 C 12.998 54.452 12.777 53.562 12.775 52.659 L 12.775 16.707 C 12.835 15.412 13.308 14.168 14.127 13.152 C 14.946 12.137 16.068 11.401 17.335 11.051 C 18.422 10.765 19.566 10.768 20.651 11.059 C 21.737 11.35 22.725 11.918 23.515 12.706 L 39.675 28.652 C 39.724 28.7 39.782 28.738 39.847 28.761 C 39.911 28.785 39.981 28.794 40.049 28.788 C 40.118 28.783 40.185 28.762 40.244 28.729 C 40.304 28.695 40.356 28.648 40.395 28.593 L 51.875 12.933 C 52.406 12.297 53.071 11.783 53.824 11.428 C 54.577 11.072 55.4 10.883 56.235 10.873 L 86.095 10.873 C 86.912 10.875 87.72 11.048 88.464 11.381 C 89.207 11.715 89.87 12.201 90.408 12.808 C 90.946 13.414 91.346 14.127 91.582 14.898 C 91.817 15.669 91.883 16.481 91.775 17.279 C 91.565 18.664 90.852 19.926 89.769 20.832 C 88.686 21.738 87.306 22.227 85.885 22.207 L 69.165 22.207 C 69.081 22.209 68.999 22.233 68.928 22.277 C 68.857 22.32 68.798 22.382 68.76 22.456 C 68.721 22.529 68.703 22.612 68.707 22.694 C 68.712 22.777 68.739 22.857 68.785 22.926 Z"></path></svg>
                </Nav.Link>
                <Nav.Link eventKey={2} href="#" target="_blank">
                  <img src={walletButton} alt="Wallet" className="button" />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    );
}

export default NavBar;