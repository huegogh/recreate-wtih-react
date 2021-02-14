import { BackButton } from '../shared-components/BackButton.js';
import { Layout } from '../shared-components/Layout.js';
import { MyNavbar } from '../hotel-components/MyNavbar.js';
import { MyJumbotron } from '../hotel-components/MyJumbotron.js';
import { WelcomeArea } from '../hotel-components/WelcomeArea.js';
import { Rooms } from '../hotel-components/Rooms.js';
import { Packages } from '../hotel-components/Packages.js';
import { Amenities } from '../hotel-components/Amenities.js';
import { Reservation } from '../hotel-components/Reservation.js';
import { Footer } from '../hotel-components/Footer.js';



export function Hotel() {
    return (
        <Layout>
            <MyNavbar />
            <MyJumbotron />
            <WelcomeArea />
            <Rooms />
            <Packages />
            <Amenities />
            <Reservation />
            <Footer />
            <BackButton />
        </Layout>
    );
}