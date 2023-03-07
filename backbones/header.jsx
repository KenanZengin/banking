'use client'

import Link from 'next/link'
import { Container , Navbar, Nav , NavDropdown} from 'react-bootstrap'

const Header = () => {
  return (
    <div className='header'>
       <Container >
            <div className="header-web">
                <div className="header-web-left">
                   <div className="headerlogo">
                     <h3>Bankin'</h3>
                   </div>
                </div>
                <div className='header-web-center'>
                   <div className="headnavigation">
                      <Navbar>
                          <Nav>

                              <NavDropdown title="Platform" id="nav-dropdown">
                                <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
                              </NavDropdown>

                              <Nav.Item>
                                  <Link href={"/"}>
                                  Marketplace
                                  </Link>
                              </Nav.Item>

                              <NavDropdown title="Resources" id="nav-dropdown">
                                <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
                              </NavDropdown>

                              <Nav.Item>
                                  <Link href={"/"}>
                                  About
                                  </Link>
                              </Nav.Item>

                          </Nav>
                      </Navbar>
                   </div>
                </div>
                <div className="header-web-right">
                  <div className="headbtns">
                      <Link href="/">
                        Login
                      </Link>
                      <Link href="/">
                        Request Demo
                      </Link>
                  </div>
                </div>
            </div>
       </Container>
    </div>
  )
}

export default Header