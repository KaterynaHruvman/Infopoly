import styles from './AboutUs.module.css'
import FooterSmall from '../FooterSmall/FooterSmall'
import { Container } from '@mui/material'

const AboutUs = () => {
    return (
        <>
            <Container>
                <h2>ABOUT US</h2>
                <p>
                    Info – information Poly – polymorphism The etymology of the InfoPoly is such,
                    that I think about an information not as a defined object but living organism.
                    And as such it can be derived from many sources (parents), and can take
                    different forms. For example it is common to say information at a right time and
                    right level, which to me means that the same peace of knowledge can change shape
                    depending to whom it is addressed. So to speak, information is a shapeshifter,
                    who comes from many ancestors and can change at will, hence polymorphism. In
                    computer science this means descendent of many ancestors and is strictly linked
                    to the inheritance, but in biology it is genetic variation, and this is the
                    meaning which Poly contains in our case. Secondary meaning is a play of the
                    words something-poly, like monopoly, duopoly etc. This has to do with the idea
                    that information, and data is seen as a new gold or oil. It has an economical
                    value, hence InfoPoly can also mean economical advantage to our partners and us
                    as the once who help you to build it – gold miners or oil drillers as you like.
                </p>
            </Container>
            <FooterSmall />
        </>
    );
}

export default AboutUs