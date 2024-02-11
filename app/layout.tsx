/* Components */
import { Providers } from "@/lib/providers";
import { Nav } from "./components/Nav";

/* Instruments */
import styles from "./styles/layout.module.css";
import "./styles/globals.css";

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <section className={styles.container}>
            <Nav />

            <main className={styles.main}>{props.children}</main>

            <footer className={styles.footer}>
              <a
                className={styles.link}
                href="https://mikeread.me/"
                target="_blank"
                rel="noopener noreferrer"
              >
                My Website
              </a>
            </footer>
          </section>
        </body>
      </html>
    </Providers>
  );
}
