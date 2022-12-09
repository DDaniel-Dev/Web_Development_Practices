import React from "react";

import { Container, Row, Col } from "reactstrap";
import styles from "./footer.module.css";
import Link from "next/link";

const NAV__LINK = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "#about",
    display: "About",
  },
  {
    path: "#services",
    display: "Services",
  },
  {
    path: "#portfolio",
    display: "Portfolio",
  },
  {
    path: "#contact",
    display: "Contact",
  },
];

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  
  
  return (
    <footer>
      <Container>
        <Row>
          {/* ======= footer top ======= */}
          <Col lg="6" className={`${styles.footer__top}`}>
            <div className={`${styles.nav__menu}`}>
              {NAV__LINK.map((item, index) => (
                <Link href={item.path} key={index}>
                  {item.display}
                </Link>
              ))}
            </div>
          </Col>

          <Col lg="6" className={`${styles.footer__top}`}>
            <div className={`${styles.footer__creater}`}>
              <h6>by Daniel D</h6>
            </div>
          </Col>

          <Col lg="12">
            <div className={`${styles.footer__copyright}`}>
              <p>
                &copy; Copyright {year} - Developed by Daniel D
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
};