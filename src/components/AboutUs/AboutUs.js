import FooterSmall from '../FooterSmall/FooterSmall';
import about_picture from '../../assets/images/about_us/corporate_portrait.jpg'
import dariush_picture from '../../assets/images/about_us/dariusz-2.jpg'
import matt_picture from '../../assets/images/about_us/matt-2.jpg'
import Container from '../Container/Container';

import styles from './AboutUs.module.css';


const AboutUs = () => {
    return (
        <>
            <Container>
                <div className={styles.wrapper}>
                    <div className={styles.imgWrapper}>
                        <img
                            src={about_picture}
                            className={styles.imgFounders}
                            alt="infopoly founders"
                        />
                    </div>
                    <p className={styles.description}>
                        Infopoly is an interplay of Information and Polymorphism in genetics sense.
                        We believe that information is ever evolving living thing, therefore timely
                        presentation of the information to the right audience at the right level can
                        be transformative for the business and wider society. In Infopoly we learn
                        our partners business landscape so that we can create Information landscape
                        fit to their needs. The etymology of the InfoPoly is such, that I think
                        about an information not as a defined object but living organism. And as
                        such it can be derived from many sources (parents), and can take different
                        forms. For example it is common to say information at a right time and right
                        level, which to me means that the same peace of knowledge can change shape
                        depending to whom it is addressed. So to speak, information is a
                        shapeshifter, who comes from many ancestors and can change at will, hence
                        polymorphism. In computer science this means descendent of many ancestors
                        and is strictly linked to the inheritance, but in biology it is genetic
                        variation, and this is the meaning which Poly contains in our case.
                        Secondary meaning is a play of the words something-poly, like monopoly,
                        duopoly etc. This has to do with the idea that information, and data is seen
                        as a new gold or oil. It has an economical value, hence InfoPoly can also
                        mean economical advantage to our partners and us as the once who help you to
                        build it – gold miners or oil drillers as you like.
                    </p>
                </div>
                <div className={styles.foundersWrapper}>
                    <div className={styles.titleWrapper}>
                        <span className={styles.title}> Meet our Founders</span>
                    </div>
                    <div className={styles.founders}>
                        <div className={styles.text}>
                            <img
                                src={dariush_picture}
                                className={styles.img}
                                alt="infopoly founders"
                            />
                            <div className={styles.infoWrapper}>
                                <p className={styles.name}>Dariusz Bielak</p>
                                <p className={styles.bio}>
                                    I enjoy building technology focused teams. Leading by example
                                    and challenging my colleagues to become best possible versions
                                    of themselves either in work or in life. In my career I always
                                    find myself outside my comfort zone, either in internally or
                                    customer focus roles. My experience covers traditional Data
                                    Warehouse, BigData solutions, DevOps and Data Engineering.I
                                    believe in leading by example and futility of long-term
                                    planning.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.founders}>
                        <div className={styles.text}>
                            <img
                                src={matt_picture}
                                className={styles.img}
                                alt="infopoly founders"
                            />
                            <div className={styles.infoWrapper}>
                                <p className={styles.name}>Matthew Thrower</p>
                                <p className={styles.bio}>
                                    I have worked with data for all my career and love liaising with
                                    my clients to bring their ideas to life and give them insights
                                    into their data they had previously thought impossible. Although
                                    the technologies, datasets and methods may change these values
                                    still underpin my work.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <FooterSmall />
        </>
    );
}

export default AboutUs